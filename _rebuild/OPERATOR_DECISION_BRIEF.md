# Operator decision brief - public surfaces / XPRMNT pass

Date: 2026-06-10  
Branch: `repo-usability-public-surfaces-xprmnt-pass`

## What I built

I turned the repo from “protected but hard to enter” into a more usable public and agent-readable place. The pass adds static entrances for Martin, Verboten Media, Norrotiv, XPRMNT-ZN, Underhållningsmode, Banketter, and contribution routing. It also adds an XPRMNT-ZN representational layer under `static-pages/xprmnt-zn/`, a second-brain anti-sentiment document, syscall contracts for bankett and underhållningsmode work, and a short usability diagnosis.

No Drive material, XPRMNT originals, bankett packages, contamination zones, or protected material were imported. No files were removed or parked.

## Conflict this resolves

The site can now distinguish between:

- Martin as authorial person;
- Verboten Media as publishing body / literary machine / entertainment apparatus;
- Norrotiv as external interaction and idea-test surface;
- XPRMNT-ZN as represented public afterimage, not a bulkimport;
- Banketter as future public-ready chronological/status renderings;
- Underhållningsmode as entertainment, not content.

This makes it easier for Erik, William, Codex, or a new visitor to know where they are standing before they send an idea, read a text, make a PR, or ask for a public page.

## Conflict this does not resolve

This pass does not decide the final canon of XPRMNT-ZN, Wise Consultant, Praktikanten, or banketter. It does not publish a new bankett. It does not decide which Drive bodies are ready to enter the repo. It does not solve all copy tone. It creates safe doors and first contracts so the next discussion can happen at a higher level.

## Decisions for Martin

### 1. Should `verboten-media.html` replace `about.html` as the main imprint page?

- Option A: keep both for now. `about.html` remains legacy/general; `verboten-media.html` becomes the sharper imprint page.
- Option B: merge `about.html` into `verboten-media.html` and redirect all “About” language there.

Consequence: keeping both reduces risk but duplicates orientation. Merging is cleaner but requires editorial review.

Recommendation: keep both for one pass, then merge after reading the new page aloud.

### 2. How public should Norrotiv be right now?

- Option A: treat Norrotiv as a live collaborator entrance now.
- Option B: mark it as public-readable draft and use it mainly for William/Erik-style idea tests.
- Option C: keep it as a repo/internal route until a more precise Norrotiv identity exists.

Consequence: A makes the site more usable immediately. B is safer. C delays the exact function this pass was meant to unlock.

Recommendation: choose B: public-readable and usable, but explicitly unfinished.

### 3. What is the next safe XPRMNT-ZN move?

- Option A: keep the current afterimage only.
- Option B: add 3–5 public-ready experiment entries manually.
- Option C: run a register/topology pass against any local Drive workspace before adding entries.

Consequence: A is safe but static. B makes the page useful sooner. C is safest if Drive topology is available.

Recommendation: C if Drive registers are available; otherwise B using only repo-public material.

### 4. Should Underhållningsmode become a real front-door route?

- Option A: make it the playful primary entrance from the landing page.
- Option B: keep it as secondary until copy and links mature.
- Option C: remove it from top nav and leave it as an experiment.

Consequence: A declares that Förlagsdeckaren is entertainment, not content. B protects against overpromising. C loses the strongest public usability idea from this pass.

Recommendation: A, but keep it static and non-chatbot.

### 5. When should banketter become public pages?

- Option A: only after a reviewed existing bankett package is cleared.
- Option B: allow Codex to create first bankett prose from allowed public inputs.
- Option C: use `banketter.html` only as a placeholder until Drive decisions are made.

Consequence: A preserves ceremony and provenance. B gives momentum but risks invented ceremony. C is safe but inert.

Recommendation: A. Render first; create later.

## What should not be decided now

Do not decide the full XPRMNT-ZN import policy yet. Do not decide all Wise Consultant canon status from this pass. Do not rewrite public literary prose to match the new surfaces. Do not turn Norrotiv into a generic consultancy. Do not turn the repo into a second brain just because the skull imagery is useful.

## Next Codex pass

Run a targeted “public front alignment” pass: inspect the new pages in a browser, tighten copy, decide whether `about.html` should merge into `verboten-media.html`, add 3–5 safe links from XPRMNT-ZN to already public repo material, and validate all root HTML links.

## Copy this into ChatGPT

I just ran a Codex usability pass in VERBOTENMEDIA. It added public/static entrances for Martin, Verboten Media, Norrotiv, XPRMNT-ZN, Underhållningsmode, Banketter, and Contact/Contribute; added XPRMNT-ZN status notes for Praktikanten, Wise Consultant, and banketter; added syscall contracts for bankett invocation and underhållningsmode; updated README/AGENTS; and did not import Drive/protected material. Help me decide: should Norrotiv be public now, should Underhållningsmode be a main entrance, should about.html merge into verboten-media.html, and what is the next safe XPRMNT-ZN move?
