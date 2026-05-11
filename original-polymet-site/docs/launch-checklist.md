# MVP Launch Checklist

## Completed Baseline

- Astro build migration completed.
- Tailwind visual system simplified and applied to all sections.
- Signup API endpoint implemented with provider adapters.
- `npm run check` passes.
- `npm run build` passes.

## Pre-Launch Validation

1. Set `.env` values from `.env.example` (especially `SITE_URL`, `EMAIL_PROVIDER`, and provider credentials).
2. Run local smoke test:
   - `npm run dev`
   - Submit a real email through the form.
   - Confirm success message and provider-side subscriber creation.
3. Accessibility checks:
   - Keyboard-only tab traversal across nav, form input, and button.
   - Verify visible focus indicators and heading hierarchy.
   - Test with reduced motion enabled in OS settings.
4. SEO checks:
   - Confirm title and description in browser tab and page source.
   - Confirm canonical URL is correct when `SITE_URL` is set.
   - Ensure social preview metadata (`og:title`, `og:description`, `og:url`) is present.
5. Mobile checks:
   - iPhone width (~390px), tablet (~768px), desktop (>1280px).
   - Verify no horizontal overflow in section cards.
6. Production build and deploy:
   - `npm run build`
   - Deploy the `dist/` directory to hosting provider.

## Nice-to-Have Follow-ups

- Add analytics for signup conversion.
- Add a social image (`og:image`) asset.
- Add provider-specific webhook logging for subscription confirmation flow.
