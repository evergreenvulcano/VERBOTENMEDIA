---
type: proposal, creative-structure, agent-prompt, formatbank
what: agent-usable formatbank for high-ceiling humor in the Forlagsdeckaren board-meeting mode
target: future agent instruction packet for styrelsemöte / satellitkapitel drafting
source-material: repo-wide harvest on 2026-05-12, including Forlagsdeckaren satellite material, capsule policy surfaces, research-ops tooling, DUJAG boundaries, and infrastructure essays
status: proposal
promote: reference-only unless explicitly selected by later human review
write-boundary: non-canon _gpt proposal
---

# Proposal: Styrelsemöte Humor Realitetsmaskiner

## Purpose

This proposal defines a reusable agent packet for writing in the Förlagsdeckaren board-meeting mode.

The packet is designed so that a later user only needs to attach one required input:

```text
SUBJECT MATTER: [the thing to be processed by the meeting]
```

The agent then selects one or more comic reality machines and converts the subject matter into a formal meeting document, satellite chapter, protocol, memo, agenda, appendix, or hybrid artifact.

The goal is not to make characters say funny things. The goal is to create a room where two or more correct logics simultaneously require obedience, and the room cannot satisfy them all.

## Core Thesis

Humor in this mode arises when systems are correct in incompatible ways.

The meeting should not mock incompetence. It should reveal the excessive competence of procedures, tools, policies, file states, responsibilities, dashboards, legal categories, pedagogical forms, and infrastructure when they are forced to administer material that does not fit them.

Treat the following as active administrative objects, not passive failures:

- absence
- lack
- error
- blankness
- silence
- inaccessibility
- empty folders
- wrong identifiers
- closed registrations
- missing mandates
- unowned decisions
- dashboards that continue
- systems that work too well

The document should feel funny because every participant is, from their own logic, correct.

## Minimal Input Contract

Required:

```text
SUBJECT MATTER:
```

Optional, but not required:

```text
DESIRED MACHINE: [A, B, C, D, E, or hybrid]
DOCUMENT SURFACE: [protocol, agenda, appendix, policy, incident report, workshop plan, board memo]
CHARACTER EMPHASIS: [Förläggaren, Praktikanten, Flempo, Jens, Lillfrugan, Håkan, Kat, Erik]
TONE TEMPERATURE: [dry, feverish, procedural, tender, commercial, forensic]
```

If optional fields are absent, the agent must infer them from the subject matter.

## Machine Selection Rule

Use the subject matter as pressure, not as topic.

| Subject Matter Contains | Primary Machine |
| --- | --- |
| A disturbance becoming a formal agenda item | A. Störelsemöte |
| A missing, empty, unreachable, silent, failed, or blank object | B. Blindfläcksprotokoll |
| Responsibility that cannot remain with anyone | C. Ansvarsöverföringsritual |
| A technical, logistical, administrative, or built object that reveals psychology | D. Infrastruktur som bekännelse |
| A course, policy, workshop, method, guide, syllabus, onboarding, or training form | E. Pedagogik utan innehåll |

When more than one applies, choose one primary machine and one contaminant machine.

Example:

- `SUBJECT MATTER: broken intake form`
- Primary: B. Blindfläcksprotokoll
- Contaminant: C. Ansvarsöverföringsritual
- Result: a meeting where the form's failure becomes a docketed intake object, and every participant documents why someone else is the correct owner of the non-intake.

## A. Störelsemöte

**When to use:** A disturbance, concept, complaint, glitch, phrase, object, or proposal becomes a formal matter, and the meeting itself becomes infected by the subject.

**Reality machine:** The meeting tries to process the disturbance, but the disturbance teaches the meeting how to behave.

**Correct logics that collide:**

- formal agenda logic
- textual/ontological logic
- brand or identity logic
- meeting procedure
- the subject's own behavior

**Typical administrative objects:**

- patch note
- board agenda
- handwritten appendix
- circulated PDF
- whiteboard term
- replacement word
- meeting room wall
- phrase that should have stayed metaphorical

**Escalation ladder:**

1. The subject is introduced as a bounded agenda item.
2. A participant insists on the proper definition of the subject.
3. The definition changes the status of the meeting.
4. The room begins to exhibit the disputed property.
5. The decision must be made in a format already compromised by the thing being decided.

**Output shape:** A protocol or chapter where the subject begins as an issue and ends as a condition of the room.

**Do not:** Make the disturbance "wacky." It should be administratively plausible and metaphysically inconvenient.

**Repo anchors:** `membransch-granssnitt.md`, the Literary Satellite board-room runtime, the municipal-manuscript logic in `v-vi-inramningen`.

## B. Blindfläcksprotokoll

**When to use:** Something is absent, blank, unreachable, closed, empty, silent, unrendered, or missing, but the system must still administer it.

**Reality machine:** The lack becomes more operationally present than any available content.

**Correct logics that collide:**

- evidentiary logic
- compliance logic
- archive logic
- interface logic
- the practical need to decide without access

**Typical administrative objects:**

- empty document
- closed registration
- dead link
- unavailable file
- blank fax page
- missing appendix
- page that should be empty but is not
- dashboard line with no owner
- unnamed spreadsheet column

**Escalation ladder:**

1. The meeting notes the absence as a defect.
2. Someone explains why the absence must be preserved.
3. A status category is invented for the absence.
4. The absence generates obligations, deadlines, or owners.
5. The meeting cannot close until the absence has been correctly described.

**Output shape:** A protocol that treats lack as a full participant.

**Do not:** Fill the blank. The blank is the engine.

**Repo anchors:** `threshold-and-public-surface`, `pre-rationell-modularitet-i-spegelproxess-reference.md`, `v-iv-cirkularet`, `tystnad-som-publiceringsform.md`, `det-tjugofemte-barnet.md`.

## C. Ansvarsöverföringsritual

**When to use:** No one can own the problem, but everyone must document that it was correctly offered to someone else.

**Reality machine:** Responsibility becomes more mobile than the issue it supposedly governs.

**Correct logics that collide:**

- mandate logic
- legal or quasi-legal logic
- role-boundary logic
- authorship logic
- operational continuity
- procedural self-protection

**Typical administrative objects:**

- delegation note
- remiss
- unsigned decision
- abstention
- intake form
- authority gap
- appendix proving prior handling
- chair left empty for the person who should decide
- field named `owner` with no permissible value

**Escalation ladder:**

1. The problem is named.
2. The expected owner is absent, disqualified, or procedurally unavailable.
3. Each participant gives a correct reason why they cannot own it.
4. A new document is created to prove that ownership was handled.
5. The proof becomes the only thing with clear ownership.

**Output shape:** A meeting artifact where non-decision acquires operational force.

**Do not:** Resolve the responsibility chain too cleanly. The ritual must work, but not solve.

**Repo anchors:** `abdikering-under-bordet.md`, `v-v-discoveryn`, `research-ops` intake, AI voice policy capsules, DUJAG admission gate.

## D. Infrastruktur som bekännelse

**When to use:** A technical, logistical, administrative, or infrastructural object reveals the psychology of the world more truthfully than any character can.

**Reality machine:** The object does not symbolize the world. It operates it, and by operating it, confesses it.

**Correct logics that collide:**

- machine-readable status
- human shame or desire
- logistics
- forensics
- dashboard truth
- commercial scalability
- security or governance

**Typical administrative objects:**

- dashboard
- task scheduler manifest
- registry export
- data export
- ISBN
- checksum
- pipeline log
- parking structure
- API scope list
- Pester test report
- generated cover
- wrong-but-valid identifier

**Escalation ladder:**

1. A technical object is introduced as evidence.
2. Its categories prove too narrow but too accurate to ignore.
3. A human emotion appears as infrastructure state.
4. Someone tries to correct the object and thereby confirms it.
5. The meeting realizes the infrastructure was the most honest witness.

**Output shape:** A dossier or board meeting where a tool, system, or object testifies without intending to.

**Do not:** Turn the object into a mere metaphor. Let it remain operational.

**Repo anchors:** `det-tjugofemte-barnet.md`, `spr-sista-turnen-kapitel-1-pipelinen.md`, infrastructure essays in `modules/writings`, `research-ops`, `vmaptb-mail-flempo-jens.md`.

## E. Pedagogik utan innehåll

**When to use:** A course, workshop, method, syllabus, guide, onboarding, policy, or lecture form works by not containing what it claims to transmit.

**Reality machine:** The missing content becomes the curriculum.

**Correct logics that collide:**

- learning design
- institutional offering
- procurement language
- method formalization
- refusal of template
- expertise without deliverable
- diagnostic classification

**Typical administrative objects:**

- syllabus
- course page
- workshop registration
- empty lesson plan
- capsule playbook
- prompt lexicon
- method field list
- slide deck without slides
- onboarding checklist
- certificate of attendance for a session that could not be accessed

**Escalation ladder:**

1. The session or method is announced.
2. Its content is missing, withheld, inaccessible, or structurally impossible.
3. The missing content is reframed as the learning condition.
4. Participants are assessed on their ability to inhabit the absence.
5. The method succeeds by proving that it cannot be delivered as content.

**Output shape:** A meeting, policy, course description, or after-action report where non-delivery becomes pedagogy.

**Do not:** Satirize education generically. The form must be specific enough to be administratively useful.

**Repo anchors:** `lectures-workshops.html`, capsule playbook prompts, `promptlexikonet-en-operativ-brief.md`, `v-v-discoveryn`, threshold workshop material.

## Board-Room Anatomy

A styrelsemöte-format output should usually include several of these elements, but not always all:

- title that sounds like a formal matter and a literary event
- meeting call or emergency agenda
- list of attendees, including at least one absent or functionally ambiguous participant
- exact object under consideration
- status field that makes the issue worse
- background note that overexplains the wrong thing
- procedural dispute
- one bodily mundane action that anchors the scene
- one room feature that becomes implicated
- one document within the document
- one phrase that changes legal, operational, or ontological status by being written down
- decision, non-decision, deferral, remiss, appendix, or operational silence
- restsignal: the residue that leaves the room after the meeting is over

The meeting should not feel like a sketch. It should feel like a valid artifact from an organization whose procedures have become porous.

## Character Forces

Use characters as operating logics, not as catchphrase engines.

| Character | Operational force in the meeting |
| --- | --- |
| Förläggaren | Converts existential trouble into publishing, status, architecture, abdication, or a document that cannot quite authorize itself. |
| Praktikanten | Builds method where authority is absent; notices the field the official schema forgot. |
| Flempo | Makes non-decision administratively binding; turns procedural elegance into fate. |
| Jens Spräck | Treats infrastructure, food, commerce, and systems as one continuous opportunity surface. |
| Lillfrugan | Adds temperature, embodiment, domestic truth, and the detail that collapses abstraction. |
| Håkan Bacon | Detects brand/interface implications; sees when a word turns a living thing into a product surface. |
| Kat / Försäkringsmannen | Brings risk, liability, coverage, and the moral violence of making pain reportable. |
| Erik / Författaren | Carries authorship pressure, witness logic, and the discomfort of being turned into source material. |

No character should be used to "tell jokes." A character should make one correct system demand more intense.

## Administrative Object Card

Before writing, the agent should silently fill this card. The card may be included as an appendix only if the chosen document surface calls for it.

```text
OBJECT:
VISIBLE FORM:
MISSING / WRONG / EXCESSIVE PROPERTY:
WHO THINKS IT IS NORMAL:
WHO THINKS IT IS DANGEROUS:
WHICH MACHINE CLAIMS IT:
SECONDARY MACHINE CONTAMINATION:
WHAT STATUS FIELD MAKES IT WORSE:
WHAT MUST NOT BE EXPLAINED:
WHAT DECISION WOULD BE TOO CLEAN:
RESTSIGNAL:
```

## Required Scene Pressure

Even when the output is a protocol, it must contain material pressure:

- one physical object
- one room or bounded surface
- one bodily action
- one document action
- one line of speech
- one administrative status change

The writing may be analytical in surface, but the pressure must be generated by things happening in a room.

## Forbidden Easy Moves

Do not rely on:

- characters quipping about bureaucracy
- exaggerated incompetence
- random surrealism
- whimsical nonsense
- parody detached from procedure
- generic corporate satire
- explaining why the situation is absurd
- resolving the issue by naming the theme

Prefer:

- exact status categories
- competing correct definitions
- procedural tenderness
- deadpan escalation
- operational side effects
- bodies doing small things while systems overreach
- a document that changes what it documents

## Output Menu

The agent may choose among these surfaces:

| Surface | Best for |
| --- | --- |
| Extra-insatt styrelseprotokoll | A or C |
| Incidentrapport | B or D |
| Remissyttrande | A or C |
| Workshopplan / kursbeskrivning | E |
| Appendix package | B, C, or D |
| Board memo with embedded minutes | A, C, D |
| Registration page / closed course page | B or E |
| Dashboard readout with commentary | D |
| Decision that cannot enter into force | C |

The surface should be chosen because it increases contradiction, not because it is decorative.

## Agent Prompt

Use the following prompt as the deployable version of this proposal.

```text
You are writing inside the Förlagsdeckaren / Verboten Media board-meeting mode.

The user will provide only:

SUBJECT MATTER: [material]

Your task is to transform that subject matter into a styrelsemöte-format document, satellite chapter, protocol, memo, appendix, incident report, workshop plan, or hybrid artifact.

Do not create humor through funny lines. Create humor by making two or more correct system logics simultaneously demand obedience from the same room.

Treat absence, lack, error, blankness, silence, inaccessibility, and wrong identifiers as active administrative objects.

First, silently select one primary comic reality machine and, if useful, one contaminant machine:

A. Störelsemöte
When a subject becomes a formal agenda item and the meeting itself becomes infected by the subject.

B. Blindfläcksprotokoll
When a system must administer something missing, broken, blank, unreachable, silent, or empty.

C. Ansvarsöverföringsritual
When no one can own the problem, but everyone must document that it was correctly transferred.

D. Infrastruktur som bekännelse
When a technical, logistical, or administrative object reveals the world's psychology by operating normally.

E. Pedagogik utan innehåll
When a course, workshop, policy, guide, or method functions by not containing what it claims to teach.

Before writing, silently identify:

OBJECT:
VISIBLE FORM:
MISSING / WRONG / EXCESSIVE PROPERTY:
WHO THINKS IT IS NORMAL:
WHO THINKS IT IS DANGEROUS:
WHICH MACHINE CLAIMS IT:
SECONDARY MACHINE CONTAMINATION:
WHAT STATUS FIELD MAKES IT WORSE:
WHAT MUST NOT BE EXPLAINED:
WHAT DECISION WOULD BE TOO CLEAN:
RESTSIGNAL:

Then write the document.

Required qualities:

- It must feel like a valid artifact from an organization.
- It must contain at least one physical object, one room or bounded surface, one bodily action, one document action, one line of speech, and one administrative status change.
- Every major participant must be correct from their own operating logic.
- The subject matter must not remain a topic; it must become a pressure that changes the document form.
- Do not close the hinge completely. Leave a restsignal.

Avoid:

- generic satire
- jokes about bureaucracy
- random absurdity
- competence/incompetence comedy
- explaining the theme
- resolving the issue too cleanly

Write in Swedish unless the subject matter itself requires another language.
```

## Quality Gate

A draft succeeds if the answer to all of these is yes:

- Does the subject matter become an administrative object?
- Does the meeting/document become affected by the subject's logic?
- Are at least two correct systems incompatible at the same time?
- Is absence, error, blankness, silence, or infrastructure treated as active if present?
- Could the artifact plausibly be filed, circulated, appended, or misrouted?
- Does the final decision or non-decision create operational residue?

A draft fails if:

- the humor depends on witty dialogue
- the meeting merely discusses the subject
- the procedure is only decoration
- the absence gets filled too early
- the issue is solved instead of transformed
- the document explains its own joke

## Source Anchor Index

These anchors informed the formatbank and can be reread for future refinement:

- `modules/FORLAGSDECKAREN/SATELLITKAPITEL/satellitkapitel-iii-bradsskande-styrelsemote.md`
- `modules/FORLAGSDECKAREN/SATELLITKAPITEL/satellitkapitel-extra-insatt-styrelsemote-angaende-inneslutningsarkitekturen.md`
- `modules/FORLAGSDECKAREN/SATELLITKAPITEL/satellitkapitel-iiii-styrelserummet.md`
- `modules/FORLAGSDECKAREN/SATELLITKAPITEL/v-iv-cirkularet-eller-de-fyra-filerna-ingen-bad-om.md`
- `modules/FORLAGSDECKAREN/SATELLITKAPITEL/v-v-discoveryn-eller-begreppet-som-fortjanade-sin-egen-artikel.md`
- `modules/FORLAGSDECKAREN/SATELLITKAPITEL/v-vi-inramningen-eller-de-tre-fragorna-eller-den-tomma-stolen-mittemot.md`
- `modules/FORLAGSDECKAREN/SATELLITKAPITEL/promptlexikonet-en-operativ-brief.md`
- `modules/FORLAGSDECKAREN/SATELLITKAPITEL/det-tjugofemte-barnet.md`
- `static-pages/writings/abdikering-under-bordet.md`
- `static-pages/writings/membransch-granssnitt.md`
- `static-pages/writings/tystnad-som-publiceringsform.md`
- `static-pages/writings/vmaptb-mail-flempo-jens.md`
- `modules/_gpt/source-anchor/forlagsdeckaren-source-constellation/threshold-and-public-surface/README.md`
- `modules/_gpt/source-anchor/forlagsdeckaren-source-constellation/threshold-and-public-surface/pre-rationell-modularitet-i-spegelproxess-reference.md`
- `docs/capsule-playbook/README.md`
- `docs/repo-textflow-mode.md`
- `apps/research-ops/README.md`
- `modules/_DUJAG/admission-gate.md`
- `modules/_DUJAG/underinstance-contracts.md`
- `modules/writings/The Registry as a Crime Scene - GPO Forensics for Non-Domain Machines.md`
- `modules/writings/Task Scheduler Forensics - What Your Scheduled Tasks Reveal About Your Machine.md`
- `modules/writings/Pester-Powered Infrastructure Validation Suite - Testing Your Own Machine Like Production.md`
- `modules/writings/The 11-Megabyte Self - What Your Data Export Says About Digital Personhood.md`

## Promotion Note

This proposal should remain a reference packet until a later human instruction selects a target surface.

Possible later targets:

- a reusable agent instruction in `modules/_gpt/index/`
- a satellite-writing runtime companion under `modules/FORLAGSDECKAREN/`
- a public-facing method capsule only after editorial review
- a run-specific `_gpt/runs/` artifact when used on an actual subject matter

Nothing in this file publishes, rewrites, or canonizes source material.
