# LifeLog Static Landing Page

A polished bilingual static landing page for the early LifeLog product prototype.

## Files

- `index.html` — semantic landing page markup
- `styles.css` — responsive premium SaaS styling, gradients, cards, and motion
- `app.js` — language detection, language toggle, localStorage persistence, reveal animation, and waitlist placeholder behavior

## Run locally

No framework or build step is required.

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## Language behavior

- On first visit, the page uses Simplified Chinese when `navigator.language` starts with `zh`; otherwise it uses English.
- The top-right `English / 中文` control switches language without reloading.
- The selected language is persisted in `localStorage` under `lifelog-language`.

## Waitlist placeholder

The waitlist form is intentionally static. Submitting the form only shows a local confirmation message; no email is sent anywhere.
