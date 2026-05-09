# Sparkle Bureaucracy MVP

Static-first landing page built with Astro + Tailwind.

## Stack

- Astro
- Tailwind CSS
- TypeScript

## Local Development

```sh
npm install
npm run dev
```

## Build and Preview

```sh
npm run build
npm run preview
```

## Content Editing

- Mission copy: `src/components/sections/MissionSection.astro`
- Coming soon paragraph and experiment/event cards: `src/content/coming-soon.json`
- Founder profile: `src/components/sections/FounderSection.astro`

## Email Signup Configuration

Copy `.env.example` to `.env` and choose a provider:

```sh
cp .env.example .env
```

Supported providers:

- `buttondown`
- `convertkit`
- `mailchimp`

Set `EMAIL_PROVIDER` and the matching provider keys in `.env`.

## Project Structure

- `src/pages/index.astro` - landing page composition
- `src/layouts/MainLayout.astro` - shared shell and SEO defaults
- `src/components/sections/*` - section blocks
- `src/pages/api/subscribe.ts` - provider-backed signup endpoint
- `src/styles/global.css` - global tokens and utility classes

## Launch Checklist

1. Configure `.env` email provider credentials.
2. Run `npm run check` and `npm run build`.
3. Confirm mobile and desktop rendering in `npm run dev`.
4. Verify `POST /api/subscribe` works with real credentials.
5. Deploy with output directory `dist`.
