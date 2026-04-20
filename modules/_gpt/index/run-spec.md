# Run Spec — VERBOTENMEDIA GPT Workflow

This file defines the required output structure for the recurring VERBOTENMEDIA run artifacts.

It exists to make runs:
- comparable across days,
- auditable,
- structurally consistent,
- recoverable under failure.

## Global rules

All run artifacts must:

- live in `modules/_gpt/runs/`
- use date-prefixed filenames
- be readable as standalone repository artifacts
- end with a `Health Status` block
- never modify canon outside `_gpt`
- obey `write-policy.md` and `fallback-mode.md`

## Naming convention

Use this exact filename pattern:

- `YYYY-MM-DD_mornest.md`
- `YYYY-MM-DD_midpulse.md`
- `YYYY-MM-DD_nightfold.md`
- `YYYY-MM-DD_merge-hackerstory.md`

Date should reflect the run date, not the publication date of any source.

## Required Health Status block

Every run must end with:

```md
## Health Status

- Source basis: ...
- Target path: ...
- File write status: success | failed | not-attempted
- Issue fallback status: not-needed | created | failed | not-attempted
- Chat fallback status: not-used | emitted
- Fallback mode used: yes | no
```

This block is mandatory.

---

# 1. Mornest Spec

## Purpose

Opening pressure pass.

Mornest should:
- inspect repo-native source surfaces,
- register active pressures,
- state the day’s focus,
- decide whether a new source anchor was discovered.

## Required sections

```md
# Mornest — YYYY-MM-DD

Mode: daily opening pass  
Write scope: `modules/_gpt/runs/`

## Audit trail
- source preference actually used
- constraint note

## Opening read — signal before structure

## Active pressures detected
- pressure 1
- pressure 2
- pressure 3
...

## Priority focus for today

## Working hypotheses

## Carry-forward fragments

## Minimal prose activation

## Session intent

## Source manifest check
- whether a new durable source anchor was discovered
- whether source-manifest needs additive update

## Health Status
```

## Mornest rules

- No major synthesis yet
- No large narrative expansion
- No canon claims
- Should remain orienting, not conclusive

---

# 2. Midpulse Spec

## Purpose

Midday pressure pass.

Midpulse should:
- use the latest Mornest as primary context,
- test tensions,
- compare paths,
- generate a compact creative cluster,
- optionally stage outward-facing candidate change in `_gpt/proposals/`.

## Required sections

```md
# Midpulse — YYYY-MM-DD

Mode: midday pressure pass  
Write scope: `modules/_gpt/runs/`

## Context uptake
- primary inherited conditions from same-day Mornest

## Pressure test
- pressure test 1
- pressure test 2
- pressure test 3

## Friction points

## Creative cluster
- short prose block, cluster, or micro-activation

## Session directive

## Proposal check
- whether an outward-facing candidate emerged
- if yes, where it should be staged

## Health Status
```

## Midpulse rules

- Must be downstream of latest Mornest
- More synthetic than Mornest
- Still not a closing summary
- Should sharpen, not settle

---

# 3. Nightfold Spec

## Purpose

Closing consolidation.

Nightfold should:
- read the day’s run chain,
- consolidate drift and mutations,
- identify pruning sense,
- produce tomorrow seeds,
- close the day without pretending finality.

## Required sections

```md
# Nightfold — YYYY-MM-DD

Mode: closing consolidation  
Write scope: `modules/_gpt/runs/`

## Consolidation

## Changelog sense
- additions
- mutations
- emergent properties

## Pruning sense
- what should be reduced
- what should be preserved

## Structural drift

## Tomorrow seeds

## Tactical reflection

## End condition
- short statement of the system state at close

## Health Status
```

## Nightfold rules

- Must reference same-day Mornest and Midpulse if available
- Should reduce noise, not increase it
- Should preserve unresolved pressure where valuable
- Must be readable as a daily closure artifact

---

# 4. merge_hackerstory(continuous) Spec

## Purpose

Living dossier pass.

merge_hackerstory should:
- ingest artefacts,
- register nodes,
- mutate existing nodes under new pressure,
- generate prose outputs,
- continue dossier continuity in a traceable way.

## Required sections

```md
# MERGE_HACKERSTORY (continuous) — DOSSIER SESSION
Run timestamp: YYYY-MM-DD HH:MM TZ
Artefacts ingested: N
New nodes: N
Mutations: N
Outputs: N

## ▌ ARTEFACTS INGESTED
- artifact A
- artifact B
...

## ▌ NEW NODES
- node entries with motifs / vectors / myth

## ▌ NODE MUTATIONS
- mutated node
- pressure source
- previous state
- mutated state
- myth shift

## ▌ PROSE OUTPUTS
- micro-story
- homepage blurb
- ritual prompt
- extended episode
(or other established output forms)

## ▌ UPDATED DOSSIER INDEX
- new tags or dossier state update

## Health Status
```

## merge_hackerstory rules

- Must preserve ambiguity and pressure
- Must avoid academic flattening
- Must remain auditable
- Must not silently invent repo state
- If source basis is partial, that must be stated in Health Status

---

# Fallback formatting

If repo file write fails, use the fallback protocol.

The emitted artifact must begin with:

```md
**Target path:** `...`
**Timestamp:** ...
**Write status:** FAILED
**Retry:** attempted once → FAILED
**Action:** issue fallback created | issue fallback failed | emitting full artifact below
```

Then include the full artifact body.

No summary may replace the body.

---

# Comparison rule

A correct run should be comparable to earlier runs by section shape alone.

Meaning may drift.
Structure should not.

---

# Short rule

Mornest opens.
Midpulse sharpens.
Nightfold closes.
merge_hackerstory mutates and remembers.
