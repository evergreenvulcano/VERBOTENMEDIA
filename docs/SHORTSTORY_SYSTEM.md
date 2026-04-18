# SHORTSTORY READING SYSTEM — VERBOTEN MEDIA

## What this is

The shortstory reading system is a markdown-first publishing contract for literary prose.
It is a single rendering profile with three layout modulations.
The primary publishing path is a markdown file rendered through `page.html`.
HTML template files are reference demos only.

Prose is primary. Typography, spacing, and column width do most of the work.
Images may pace, orient, or interrupt reading. They must not dominate it.

---

## How to activate

Add `mode: shortstory` to the frontmatter of any markdown file served through `page.html`.

---

## Frontmatter contract

The frontmatter parser supports flat `key: value` pairs only.
It does not support arrays, nested fields, or multiline values.

```yaml
---
title: ""
mode: shortstory
layout: split | interrupted | article
opening_image: ""
opening_alt: ""
author: ""
date: ""
summary: ""
---
```

### Fields

| Field | Required | Notes |
|---|---|---|
| `title` | yes | Rendered as the page title |
| `mode` | yes | Must be `shortstory` to activate this system |
| `layout` | no | One of `split`, `interrupted`, or `article`. Defaults to `article` if omitted. |
| `opening_image` | no | Required when `layout: split`. Relative path from the markdown file. |
| `opening_alt` | no | Alt text for the opening image. Provide when `opening_image` is set. |
| `author` | no | Displayed in the metadata line as `Author — Date` |
| `date` | no | Year or date string |
| `summary` | no | One or two sentences. Displayed below the title. |

Do not add fields not listed here. The parser will read them but the renderer ignores them.

---

## Layout modes

### `layout: article` (default)

Austere longform. This is the safest default for serious reading.

- Restrained header zone: title, metadata line, optional summary
- Continuous single-column prose
- Inline images allowed when semantically necessary
- Optional pull fragment (blockquote) as a reading pause
- No hero, no theatrics

Use when the prose can stand on its own without an opening image.

### `layout: split`

Opening split. One image beside the opening text, then continuous prose.

- Header becomes a two-column grid: image on one side, title block on the other
- After the header, prose drops into a single reading column as normal
- Collapses to one column on narrow screens (image stacks above text)
- Requires `opening_image` and ideally `opening_alt`

Use for stories where a single image orients the reader before the prose begins.

### `layout: interrupted`

Image-led interruption. Same as `article`, with one semantic image break.

- Same prose-first system as `article`
- One inline image in the body receives extra vertical breathing room (visual interrupt)
- Optional pull fragment before or after the image
- No extra structural elements

This is a rhythm modulation, not a separate design. Use sparingly.

---

## Supported content blocks

These are the only blocks with defined behavior in shortstory mode.

**Paragraphs** — default prose, continuous column.

**Headings (`##`, `###`)** — reduced weight, dimmed color. Section labels only, not display headers.

**Blockquote (`>`)** — editorial pull fragment. Slightly larger than body text, accent border, same italic tone as base. One per piece maximum.

**Inline image (`![alt](path)`)** — full prose width, clean vertical margins. In `interrupted` layout, extra breathing room signals the reading break.

Do not use more than one semantic image break per piece.
Do not use headings as display elements.
Do not use blockquotes as branded callout cards.

---

## What is forbidden

- Card mosaics in the reading body
- Repeated framed panels around sections
- Bottom CTA bands
- Oversized display headers
- Ornamental image wrappers
- Multiple competing image modules above the prose
- Any decorative structure that exists without semantic necessity

---

## HTML reference files

`shortstory-vm-4.html`, `shortstory-vm-5.html`, and `shortstory-vm-6.html` are static
archive demos of the three layout modes. They are not production templates.

The canonical path for publishing is:

```
markdown file → page.html?path=static-pages/writings/your-file.md
```

---

## Examples

| File | Layout | Notes |
|---|---|---|
| `static-pages/writings/shortstory-vm-4.md` | `split` | Opening split reference |
| `static-pages/writings/shortstory-vm-5.md` | `article` | Austere longform reference |
| `static-pages/writings/shortstory-vm-6.md` | `interrupted` | Image-led interruption reference |
