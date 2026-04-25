# Source Intake Register

Scope: normalized intake from `/modules/agent-space/`.

Normalization rule in this module: source packet copied into `source-packet/` with `.md` normalization for non-markdown source files.

## Intake legend

- **Family:** constitutive | runtime | diagnostic | glossary-relevant | archival-retained
- **Admission:** active | derivative | non-authoritative | unstable-retained

## Packet inventory

| Normalized path in `_DUJAG` | Source provenance | Family | Admission | Normalization status |
|---|---|---|---|---|
| `source-packet/verbot.SION/Dujag.md` | `modules/agent-space/verbot.SION/Dujag.md` | constitutive | active | copied as-is |
| `source-packet/verbot.SION/runtime.md` | `modules/agent-space/verbot.SION/runtime.md` | runtime | derivative | copied as-is |
| `source-packet/verbot.SION/meta.md` | `modules/agent-space/verbot.SION/meta.md` | runtime | derivative | copied as-is |
| `source-packet/urV41/agency-drafts.md` | `modules/agent-space/urV41/agency-drafts.md` | runtime | derivative | copied as-is |
| `source-packet/verbot.SION/CHARACTER.jaget.md` | `modules/agent-space/verbot.SION/CHARACTER.jaget` | runtime | unstable-retained | converted to `.md` |
| `source-packet/verbot.SION/morning-estimation-anchor.md` | `modules/agent-space/verbot.SION/morning-estimation-anchor.md` | diagnostic | unstable-retained | copied as-is |
| `source-packet/verbot.SION/midday-compression.md` | `modules/agent-space/verbot.SION/midday-compression.md` | diagnostic | unstable-retained | copied as-is |
| `source-packet/verbot.SION/merge-dossier-continuity-memory.md` | `modules/agent-space/verbot.SION/merge-dossier-continuity-memory.md` | diagnostic | unstable-retained | copied as-is |
| `source-packet/verbot.SION/dual-language-directive.md` | `modules/agent-space/verbot.SION/dual-language-directive.md` | glossary-relevant | unstable-retained | copied as-is |
| `source-packet/verbot.SION/glossary-util.md` | `modules/agent-space/verbot.SION/glossary-util.md` | glossary-relevant | non-authoritative | copied as-is |
| `source-packet/verbot.SION/DUJAG-LASNING.md` | `modules/agent-space/verbot.SION/DUJAG-LASNING.md` | diagnostic | non-authoritative | copied as-is |
| `source-packet/verbot.SION/DUJAG-OPERATIVE-ANALYSIS.md` | `modules/agent-space/verbot.SION/DUJAG-OPERATIVE-ANALYSIS.md` | diagnostic | non-authoritative | copied as-is |
| `source-packet/verbot.SION/COPILOT-HANDOFF-new-module.md` | `modules/agent-space/verbot.SION/COPILOT-HANDOFF-new-module.md` | diagnostic | non-authoritative | copied as-is |
| `source-packet/verbot.SION/COPILOT-HANDOFF-support.md` | `modules/agent-space/verbot.SION/COPILOT-HANDOFF-support.md` | diagnostic | non-authoritative | copied as-is |
| `source-packet/verbot.SION/admission-status.md` | `modules/agent-space/verbot.SION/admission-status.md` | diagnostic | non-authoritative | copied as-is |
| `source-packet/verbot.SION/ideation-initiation.md` | `modules/agent-space/verbot.SION/ideation-initiation.md` | archival-retained | unstable-retained | copied as-is |
| `source-packet/README.md` | `modules/agent-space/README.md` | archival-retained | unstable-retained | copied as-is |
| `source-packet/Draft.md` | `modules/agent-space/Draft.md` | archival-retained | unstable-retained | copied as-is |
| `source-packet/Narrative-Runtime-Prototype.md` | `modules/agent-space/Narrative-Runtime-Prototype.md` | archival-retained | unstable-retained | copied as-is |
| `source-packet/urV41/charawcter-items.md` | `modules/agent-space/urV41/charawcter-items` | runtime | unstable-retained | converted to `.md` |
| `source-packet/verbot.SION/[OUTPUT].md` | `modules/agent-space/verbot.SION/[OUTPUT].md` | diagnostic | non-authoritative | copied as-is |
| `source-packet/verbot.SION/[OUTPUT]2.md` | `modules/agent-space/verbot.SION/[OUTPUT]2.md` | diagnostic | non-authoritative | copied as-is |

## Admission gate used in this module

- Active constitutive admission is single-anchor: `Dujag.md`.
- Runtime files are derivative and cannot override constitutive interpretation.
- Diagnostic artifacts can pressure interpretation but have no constitutive authority.
- Unstable materials are retained by default until explicit promotion criteria are met.

## Adjacent module references

These are not part of `_DUJAG`'s normalized `source-packet/`, but they are intentionally available from `/modules/` for shared reference.

| Path | Relationship | Admission | Note |
|---|---|---|---|
| `modules/forlagsdeckaren-del-6-13-raw-session-source.md` | external raw reference | non-authoritative | Frozen stale reference file preserving the original Del 6-13 session intake for cross-module access, including `_DUJAG`. |
