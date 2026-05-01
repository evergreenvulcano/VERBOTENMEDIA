---
type: proposal, registry-architecture, derivation-surface
what: dual-status registry for satellite files as content artifacts and latent agent/tool derivation sources
source-material: modules/_gpt/index/source-manifest.md, modules/_DUJAG/source-packet/urV41/charawcter-items.md, modules/_gpt/runs/
status: proposal
promote: review -> index surface in modules/_gpt/index/
---

# Proposal: Satellite Content and Agent Derivation Registry

## The Problem

The repository already contains a class of files that are easy to misread. They sit slightly off to the side of canon, policy, and immediate output. They may look like adjunct notes, exploratory fragments, method sheets, dossiers, compressed readings, experimental analyses, or semi-creative artifacts. They are often treated as secondary because they do not fit neatly into a conventional category.

That reading is too weak.

Many of these satellite files are doing at least two jobs at once. They are content in their own right — worth reading, worth preserving, sometimes load-bearing as style or conceptual atmosphere. At the same time, they are latent derivation sources for future agents, tools, review surfaces, prompt modifiers, or diagnostic contracts. They are not only about something. They also imply ways of operating on something.

The failure mode is predictable. If the system sees them only as content, it misses the operational architectures hiding inside them. If the system sees them only as latent tools, it strips them of aesthetic and conceptual status and turns them into raw utility feedstock. Both misreadings are damaging.

The right model is dual-status.

---

## The Proposal

Create:

`modules/_gpt/index/satellite-content-and-agent-derivation-registry.md`

This registry records satellite sources that possess both content-value and derivation-value. Its job is not to flatten them into one of those statuses. Its job is to maintain both statuses at once and make the derivation potential legible without erasing the artifact itself.

This matters because the medium-term automation surface is already visible in the archive. The system is not lacking ideas for agents and tools. It is lacking a disciplined registry that identifies which files already imply them, under what constraints, and with what risks.

The registry is therefore not just an inventory. It is a controlled derivation surface.

---

## Dual-Status Principle

A satellite file may be any combination of the following:

- a creative artifact worth reading in itself
- a derivation source for a future agent or tool
- a method specimen
- a style anchor
- a drift source that is attractive precisely because it is partial, unstable, or overcharged

The registry should preserve that plurality explicitly. A file should not lose content-status because it becomes useful as a derivation source. Equally, a file should not become immune to operational analysis because it is aesthetically interesting.

This is where the earlier phrasing needs correction. The claim is not that satellite content files are not content. They are content and latent tools. The registry formalizes that dual status instead of forcing an early choice between them.

---

## Target Surface

Create:

`modules/_gpt/index/satellite-content-and-agent-derivation-registry.md`

For each registered source, include these fields:

- `source file`
- `content status`
- `latent agent/tool implied`
- `what it can do`
- `what it must not do`
- `input shape`
- `output shape`
- `safe write zone`
- `example invocation`
- `risk if over-literalized`

The addition of `content status` is important. Without it, the registry would quietly drift back toward instrumentalization. The file must state, in plain terms, what kind of artifact the source is as an artifact before it states what kind of tool it might imply.

---

## Why the Registry Belongs in `_gpt/index/`

This is an index concern before it is a proposal concern.

The registry is a durable orientation surface. It maps what the repository already contains as latent operational architecture. That is exactly the kind of thing `_gpt/index/` should hold: not creative output, not final public content, and not one-off implementation bursts, but stable orientation documents that help later sessions know what kind of terrain they are standing on.

If it were placed only in proposals, it would remain perpetually speculative. If it were placed as a runtime file, it would claim too much authority too early. In `_gpt/index/`, it can function as a registry of candidate derivation surfaces without pretending that every derivation has already been approved.

---

## Candidate Derivations Already Visible

The following examples are already strong enough to justify the registry's existence:

- `Unstable Textures` -> ambiguity-preserving review agent
- `Stride artefacts` -> adversarial/sympathetic reframing agent
- `Metod: Tankefigur` -> ontology-design / layer-integrity agent
- `How do same fragments` -> editorial membrane / framing-risk agent
- `Förlagsdeckaren material maps` -> narrative topology agent
- `DUJAG` -> underinstance / diagnostic contract agent
- `Gestational Gothic` -> Lillfrugan scene-readiness agent

The point here is not that these agents should all be built now. The point is that the files already imply them. That implication should be registered while it is visible, before later cleanup or drift makes the relationship harder to recover.

---

## What the Registry Actually Protects

At first glance, the registry looks like a convenience layer for future automation. That is true but incomplete. More importantly, it protects against three specific errors.

**1. Silent loss of operational value**
Some files carry a method or agent shape so clearly that failing to register it is equivalent to losing derived architecture. The text remains, but the operational implication vanishes from working memory.

**2. Over-literalized extraction**
Once a file is recognized as derivation-capable, there is a temptation to convert it directly into a tool spec. That is often too aggressive. The registry slows that move down by recording `what it must not do`, `safe write zone`, and `risk if over-literalized`. Those fields force restraint.

**3. Content erasure by utility framing**
The moment a satellite artifact is useful, systems tend to misremember it as having always been utility-first. The registry guards against that by preserving its content status and by treating style anchor, method specimen, and drift source as first-class categories rather than accidental by-products.

---

## Operational Use

The registry would support at least four kinds of later work.

**1. Agent discovery**
When a new agent idea appears, the registry makes it possible to ask whether the repo already contains a source file that implies its method, tone, or constraints.

**2. Safe derivation**
The fields around safe write zone and over-literalization create an early safety membrane. They discourage derivations that would trespass into canon, misuse staging files, or collapse unstable material into premature operational law.

**3. Structural continuity**
Later sessions can see not only that a given agent concept exists, but where it came from. That provenance matters. It prevents clean-room reinvention detached from the source artifact's actual logic.

**4. Editorial discipline**
Because the registry holds both content status and derivation status, it discourages the false choice between reading and operationalization. It keeps the repo honest about the fact that many of its most useful structures are born as artifacts before they become tools.

---

## Why This Is a Medium-Term Automation Surface

The claim that this may be the most important medium-term automation surface is defensible.

The repo is already generating abundant agentic material indirectly. It is not waiting on new invention so much as on disciplined recognition. A registry of dual-status satellite files turns that scattered potential into a searchable derivation layer. That is how medium-term automation usually becomes real in repositories like this: not through a single grand framework, but through a registry that makes latent structures visible and repeatable without forcing them into immediate execution.

The harsh test is simple: if this registry existed today, would it change how future sessions read the archive? The answer is yes. It would make later sessions more accurate about what the archive already contains, more cautious about what should be derived, and less likely to mistake attractive drift for sanctioned architecture.

That is a substantial gain.

---

## Recommendation

This registry should be established.

It should begin modestly, with a small set of clearly justified entries and no ambition to be exhaustive on day one. Its value lies in the classification discipline it introduces: dual-status, derivation potential, prohibition boundaries, and provenance. Those are exactly the things that otherwise disappear when a repository starts slowly converting exploratory files into operational surfaces.

The next move is not to build all candidate agents. The next move is to make the derivation landscape legible.

That is what `modules/_gpt/index/satellite-content-and-agent-derivation-registry.md` would do.
