# Rebuild Summary

## Deleted

13 low-risk current-tree residue files were removed:

- two root residue files: `0`, `f`
- two dead placeholder scaffolds: `modules/traversal_core`, `modules/traversal_core2`
- one exact inbox duplicate of a canonical public writing
- one Windows `Zone.Identifier` transport file
- seven unreferenced export-named asset duplicates with better-named byte-identical counterparts

See `_rebuild/01_DELETED_FROM_CURRENT_TREE.md` for path-level detail.

## Moved

No files were moved in this pass.

## Created

- `_rebuild/ZIP_BACKUP_NOTE.md`
- `_rebuild/REBUILD_START.md`
- `_rebuild/00_REPO_AUDIT.md`
- `_rebuild/01_DELETED_FROM_CURRENT_TREE.md`
- `_rebuild/02_RISK_SCAN.md`
- `_rebuild/03_REBUILD_SUMMARY.md`
- `case-studies/forlagsdeckaren.md`
- `case-studies/ai-editorial-infrastructure.md`
- `case-studies/semantic-systems.md`
- `docs/orientation.md`
- `docs/public-front.md`
- `modules/README.md`
- `archive/README.md`

## Changed

- `README.md` was rewritten as a short public proof-of-work orientation surface.

## Left In Place

- `modules/` remains intact as source engine and historical machine room.
- `tmp/docs/forlagsdeckaren-del-5-praktikanten-source.docx` was left in place because it appears to be Förlagsdeckaren-origin material despite living under `tmp/`.
- `apps/research-ops/` was left untouched as private operational tooling.
- Pre-existing untracked files were left uncommitted unless they were part of this rebuild pass.

## Why The Repo Is More Readable

The current tree now has a public entry path: root `README.md`, `case-studies/`, and `docs/orientation.md`. `modules/` is explicitly framed as source engine rather than first-contact presentation. Low-value residue was removed without touching ambiguous origin material.

## Next Pass

Recommended next pass: review public-risk and provenance in deep `_gpt/source-anchor/` exports, especially raw conversation/tool-result dumps, then decide whether to keep, archive, redact, or remove them from the public-facing current tree.
