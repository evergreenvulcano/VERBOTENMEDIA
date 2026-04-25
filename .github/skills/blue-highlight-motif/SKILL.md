---
name: blue-highlight-motif
description: 'Turn VS Code hover highlight maps into traceable image motifs, or fall back to a consistent fin-de-siecle Symbolist nocturne style. Use when converting highlighted word patterns into art prompts and embedding outputs into markdown plus assets.'
argument-hint: 'Provide screenshot path, highlight color, motif intent, and output article path.'
user-invocable: true
---

# Blue Highlight Motif

Convert a text screenshot with repeated-word highlight markers into a generated image concept that stays visually traceable to the highlight composition.

If a valid screenshot workflow is unavailable, switch to a consistent fallback style and keep outputs easy to reuse in markdown and assets.

## When to Use

- You hover a word in text and VS Code highlights repeated matches across the visible page.
- You want an image prompt derived from that highlight distribution.
- You need repeatable prompts in one coherent visual era and tone.
- You need fast insertion into markdown plus an asset copy step.

## Inputs

- Screenshot path (or pasted screenshot context)
- Highlight color and marker density notes
- Target markdown file path
- Asset destination folder (usually `assets/`)
- Optional: motif constraints, era emphasis, detail level

## Decision Flow

1. Confirm source mode.
- If screenshot exists and highlight pattern is readable: use `composition-trace mode`.
- If screenshot is missing, unreadable, or tooling blocks capture: use `style-generalization mode`.

2. Confirm output mode.
- If single image: produce one prompt and one markdown embed line.
- If batch images: produce numbered prompt variants with stable style anchors.

## Composition-Trace Mode

1. Capture the text mass screenshot while hover highlights are visible.
2. Map visual structure from highlights only:
- upper sparse marks -> head/halo candidates
- middle staggered marks -> torso/spine candidates
- lower dense clusters -> leg/ground force candidates
3. Choose one motif clearly traceable to that map.
4. Build an image prompt with four locked components:
- Traceability statement linked to highlight geometry
- Motif statement
- Style statement
- Render constraints
5. Generate image(s) using the composed prompt.

## Style-Generalization Mode (Fallback)

Use this canonical style package:
- Motif: cobalt somnambulist stepping out of a manuscript-night
- Era feel: 1890-1910
- Visual language: fin-de-siecle Symbolist with proto-Art Nouveau nocturne and soft impressionist diffusion
- Mood: cinematic but restrained, non-commercial, literary

Prompt rule:
- Keep one compositional anchor from pseudo-highlight geometry even in fallback mode (leaning vertical figure, broken midline, denser lower-right mass).

## Quality Checks

- Traceability: image motif must be explainable from highlight layout.
- Impact: selected subject reads as one strong silhouette at first glance.
- Restraint: avoid noisy ornament and over-detailed backgrounds.
- Consistency: keep palette and era language stable across variants.
- Editorial fit: suitable for literary context without decorative overload.

## Output Packaging

1. Save generated image into assets with a predictable name:
- `assets/highlight-motif-YYYYMMDD-01.png`
2. Add markdown embed at the target insertion point:
- `![Highlight-derived motif](../assets/highlight-motif-YYYYMMDD-01.png)`
3. Add a one-line caption only if needed:
- `Trace-derived motif from hovered-word highlight composition.`

## Prompt Builder Template

Use this template and fill all brackets:

`Track all [COLOR] highlights and deduce one image motif clearly traceable to the [COLOR] composition. Build the subject from the highlight geometry: [UPPER_SHAPE], [MID_SHAPE], [LOWER_SHAPE]. Render as an impactful but restrained fin-de-siecle Symbolist / proto-Art Nouveau nocturne (1890-1910 feeling) with soft impressionist diffusion, cinematic low-light, and a controlled literary mood. Keep silhouette readability strong and avoid unrelated scene inventions.`

## Batch Variant Rule

When generating multiple prompts, vary only one axis per variant:
- Axis A: camera distance
- Axis B: silhouette tilt
- Axis C: texture softness

Keep era, palette family, and traceability language fixed.

## Completion Criteria

- At least one prompt produced from trace mode or fallback mode
- One saved image asset path defined
- One ready-to-paste markdown embed line produced
- Brief rationale showing how motif maps back to highlight composition
