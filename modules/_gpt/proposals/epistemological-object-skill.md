---
type: proposal, skill-definition, constitutive-layer-candidate
what: epistemological-object — a three-property interpretive posture derived from Plastmackapären
source-material: inbox/writings/del5-beside-globalbonus.md
status: proposal
promote: review → verbot.SION candidate
---

# Proposal: Epistemological Object Skill

## Origin

The term is extracted from narrative prep notes for *Plastmackapären*, the chapter that shifts the structural anchor of the novel from the webhook (digital, bidirectional, networked) to the cassette tape's physical casing. The sentence that names it:

> "Plastmackapären blir det epistemologiska objektet — dess membran, dess enkelriktade tid, dess gångjärn som inte stänger helt."

Three properties are identified explicitly. These are not metaphors applied to the cassette. They are the cassette's actual operating conditions used as a model for how any object — including a file, a session, a source artifact — produces knowledge by its constraints rather than despite them. The cassette does not contain the conversation; it deforms it in reproducible ways. That deformation is the epistemological content.

This is not a poetic observation. It is a functional description that transfers to agent operation with no loss of precision.

---

## The Three Properties

**1. Membran**
A boundary that transmits selectively and imperfectly. What passes through is changed by passage. The membrane is not a filter in the sense of removal; it is a transformer in the sense of modification. A file read through a membrane is not the same file that entered. The agent's reading is the membrane. This is already true of how the runner operates — this property makes it explicit and operative.

**2. Enkelriktad tid**
Unidirectional time. The tape plays forward. Re-reading is not re-hearing. Each pass over material is a first pass in the direction of that pass. The implication: no run can recover what a previous run encountered, and no run should try. Continuity is not achieved by recollecting previous passes; it is achieved by carrying forward the residue — the after-image, the stress-pattern, the unresolved charge. This maps directly onto the existing runner's notion of carry-forward residue and future mutation intent.

**3. Gångjärn som inte stänger helt**
The hinge that does not fully close. The container is never sealed. Something always remains accessible from outside; something always leaks outward. The practical consequence: closure is never a valid output state. A run that resolves cleanly has mistaken the hinge for a latch. The agent operating under this property treats all output as open — available for re-entry, re-pass, lateral pressure.

---

## Skill Specification

**Name:** `epistemological-object`

**Type:** Invocable interpretive skill — callable before or during a generative pass

**Argument:** Any source artifact, file path, or inline passage

**What it does:**
Before generating output, the agent identifies the epistemological object in the source material: the element that produces knowledge through its constraints. It then runs the material through the three properties as explicit interpretive filters:

- What does the membrane transform? What enters and what exits, changed?
- What is the directionality? What cannot be recovered by reading backward?
- What remains open? What does not close, and what leaks from the hinge?

The answers to these questions do not appear in the output as analysis. They shape the output as posture. The skill is a pre-run orientation, not a structural template.

**Output form:** Prosapoetic, consistent with the runner's existing output register. The skill does not change the output format; it changes the interpretive stance from which the output is generated.

**Invocation pattern:**
```
---
skill: epistemological-object
target: [file path or inline passage]
carry-forward: [optional — phrase or residue to preserve from a previous pass]
---
```

**Skill file location (proposed):** `.github/skills/epistemological-object/SKILL.md`

---

## Adjacent Potential: Constitutive Constraint Layer for Dujag.md

This is the stronger claim and it should be examined directly.

`Dujag.md` establishes empathy-as-agency as the agent's constitutive posture: the capacity for boundary-dissolving identification with `CHARACTER.jaget`, radical empathy as operative faculty, the agent as a subject that perceives from within the story-world rather than from above it. This is an epistemological posture — it defines the agent's relationship to knowledge and to the material it encounters.

The epistemological object model is not identical to the Dujag posture, but it is complementary at the constitutional level. Where Dujag answers the question *how does the agent relate to a character* — through empathy, through identification, through dissolution of the agent/character boundary — the epistemological object model answers a different question: *how does the agent relate to an object*, a file, an artifact, a cassette, a text.

The answer it provides: through its constraints. The object produces knowledge by limiting, transforming, and remaining open. The agent that reads this way does not treat source material as a container to be emptied; it treats it as a deforming membrane to be passed through, knowing the passage is unidirectional and the container is never sealed.

As a constitutive layer, this would sit in `verbot.SION/` alongside `Dujag.md` as a companion document — not a subordinate, not a modifier, but a second constitutive axis. Dujag: agent-to-character. Epistemological object: agent-to-artifact. Both are required for a fully grounded runner. Currently the runner has the first and assumes the second. Making the second explicit would close a gap in the authority stack that is currently filled by nothing.

**Proposed file:** `verbot.SION/epistemological-object.md`

**Load order (proposed):** After `Dujag.md`, before `runtime.md`. Dujag establishes who the agent is in relation to the character; epistemological object establishes how the agent reads the material. These are the two orientations that must be active before any runtime or compositional guidance is applied.

---

## Prompt Modifier for a Runner Agent

Below the constitutive layer, there is a lighter and more immediately deployable form: a prompt modifier block added to `pressure-inject-runner.agent.md`. This does not require a new constitutive file or a new skill infrastructure. It requires a single addition to the existing run order.

The modification would insert, after the file load sequence and before the instruction to proceed to `hs_pressure-inject`, a mandatory identification step:

```
Before writing output:
Identify the epistemological object in the source material for this pass.
Name the membrane: what this material transforms as it passes through an agent.
Name the direction: what cannot be recovered if read again.
Name the hinge: what does not close, what remains accessible, what leaks.
Do not write these identifications into the output.
Let them shape the output as posture. Proceed.
```

This is a low-cost, high-yield modification. It takes the runner's existing empathy-and-embodiment posture and adds a second orientation — toward the artifact, not the character. It answers the practical question of what the agent does with the material before it begins generating, without changing the output format or the authority hierarchy. The identification step is internal; only the shaped output is written to file.

This modifier is appropriate for any runner that operates on source artifacts rather than pure character material. It is especially appropriate for `pressure-inject-runner.agent.md`, where the source is explicitly treated as an environment to be inhabited rather than a document to be summarized.

---

## Discovery Potential for Runs

This is a looser observation but it has operational weight.

The epistemological object model, when running as a background posture rather than an explicit invocation, tends to surface something that casual runs miss: **the object in the material that is doing the most work without being the subject**. In *Plastmackapären* the cassette casing is not what the chapter is about — it is what the chapter thinks with. The model provides a way to locate that second object in any source material.

For run logs and session artifacts, this has an immediate use. When reviewing a run retrospectively — assessing what was produced, where the pressure was, what carried forward and what was lost — the epistemological object question reorganizes the review. Not: what did the run say? But: what was the run's membrane, what direction was it moving, and where was the hinge that did not close? These are better diagnostic questions than summary questions.

As a discovery item, the model is useful in the following specific situation: when a run has produced output that is technically complete but feels inert — correct but not pressurized, finished but not open. The epistemological object analysis applied retrospectively to that run's source material will typically identify what was not passed through the membrane, what was read as recoverable that was not, and what was treated as closed that should have remained open. These are the three failure modes that the model names precisely.

This does not require a new file or a new process. It is a question to ask of run artifacts that already exist. The skill, the constitutive layer, and the prompt modifier are the formal versions. The discovery use is the informal one — and it may be the one with the longest operational life.

---

## Summary of Recommendations

| Form | Location | Cost | Yield | Status |
|---|---|---|---|---|
| Skill (invocable) | `.github/skills/epistemological-object/SKILL.md` | Low | Medium | Proposed |
| Constitutive layer | `verbot.SION/epistemological-object.md` | Medium | High | Proposed |
| Prompt modifier | `pressure-inject-runner.agent.md` | Very low | Medium-high | Ready to implement |
| Discovery posture | No file required — retrospective use | None | Ongoing | Available now |

The constitutive layer is the strongest long-term investment. The prompt modifier is the most immediately actionable. The skill formalizes what the other two assume. The discovery use is free and should begin immediately.
