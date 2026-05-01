---
type: proposal, process-surface, intake-architecture
what: extract proposal candidates from new _gpt run files into a pressure queue rather than a task queue
source-material: modules/_gpt/runs/, modules/_gpt/proposals/, modules/_gpt/index/source-manifest.md
status: proposal
promote: review -> intake surface in modules/_gpt/proposals/
---

# Proposal: Proposal Extraction from Runs

## The Problem

`modules/_gpt/runs/` is already functioning as a generative pressure surface. That is good. Runs should stay permissive enough to let structure emerge before the system knows exactly what kind of structure it has found. The failure mode appears one step later. A run often contains one or more sentences of the form: this should maybe become a proposal, this should be separated, this deserves its own layer, this should be turned into a skill, this needs a registry, this wants a constitutive file, this is a future automation surface. Those fragments are not noise. They are one of the few places where the system spontaneously names its own architectural pressure.

At present, those fragments disappear into the run archive unless someone manually remembers them, extracts them, and turns them into a proposal. That is a fragile method because it depends on recall and on a later reader having exactly the right patience. In practice, the result is familiar: future work evaporates, pressure disperses, and the system later rediscovers the same structural idea as if it were new.

The archive keeps the record. It does not keep the pressure legible.

That is the gap this proposal addresses.

---

## The Proposal

Create a recurring extraction pass that scans newly added files in `modules/_gpt/runs/` and harvests proposal candidates into a single intake document:

`modules/_gpt/proposals/proposal-intake.md`

This file is not a task list and should not behave like one. It is a pressure queue. The distinction matters.

A task queue assumes decision has already happened. It implies assigned work, readiness, and procedural next steps. A pressure queue does something else: it records that a structural pressure has recurred strongly enough to deserve durable visibility before a decision has been made. It preserves the pressure without prematurely converting it into commitment.

This lets runs remain creative and excessive while making proposal formation more deliberate. The extraction pass does not decide what to build. It decides only that certain proposal-shaped pressures should not be allowed to vanish back into the archive.

---

## Why This Matters

The argument for this surface is not convenience. It is continuity.

Runs already produce architectural by-products. They generate candidates for skills, registries, constitutive layers, prompt modifiers, review agents, diagnostic surfaces, and indexing structures. If those candidates are left embedded inside the full mass of a run file, the system pays three costs.

First, recurrence becomes hard to see. A single idea may appear across five runs in slightly different language. Without an intake surface, it looks like five fleeting remarks. With an intake surface, it becomes visible as one recurring pressure with multiple witnesses.

Second, timing becomes impossible to judge. A proposal that appears once should often remain dormant. A proposal that appears six times across unrelated runs has earned a different status. You cannot make that distinction if every mention is trapped in local context.

Third, the archive gets misused as both memory and queue. It is good at memory. It is poor as a decision surface. A proposal intake file separates those functions cleanly.

The result is a repository that remembers its own structural intuitions without turning them into obligations the moment they are named.

---

## Target Surface

Create:

`modules/_gpt/proposals/proposal-intake.md`

Each intake entry should contain exactly these fields:

- `candidate`
- `source run`
- `why it recurs`
- `what it would change`
- `cost of acting`
- `cost of not acting`
- `recommended state: now / hold / reject / needs evidence`

This is the better field set because it keeps the file evaluative rather than merely descriptive. The earlier framing of candidate title, source path, reason it matters, suggested target path, risk if implemented too early, and timing recommendation is still present in substance, but the revised field names force clearer thinking.

`why it recurs` is stronger than `reason it matters` because recurrence is the actual evidence that a structural pressure exists.

`what it would change` is stronger than `suggested target path` because a path without a change-model is administrative camouflage.

`cost of acting` and `cost of not acting` force bidirectional evaluation. Without both, the file will drift either toward premature building or toward permanent postponement.

`recommended state` preserves non-commitment while still requiring a judgment.

---

## Extraction Logic

The extraction pass should not attempt fully autonomous proposal writing. That would be too early and too blunt. The job is narrower and more defensible.

The pass scans new run files for proposal-like pressure markers, such as:

- explicit future-oriented language: "this should become", "should be a proposal", "could become a skill", "needs its own file", "deserves a registry"
- repeated mentions of the same absent surface across multiple runs
- named structural complaints that imply a missing surface: no intake, no registry, no constitutive frame, no load-order companion, no safe write zone
- clear distinctions that are being rediscovered rather than maintained

From these, it extracts candidate entries, but it does not promote them beyond intake status. Each candidate remains provisional until reviewed by a later pass or by a human.

This is important. The system should preserve proposal pressure automatically, but it should not auto-legislate architecture.

---

## Why It Must Not Become a Task Queue

This point needs to be explicit because the drift risk is obvious.

If `proposal-intake.md` becomes a task queue, it will immediately begin flattening the run archive into project management residue. The archive will then start producing less interesting runs, because the system will learn that naming a structural pressure is equivalent to volunteering implementation work. That is exactly the wrong incentive.

The intake file must therefore remain a pressure surface.

That means:

- entries may remain unresolved for long periods without being considered stale
- multiple overlapping candidates may coexist without forced deduplication
- rejection is allowed and should be recorded without shame or deletion
- recurrence is evidence, not a promise
- extraction preserves unresolved charge rather than translating it into execution language too early

The file should feel closer to an atmospheric barometer than to a sprint board.

---

## Operational Shape

The extraction can be run as a bounded pass over new `_gpt/runs/` files since the last recorded intake update. It should append new candidates or strengthen existing ones where recurrence is clearly present.

Two behaviors are especially important:

**1. Recurrence aggregation**
If several runs point toward the same proposal, the intake file should reflect that the pressure is recurring rather than creating a swarm of duplicate entries.

**2. Non-promotion by default**
The pass should never create a full proposal file automatically unless explicitly asked. Intake is the membrane between run pressure and deliberate proposal writing. Breaking that membrane would remove the whole point of the surface.

---

## Adjacent Benefit

This proposal also improves the quality of later proposal writing.

A mature proposal should rarely be born from a single moment of enthusiasm. It should usually be traceable to recurrence. `proposal-intake.md` creates that trace. It lets a later proposal say: this did not appear once by accident; it surfaced in these runs, under these pressures, with these costs, and here is why the timing is now appropriate.

That produces better proposals because it gives them a memory substrate. They arrive with witnesses.

---

## Recommended Initial Format

The intake file can begin with a short framing note:

> This file records proposal pressure extracted from `_gpt/runs/`. It is not a task queue. Entries preserve recurring structural pressure without assuming implementation or promotion.

Then entries can be kept in a simple repeated block structure. No scoring matrix is required initially. A lightweight format is preferable because the main objective is capture and recurrence visibility, not bureaucratic completeness.

---

## Recommendation

This should be implemented.

It is low-cost, it preserves a class of high-value signal that the repository is currently leaking, and it does so without forcing premature action. More importantly, it protects the creative function of runs by giving them a pressure valve. Runs can continue to discover structure in excess of what the system is ready to formalize. The intake file ensures that discovery is not lost simply because it arrived too early.

The correct next step is not to build a large automation framework. The correct next step is to establish `modules/_gpt/proposals/proposal-intake.md` as a durable membrane and define a small extraction pass that feeds it.
