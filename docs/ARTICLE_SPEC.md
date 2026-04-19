# ARTICLE SPEC

This file describes the repository article baseline in short form.

For the canonical repository markdown contract, use:

- `docs/markdown-publishing-standard-v1.md`

## Principle

Any source material may enter the system. Publication structure may adapt to the repository contract, but conversion does not authorize creative rewriting.

## Format

Markdown with flat frontmatter.

## Conversion integrity

Markdown conversion is structural adaptation only.

Unless explicitly authorized, conversion must not alter the source text's words, sentences, paragraphs, repetitions, tone, or rhetorical character.

Allowed conversion work:

- adding required flat frontmatter
- assigning compliant file names and metadata fields
- preserving or mapping structural headings that already exist in the source
- converting container-level formatting into supported markdown where the source wording is unchanged
- flagging unsupported structures instead of rewriting them
- staging outputs in inbox before promotion

Forbidden during conversion unless explicitly requested:

- rewriting or paraphrasing prose
- readability edits
- punctuation or style normalization
- semantic compression
- collapsing repetitions
- editorial cleanup disguised as conversion

If structural compliance would require changing the creative text, flag the incompatibility instead of rewriting the file.

## Pipeline

Raw input -> structurally adapted Markdown -> review -> rendered page

Do not publish directly from `/modules/` without conversion review.
