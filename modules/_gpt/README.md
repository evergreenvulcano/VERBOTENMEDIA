# modules/_gpt

Operational membrane for GPT-assisted work inside `evergreenvulcano/VERBOTENMEDIA`.

This folder is not canon.
It is not the publishing house itself.
It is the staged working surface where GPT can index, draft, log, and propose without silently rewriting the surrounding human-authored corpus.

For now, this `_gpt/` lives inside `modules/` because the current work is tightly coupled to repo-native source material in that area.

## Core rule

Read broadly across the repository.
Write narrowly inside `modules/_gpt/` by default.
Promote outward only when a draft is mature and the target is explicit.

## The four surfaces

### 1. `README.md`
The contract.
It defines how GPT should behave in this repo, what each surface is for, and what is off-limits unless explicitly requested.

### 2. `index/`
Stable maps.

Use `index/` for:
- source manifests
- corpus maps
- node registries
- adjacency maps
- source-to-output pointers
- durable operational memory

This folder should stay calm.
It is for structural orientation, not daily noise.

### 3. `runs/`
Dated process output.

Use `runs/` for:
- dossier sessions
- Mornest / Midpulse / Nightfold outputs worth keeping
- ingestion reports
- one-off analysis passes
- experimental logs that should remain inspectable later

A run file records work done at a particular time.
It may be provisional, but it should still be legible.

Suggested naming:
- `YYYY-MM-DD_mornest.md`
- `YYYY-MM-DD_nightfold.md`
- `YYYY-MM-DD_merge-session-004.md`

### 4. `proposals/`
Patch-ready drafts.

A patch-ready draft is a concrete candidate artifact that is close enough to final that it could be promoted into canon with minimal additional editing.

It is not a loose note.
It is not a vague idea.
It is a reviewable candidate change.

A proposal should state:
- what it is
- which file or path it is meant to affect
- whether it is additive, replacement, or reference-only
- which sources it was derived from

If accepted, a proposal can later be promoted into a canonical location outside `modules/_gpt/`.

## Source handling rule

If a file already has a meaningful canonical home, keep it there.
Do not duplicate it into `modules/_gpt/` unless a transformation is needed.

That means `modules/boomer-publishing-house.md` stays where it is.
It is already a repo-native source anchor and should be treated as canonical input, not mirrored into `_gpt/` by default.

Correct use:
- reference it from `modules/_gpt/index/`
- cite it in runs
- derive proposals from it
- leave the source in place

## Default operating mode

Unless instructed otherwise:
1. Read from anywhere in the repo.
2. Write only inside `modules/_gpt/`.
3. Do not rename, move, overwrite, or delete existing files outside `modules/_gpt/`.
4. Stage outward-facing changes in `proposals/` first.
5. Only after explicit instruction should canon outside `modules/_gpt/` be edited.

## Practical flow

### Intake
Read a source file from its canonical location.
Example: `modules/boomer-publishing-house.md`.

### Indexing
Record its existence or relevance in `modules/_gpt/index/` if it should remain part of the working map.

### Run output
If a session produces meaningful analysis or generative material, store that in `modules/_gpt/runs/` with a dated filename.

### Proposal
If a run produces a strong candidate for a real repo change, create a patch-ready artifact in `modules/_gpt/proposals/`.

### Promotion
Only by explicit instruction should a proposal be rewritten or moved into a canonical location outside `modules/_gpt/`.

## Non-goals

Do not use this folder for:
- duplicate mirrors of stable source files
- silent edits to human-authored canon
- uncontrolled dump files with no target
- auto-generated churn that nobody can later interpret

## Why this exists

The repository is both archive and active build surface.
`modules/_gpt/` exists so GPT can help without flattening that distinction.

Human-authored files keep their dignity.
Machine-assisted work gets a real staging area.
Promotion becomes visible.
Nothing important has to happen silently.
