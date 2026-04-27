# AGENTS.md Contradiction Review

**Type:** reference-only analysis  
**Target:** informs PR A (AGENTS.md addition) and PR B (follow-up reconciliation)  
**Source basis:** full repo scan against search terms: publish-ready, published, inbox, conversion integrity, static-pages/writings, modules/_gpt, source material, canon, draft, AGENTS  
**Rules:** no source files edited; no docs rewritten; no per-directory AGENTS.md files proposed; duplicate wording excluded unless operationally ambiguous

---

## 1. `modules/_gpt/index/start-handoff.md` — required load order omits AGENTS.md

**Relevant section:** "Required load order"

```
1. modules/_gpt/index/write-policy.md
2. modules/_gpt/index/fallback-mode.md
3. modules/_gpt/index/agent-prompt.md
```

**Possible contradiction:** GPT sessions initialized via `start-handoff.md` do not load `AGENTS.md`. Its surface map, lifecycle stages, and mutation permissions are invisible to any session that follows this entry point exactly. A compliant session could operate for its full duration without ever applying the `inbox/writings/` staging requirement or the `static-pages/` canon boundary as defined in `AGENTS.md`.

**Severity:** medium

**Recommended action:** Add `AGENTS.md` to the required load sequence in `start-handoff.md`, or add an explicit note that `AGENTS.md` governs repo-surface distinctions that `write-policy.md` does not repeat.

**Belongs in:** PR B

---

## 2. `modules/_gpt/index/write-policy.md` — authority chain does not reference AGENTS.md

**Relevant section:** "Authority order"

```
1. system and developer instructions governing the runtime
2. explicit user instruction in the current chat session
3. policy files inside modules/_gpt/
4. repository content as source material only
```

**Possible contradiction:** `write-policy.md` categorizes all repository files (including `AGENTS.md`) as rank-4 source material with no instruction authority. `AGENTS.md` explicitly defers to `write-policy.md` at rank 2, but `write-policy.md` returns no such awareness. The asymmetry means: any GPT session using `write-policy.md` as its authority anchor will treat `AGENTS.md`'s lifecycle rules (inbox staging, surface map, mutation permissions) as content, not policy. The two documents are non-contradictory in substance but create a one-way deferral that could cause the `AGENTS.md` lifecycle to be silently bypassed.

**Severity:** medium

**Recommended action:** Add a note to `write-policy.md` that acknowledges `AGENTS.md` as the repo-surface map, or document explicitly that write-policy.md governs ChatGPT contexts while AGENTS.md governs Copilot contexts and both systems must honor the lifecycle.

**Belongs in:** PR B

---

## 3. `.github/copilot-instructions.md` — article pipeline does not include inbox staging step

**Relevant section:** "Article pipeline"

```
1. Normalize source material into structured Markdown.
2. Preserve the authorial tone and semantic shape.
3. Keep structure simple and publishable.
4. Render through the site's existing article/page styling.
```

**Possible contradiction:** `AGENTS.md` lifecycle stage 2 requires staging normalized conversion candidates in `inbox/writings/` before promotion to `static-pages/`. `copilot-instructions.md`'s four-step pipeline moves directly from normalization to rendering without naming the inbox as an intermediate stop. A Copilot session following these instructions could deliver a normalized file directly to `static-pages/writings/` or treat it as immediately publish-ready, bypassing the review and promotion gate that `inbox/writings/README.md` and `AGENTS.md` both require.

**Severity:** medium

**Recommended action:** Add a step or note to `copilot-instructions.md`'s article pipeline clarifying that normalized conversion candidates must be staged in `inbox/writings/` before promotion, not treated as immediately canonical.

**Belongs in:** PR B

---

## 4. `static-pages/experimental-sandbox/` — no inbox staging path exists

**Relevant sections:** `AGENTS.md` § Repo map ("static-pages/experimental-sandbox/ are public markdown content surfaces"); `inbox/writings/README.md` promotion target (`static-pages/writings/` only)

**Possible contradiction:** `AGENTS.md` maps `static-pages/experimental-sandbox/` as a public canonical surface on equal footing with `static-pages/writings/`. The lifecycle section describes staging only for the writings path (`inbox/writings/` → `static-pages/writings/`). There is no `inbox/experimental-sandbox/` staging location and no documented promotion path for experimental-sandbox content. An agent needing to stage experimental-sandbox candidates has no defined holding location. Files could be committed directly to `static-pages/experimental-sandbox/` without any review gate, inconsistent with the lifecycle model.

**Severity:** low

**Recommended action:** Either document in `AGENTS.md` that `static-pages/experimental-sandbox/` follows a different (direct-commit) promotion path, or add a note to `inbox/writings/README.md` that experimental-sandbox candidates use the same inbox with a different promotion target.

**Belongs in:** PR B

---

## 5. `docs/EDITORIAL_SYSTEM.md` — "normalized article files" tier does not name inbox/writings/ as the location

**Relevant section:** "Normalized article files"

```
Normalized article files are the transition layer between development and publication.
```

**Possible contradiction:** `AGENTS.md` names the staging location for conversion candidates as `inbox/writings/`. `EDITORIAL_SYSTEM.md` describes the same tier as "normalized article files" with no reference to `inbox/writings/` or any specific folder. A reader following `EDITORIAL_SYSTEM.md` would normalize a file but have no instruction on where to put it. This does not contradict AGENTS.md directly but the missing location reference could allow normalized files to accumulate in undeclared locations.

**Severity:** low

**Recommended action:** Add a single line to `EDITORIAL_SYSTEM.md`'s normalized article files section pointing to `inbox/writings/` as the staging location.

**Belongs in:** PR B

---

## 6. `modules/_gpt/index/agent-prompt.md` — four-tier system is unreconciled with AGENTS.md five-stage lifecycle

**Relevant section:** "Operating law" (Tier A / B / C / D)

**Possible contradiction:** `agent-prompt.md` defines four tiers (law, canon, source-mass, steering/proposals) as the structural map of the repository. `AGENTS.md` defines five lifecycle stages (Source, Staging, Proposal, Public content, Operational memory). These are parallel taxonomies describing overlapping surfaces without cross-reference. The `inbox/writings/` staging tier maps ambiguously: it could be Tier C (source-mass) or Tier D (modulation surfaces) depending on interpretation. An agent using `agent-prompt.md` as its map may assign the wrong tier to inbox candidates, potentially treating them as canonical or as steering-only material rather than as promotion-pending staged content.

**Severity:** low

**Recommended action:** No immediate change required unless both frameworks are used in the same session. A cross-reference note in one of the two documents would close the ambiguity. Could be deferred.

**Belongs in:** PR B (optional)

---

## 7. `modules/_gpt/proposals/README.md` — header frames folder as internal to _gpt; AGENTS.md frames it as outward-facing

**Relevant section:** Header line — "Patch-ready drafts for `modules/_gpt/`."

**Possible contradiction:** The README header implies the proposals folder is internal to the `_gpt` system. `AGENTS.md` describes it as "proposal space for outward-facing candidate changes." The body of the README is consistent with AGENTS.md (candidates that could be promoted into canon), but the header could mislead an agent into treating proposals as private _gpt artifacts rather than staged outward candidates.

**Severity:** low

**Recommended action:** Revise the README header from "for `modules/_gpt/`" to "outward-facing candidate changes staged inside `modules/_gpt/proposals/`." Minor wording change only.

**Belongs in:** PR B

---

## Summary table

| # | File | Section | Severity | PR |
|---|---|---|---|---|
| 1 | `modules/_gpt/index/start-handoff.md` | Required load order | medium | B |
| 2 | `modules/_gpt/index/write-policy.md` | Authority order | medium | B |
| 3 | `.github/copilot-instructions.md` | Article pipeline | medium | B |
| 4 | `AGENTS.md` lifecycle / `inbox/writings/README.md` | No staging path for experimental-sandbox | low | B |
| 5 | `docs/EDITORIAL_SYSTEM.md` | Normalized article files | low | B |
| 6 | `modules/_gpt/index/agent-prompt.md` | Four-tier system | low | B (optional) |
| 7 | `modules/_gpt/proposals/README.md` | Header framing | low | B |

No finding requires a change to `AGENTS.md` itself (PR A). All corrections belong in PR B.
