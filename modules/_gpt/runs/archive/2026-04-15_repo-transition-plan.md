# 2026-04-15 — repo transition plan

## Purpose

This run establishes how GPT-assisted work should treat two source domains during the transition period:

1. files uploaded directly into the chat workspace
2. repo-native source files inside `evergreenvulcano/VERBOTENMEDIA`

## Working rule

GitHub should become the long-term source of continuity.
Uploaded chat files should be treated as temporary intake, fallback reference, or migration material.

## Source hierarchy

### Tier 1 — canonical repo-native sources
These should be preferred whenever they exist in meaningful markdown or text form inside the repository.

Current example:
- `modules/boomer-publishing-house.md`

### Tier 2 — uploaded chat files
These remain useful when:
- no repo-native equivalent exists yet
- a file has richer formatting or marginalia that has not been migrated
- the uploaded file is needed to verify or compare against the repo-native form

### Tier 3 — derived GPT surfaces
These are never primary sources.
They are maps, logs, and proposals built from Tier 1 and Tier 2.

## Policy during transition

- Do not start over.
- Do not mass-delete source material.
- Do not duplicate stable repo-native sources into `modules/_gpt/`.
- Prefer migration by replacement of dependency, not replacement of content.

This means:
If a repo-native markdown source exists and is good enough, GPT should stop depending on the uploaded chat version for ongoing work.
The uploaded file can remain as fallback until confidence is high.

## Recommendation

The best use of effort now is not reiterating the whole core structure from zero.
The better move is to keep stabilizing the current structure while moving source dependence toward GitHub.

In practical terms:
- keep building the corpus in GitHub
- let uploaded files act as temporary backup and intake
- only prune or restart structure when the repo-native source layer is strong enough to carry the work on its own

## Pruning rule

Delete or retire material only when one of the following is true:
- a repo-native equivalent clearly supersedes it
- the file is duplicated and no longer needed as fallback
- the file creates active confusion in the working map

## Current conclusion

Focus primarily on enabling artifact source material through GitHub.
Do not invest heavily in reorganizing the chat-upload origin as a permanent system.
Use it as migration memory, not as the enduring corpus home.
