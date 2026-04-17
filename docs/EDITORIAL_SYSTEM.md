# EDITORIAL SYSTEM — VERBOTEN MEDIA

## Purpose
This document defines the standing editorial logic of the site so that drafting, normalization, and publication can remain coherent without repeated instruction.

## Core orientation
VERBOTEN MEDIA is visually restrained by default. The site should remain calm, sparse, and composed. Writing, literary fragments, artistic inquiry, and experimental material must remain primary. Interface and styling are supportive structures, not competing gestures.

## Structural distinction
The repository contains spaces with different levels of readiness.

### `/modules/`
`/modules/` is an intake and development space.

It is used for:
- working notes
- experimental fragments
- exploratory markdown
- unfinished drafts
- material under semantic or structural development

Nothing in `/modules/` should be treated as publish-ready by default.

### Normalized article files
Normalized article files are the transition layer between development and publication. They are the canonical structured format for publishable text.

These files should:
- use Markdown with frontmatter
- follow `docs/ARTICLE_SPEC.md`
- remain structurally simple
- preserve the author's tone and logic
- be readable both by humans and AI systems

### Published pages
Published pages are the presentation layer. They must inherit site-wide styling and should not require custom visual negotiation for ordinary prose.

## Input policy
Source material may begin in any convenient format.

Accepted starting forms include:
- raw notes
- pasted chat output
- transcript material
- `.docx`
- exploratory `.md`
- copied fragments from `/modules/`

The input format is not the stable element. The normalized article format is the stable element.

## Normalization rule
Any source may enter. All publishable articles must leave through a normalized editorial form.

Default pipeline:

`source material -> normalized markdown article -> rendered page`

Do not publish directly from `/modules/` unless there is an explicit editorial decision to do so.

## Visual doctrine
The site must preserve a clean Nordic editorial field.

This means:
- near-black background
- restrained light typography
- strong typographic hierarchy
- controlled accent usage
- generous whitespace
- very low decorative noise
- a composed, literary, cinematic mood

## Article doctrine
Longform and literary pages must remain plain by default.

Ordinary articles, essays, notes, novels, fragments, and experimental writing should feel:
- stable
- legible
- spacious
- non-commercial
- typographically confident

Do not default to feature-layout behavior inside prose.

## Image doctrine
Traditional inline imagery is editor-handled.

That means:
- simple inline images are allowed and expected
- inline images should sit naturally in the text flow
- the surrounding design should already make them look correct
- images should not be over-framed or decorated by default

Prefer:
- clean spacing
- consistent rhythm
- restrained captions
- strong alignment with prose width

Avoid:
- ornamental wrappers
- repeated graphic motifs in article bodies
- collage behavior in ordinary prose pages
- decorative borders unless explicitly part of a specific project

## Asset doctrine
Files in `/assets/` are primarily site-level identity material.

They may be used for:
- wordmark and logo presence
- hero graphics
- section framing
- page transitions
- subtle structural accents

They should not be automatically scattered through article prose.

## AI collaboration doctrine
AI systems assisting inside the repo should:
- preserve the distinction between `/modules/` and publication-ready content
- normalize drafts into the article spec when asked
- avoid over-designing literary work
- prefer structural clarity over visual novelty
- support both manual and AI-assisted drafting paths

The system should not force a single authoring method.

## Editorial threshold
The default article page should already look correct when it contains only:
- a title
- metadata
- plain paragraphs
- one ordinary inline image
- an optional quote or subheading

If that page requires additional visual invention to function, the system is underdesigned.

## Exception logic
Exception pages are allowed, but they must be deliberate.

Feature-like or visually heightened treatments should only happen when:
- the page is explicitly marked as special
- the material itself calls for a distinct treatment
- the deviation does not compromise overall site coherence

The default must remain plain.
