declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, unknown>) => void
    }
  }
}

// Self-hosted Umami (sugaroverflow-analytics.up.railway.app).
// The script tag is injected in index.astro when PUBLIC_UMAMI_WEBSITE_ID is set;
// this helper no-ops when the tracker isn't loaded.
export function trackEvent(event: string, data?: Record<string, unknown>) {
  window.umami?.track(event, data)
}
