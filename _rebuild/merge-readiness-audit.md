# Merge readiness audit

## Scope

This audit reviews the current worktree as the authoritative state before a human merge decision. It reconciles the original rebuild ledger with the later homepage, Martin, About navigation and minimal About-surface passes.

After human approval, the remaining small fixes were applied: `about.html` was made into a minimal responsibility map, `About` became a clickable meta-group link, and the pre-existing mobile contact-email overflow was fixed with narrow text wrapping.

## Files reviewed

### Rebuild records

- `_rebuild/rebuild-run-ledger.md`
- `_rebuild/next-actions.md`
- `_rebuild/about-meta-surface-design.md`
- `_rebuild/bankett-form-diagnosis.md`
- `_rebuild/ehm-dossier-readability-diagnosis.md`
- `_rebuild/index-dramaturgic-readability-diagnosis.md`
- `_rebuild/praktikanten-model-comparison-diagnosis.md`
- `_rebuild/prf-srg-suite-readability-diagnosis.md`
- `_rebuild/underhallningsmode-front-diagnosis.md`
- `_rebuild/writings-reading-path-reweight-diagnosis.md`
- `_rebuild/xprmnt-zn-hierarchy-diagnosis.md`

### Changed public HTML

- `about.html`
- `associated-projects.html`
- `banketter.html`
- `capsules.html`
- `contact.html`
- `contribute.html`
- `events.html`
- `experimental-sandbox.html`
- `index.html`
- `lectures-workshops.html`
- `martin.html`
- `page.html`
- `praktikanten.html`
- `shortstory-vm-1.html`
- `shortstory-vm-2.html`
- `shortstory-vm-3.html`
- `shortstory-vm-4.html`
- `shortstory-vm-5.html`
- `shortstory-vm-6.html`
- `underhallningsmode.html`
- `verboten-media.html`
- `writings.html`
- `xprmnt-zn.html`

### Shared styling

- `css/style.css`

### Diff and repository state

- `git status --short`
- `git diff --name-status`
- `git diff --stat`
- `git diff --numstat`
- `git diff --check`
- current untracked-file set
- current local-link targets

## Changed files confirmed

The current tracked diff contains 23 root HTML files and `css/style.css`.

The public changes divide into two classes.

### Rebuild hierarchy changes

- `index.html`
  - moved the existing Writings link into a dedicated primary reading position;
  - removed Martin from the homepage `Primary entrances`;
  - retained Verboten Media, Praktikanten and XPRMNT-ZN as public body or passage entrances.
- `writings.html`
  - moved the existing Public Nerve block after the main register;
  - retained the reading-path entrance before filter and register.
- `xprmnt-zn.html`
  - reordered the nine existing cards so readable bodies precede method, ceremony, utility and operative pointers.
- `underhallningsmode.html`
  - moved the generic `Choose a public route` section to the end;
  - retained `I do not want to read` as the first literary interface position.
- `banketter.html`
  - changed the section heading to `Publicerade banketter`;
  - added the already published 2026-06-25 ceremony to the timeline;
  - retained the statement that the next bankett has no date.

### About navigation hierarchy

Across all 23 root pages carrying the current main navigation:

- `Martin` was removed as a top-level primary navigation item;
- `Contact / Contribute` was removed as a top-level primary navigation item;
- a non-clickable `About` label groups:
  - `Martin`;
  - `Contact / Contribute`.

`css/style.css` adds only the desktop and mobile presentation required for this grouping. No JavaScript or dropdown system was added.

Eighteen pages whose only intended change was navigation were compared to `HEAD` with their site navigation removed from both versions. Their remaining page bodies are identical. The only non-semantic exception visible in the raw diff is a final newline added to `shortstory-vm-1.html`.

The original rebuild ledger predates the later About navigation pass. Its statements that global navigation and CSS were untouched describe the earlier rebuild stage, not the final worktree. This audit supersedes those statements for merge review.

## Rebuild arc audit

### 1. Homepage hierarchy clarified

Confirmed.

- Writings has a dedicated primary reading route.
- Martin no longer appears in the homepage primary entrance strip.
- Verboten Media, Praktikanten and XPRMNT-ZN remain in the strip.
- Underhållningsmode retains its separate high-weight entrance.

### 2. Writings reading paths are not overpowered before the register

Confirmed structurally and functionally.

- The reading-path featured block remains before the filter and main register.
- Public Nerve now appears after the main register.
- The exact set of 26 writing-card blocks is preserved: 23 main cards and three Public Nerve cards.
- The Analysis filter remains functional: five main analysis cards and all three Public Nerve analysis cards remain visible when selected.

Human review should still judge whether Public Nerve has become too distant after the long register, but this is a visual weighting question rather than a technical defect.

### 3. XPRMNT-ZN presents readable bodies before operative pointers

Confirmed.

The current nine-card order is:

1. Praktikanten
2. EHM Levels Virusprosa
3. PRF-SRG
4. HackerStory
5. Wise Consultant
6. Banketter
7. Playable utilities
8. XPRMNT-ZN Sluice
9. XPRMNT-ZN Membrane

The exact card-content set is unchanged from `HEAD`. No status, copy or destination changed.

### 4. Praktikanten remains model, not template

Confirmed.

- `praktikanten.html` received navigation grouping only.
- No hero, layer grid, chronology, coda or Praktikanten-specific presentation was copied to another body.
- The model-comparison pass remained diagnostic.

### 5. Underhållningsmode remains front logic without becoming product behavior

Confirmed.

- The six existing sections are preserved exactly.
- `I do not want to read` is first.
- `Choose a public route` is last.
- No feed, chatbot, personalization, data collection, CTA system or new interaction was added.

### 6. EHM and PRF-SRG remained diagnosis-led

Confirmed.

- No EHM or PRF-SRG public prose, sequence, source body or status was edited.
- EHM ended with a reader-priority decision requirement.
- PRF-SRG ended with no safe local implementation recommendation.

### 7. Bankettform was clarified without update culture

Confirmed.

- No new ceremony was generated by the rebuild.
- The index now accurately shows both already published banketter.
- The 2026-06-25 title and status match the published bankett body.
- The page continues to reject calendar logic and leaves the next ceremony undated.

### 8. Martin is demoted and grouped under About

Confirmed on all 23 changed HTML pages.

- There is no direct top-level Martin link inside the main navigation.
- Each navigation contains exactly one Martin link under the About group.
- Each navigation contains exactly one Contact / Contribute link under the About group.
- Martin remains reachable from 23 root HTML pages.
- Contact remains reachable from 23 root HTML pages.
- Martin and Contact receive the correct active state on their own destination pages.

### 9. About is a minimal responsibility map

Confirmed.

- `About` is now a clickable meta-group link to the pre-existing `about.html`.
- `about.html` has been narrowed from a generic orientation router to a minimal responsibility map.
- The page distinguishes Verboten Media, Martin, Contact / Contribute, and return-to-work routes.
- Martin and Contact / Contribute remain under the About group rather than returning to primary navigation.
- `_rebuild/about-meta-surface-design.md` now records `CREATE_MINIMAL_ABOUT_PAGE` after human approval.

## Boundary audit

### New public bodies

Pass.

No untracked files exist outside `_rebuild/`. No new HTML page, markdown body, specimen, ceremony or destination was created during these rebuild changes.

The existing `about.html` predates this worktree diff and was changed only to carry the common navigation grouping.

### Import, movement, canon and status

Pass.

- No Drive or external material was imported.
- No material file was moved.
- No material was canonized or reclassified.
- No status-bearing source file was changed.
- No `static-pages/` file is present in the tracked diff.

### Source prose

Pass.

- The 18 navigation-only page bodies are identical to `HEAD` outside their main navigation.
- Writings, XPRMNT-ZN and Underhållningsmode preserve exact content-block sets.
- Banketter contains only the diagnosed index and timeline correction.
- No literary markdown or destination prose changed.

### Doctrine, taxonomy, CMS and pipeline

Pass.

No changes exist in:

- `README.md`;
- `AGENTS.md`;
- `docs/`;
- JavaScript;
- markdown publishing standards;
- XPRMNT-ZN doctrine or Sluice;
- pipeline, CMS or template architecture.

The About grouping is navigation hierarchy, not a new public taxonomy or doctrine layer.

### Reachability and orphaning

Pass.

- All local `href` and `src` targets in the 23 changed HTML files exist.
- All 23 changed HTML pages return HTTP 200 from the local preview.
- Main destinations retain incoming root-page links:
  - Martin: 23;
  - Contact: 23;
  - Verboten Media: 23;
  - Writings: 13;
  - Praktikanten: 5;
  - XPRMNT-ZN: 23;
  - Underhållningsmode: 21;
  - Banketter: 23.

`about.html` now has incoming root-page links through the existing About meta-group. This resolves the earlier intentional unlinked state without creating a new page or navigation system.

## Validation result

### Static validation

- `git diff --check`: pass, with line-ending conversion warnings only.
- Changed HTML local-target check: pass.
- HTTP 200 check for all 23 changed HTML pages: pass.
- Navigation structure check: pass.
- No changed source, doctrine, JavaScript or public-body files: pass.

### Browser validation

Desktop at 1280 px:

- all 23 changed HTML pages checked;
- no horizontal overflow;
- no navigation structure failures;
- no console warning or error.

Mobile at 390 px:

- all 23 changed HTML pages checked;
- mobile navigation toggle is present;
- closed navigation behaves correctly;
- open navigation was checked with the About group below the five primary items;
- the About group is vertically separated, fits within the viewport and does not create overflow;
- Martin and Contact active states work;
- no console warning or error.

The previous page-level mobile defect on `contact.html` has been fixed:

- `.contact-email` now allows narrow wrapping;
- the email remains visible and reachable;
- no contact copy or route changed.

## Small fixes made

- Existing `about.html` converted to a minimal responsibility map.
- Existing About group label converted to a link to `about.html`.
- Existing `.contact-email` mobile overflow fixed with `overflow-wrap: anywhere`.

## Remaining human review points

1. Visually judge whether Public Nerve retains sufficient editorial presence after the long Writings register.
2. Visually judge whether XPRMNT-ZN's reordered cards express useful rank without implying canon hierarchy.
3. Confirm that About reads as responsibility and contact context, not as a sixth primary public body.
4. Read the earlier rebuild ledger together with this final audit because the ledger predates the later global navigation, About and CSS pass.

## Final recommendation

`READY_FOR_HUMAN_VISUAL_REVIEW`

The rebuild arc is internally consistent and boundary-safe. The known small mobile overflow has been fixed. Final merge should proceed after human visual review of the About MVP surface and the already noted hierarchy changes.
