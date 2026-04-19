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

## Creation path

Use the scaffold instead:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\new-writing.ps1 `
  -Title "Example Piece" `
  -Summary "One-sentence summary." `
  -Type essay
```
