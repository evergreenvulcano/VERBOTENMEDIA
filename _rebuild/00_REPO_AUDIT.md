# Repo Audit

Short practical audit for `VERBOTENMEDIA_REPO_REBUILD_PUBLIC_FRONT_PASS_01`.

## Root

- `README.md` - PUBLIC_FRONT; rewritten as the first orientation surface.
- Root `*.html`, `css/`, `js/` - PUBLIC_FRONT; current static site shell and renderer surfaces.
- `writings.html` - PUBLIC_FRONT; manual Writings registry.
- `assets/` - PUBLIC_FRONT / SOURCE_ENGINE; site images and identity assets. Export-named byte-identical duplicates removed.
- `templates/`, `scripts/` - SOURCE_ENGINE; local scaffolding helpers.
- `Dockerfile`, `compose.yml`, `.dockerignore` - SOURCE_ENGINE; static preview/tooling support.
- `0`, `f` - DEAD_RESIDUE; removed.

## Main Folders

- `case-studies/` - CASE_STUDY; created as the best human starting point.
- `docs/` - PUBLIC_FRONT / SOURCE_ENGINE; publishing specs, editorial contracts, and orientation.
- `static-pages/` - PUBLIC_FRONT; canonical public markdown content.
- `content/` - UNCLEAR; older article surface, left in place.
- `inbox/writings/` - TRANSPORT_FILE / SOURCE_ENGINE; staging for conversion candidates, not canon by default.
- `modules/` - SOURCE_ENGINE / HISTORICAL_MACHINE_ROOM; important provenance and runtime material, not primary onboarding.
- `modules/_gpt/` - HISTORICAL_MACHINE_ROOM; operational memory, runs, proposals, and source anchors.
- `modules/_DUJAG/` - SOURCE_ENGINE; separate developmental semantic-runtime package. Do not collapse into `_gpt`.
- `apps/research-ops/` - DO_NOT_TOUCH_NOW; private operational tooling, not public presentation.
- `tmp/` - DO_NOT_TOUCH_NOW; contains Förlagsdeckaren-origin `.docx`, left in place despite temporary folder name.
- `archive/` - ARCHIVE; current-tree parking surface created for future presentation moves.
- `_rebuild/` - SOURCE_ENGINE; local notes for this rebuild pass.

## Practical Reading

The public front should now be read through root `README.md`, `case-studies/`, and `docs/orientation.md`. `modules/` remains important evidence, but no longer has to carry first-contact orientation.
