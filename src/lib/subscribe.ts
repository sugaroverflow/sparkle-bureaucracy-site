export const BUTTONDOWN_PAGE_URL = "https://buttondown.com/sparkle-bureaucracy"

export type SubscribeResult =
  | { ok: true }
  | { ok: false; error: string; fallbackUrl?: string }

export async function requestSubscription(
  email: string,
): Promise<SubscribeResult> {
  try {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok || !data.ok) {
      return {
        ok: false,
        error: data?.error || "Something went wrong. Try again?",
        fallbackUrl:
          typeof data?.fallbackUrl === "string" ? data.fallbackUrl : undefined,
      }
    }
    return { ok: true }
  } catch {
    return {
      ok: false,
      error: "Network error. Check your connection and try again.",
      fallbackUrl: BUTTONDOWN_PAGE_URL,
    }
  }
}
