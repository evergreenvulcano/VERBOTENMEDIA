# Markdown Publishing Standard v1

This document defines the repository markdown baseline for writings rendered through `page.html`.

The standard is text-first and renderer-safe. It exists to make publishing legible and repeatable without granting editorial permission over the source text.

## Scope

This standard applies to:

- markdown files intended for `static-pages/writings/`
- staged conversion candidates in `inbox/writings/`
- markdown files rendered through `page.html`

This standard does not authorize rewriting, cleanup, or literary intervention during conversion.

## Frontmatter schema

The current renderer supports flat `key: value` frontmatter only.

Allowed baseline fields:

- `title`
- `date`
- `summary`
- `type`
- `status`
- `author`
- `mode`
- `layout`
- `opening_image`
- `opening_alt`

Rules:

- use a single `---` block at the top of the file
- keep values single-line
- do not use arrays, nested values, or multiline frontmatter
- quote strings when punctuation or spacing makes that safer

## Supported markdown subset

Use only structures the current renderer handles predictably:

- paragraphs
- headings `##` through `####`
- unordered lists
- ordered lists
- blockquotes
- inline code
- links
- inline images

Avoid unsupported or weakly supported structures:

- tables
- fenced code blocks as presentation structure
- nested lists
- raw HTML as a publishing dependency
- decorative separators

## Naming and placement

- canonical published writings belong in `static-pages/writings/`
- converted candidates should land in `inbox/writings/` before promotion
- use lowercase kebab-case file names for target files

## Conversion integrity rule

Markdown conversion is structural adaptation only.

Unless explicitly authorized, conversion must not alter the source text's words, sentences, paragraphs, repetitions, tone, or rhetorical character.

Allowed during conversion:

- adding flat frontmatter required by the repository contract
- assigning compliant file names and slugs
- assigning compliant metadata fields such as `type`, `date`, and `status`
- preserving or mapping existing structural headings when they already exist in the source
- converting only container-level formatting into supported markdown structures where this does not change the source wording
- flagging unsupported structures or incompatibilities
- staging outputs in inbox before promotion

Not allowed during conversion unless explicitly requested:

- rewriting or paraphrasing prose
- smoothing wording
- punctuation or style normalization
- readability edits
- semantic compression
- collapsing repetitions
- editorial cleanup disguised as format conversion

If a source cannot be made compliant with the markdown publishing baseline without altering the creative text, the agent must flag the incompatibility rather than rewrite the text.

## Promotion path

The safe repository path is:

1. source text
2. staged conversion candidate in `inbox/writings/`
3. review for title, summary, type, date, naming, and v1 compliance
4. intentional promotion to `static-pages/writings/`
5. optional `writings.html` registration

Promotion is a separate editorial decision. Conversion alone does not make a text canonical or published.
