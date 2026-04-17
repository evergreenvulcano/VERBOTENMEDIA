# ARTICLE SPEC — VERBOTEN MEDIA

This document defines the canonical structure for publishable articles.

## Principle
Any source material may enter the system. All publishable articles must conform to this structure.

## Format
Markdown with frontmatter.

## Frontmatter fields

```yaml
---
title: ""
slug: ""
date: "YYYY-MM-DD"
summary: ""
type: "essay | fragment | novel | note | experimental"
status: "draft | ready | published"
inline_image: ""
inline_image_alt: ""
---
```

## Rules

- `title` is required
- `slug` should be URL-safe
- `date` should reflect intended publication date
- `summary` should be 1–2 sentences
- `type` defines the category
- `status` controls readiness

## Body structure

Keep structure simple and readable.

- Paragraphs
- Headings (`##` / `###`)
- Occasional blockquotes
- Inline images if needed

Avoid:
- complex layout logic inside markdown
- decorative separators
- embedded styling

## Images

Inline images should be minimal:

```md
![Alt text](/assets/articles/example.jpg)
```

No decorative wrappers.
No excessive repetition.

## Philosophy

The article must stand on its own.
Typography and spacing should carry the experience.
Images are supportive, not dominant.

## Pipeline

Raw input → normalized Markdown → rendered page

Do not skip normalization.
Do not publish directly from `/modules/` without conversion.
