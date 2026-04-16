# Proposal

Target path: `modules/boomer-publishing-house.md`
Type: additive
Intent: add a stable entry header that clarifies the file's role without rewriting its body
Sources:
- `modules/boomer-publishing-house.md`
- `modules/_gpt/README.md`
- `modules/_gpt/index/source-manifest.md`

## Why this proposal exists

`modules/boomer-publishing-house.md` is currently carrying a large repo-native migration of the old `pool=HackerStory.docx` mass.
It already works as a canonical source anchor, but it would become more usable with a short entry header that explains what the file is and how it should be treated.

This proposal does not replace the file.
It only stages a candidate preface.

## Candidate patch text

---

# boomer-publishing-house

Repo-native source anchor for the former `pool=HackerStory.docx` mass.

## Status
Canonical source surface.
Not a GPT-owned file.
Not a staging area.

## Use
Read as source material for:
- dossier ingestion
- node extraction
- proposal derivation
- continuity tracking across sessions

## Do not use this file for
- raw GPT run logs
- duplicate mirrors of existing sources
- silent structural rewrites without review

## Operational note
Derived GPT work should accumulate in `modules/_gpt/`.
This file should remain a canonical input surface unless explicitly revised.

---

## Human review note

If accepted, this patch should be inserted at the top of `modules/boomer-publishing-house.md` as a minimal orienting preface.
The body of the file should remain otherwise unchanged.
