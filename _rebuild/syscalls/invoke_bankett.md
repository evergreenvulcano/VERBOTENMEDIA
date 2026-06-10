# Syscall contract: `invoke_bankett`

Status: v0.1 static/public-readiness contract  
Date: 2026-06-10

## Purpose

Create or render a bankett as a chronological status rite: a ceremonial afterimage that tells the story of a module, figure, or project period without dumping raw source material.

## When a bankett may be invoked

A bankett may be invoked when there is a real status transition, public-facing milestone, module closure/opening, or reviewed ceremonial package that needs a static public afterimage.

Do not invoke a bankett merely because a lot of material exists. Do not invoke the first named candidate, astrologi/radio-banketten, until the paste exists and the review/formalization pass has happened.

## Who may invoke

- Martin, explicitly.
- Codex, only when the live user request authorizes a bankett pass or a bankett render.
- A collaborator, only by proposal through Norrotiv or a bounded PR.

## Input

Required:

- target module/figure/period
- desired output surface
- public-readiness status
- source boundary
- list of allowed source paths or already-public pages
- decision whether this is creation or rendering

Optional:

- candidate name, e.g. `bankett-astrologi-radio` with status `pending paste/review`
- chronology skeleton
- existing bankett packet reference
- images/assets already cleared for public use

## Allowed reading

- public-ready site pages
- status registers and topology files
- pasted bankett material only when explicitly supplied in the live task or authorized working context
- explicitly named repo source files
- previously reviewed bankett packet, if the task is render-only

## Forbidden reading

- Drive originals not explicitly cleared
- older bankett references unless explicitly supplied for review
- contamination zones
- protected/private material
- bankett package folders not explicitly released for this invocation
- raw source dumps used as aesthetic bulk

## Allowed writing

- `_rebuild/` planning/status files
- `static-pages/xprmnt-zn/` status notes
- a new public static page only if the task explicitly authorizes publication
- `banketter.html` index entry only after public-readiness is established

## Output format

A bankett output must include:

1. title
2. date or chronology window
3. status label
4. provenance block
5. source-boundary note
6. public-readiness note
7. main ceremonial/status render
8. next-action or closure line

## Public-readiness requirements

- no protected material
- no raw source dump
- no unreviewed Drive import
- no accidental claim of canon
- no rewriting of literary source as if it were original prose
- clear distinction between public-readable and public-ready

## Stop conditions

Stop if:

- the bankett paste is absent
- source boundary is unclear
- requested material appears protected/private
- the invocation would require bulkimport
- the bankett would need to invent provenance
- the output cannot distinguish ceremony from archive

## Creation vs render

Creating a bankett means producing a new ceremonial/status text from allowed inputs. Rendering a bankett means taking an already existing, reviewed bankett package and turning it into a static public page without changing its substance. The astrologi/radio-banketten is not yet renderable in this repo because the latest paste and method formalization are still pending.

These are different permissions. Render-only permission does not authorize creating new bankett prose. Creation permission does not authorize importing protected packets.
