# HackerStory HTML collection

Status: `public-readable representation / review proposal`

This directory carries the presentation-first HackerStory HTML collection
onto the current public-front refactor line without promoting it into the
live site.

Included:

- `index.html`
- `merge-hackerstory-session-8.html`
- `pool-hackerstory.html`
- `merge-hackerstory-copilot-tasks.html`

Boundary:

- The three dossier editions are exact byte copies of the Drive renders from
  `03_product/hackerstory-html/` on 2026-06-22.
- `index.html` differs only by replacing a Drive-only neighboring-gallery
  link with a repo-local review-status footer.
- The source DOCX files are not included.
- The collection is not linked from root navigation or any public registry.
- Presence in this public repository means public-readable; it does not mean
  public-ready, canonical, or approved for site publication.
- Promotion requires a separate human decision about source status,
  provenance, and public readiness.

Verification recorded by the Drive build:

- zero missing paragraphs
- zero missing table cells
- no broken anchors
- no duplicate IDs
- no external dependencies
- no JavaScript
- no horizontal overflow in the tested desktop and mobile layouts

The local `build-audit.json` is intentionally not copied because it contains
absolute workstation paths.
