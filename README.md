VERBOTEN MEDIA is the central node.
Everything else is a module.
Nothing needs to be finished.

# VERBOTEN MEDIA

Production-ready static website for [VERBOTEN MEDIA](https://verbotenmedia.se) — an independent cultural platform working across literature, media, artistic research, and inquiry into contemporary digital life.

## Structure

```
index.html                  Landing
about.html                  About
writings.html               Writings
experimental-sandbox.html   Experimental Sandbox
events.html                 Events
lectures-workshops.html     Lectures & Workshops
associated-projects.html    Associated Projects
contact.html                Contact
css/style.css               Design system and all styles
js/main.js                  Minimal JavaScript
```

## Setup

The site is fully static — no build step required.

**Local development:** open any HTML file directly in a browser, or serve the directory with any static server:

```bash
npx serve .
# or
python3 -m http.server 8000
```

**Deployment:** upload all files to any static host (Netlify, Vercel, GitHub Pages, or a plain web server). No environment variables or server-side processing required.

## Fonts

Loaded from Google Fonts: [Cormorant](https://fonts.google.com/specimen/Cormorant), [Inter](https://fonts.google.com/specimen/Inter), [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono). These are loaded asynchronously and fall back gracefully to system fonts.

## Design system

Defined entirely in `css/style.css` via CSS custom properties at `:root`. Key variables:

- `--bg` — page background (`#0d0d0d`)
- `--fg` — primary text (`#e2ddd6`)
- `--accent` — dusty rose accent (`#b99a8e`)
- `--font-display` — Cormorant (serif, editorial)
- `--font-body` — Inter (sans-serif, UI/body)
- `--font-mono` — IBM Plex Mono (monospace, labels/fragments)
