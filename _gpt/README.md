# _gpt

Operational membrane for GPT-assisted work inside `evergreenvulcano/VERBOTENMEDIA`.

This folder is not canon.
It is not the publishing house itself.
It is the working surface where GPT can index, draft, stage, and propose without silently rewriting the human-authored corpus.

## Purpose

`_gpt/` exists to make GPT useful without making it intrusive.

The rule is simple:
- read broadly across the repository
- write narrowly inside `_gpt/` by default
- promote outward only when a draft is mature and the target is explicit

This keeps the live corpus legible while still allowing continuous machine-assisted work.

## What belongs here

### 1. `README.md`
The operating contract.
It explains how GPT should behave in this repository, what each surface is for, and what is off-limits by default.

### 2. `index/`
Stable reference surfaces.

Use `index/` for:
- corpus maps
- source manifests
- node registries
- file inventories
- adjacency maps
- source-to-output pointers
- lightweight operational memory that should persist across runs

`index/` should stay relatively calm.
It is for durable maps, not daily noise.

### 3. `runs/`
Dated run outputs.

Use `runs/` for:
- Nightfold / Mornest / Midpulse outputs worth preserving
- dossier sessions
- ingestion reports
- experimental passes that should remain inspectable
- one-off analysis drops

A run file is a log of work performed at a given time.
It is allowed to be provisional, messy, and process-heavy.
Not every run needs to be kept forever, but anything stored here should be understandable later.

Suggested naming:
- `YYYY-MM-DD_mornest.md`
- `YYYY-MM-DD_nightfold.md`
- `YYYY-MM-DD_merge-session-004.md`

### 4. `proposals/`
Patch-ready drafts.

A patch-ready draft is not a vague idea.
It is a concrete candidate artifact that is close enough to final that it could be promoted into the main repository with minimal additional editing.

Examples:
- revised homepage copy intended for `modules/homepage-copy.md`
- cleaned version of a long markdown file intended to replace or extend an existing file
- structured notes for a new section to be added elsewhere in the repo
- a candidate rewrite of a README, issue text, manifest, or module page

A patch-ready draft should state:
- what it is for
- which target path it is meant to affect
- whether it is additive, replacement, or reference-only
- what sources it was derived from

If a proposal is accepted, it can later be promoted out of `_gpt/proposals/` into the target location by explicit instruction.

## What does NOT belong here

- duplicate copies of stable source files that already have a good canonical home elsewhere in the repo
- silent edits to human-authored canon outside `_gpt/`
- uncontrolled dump files with no target or purpose
- auto-generated churn that nobody can later interpret

## Source handling rule

If a file already exists in a meaningful canonical location, keep it there.
Do not duplicate it into `_gpt/` unless a transformation is needed.

That means `modules/boomer-publishing-house.md` should stay in `modules/`.
It is already a repo-native source anchor and should be treated as a canonical input surface, not mirrored into `_gpt/` by default.

If GPT needs to work from it, the correct move is:
- reference it from `_gpt/index/`
- cite it in runs
- derive proposals from it
- leave the source in place

## Default operating mode

Unless told otherwise, GPT should operate like this:

1. Read from anywhere in the repository.
2. Write only inside `_gpt/`.
3. Do not rename, move, overwrite, or delete existing files outside `_gpt/`.
4. When work becomes concrete enough to affect canon, stage it in `proposals/` first.
5. Only after explicit confirmation should canon outside `_gpt/` be edited.

## Practical workflow

### Intake
Read a source file from its canonical location.
Example: `modules/boomer-publishing-house.md`.

### Indexing
Record its existence or relevance in `_gpt/index/` if it should remain part of the working map.

### Run output
If a session produces meaningful analysis or generative material, store that in `_gpt/runs/` with a dated filename.

### Proposal
If a run produces a strong candidate for a real repo change, create a patch-ready artifact in `_gpt/proposals/`.

### Promotion
Only by explicit instruction should a proposal be moved or rewritten into a canonical location outside `_gpt/`.

## Style of intervention

Preferred:
- additive
- staged
- reviewable
- source-aware
- minimally destructive

Avoid:
- sprawling autonomous rewrites
- duplicate mirrors of the same text in multiple places
- burying important work inside logs with no extraction path
- treating experimental output as canon by accident

## Why this structure exists

The repository is both archive and active build surface.
`_gpt/` exists so GPT can help without flattening that distinction.

Human-authored files keep their dignity.
Machine-assisted work gets a real place to accumulate.
Promotion becomes visible.
Nothing important has to happen silently.

## Short version

- `modules/` and other existing folders = canon / source / live project material
- `_gpt/index/` = maps
- `_gpt/runs/` = logs
- `_gpt/proposals/` = candidate patches
- `_gpt/README.md` = contract

GPT should be useful here by being controlled, legible, and easy to audit.
