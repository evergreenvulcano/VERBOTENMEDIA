# Runtext Praktikanten review

## Changed files

- `runtext.html`
- `praktikanten.html`
- `static-pages/runtext/praktikanten/manifest.json`
- `static-pages/runtext/praktikanten/00-offentlig-passagefigur.md`
- `static-pages/runtext/praktikanten/01-okat-mandat.md`
- `static-pages/runtext/praktikanten/02-boken-biter-tillbaka.md`
- `static-pages/runtext/praktikanten/03-den-andra-praktikanten.md`
- `_rebuild/runtext-praktikanten-review.md`

## Why this is experimental reading form, not book publication

The runstream is a format layer over already public material. It does not import Drive files, source-anchor packages, origin prompts, or the full Praktikanten book draft. The new manifest points only to short curated markdown excerpts under `static-pages/runtext/praktikanten/`, each marked:

`status: "public-bound excerpt / experimental runstream"`

The reader receives timed text fragments in the existing `runtext.html` apparatus. That makes the material available as cadence, field and passage, not as a complete book, canonical edition, service, or new Praktikanten surface.

## Praktikanten boundaries respected

- Praktikanten is not made into a chatbot.
- Praktikanten is not made into a guide.
- Praktikanten is not made into an NPC.
- Praktikanten is not made into a mailpersona.
- Praktikanten is not made into a dashboard figure.
- Praktikanten is not made into an onboarding surface.
- Praktikanten is not made into a continuing service.
- No private Drive material or protected source material is imported.
- No main navigation change is introduced.

## Rollback

If the format feels wrong, revert the implementation commit or remove this small surface in four steps:

1. Remove the runstream card from `praktikanten.html`.
2. Remove `static-pages/runtext/praktikanten/`.
3. Revert the control panel changes in `runtext.html` if the controls themselves are not wanted.
4. Remove this review note.

The rollback does not affect the existing public Praktikanten page, the existing Writings pages, or the default Writings runtext manifest.
