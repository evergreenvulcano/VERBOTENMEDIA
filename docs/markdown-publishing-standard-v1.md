# Markdown Publishing Standard v1

This document defines the publishing baseline for markdown pieces surfaced through `writings.html` and rendered by `page.html`.

The goal is not to preserve every ad hoc markdown habit already in the repo. The goal is to standardize the path that already works, keep it text-first, and make later automation smaller.

## Scope

This standard applies to:

- markdown files published from `static-pages/writings/`
- cards added manually to `writings.html`
- prose rendered through `page.html?path=...`

This standard does not yet automate publishing, generate HTML pages, or replace the existing manual card index.

## Effective renderer contract

The current renderer behavior is defined by:

- `page.html`
- `js/main.js`

The renderer supports:

- flat frontmatter only
- text-first body rendering
- markdown links to other allowed `.md` files
- optional shortstory mode with small layout variations

The renderer does not support:

- nested frontmatter
- frontmatter arrays
- multiline frontmatter values
- custom markdown components
- tables
- fenced code blocks
- raw HTML as a supported publishing pattern
- automatic card generation

## Frontmatter schema

The parser accepts any flat `key: value` pair, but v1 only allows the fields below for new Writings content.

| Field | Required | Allowed values / format | Used by |
| --- | --- | --- | --- |
| `title` | yes | short human title | page header, browser title |
| `date` | yes | `YYYY-MM-DD` preferred | metadata line, card year extraction |
| `summary` | yes | 1-2 sentences | page summary, card description |
| `type` | yes | `essay`, `criticism`, `literary`, `fragment`, `analysis` | repository taxonomy, card/filter alignment |
| `status` | yes | `draft`, `ready`, `published` | editorial workflow |
| `author` | no | plain string | metadata line |
| `mode` | no | `shortstory` | activates shortstory reading profile |
| `layout` | no | `article`, `split`, `interrupted` | shortstory layout selection |
| `opening_image` | no | relative path to image | split layout header image |
| `opening_alt` | no | plain string | split layout image alt text |

### Legacy renderer fallbacks

The renderer also reads some legacy fields:

- `description` as a fallback for `summary`
- `year` as a fallback for `date`

Do not use those fields in new Writings files. They remain renderer tolerances, not part of v1.

### Frontmatter rules

- Use a single `---` block at the top of the file.
- Use one `key: value` pair per line.
- Quote values that contain punctuation, colons, or leading/trailing spaces.
- Keep values single-line.
- Omit optional fields instead of inventing empty placeholders in published files.
- Do not add fields outside the schema above unless the renderer is intentionally extended first.

## Supported markdown subset

V1 standardizes the subset the current renderer actually handles well.

### Allowed blocks

- paragraphs
- headings `##` through `####`
- unordered lists with `-` or `*`
- ordered lists with `1.`
- single-paragraph blockquotes with `>`
- inline images with `![alt](path)`

### Allowed inline syntax

- emphasis with `*italic*`
- strong emphasis with `**bold**`
- inline code with backticks
- links with `[label](url-or-path)`

### Link behavior

- relative paths resolve from the markdown file location
- links to allowed markdown files under `static-pages/` or `modules/` are rewritten to `page.html?path=...`
- external `https`, `mailto`, and `tel` links are allowed

### Avoid, even if partially tolerated

- body `#` headings as the display title pattern
- nested lists
- multi-paragraph blockquotes
- markdown tables
- fenced code blocks
- inline HTML
- decorative separators as layout devices
- large image sequences

## Naming conventions

- Store published Writings markdown files in `static-pages/writings/`.
- Use lowercase kebab-case filenames.
- Prefer ASCII slugs for filenames, even when the visible title contains diacritics.
- Keep one writing per file.
- Match the file name to the publishing slug, not to a temporary drafting phrase.

Examples:

- `static-pages/writings/forlagsdeckaren-baseline.md`
- `static-pages/writings/the-density-of-the-present.md`

## Directory conventions

- `static-pages/writings/` contains publishable Writings files.
- `static-pages/templates/` contains reusable markdown baselines for this flow.
- `scripts/` contains local scaffolding helpers.
- `writings.html` remains the manual registry of visible Writings cards in v1.

## Writings entry contract

Publishing a new Writing is a two-part action:

1. Create the markdown file in `static-pages/writings/`.
2. Add a matching card entry to `writings.html`.

Each card entry must keep these values in sync with the markdown file:

- `data-md-path` must equal the markdown file path
- `data-type` must equal the filter taxonomy value
- card title must equal frontmatter `title`
- card summary should match frontmatter `summary`
- visible year should be derived from frontmatter `date`
- visible tag should be the title-cased form of `type`

Minimal card shape:

```html
<article class="writing-item" role="listitem" data-type="essay" data-md-path="static-pages/writings/example-piece.md">
  <span class="writing-item-date mono">2026</span>
  <div class="writing-item-main">
    <h3>Example Piece</h3>
    <p>One-sentence summary aligned with frontmatter.</p>
  </div>
  <span class="writing-item-tag">Essay</span>
</article>
```

## Text-first baseline

"Text-first baseline" is the operational default for new Writings.

It means:

- the piece must read cleanly with text alone
- title, date, summary, and prose carry the publication
- no custom wrappers are required inside markdown
- images are optional and must be semantically necessary
- the safest literary baseline is `mode: shortstory` plus `layout: article`
- if the text does not yet justify `split` or `interrupted`, stay on `article`

In practice, the baseline body should usually start with:

- a short intent or framing section if the piece is still developing
- a prose opening
- plain section headings only when they improve reading

## Baseline creation path

Use the repository scaffold:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\new-writing.ps1 `
  -Title "Example Piece" `
  -Summary "One-sentence summary." `
  -Type essay
```

The script:

- creates a new markdown file from the baseline template
- normalizes or derives the slug
- defaults `status` to `draft`
- defaults `date` to today unless provided
- prints the exact `writings.html` card snippet to add manually

## First specimen

`static-pages/writings/forlagsdeckaren-baseline.md` is the first specimen under this standard.

It should be read as:

- a literary baseline
- a text-first page
- a shortstory-mode file using the austere `article` layout

## What v1 intentionally does not do

- no card auto-generation
- no CMS
- no build pipeline migration
- no full taxonomy refactor outside Writings
- no automatic syncing between frontmatter and `writings.html`

Those can come later. V1 is successful if new pieces stop being improvised and start being created from the same baseline contract.
