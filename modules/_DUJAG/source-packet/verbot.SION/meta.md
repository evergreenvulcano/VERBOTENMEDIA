# Prose

---

## Note on placement

A metadata block at the top of `[OUTPUT].md` arrives after the generative process has already been seeded by file consumption order. By the time the output file opens, `Dujag.md`, `runtime.md`, and `CHARACTER.jaget` have already shaped the agent's operative posture. The metadata block is therefore most effective as a **pre-run constraint file consumed first**, before character files — not as an output header. If it lives only in `[OUTPUT].md`, it functions as documentation of intent rather than as a shaping force. If it is the first file consumed, it can set intensity, emphasis, and output intent before any character content lands. Consider treating `meta.md` as the run's initial call, not its label.

---

## Original block — annotated

```
draft: Agentic automation flow .
```
↳ Descriptive of method, not directive for the run. Low operative yield. Could be deleted without loss, or converted into an `intensity` or `order` directive.

```
files: dujag.md ; runtime.mc .
```
↳ Useful as load order signal if consumed first. `runtime.mc` is a typo for `runtime.md` — worth correcting. Could carry order-priority notation (e.g., `[1] dujag.md → [2] runtime.md → [3] CHARACTER.jaget`).

```
character: originates from plain text in CHARACTER.jaget .
```
↳ Redundant if `CHARACTER.jaget` is in the file list. Could be replaced with a `character emphasis` field specifying *which* properties of the character to weight, since CHARACTER.jaget is dense and without weighting the agent distributes attention broadly.

```
style: Undefined
```
↳ Active deletion candidate. "Undefined" functions as a null signal — neither permission nor constraint. If the intent is to leave style open, removing the field entirely is cleaner and avoids the agent treating `Undefined` as a soft directive toward neutrality.

```
expectations pre-run: hopeful.
```
↳ Emotionally legible but operationally vague. Hopeful about length? Tone? Outcome? This field could be repurposed as `affect target` with a specific emotional register for the prose (e.g., *elegiac*, *darkly comic*, *matter-of-fact with pressure underneath*).

```
desired state: lengthy, character-driven, eventful, characters not initiated takes shape and demands attention in story.
```
↳ The most operative field. "Characters not initiated takes shape" is the strongest directive — it asks for emergence, not execution of pre-specified types. Could be sharpened by separating length, structure, and emergence into distinct fields.

---

## Variant A — Directive (consumed first, shapes the run)

```
run-order: [1] meta.md → [2] dujag.md → [3] runtime.md → [4] CHARACTER.jaget
character-weight: epistemic mode, linguistic mode, activation cues — high; failure mode — active constraint
emphasis: action, affect, mediation
output-intent: narrative prose
intensity: high
affect-target: matter-of-fact with pressure underneath; no ironic distance; no explanatory warmth
emergence: secondary characters arrive without introduction and establish necessity through behavior only
length: long; do not resolve early; let scenes accumulate before the character's logic becomes visible
```

---

## Variant B — Minimal / Permission (consumed first, clears the field)

```
run-order: [1] meta.md → [2] dujag.md → [3] CHARACTER.jaget
intensity: medium
style: unresolved; do not stabilize register mid-draft
emergence: on
constraints: runtime.md failure-mode section applies throughout
```

---

## Variant C — Atmospheric (sets tone without dictating structure)

```
affect-target: the feeling of watching something large move slowly through a space too small for it
output-intent: narrative prose with one interiority passage per major scene
secondary characters: arrive with their own momentum; do not serve the main character's arc; resist orbit
length: as long as the situation demands; stop when the last image closes rather than when the argument resolves
intensity: high for character pressure; low for plot resolution
style: no elegance for its own sake; prose earns texture only through event
```

---

## Variant D — Diagnostic / Post-run (belongs in [OUTPUT].md as documentation)

```
run-date: 2026-04-22
files-consumed: dujag.md → runtime.md → CHARACTER.jaget
character-weight: distributed across all properties; activation cues weighted toward scene initiation
style-emerged: close third person with restraint; declarative with internal qualifying motion
intensity-achieved: high
emergence-result: secondary character (journalist/Marta) arrived as viewpoint and held throughout
desired-state-met: lengthy — partial; character-driven — yes; eventful — compressed; emergence — yes
deviation-note: story resolved in interiority rather than event accumulation; plot surface thinner than desired-state suggested
```

---