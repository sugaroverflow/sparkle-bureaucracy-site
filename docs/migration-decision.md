# Migration decision: React baseline vs Astro pilot

## What was tested

- React baseline build: `npm run build`
- Astro pilot build (single-page React island): `npm run astro:build`

The Astro pilot uses `src/pages/index.astro` with `SparkleApp` mounted via
`client:only="react"` to preserve behavior that relies on `BrowserRouter`.

## Build output comparison

### React (Vite SPA)

- `dist/assets/index-B206UyAu.css`: 81.74 kB (14.35 kB gzip)
- `dist/assets/index-9AhRf69o.js`: 188.81 kB (60.62 kB gzip)

### Astro pilot (React island)

- `dist-astro/_astro/client.DqF6cUVL.js`: 1.99 kB (1.01 kB gzip)
- `dist-astro/_astro/sparkle-app.DLG9J9x6.js`: 45.33 kB (14.76 kB gzip)
- `dist-astro/_astro/index.P2Se0bJ0.js`: 142.16 kB (45.62 kB gzip)

## Interpretation

- Current Astro pilot keeps nearly all app logic in one React island.
- Client JS payload is effectively comparable to React-only, because router and
  interactive sections still hydrate as React.
- Astro is now reproducible and working in this repo, but it does not deliver a
  meaningful bundle win until more static content is moved into `.astro` files.

## Recommendation

1. Keep Vite + React as the production baseline now.
2. If migration continues, do it incrementally:
   - Move static hero/events/founder markup into Astro components.
   - Keep only interactive pieces (`SidebarNav`, `SparkleDecoration`,
     `NewsletterSection`) as islands.
3. Re-run the size comparison after splitting islands; continue only if there
   is a clear payload and maintenance benefit.
