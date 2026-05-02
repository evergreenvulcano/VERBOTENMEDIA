---
type: proposal, cleanup, source-governance, runtime-orientation
what: classify Praktikanten operative source, review, runtime, and DUJAG-adjacent surfaces without expanding the architecture
source-material: modules/zoomer-publishing-castle.md, modules/PRAKTIKANTEN operative dossier pass.md, modules/_FORLAGSDECKAREN/, modules/_DUJAG/source-packet/urV41/, modules/_gpt/index/source-manifest.md
status: proposal
promote: review -> bounded cleanup PR
---

# Proposal: Praktikanten Operative Surface Cleanup

## The Problem

The repository contains several Praktikanten-related surfaces that are valuable but not clearly separated by function.

Some are source artifacts. Some are reviews of source artifacts. Some are runtime files. Some are older DUJAG-compatible derivatives. The current arrangement makes it too easy for future agents to confuse:

- source with review
- review with implementation plan
- character-attractor with runtime
- runtime with canon
- DUJAG-compatible derivation with current Förlagsdeckaren source
- operative infrastructure analysis with literary scene-generation runtime

This proposal does not recommend new Praktikanten scaffolding. The repo already has enough. The correct next move is classification, relocation, and lightweight cross-reference.

---

## The Proposal

Perform a bounded cleanup of Praktikanten operative surfaces.

The cleanup should do four things:

1. Register `modules/zoomer-publishing-castle.md` as an active source anchor.
2. Move and rename `modules/PRAKTIKANTEN operative dossier pass.md` as a review/orientation file under `_gpt/index`.
3. Preserve the existing `_FORLAGSDECKAREN` runtime structure as the current primary runtime layer.
4. Keep DUJAG-compatible Praktikanten material in DUJAG, with no merge into `_FORLAGSDECKAREN`.

No public writing surface should be changed.

No `writings.html` entry should be added.

No creative prose should be modified.

---

## Functional Classification

### 1. `modules/zoomer-publishing-castle.md`

**Recommended role:** repo-native source anchor.

This file is the primary source artifact for the PRAKTIKANTEN operative pass. It contains the actual pass: date, workflow, voice, intake, reality audit, infrastructure mapping, node re-evaluation, VERBOTEN MEDIA opportunity mapping, risk assessment, updated thesis, pressure statements, and recommendations.

It should not be moved into `_gpt/index` as if it were only a review or derivative. It should remain a repo-native module source unless a later source-governance pass decides otherwise.

**Action:**
Add it to:

`modules/_gpt/index/source-manifest.md`

Suggested manifest entry:

```md
## 4. modules/zoomer-publishing-castle.md

Role: repo-native source anchor for PRAKTIKANTEN operative pass / agentic literary infrastructure  
Status: active, review-required for time-sensitive infrastructure claims  
Reason: contains the April 2026 PRAKTIKANTEN pass grounding merge_hackerstory speculation against agent instruction infrastructure, AGENTS.md-style repo context, literary instruction files, and VERBOTEN MEDIA’s possible use of developer-agent surfaces for editorial/literary work.  
Handling rule: use as source for agentic-literary infrastructure proposals and Praktikanten operative analysis. Do not treat time-sensitive infrastructure claims as current without re-verification. Do not publish externally without review.
