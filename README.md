# Sparkle Bureaucracy

A network of people prototyping optimistic organisational futures for the age of AI.

## About this repository

This is the public website for Sparkle Bureaucracy, built with Astro, React, shadcn-ui, and Tailwind CSS.

- `src/` — site source code
- `public/` — static assets
- `lore/` — research diary, sensemaking, and field notes from the Newspeak House fellowship
- `docs/` — project operations notes (launch checklist, migration decision)

## Research and lore

The site is built from research conducted during a Newspeak House fellowship. The full research diary — the "lore" behind the project — lives in [`lore/`](./lore): the project record, weekly entries, essays, experiment specs, faculty feedback, prior art, research inventory and longlists, sensemaking map, synthesis, an execution journal, a browsable wiki, and the full export of the field-notes Matrix chat. The lore is reference data behind the site; it is not rendered on the site itself.

## Local development

You need Node.js and npm installed — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating) if you don't have them.

```sh
# Clone the repository
git clone https://github.com/sugaroverflow/sparkle-bureaucracy-site.git

# Install dependencies
npm i

# Start the Astro development server
npm run dev
```

You can also edit files directly in GitHub or use [GitHub Codespaces](https://github.com/features/codespaces).

## What technologies are used for this project?

This project is built with:

- Astro
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Deploy with Vercel

```sh
npm i -g vercel
vercel
```

### Deploy with Netlify

```sh
npm run build
# Then drag and drop the 'dist' folder to netlify.com/drop
```

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **Dev (Astro)** | `npm run dev` | Start the Astro development server |
| **Build (Astro)** | `npm run build` | Build the Astro production output |
| **Preview (Astro)** | `npm run preview` | Preview the Astro build locally |
| **Dev (Vite legacy)** | `npm run dev:vite` | Start legacy Vite dev server |
| **Build (Vite legacy)** | `npm run build:vite` | Build legacy Vite output |
| **Preview (Vite legacy)** | `npm run preview:vite` | Preview legacy Vite build |
| **Type Check** | `npm run type-check` | Verify TypeScript types without emitting |
| **Lint** | `npm run lint` | Check code for linting errors |
| **Lint Fix** | `npm run lint:fix` | Automatically fix linting errors |
| **Format** | `npm run format` | Format code with Prettier |

## Library Versions

| Library | Version | Purpose |
|---------|---------|---------|
| Astro | 5.x | Static site framework and build pipeline |
| React | 18.3.1 | UI framework |
| Vite | 6.x | Legacy build tool for compatibility |
| TypeScript | 5.7.2 | Type safety |
| Tailwind CSS | 3.4.17 | Utility-first styling |
| React Router DOM | 6.26.2 | Client-side routing |
| Recharts | 2.12.7 | Data visualization |
| Zod | 3.23.8 | Schema validation |
