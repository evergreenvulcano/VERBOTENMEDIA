# Minimal First PR Spec: Public Front Doctrine Foundation

Datum: 2026-06-11.
Status: proposal / PR-spec only.
Source: `modules/_gpt/runs/2026-06-10_codex-synthesis-gate-readonly_RETRY.md` plus Martin's 2026-06-11 decisions in chat.

This is not implementation. It is the smallest actionable PR shape that follows the RETRY synthesis while correcting the unusable "Martin blockers" into agent-owned decisions.

## 0. Corrected Premise

The previous blocker list was too abstract and pushed implementation-structure decisions onto Martin without explaining consequences. This spec fixes that by treating those items as Codex responsibilities unless they are genuinely authorial, legal, provenance, or publication-readiness decisions.

Martin has now clarified:

- Canonical doctrine gives a correct enough picture of the work to proceed.
- It must be marked as provisional: likely to be rebuilt when the difference is clearer between repo-internal rebuild rhetoric and the repo's final collaborator-facing usefulness.
- Doctrine should live under `docs/doctrine/`.
- `BANKETT_VERBOTEN_MEDIA_PUBLIC_FRONT_PREPARATION_2026-06-10.md` is residue and should be left where it is, not promoted.
- Norrotiv has no separate address now; use `verbotenmedia@protonmail.com` if a contact address is needed.
- Erik/William-style names should not be public names; use generic external actor categories.
- First PR should not touch the public site surface yet.

## 1. Objective

Create a minimal doctrine foundation for future public-front work without building the site, publishing protected material, activating Norrotiv, or creating any interaction surface.

The PR should make the repo easier for future agents and collaborators to read, but it should not pretend that the final external usefulness is settled.

## 2. Non-Goals

This PR must not include:

- HTML/CSS/JS changes.
- Public landing-page redesign.
- Product, portfolio, startup, dashboard, site-builder, or marketing aesthetics.
- Dashboard, statusregister, progress table, maturity meter, roadmap board, or public status UI.
- Community surface.
- Praktikanten persona.
- Wise Consultant function.
- Underhål mig / Förlagsdeckaren module.
- Full Norrotiv integration.
- New branch/PR automation.
- Publication of storyworld-protected material.
- Promotion of `BANKETT_VERBOTEN_MEDIA_PUBLIC_FRONT_PREPARATION_2026-06-10.md`.

## 3. Proposed File Changes

Add:

```text
docs/doctrine/
  README.md
  northstar.md
  semantic-orientation.md
  implementation-boundaries.md
  public-front.md
  threshold-grammar.md
  xprmnt-zn-membrane.md
  bankett-time-engine.md
```

Optionally update, if scoped and mechanically small:

```text
README.md
```

The README update should only add a short pointer to `docs/doctrine/README.md`. It must not rewrite the repo presentation.

## 4. Required Doctrine Header

Every new doctrine file should carry a short status note:

```markdown
Status: canonical doctrine for current public-front build work.
Readiness: provisional.

Note: This doctrine is accepted as a working northstar, but it may need to be rebuilt
when the difference is clearer between repo-internal rebuild rhetoric and the repo's
final collaborator-facing usefulness.
```

This is important because the current doctrine is useful for Codex and future agents, but Martin has not accepted it as the final public explanation of why the repo matters externally.

## 5. File-by-File Spec

### `docs/doctrine/README.md`

Purpose:

- Index the doctrine files.
- State the reading order.
- Explain that these are build-governing documents, not public marketing copy.

Required content:

- "Read first": `northstar.md`, `semantic-orientation.md`, `implementation-boundaries.md`.
- "Functional doctrine": `public-front.md`, `threshold-grammar.md`, `xprmnt-zn-membrane.md`, `bankett-time-engine.md`.
- Clear warning that this folder does not publish protected source material.
- Clear warning that doctrine is provisional in the sense described above.

### `docs/doctrine/northstar.md`

Source:

- `00_REPO_NORTHSTAR.md`.

Purpose:

- Define what the repo is and is not.
- Serve as the PR test for future public-front work.

Placement decision:

- Put it in `docs/doctrine/` because Martin selected that doctrine home.
- Make it accessible through `docs/doctrine/README.md`.
- If README is touched, link to it from root README rather than duplicating it at root.

### `docs/doctrine/semantic-orientation.md`

Source:

- `00_SEMANTIC_ORIENTATION.md`.

Purpose:

- Define core terms for agents and collaborators.
- Keep public front, passage apparatus, membrane, XPRMNT-ZN, Norrotiv, Bankett, witness, protected material, preparation residue, and canonical doctrine semantically stable.

Edit posture:

- Preserve meaning.
- Correct only obvious typos if needed.
- Avoid expanding into new theory.

### `docs/doctrine/implementation-boundaries.md`

Source:

- `00_IMPLEMENTATION_BOUNDARIES.md`.

Purpose:

- Make forbidden first-PR surfaces explicit.

Required tightening:

- Say this file applies to First PR and any later PR unless Martin explicitly reopens a listed item.
- Keep "no dashboard/statusregister/community/Praktikanten/Wise Consultant/Underhål mig/storyworld exposure/product aesthetics" visible.

### `docs/doctrine/public-front.md`

Source:

- `15_PUBLIC_FRONT_DOCTRINE.md`.

Purpose:

- Define public front as passage apparatus, not website/product/community.

Required note:

- This is doctrine for current build work, not final external explanation.

### `docs/doctrine/threshold-grammar.md`

Source:

- `16_THRESHOLD_GRAMMAR.md`.

Purpose:

- Define the grammar of thresholds: read without consuming, collaborate without owning, contribute without steering, understand without overexplanation, test without service, publish without exposing sources, status without progress-tracking.

Public naming:

- Do not name private/example collaborators.
- Use "external actor", "collaborator", "reader", "critic", "witness".

### `docs/doctrine/xprmnt-zn-membrane.md`

Source:

- `17_XPRMNT_ZN_AS_PUBLIC_MEMBRANE.md`.

Purpose:

- Establish XPRMNT-ZN as membrane, not gateway/app/tool.

Important correction:

- If older prep files say "gateway", this file governs the final wording.

### `docs/doctrine/bankett-time-engine.md`

Source:

- `18_BANKETT_AS_TIME_ENGINE.md`.

Purpose:

- Define Bankett as ceremonial time, not changelog/progress/news.

Known public-bound banketter:

- Banketten som firar Efterhandsmaskinen, explicitly not "erotiska satelliter".
- Banketten om astrologin och radiokanalen.

First PR handling:

- This PR may mention these as public-bound candidates if their source files are located and reviewed.
- This PR should not publish or rewrite the bankett texts unless Martin explicitly asks for promotion.

## 6. Residue Handling

Do not move, promote, rewrite, quote from, or canonize:

```text
BANKETT_VERBOTEN_MEDIA_PUBLIC_FRONT_PREPARATION_2026-06-10.md
```

Classification:

- Process receipt.
- Preparation residue.
- Not canonical bankett.
- Not public-front content.
- Leave in Drive/workspace source unless a later archival task explicitly targets it.

## 7. Norrotiv Handling

For First PR:

- Do not create a Norrotiv page.
- Do not create a collaborator flow.
- Do not imply a separate Norrotiv address exists.

If a contact reference is unavoidable:

```text
verbotenmedia@protonmail.com
```

Wording should be minimal:

- "For now, contact goes through `verbotenmedia@protonmail.com`."

Do not discuss SLA, ownership, response guarantees, or mail governance in First PR. That was not a useful blocker and does not need to be externalized.

## 8. Public Site Handling

Do not touch public site surfaces in First PR.

No changes to:

- `index.html`
- `xprmnt-zn.html`
- `verboten-media.html`
- `norrotiv.html`
- `banketter.html`
- CSS/JS renderer files
- public card registries

Rationale:

The doctrine is currently approved as a work-leading northstar. It is not yet approved as final public copy or final external collaborator utility. Therefore the first PR should establish the doctrine in repo documentation, not project it onto the site.

## 9. Protected Material Boundary

First PR must not expose:

- Del 1.
- `aphorism_source`.
- Ursprungmaterial.
- BYN/LEGION/SORL.
- Praktikanten philosophy.
- Internal source/provenance details.
- Storyworld names used only as protected source anchors.

No "small excerpts for context". No teaser language from protected sources.

## 10. Acceptance Criteria

The PR is acceptable if:

- `docs/doctrine/` exists and contains the eight doctrine files above.
- The files preserve the doctrine's governing meaning.
- Each file marks the doctrine as current, canonical-for-build, and provisional with respect to final collaborator-facing usefulness.
- Root README, if touched, only links to doctrine and does not become a public-front landing page.
- No public site files are edited.
- No protected material is published.
- No residue bankett is promoted.
- No dashboard/statusregister/community/Norrotiv flow/Praktikanten/Wise Consultant/Underhål mig is introduced.
- The PR description states that this is a doctrine foundation PR, not a site implementation PR.

## 11. Suggested PR Description

```markdown
## Summary

Adds a minimal `docs/doctrine/` foundation for VERBOTEN MEDIA public-front work.

This PR does not implement the public site. It establishes the current build doctrine:
Northstar, semantic orientation, implementation boundaries, public-front doctrine,
threshold grammar, XPRMNT-ZN as membrane, and Bankett as ceremonial time.

The doctrine is accepted as a working northstar, but marked provisional: it may need
to be rebuilt when the difference is clearer between repo-internal rebuild rhetoric
and final collaborator-facing usefulness.

## Explicit Non-Goals

- No public site changes.
- No dashboard or statusregister.
- No community surface.
- No Praktikanten, Wise Consultant, or Underhål mig module.
- No Norrotiv integration.
- No storyworld-protected material.
- No promotion of preparation residue as canonical bankett.

## Verification

- Confirmed only `docs/doctrine/` and optional README pointer changed.
- Confirmed no public HTML/CSS/JS files changed.
- Confirmed no protected-source excerpts were introduced.
```

## 12. Agent Notes for Implementation

When implementing this spec, Codex should make the boring structural decisions itself:

- Put doctrine in `docs/doctrine/`.
- Link it plainly.
- Keep public site untouched.
- Do not ask Martin to choose between indistinguishable path options.
- Only ask Martin when a decision changes authorial meaning, public claims, protected-material exposure, or actual publication status.
