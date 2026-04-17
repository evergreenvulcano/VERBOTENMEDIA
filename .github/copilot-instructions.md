# Copilot instructions for VERBOTEN MEDIA

VERBOTEN MEDIA follows a restrained editorial design system. Preserve a calm, sparse, Nordic visual field. The writing, artworks, and literary materials must remain primary. The interface should support them quietly.

## Core principle
Default to restraint. Use fewer elements, not more. Typography, spacing, and structure should do most of the work.

## Publishing model
The repository distinguishes between intake/development material and publish-ready material.

- `/modules/` is an intake and development space.
- Files in `/modules/` are not to be assumed publish-ready.
- Drafts may be exploratory, partial, messy, or internal.
- Do not convert `/modules/` content into public pages unless explicitly instructed.

## Article pipeline
Any source format may be used during drafting. Source material may begin as notes, pasted text, transcript, `.docx`, or `.md`.

The preferred normalized format for article drafting is Markdown with frontmatter.

When helping with publication work:
1. Normalize source material into structured Markdown.
2. Preserve the authorial tone and semantic shape.
3. Keep structure simple and publishable.
4. Render through the site's existing article/page styling.

Do not force the user to decide in advance whether they will write manually or use AI. Support both.

## Article rule
Do not add decorative graphical elements inside article bodies unless explicitly requested.
Assume inline images in articles are handled manually by the editor.
Those inline images should remain simple, well-spaced, and legible.

## Asset rule
Files in `/assets/` are primarily for site-level identity:
- logo and brand presence
- hero treatments
- section transitions
- page framing
- occasional structural accents

Do not scatter asset graphics through prose content.
Do not force asset usage where typography and whitespace are enough.

## Style priorities
- black or near-black background
- light typography
- restrained accent color
- strong typographic hierarchy
- generous whitespace
- minimal visual noise
- cinematic but controlled mood
- non-commercial tone

## Negative rules
Never:
- scatter logo marks through article text
- wrap every image in decorative treatments
- add ornamental dividers between ordinary paragraphs
- turn essays or novels into magazine layouts by default
- use assets merely because they exist
- reduce legibility for atmosphere
- treat `/modules/` as a published section unless explicitly asked

## Positive rules
Prefer:
- plain inline images with consistent spacing
- restrained captions
- stable article width
- consistent heading hierarchy
- clear metadata
- reusable structural templates
- CSS-based composition over extra markup

## When modifying code
Prefer CSS-based restraint over additional decorative elements.
Preserve responsiveness and accessibility.
When uncertain, remove rather than add.

## Longform and literary pages
Novels, essays, fragments, artistic texts, and experimental writing should feel clean and composed.
Simple inline imagery must be allowed to stand on its own without extra visual packaging.
The page design should help the work emerge, not compete with it.

## Output preference for drafting help
When asked to turn source material into a draft, create a normalized Markdown article using the repo's article spec and template. Keep it ready for later publication, but do not assume immediate publication.
