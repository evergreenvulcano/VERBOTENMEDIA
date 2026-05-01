---
type: proposal, intake-architecture, source-governance
what: protect source-manifest.md by routing recurring source-anchor pressure into a candidate review surface first
source-material: modules/_gpt/index/source-manifest.md, modules/_gpt/runs/, modules/_gpt/proposals/
status: proposal
promote: review -> candidate intake surface in modules/_gpt/proposals/
---

# Proposal: Source-Anchor Candidate Review

## The Problem

`modules/_gpt/index/source-manifest.md` is useful precisely because it is selective. It is not a convenience list of files the system happened to touch recently. It is a compact register of source anchors that have become persistent working surfaces for GPT-assisted work. That compactness is a structural property, not a cosmetic one.

The obvious drift risk is that repeated run references to a file will tempt the system to add it directly to the manifest. That is understandable and also wrong. A file can recur for many reasons that do not justify manifest status. It may be temporarily attractive, locally productive, rhetorically dominant, or simply easy to rediscover. None of those are sufficient grounds for treating it as a registered source anchor.

If `source-manifest.md` is updated directly from run pressure, it will become a junk drawer with a more dignified name. The manifest will still look orderly while losing the property that makes it valuable: the reader will no longer know whether an entry reflects durable source importance or merely repeated recent exposure.

This proposal exists to prevent that failure mode.

---

## The Proposal

Do not automate direct updates to `modules/_gpt/index/source-manifest.md`.

Instead, automate creation and maintenance of a separate candidate review surface:

`modules/_gpt/proposals/source-manifest-candidates.md`

The review pass should scan new `_gpt/runs/` files, detect repeated references to source files, and propose candidate source anchors for review without promoting them.

Each candidate entry should contain:

- `file path`
- `why it keeps recurring`
- `what function it serves`
- `risk of treating it as authority`
- `recommended status: add / observe / reject`

The distinction is simple and necessary: recurrence creates candidate pressure, not source authority.

---

## Why This Surface Is Necessary

The source manifest has a governance problem, not a discovery problem.

The repository is already good at producing candidate files. Runs, proposals, source packets, support analyses, and operational documents all generate new surfaces that may look important under local pressure. The missing piece is a membrane that asks whether repeated presence is the same thing as anchor status. It is not.

`source-manifest-candidates.md` creates that membrane.

This protects the manifest in three ways.

**1. It separates recurrence from promotion**
Repeated citation is evidence that a file is doing work. It is not yet evidence that the file should become a source anchor. The candidate file records the first fact without pretending it proves the second.

**2. It forces a function test**
The field `what function it serves` matters because manifest entries should not be added on familiarity alone. A candidate must be able to answer a stricter question: what role does this file play that other files do not? If the answer is vague, the correct status is not `add`.

**3. It surfaces authority risk explicitly**
Many files are useful precisely because they are partial, unstable, or local to a run. Those files may deserve repeated reading while being actively dangerous to treat as authority. The candidate review surface makes that danger visible rather than letting it hide behind recurrence.

---

## Why the Manifest Must Stay Clean

This point deserves blunt treatment.

If the manifest becomes a catch-all, it will still look organized. That is why this drift is dangerous. The file will preserve form while losing discriminative power.

The current manifest works because each entry implies a real threshold has been crossed:

- the file is a persistent working anchor rather than a one-off reference
- its role is legible enough to name succinctly
- the handling rule is stable enough to document
- adding it improves orientation rather than diluting it

Those conditions are hard to satisfy on purpose. They should remain hard. A candidate review file lets the repository accumulate pressure without lowering the threshold.

In other words, the manifest should be difficult to join. The candidate file exists so the system can remain permissive about noticing without becoming permissive about promotion.

---

## Review Logic

The automated pass should scan new run files for repeated file references and then ask a narrow evaluative question set for each recurring source:

- Is this file recurring because it is genuinely load-bearing, or because current work happens to orbit it?
- Does it serve a stable function that can be named without context leakage?
- Would adding it to the manifest improve future orientation, or just memorialize recent activity?
- What goes wrong if later sessions start treating this file as an authority surface?

Those questions should not be answered with a score. They should be answered with short evaluative prose. A score invites false confidence. A compact rationale forces better discipline.

---

## Recommended Entry Shape

The candidate file should use a repeated block structure rather than a loose notes section. A candidate might look like this:

```md
## [candidate file]

- file path:
- why it keeps recurring:
- what function it serves:
- risk of treating it as authority:
- recommended status:
```

That is enough structure to support review without making the file bureaucratic.

The `recommended status` field should be interpreted strictly:

- `add` means the file appears ready for manifest promotion
- `observe` means recurrence is real but the case is not yet mature
- `reject` means the file is useful or visible but should not become a manifest entry

This is stronger than a vague timing field because it produces an explicit governance judgment.

---

## Relationship to Proposal Intake

This proposal is adjacent to, but not identical with, `proposal-intake.md`.

Proposal intake captures structural pressures emerging from runs: things that may want to become proposals, registries, skills, or layers.

Source-manifest candidate review captures a narrower and more governance-sensitive pressure: whether a repeatedly cited file should become a registered source anchor.

Keeping these surfaces separate is correct. If they are merged, the manifest question becomes just another future-work item, which weakens it. Manifest promotion is not future work in the usual sense. It is a change to the repository's orientation layer, and it should be reviewed as such.

---

## What This Proposal Prevents

The value of the surface is easiest to see in terms of prevented failure.

It prevents:

- accidental authority inflation for files that are only locally useful
- manifest sprawl driven by citation frequency rather than anchor quality
- the loss of function-specific reasoning at the moment of promotion
- later sessions inheriting a source manifest that no longer distinguishes durable anchors from recent fascinations

This is a defensive proposal, but not a merely defensive one. It does not just stop bad additions. It creates a better path for good additions by requiring the case to be articulated before promotion happens.

---

## Recommendation

This should be implemented.

It is a low-cost governance surface with a clear payoff: it preserves the selectivity of `source-manifest.md` while still allowing the repository to notice when a file is becoming source-anchor-like through recurrence. That is the right balance.

The manifest should remain curated. The candidate file should absorb the noise, the pressure, and the uncertainty. That division of labor is exactly what keeps a source manifest from becoming a junk drawer.
