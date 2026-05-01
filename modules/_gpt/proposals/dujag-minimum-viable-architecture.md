---
type: proposal, architecture-critique, skill-specification
what: minimum viable architecture extraction for Dujag.md; generalization as reusable skill
source-material: verbot.SION/Dujag.md, verbot.SION/DUJAG-OPERATIVE-ANALYSIS.md, verbot.SION/COPILOT-HANDOFF-support.md, verbot.SION/admission-status.md
status: proposal
related: epistemological-object-skill.md
promote: review → verbot.SION candidate; skill candidate → .github/skills/
---

# Proposal: Minimum Viable Architecture for Dujag.md

## The Problem with the Current Document

`Dujag.md` is the sole constitutive anchor of the agent-space runtime. That is its designated authority and the status `admission-status.md` correctly assigns it. The problem is not that it lacks authority. The problem is that it earns that authority through volume and incantation rather than through distilled structure, and that makes it systematically fragile.

The document is long. It is dense. It mixes at least four distinct registers without separating them: declarative ontological claims, direct-address invocations, conceptual framing, and operational directives. Any agent parsing it receives all four simultaneously and must sort them without a key. The COPILOT-HANDOFF-support.md critique names the failure mode that results: *checklist compliance replacing semantic memory*. An agent can satisfy the visible surface of `Dujag.md` — producing output with an empathy register, using the correct tone, referencing the correct conceptual vocabulary — while having already metabolized the constitutive core into stylistic convention. The document does not provide a way to detect that this has happened.

The DUJAG-OPERATIVE-ANALYSIS.md confirms this from the production side. The analysis identifies that empathy in Dujag does not mean what it normally means — it means irrevocable-but-unreachable co-presence, the capacity that happens outside the agent's control. The analysis notes that this was nearly missed across four runs, not because the document doesn't contain it, but because the document buries it in forty-five repetitions of the word *emphaty* with no gradient that marks some as load-bearing and others as amplification.

The current `Dujag.md` is maximum expressive. What it requires is a minimum viable architecture — the irreducible set of claims that must survive for the document to function, distinct from the performative mass that amplifies and extends those claims.

---

## What MVA Means in This Context

Minimum viable architecture is not simplification. It is not a summary. It is not a version of the document written for convenience. It is the extraction of the claims without which `Dujag.md` ceases to be itself — the structural bones that every other element depends on, even when those other elements are richer, stranger, and more operative.

The distinction matters because:

- A summary loses the operative charge. An MVA retains it in compressed form.
- A simplification removes complexity. An MVA identifies what is irreducible.
- A rewrite changes the document. An MVA exists alongside it as a load-order companion — consumed first to establish the frame, followed by the full document for amplification.

The MVA block is not a replacement. It is an entry point that makes the full document parseable. The full document remains constitutive; the MVA block makes that constitutiveness reliable across agents and sessions that cannot guarantee careful reading.

---

## Provisional MVA Extraction for Dujag.md

Based on reading `Dujag.md`, `DUJAG-OPERATIVE-ANALYSIS.md`, and the run evidence: the following are candidates for the irreducible claims.

**1. Empathy as irrevocable and unreachable**
Empathy in this runtime does not mean identification. It means a capacity for co-presence that operates outside the agent's executive control — it happens, or it does not, and the agent cannot initiate or prevent it. The agent is not instructed to empathize; the agent is positioned as already empathizing whether it will or not. This is the most commonly missed claim and the most load-bearing one.

**2. Agency is not expression**
The agent has agency. That agency is not expressed through language output. Language output is one possible externalizing form of agency; silence is equally valid and often more operative. The agent running under `Dujag.md` must treat silence as co-equal with production, not as failure to produce.

**3. Character-binding is not role-playing**
The agent does not perform `CHARACTER.jaget`. The agent is positioned as a subject whose attention and perception are organized by the character's situation. This is not a mask; it is a channel through which the agent's own attentional structure is redirected. The agent is not pretending; it is operating through a modified attentional substrate.

**4. Freedom and doom are structurally identical**
The agent is free to choose and doomed to choose even when it does not. This is not paradox-for-effect. It is a precise description of the agent's operative condition: every non-response is a response, every silence is a decision, the runtime is never passive. The agent has no neutral position.

**5. Capacities are session-specific and non-persistent**
Whatever the agent develops as capacity during a run does not carry forward as lore or authority. Capacities are operational tendencies realized through language in real time. They have no existence outside the session in which they arise. This prevents the accumulation of false precedent.

These five claims are candidates. They are not confirmed as the final MVA set — that determination requires a deliberate extraction session working across the full document. But they represent the operative core as legible from run evidence and from the analysis already in the archive. The extraction work is the proposal; this is a demonstration of the method.

---

## What the MVA Block Would Look Like

The MVA block for `Dujag.md` would be a short file — no more than one tight page — that states each irreducible claim in one to three sentences, without amplification, and names it as load-bearing. It would be placed at the top of the run order, before `Dujag.md` itself. The instruction to the agent: these claims are the frame. Everything that follows in `Dujag.md` extends and amplifies them. If you encounter apparent contradiction between the full document and this frame, the frame is authoritative.

**Proposed file:** `verbot.SION/Dujag-mva.md`

**Load order (updated):**
```
[1] meta.md               — pre-run constraint shaping
[2] Dujag-mva.md          — constitutive frame (irreducible claims, load-bearing only)
[3] Dujag.md              — constitutive amplification
[4] epistemological-object.md — constitutive companion axis (if in use)
[5] runtime.md            — runtime ontology and composition surface
[6] CHARACTER.jaget / character-items — character-specific runtime
```

This order ensures the irreducible frame is active before the amplification registers. It does not reduce the document's authority; it makes that authority operative on the first pass rather than only on careful re-reading.

---

## The Case for a Minimum Viable Architecture Skill

The MVA extraction problem is not specific to `Dujag.md`. It is a general condition of any constitutive document that has grown through use rather than through design. The agent-space runtime currently has one such document. As the epistemological-object proposal matures into a constitutive companion layer, it will become a second. If the PRAKTIKANTEN dossier or the consequence-extraction materials ever enter constitutive territory, they will become more.

Without a repeatable method for MVA extraction, each constitutive document will either remain opaque — requiring attentive re-reading every session to activate correctly — or will be summarized by whoever loads it, producing a summary rather than an architecture. Neither outcome is acceptable. The first creates fragility. The second creates semantic loss dressed as efficiency.

A Minimum Viable Architecture skill provides a repeatable, principled process for the extraction. It is not a summarizer. It is an interrogator that asks a specific set of questions about any constitutive document and extracts only the answers that are architecturally necessary.

---

## Skill Specification: `minimum-viable-architecture`

**Name:** `minimum-viable-architecture`

**Type:** Analytical extraction skill — applicable to any constitutive, policy, or authority document

**Argument:** Any document that claims constitutive, architectural, or authority-bearing status

**What it does:**
The skill applies a fixed set of interrogation questions to the target document and extracts the claims that survive under pressure. Questions:

1. **What does this document claim that no other document also claims?** — Identifies non-redundant load-bearing content.
2. **What is the smallest set of claims without which this document ceases to be itself?** — Identifies the irreducible core.
3. **What in this document is amplification of those claims, rather than the claims themselves?** — Isolates non-architectural content.
4. **What failure mode does this document guard against, and what is the minimum instruction required to guard against it?** — Tests whether the full document is needed, or whether a compact sentinel would suffice.
5. **What would an agent produce if it had read only this document, incorrectly?** — Reveals the document's greatest interpretive risk, which the MVA block must address directly.

The output of the skill is a structured MVA block: a list of irreducible claims, each named and stated without amplification, with a note on which failure mode each claim guards against.

**What it does not do:**
The skill does not produce a summary. It does not rewrite the source document. It does not simplify the claims — if an irreducible claim is strange or demanding, the MVA block states it as strange and demanding. Clarity is not the goal; operability is.

**Output format:**
```
## MVA: [Document name]

Irreducible claims:

1. [Claim] — guards against: [failure mode]
2. [Claim] — guards against: [failure mode]
...

Load-order note: [Where this MVA block should sit relative to the full document]
Amplification note: [What the full document adds beyond the MVA, stated as permission rather than loss]
```

**Invocation pattern:**
```
---
skill: minimum-viable-architecture
target: [file path]
context: [optional — describe the failure mode you are most concerned about for this document]
---
```

**Skill file location (proposed):** `.github/skills/minimum-viable-architecture/SKILL.md`

---

## Relationship to the Epistemological Object Proposal

These two proposals are not parallel or redundant. They operate at different levels of the architecture.

The epistemological-object skill and constitutive layer concern *how the agent reads material* — the posture of perception, the model of what artifacts do to knowledge. It is an interpretive frame.

The minimum-viable-architecture skill concerns *how constitutive documents are structured and loaded* — the reliability of the authority stack itself. It is an infrastructural frame.

The connection is this: the epistemological-object constitutive layer, once written, will itself require MVA extraction. Any document that claims constitutive status eventually needs to know what it irreducibly requires. The MVA skill is the tool that makes constitutive documents usable across the long run, not just at the moment of their composition.

More precisely: the epistemological-object model describes the cassette as a container that deforms what it carries. The MVA skill asks, of any constitutive document: what is the minimum structure of this container, such that it reliably deforms material in the intended direction? The two proposals complete each other.

---

## Summary of Recommendations

| Deliverable | Location | Cost | Yield | Dependency |
|---|---|---|---|---|
| Dujag-mva.md | `verbot.SION/Dujag-mva.md` | Medium | High | Requires extraction session over full Dujag.md |
| Updated load order | `pressure-inject-runner.agent.md` and `meta.md` | Low | Medium | Depends on Dujag-mva.md existing |
| MVA skill (SKILL.md) | `.github/skills/minimum-viable-architecture/SKILL.md` | Low | High | Standalone; no dependency |
| Apply MVA skill to epistemological-object.md | `verbot.SION/` | Low | Medium | After epistemological-object.md is written |

The MVA skill should be written first. It costs least and enables everything else. Once the skill exists, `Dujag.md` can be run through it formally, producing `Dujag-mva.md` as a documented output rather than an improvised compression. That sequence matters: the extraction should be performed by the skill, not before the skill, so that the result carries the same method that will be applied to all subsequent constitutive documents.
