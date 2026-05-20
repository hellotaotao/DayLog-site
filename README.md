# DayLog Site

A minimal Astro site for the early DayLog product prototype.

## Project structure

- `src/pages/` — Astro routes for `/`, `/concept/`, `/privacy/`, and `/notes/without-another-habit/`
- `src/layouts/SiteLayout.astro` — shared HTML shell, metadata, header, footer, and optional homepage script loading
- `src/components/` — shared header and footer components
- `src/styles/global.css` — migrated global styling from the static site
- `public/app.js` — homepage language toggle, language persistence, and reveal animation
- `public/robots.txt` and `public/sitemap.xml` — static SEO files copied by Astro

## Run locally

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:4321
```

## Build

```bash
npm run build
```

Vercel can build the project with the `build` script, which runs `astro build`.

## Language behavior

- On first visit, the homepage uses Simplified Chinese when `navigator.language` starts with `zh`; otherwise it uses English.
- The top-right `English / 中文` control switches the homepage language without reloading.
- The selected language is persisted in `localStorage` under `daylog-language`.

## Product notes and SEO pages

The homepage stays intentionally focused. Deeper product thinking lives in lightweight subpages such as `/concept/`, `/privacy/`, and `/notes/without-another-habit/`. `sitemap.xml` lists the public pages for search engines.
