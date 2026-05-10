# Runtext Material Submission Prompt

Use this prompt when providing material for the `runtext.html` public text rotor.

## Prompt

I am providing source material for the VERBOTEN MEDIA `runtext.html` text rotor.

Please treat this material as candidate public-facing text. Do not publish it directly from private or operational folders. Convert only the material I explicitly provide here into a curated public markdown draft suitable for placement under:

`static-pages/runtext/`

Create one or more `.md` files and, if there are multiple files, a JSON manifest at:

`static-pages/runtext/manifest.json`

The manifest format must be:

```json
{
  "items": [
    { "path": "static-pages/runtext/example-file.md" }
  ]
}
```

Each markdown file must use this frontmatter:

```markdown
---
title: "Short visible title"
date: "YYYY-MM-DD"
summary: "One sentence describing this rotor source."
type: "fragment"
status: "draft"
author: "VERBOTEN MEDIA"
---
```

Material requirements:

- Preserve my wording unless I explicitly ask for editing.
- Remove private notes, operational instructions, credentials, private names, or anything unsuitable for a public GitHub Pages repository.
- Keep each file thematically coherent: nodes, ritual prompts, prose outputs, dossiers, or another named bucket.
- Prefer plain markdown: headings, paragraphs, short lists, and blockquotes only.
- Avoid tables, raw HTML, code fences, embedded instructions, and private path references.
- If the material comes from `_gpt/runs`, do not cite `_gpt/runs` as a public source path. Treat it as private source material that I have explicitly excerpted for public adaptation.
- If something seems unsafe or not publish-ready, put it in a “needs review” section instead of silently publishing it.

Rotor behavior target:

- Default URL: `runtext.html?manifest=static-pages%2Fruntext%2Fmanifest.json&shuffle=1`
- Default interval: `22.3` seconds.
- Default chunk size: `1100` characters.
- Preferred chunk range: `1100` to `1800` characters.
- Extended chunk range: `1801` to `3000` characters, only when a passage needs longer breath and remains readable at large display size.
- Absolute chunk cap: `5000` characters. This is a technical ceiling, not a recommended editorial target.
- Long source files are allowed, but they must be split into many rotor chunks. Do not treat one long file as one long display block.

Here is the material:

```text
[PASTE MATERIAL HERE]
```

Desired bucket names, if any:

```text
[OPTIONAL: nodes / ritual prompts / prose outputs / dossier fragments / other]
```

Explicit public acceptance:

```text
I confirm that the material pasted above may be adapted into public-facing files under static-pages/runtext/.
```
