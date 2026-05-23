import type { APIRoute } from "astro"

export const prerender = false

const BUTTONDOWN_USERNAME = "sparkle-bureaucracy"

export const POST: APIRoute = async ({ request }) => {
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

  const formBody = new URLSearchParams({ email })
  const res = await fetch(
    `https://buttondown.com/api/emails/embed-subscribe/${BUTTONDOWN_USERNAME}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody.toString(),
      redirect: "manual",
    },
  )

  // The embed endpoint is designed for browser form posts: a 200 OK
  // (or a 3xx redirect to the confirmation page) means the submission
  // was accepted. Buttondown then sends a double opt-in email.
  if (res.status >= 200 && res.status < 400) {
    return json({ ok: true }, 200)
  }

  return json(
    { error: "Subscription service unavailable. Please try again shortly." },
    502,
  )
}

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  })
}
