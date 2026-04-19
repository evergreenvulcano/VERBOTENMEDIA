---
title: "LEGACY POINTER - DO NOT USE AS THE CANONICAL TEMPLATE"
date: "YYYY-MM-DD"
summary: "Use static-pages/templates/writing-baseline.md instead."
type: "essay"
status: "draft"
---

# Legacy template pointer

Do not use this file as the primary baseline for new Writings.

Canonical template:

- `static-pages/templates/writing-baseline.md`

Reason:

- Markdown Publishing Standard v1 defines `static-pages/templates/writing-baseline.md` as the single canonical baseline template.
- This file remains only as a legacy reference path for anyone looking for the older `templates/article-template.md` location.

If you are converting an existing source into repository markdown, conversion is format-only unless explicit editorial revision has been requested.

Do not treat this file as permission to improve, normalize, paraphrase, smooth, condense, or otherwise modulate the creative text.

## Creation path

Use the scaffold instead:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\new-writing.ps1 `
  -Title "Example Piece" `
  -Summary "One-sentence summary." `
  -Type essay
```

## Conversion rule

Allowed during conversion:

- add required metadata
- preserve existing headings
- map unsupported container formatting into supported markdown where wording is unchanged
- flag incompatibilities

Forbidden during conversion unless explicitly requested:

- rewriting or paraphrasing prose
- punctuation or style normalization
- readability edits
- semantic compression
- collapsing repetitions
