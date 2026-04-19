# ARTICLE SPEC

This file is now a pointer, not the primary writing contract.

For Writings published through `page.html`, use:

- `docs/markdown-publishing-standard-v1.md`

For shortstory-specific layout behavior, use:

- `docs/SHORTSTORY_SYSTEM.md`

Reason:

- the renderer now has a clearer effective contract than this legacy note described
- `inline_image` and similar older fields are not part of the current publishing baseline
- the repository should have one canonical writing standard instead of competing markdown specs

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
