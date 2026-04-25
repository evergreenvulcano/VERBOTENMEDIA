VERBOTEN MEDIA is the central node.
Everything else is a module.
Nothing needs to be finished.

# VERBOTEN MEDIA

Production-ready static website for [VERBOTEN MEDIA](https://verbotenmedia.se) - an independent cultural platform working across literature, media, artistic research, and inquiry into contemporary digital life.

## Structure

```text
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

The site is fully static - no build step required.

**Preferred local development:** use Docker for a consistent preview environment:

```bash
docker compose up
```

Then open `http://localhost:8080`.

This Docker setup is intentionally minimal. It standardizes local preview only and does not add publishing automation, a build pipeline, or server-side behavior.

The Docker image also includes `node` and `npm` for future tooling and validation work. Example version checks:

```bash
docker compose run --rm --entrypoint node site --version
docker compose run --rm --entrypoint npm site --version
```

The preview mount remains read-only. For writable Node-based work, use the separate `tools` service:

```bash
docker compose run --rm tools node --version
docker compose run --rm tools npm --version
docker compose run --rm tools npm init -y
```

For an interactive shell inside the writable tooling container:

```bash
docker compose run --rm tools
```

This keeps the preview service stable while giving you a clean place to run future Node-based scripts, install packages, or add validation tooling.

**Non-Docker local development:** open any HTML file directly in a browser, or serve the directory with any static server:

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

- `--bg` - page background (`#0d0d0d`)
- `--fg` - primary text (`#e2ddd6`)
- `--accent` - dusty rose accent (`#b99a8e`)
- `--font-display` - Cormorant (serif, editorial)
- `--font-body` - Inter (sans-serif, UI/body)
- `--font-mono` - IBM Plex Mono (monospace, labels/fragments)
