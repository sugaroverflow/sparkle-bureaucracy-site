import type { APIContext, APIRoute } from "astro"

export const prerender = false

const BUTTONDOWN_USERNAME = "sparkle-bureaucracy"
const BUTTONDOWN_PAGE_URL = `https://buttondown.com/${BUTTONDOWN_USERNAME}`
const BUTTONDOWN_API_URL = "https://api.buttondown.com/v1/subscribers"
const BUTTONDOWN_EMBED_URL = `https://buttondown.com/api/emails/embed-subscribe/${BUTTONDOWN_USERNAME}`

const BLOCKED_ERROR =
  "Our newsletter provider flagged this signup as suspicious — a spam-filter false positive, not you."
const UNAVAILABLE_ERROR =
  "Subscription service unavailable. Please try again shortly."

type ProviderResult = { ok: true } | { ok: false; blocked: boolean }

export const POST: APIRoute = async (context) => {
  const { request } = context

  let payload: { email?: string }
  try {
    payload = await request.json()
  } catch {
    return json({ error: "Invalid request body" }, 400)
  }

  const email = payload.email?.trim()
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "Please enter a valid email address." }, 400)
  }

  // Buttondown spam-filters submissions that arrive from a datacenter IP
  // with no browser context ("Suspicious activity detected. Form submission
  // blocked."), so always forward the real subscriber's IP, user agent, and
  // the page they signed up from.
  const clientIp = resolveClientIp(context)
  const referrerUrl =
    request.headers.get("referer") ?? `${new URL(request.url).origin}/`
  const userAgent =
    request.headers.get("user-agent") ?? "sparklebureaucracy.org subscribe form"

  const apiKey = import.meta.env.BUTTONDOWN_API_KEY as string | undefined

  let result: ProviderResult
  try {
    result = apiKey
      ? await subscribeViaApi(apiKey, email, clientIp, referrerUrl)
      : await subscribeViaEmbedForm(email, clientIp, referrerUrl, userAgent)
  } catch {
    return json({ error: UNAVAILABLE_ERROR, fallbackUrl: BUTTONDOWN_PAGE_URL }, 502)
  }

  if (result.ok) {
    return json({ ok: true }, 200)
  }

  return json(
    {
      error: result.blocked ? BLOCKED_ERROR : UNAVAILABLE_ERROR,
      fallbackUrl: BUTTONDOWN_PAGE_URL,
    },
    502,
  )
}

// Preferred path: the authenticated API is not subject to the embed
// endpoint's bot heuristics, and its documented `ip_address` field lets
// Buttondown validate the subscriber's legitimacy from their real IP.
// Requires BUTTONDOWN_API_KEY (see .env.example) to be set at build time.
async function subscribeViaApi(
  apiKey: string,
  email: string,
  clientIp: string | null,
  referrerUrl: string,
): Promise<ProviderResult> {
  const res = await fetch(BUTTONDOWN_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Token ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: email,
      referrer_url: referrerUrl,
      ...(clientIp ? { ip_address: clientIp } : {}),
    }),
  })

  if (res.ok) return { ok: true }

  const body = await res.text().catch(() => "")
  // A duplicate signup is fine: the subscriber is already on the list.
  if (res.status === 400 && /already.{0,12}(subscribed|exists)/i.test(body)) {
    return { ok: true }
  }

  return { ok: false, blocked: looksBlocked(res.status, body) }
}

// Fallback when no API key is configured: proxy the embed form post,
// forwarding the browser context Buttondown's spam heuristics check for.
async function subscribeViaEmbedForm(
  email: string,
  clientIp: string | null,
  referrerUrl: string,
  userAgent: string,
): Promise<ProviderResult> {
  const res = await fetch(BUTTONDOWN_EMBED_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": userAgent,
      Referer: referrerUrl,
      ...(clientIp ? { "X-Forwarded-For": clientIp } : {}),
    },
    body: new URLSearchParams({ email }).toString(),
    redirect: "manual",
  })

  // A 3xx redirect to the confirmation page means the submission was
  // accepted; Buttondown then sends the double opt-in email.
  if (res.status >= 300 && res.status < 400) return { ok: true }

  const body = await res.text().catch(() => "")
  const blocked = looksBlocked(res.status, body)

  // The embed endpoint serves its "Suspicious activity detected" block page
  // with a 200 status, so a 2xx only counts as success when the body does
  // not contain the block message.
  if (!blocked && res.status >= 200 && res.status < 300) return { ok: true }

  return { ok: false, blocked }
}

function looksBlocked(status: number, body: string) {
  return (
    /suspicious activity|submission blocked/i.test(body) ||
    status === 403 ||
    status === 429
  )
}

function resolveClientIp(context: APIContext) {
  const forwarded = context.request.headers.get("x-forwarded-for")
  const first = forwarded?.split(",")[0]?.trim()
  if (first) return first
  try {
    // Throws when the adapter cannot provide it (e.g. some local contexts).
    return context.clientAddress
  } catch {
    return null
  }
}

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  })
}
