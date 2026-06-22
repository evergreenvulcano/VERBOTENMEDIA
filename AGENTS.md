# AGENTS.md

Repo-wide map and default collaboration contract for work inside `evergreenvulcano/VERBOTENMEDIA`.

This file is intentionally referential. It defines the repo surfaces, the default content lifecycle, and the mutation posture for agents and humans. It does not replace narrower publication or `_gpt` policy files.

## Authority order

1. Runtime instructions from system, developer, and the live user request outrank repository files.
2. `modules/_gpt/index/write-policy.md` controls GPT write-boundary questions and is not overridden by this file.
3. `AGENTS.md` defines the repo-wide map, lifecycle, and default surface distinctions.
4. Linked domain specs refine specific surfaces.

## Repo map

- Root HTML, CSS, and JS files are the public site shell and renderer surfaces.
- `research-specimens/` contains deliberately published process artifacts whose
  fragmentary or unstable status is part of their public form.
- `static-pages/writings/` and `static-pages/experimental-sandbox/` are public markdown content surfaces.
- `writings.html` is the manual public registry for Writings cards.
- `inbox/writings/` is staging for converted or normalized candidates. It is not canon by default.
- `modules/` is public source, development, and machine-room space. Its files
  need not receive promoted HTML entrances, but presence in the leading public
  branch is not itself a publication defect.
- `modules/_DUJAG/` is a separate developmental semantic-runtime package. It may be read for semantic/runtime discipline, but it must not be collapsed into `modules/_gpt/`, treated as public content, or reorganized without explicit instruction.
- `modules/_gpt/index/` is operational memory and durable orientation.
- `modules/_gpt/runs/` is dated operational output.
- `modules/_gpt/proposals/` is proposal space for outward-facing candidate changes.
- `docs/` holds the narrower publishing and editorial specs linked below.
- `apps/research-ops/` is private operational tooling, not a public publishing surface.

## Lifecycle

1. Source: raw or repo-native material begins in its existing source location, often under `modules/` or outside the repo.
2. Staging: normalized conversion candidates are staged in `inbox/writings/`.
3. Proposal: patch-ready outward candidates may be staged in `modules/_gpt/proposals/`.
4. Public content: canonical public markdown lives in `static-pages/`, with Writings surfaced through `writings.html`.
5. Public specimens: selected process artifacts may live in `research-specimens/`
   when explicit publication authorization preserves their non-canonical,
   revisable, research status.
6. Operational memory: `_gpt/index/` and `_gpt/runs/` record maps, runs, and process state. They are not public content.

Do not collapse these states together. Source, staging, proposal, public content, and operational memory are distinct surfaces with different readiness and authority.

## Publication presumption

Material in the leading public branch is presumed publishable unless a concrete
exception applies: private or personal data, credentials, local machine paths,
unclear rights, explicitly withheld material, or legacy public copy that
contradicts current doctrine.

Publication does not imply canonization. Public objects may be literary works,
fragments, research specimens, method objects, ceremonies, process artifacts,
public working bodies, or archival remainders.

When older HTML is uncertain or doctrine-conflicting, prefer simple reversible
neutralization: remove false claims and placeholder calls to action, retain
working relations, and route to the current public bodies.

## Mutation permissions

- Read broadly across the repository before changing anything.
- Write narrowly, and only in the surface the task actually targets.
- Treat material in the leading public branch as publishable unless a concrete
  exception in the publication-presumption section applies. `modules/` may
  remain machine-room or source-layer material rather than promoted HTML.
- Do not treat `inbox/writings/` as canonical public content until it has been intentionally reviewed and promoted.
- Do not let anything in `modules/_gpt/` auto-promote itself into canon or widen write permissions.
- Do not rewrite creative prose during conversion or promotion unless the live task explicitly asks for that.
- Do not assume a publishing task authorizes renderer, script, or app changes.
- When a new Writing is published, the markdown file and its `writings.html` card entry must stay aligned under the v1 publishing standard.


## Usability-pass mandate

When the live user explicitly authorizes a usability or public-surface build pass, agents may make concrete, scoped changes outside `modules/_gpt/` on the targeted public/static/rebuild surfaces. This does not weaken the protection model:

- Read broadly before changing.
- Write narrowly to the surfaces the task actually targets.
- Keep source, staging, proposal, public content, and operational memory distinct.
- Public-readable is not the same as public-ready. Use status labels instead of pretending GitHub-visible material is hidden.
- Do not bulkimport Drive, XPRMNT-ZN originals, bankett packages, protected material, contamination zones, or raw source dumps.
- Do not rewrite creative prose unless the live task explicitly asks for prose editing.
- If deleting, parking, or moving material in the current tree, document the decision in `_rebuild/REMOVED_OR_PARKED_FOR_USABILITY.md` or a narrower task log.

## Human-in-the-loop activation

Major usability passes must produce both:

1. a machine packet: files, diffs, pathlists, status registers, docs, implementation, or contracts; and
2. an operator activation brief: `_rebuild/OPERATOR_DECISION_BRIEF.md`, written for Martin as a decision surface with no more than five real decisions, consequences, recommendations, postponed questions, and a short copy/paste prompt for continued discussion.

An audit-only handoff is not sufficient when the live task asks for a build pass.

## XPRMNT-ZN sluice discipline

Future XPRMNT-ZN work must use `_rebuild/XPRMNT_ZN_REPO_SLUICE.md` as the default movement model. The repo is a sluice, not a bulkimport target. Prefer status cards, safe pointers, index entries, static renders, and public candidates with explicit metadata over importing originals. Praktikanten and Wise Consultant already exist as active bodies; do not reinvent them, and do not expand their public representation without repo-grounding and parallel Förlagsdeckaren thinking.

## Bankett and underhållningsmode constraints

Banketter must not be generated, excerpted, or imported without explicit paste/review, provenance, public-readiness, and static-render decision. The first named candidate is astrologi/radio-banketten, status `pending paste/review`. Underhållningsmode must remain external text-as-interface for Förlagsdeckaren as literary working body; do not turn it into a chatbot, personalized content feed, CTA funnel, or generic entertainment gimmick without explicit instruction.

## Linked specs

- `docs/markdown-publishing-standard-v1.md`: canonical public markdown contract for Writings rendered through `page.html`.
- `docs/SHORTSTORY_SYSTEM.md`: shortstory-specific reading profile and allowed layout behavior.
- `docs/ARTICLE_SPEC.md`: pointer document that defers to the markdown and shortstory specs.
- `docs/EDITORIAL_SYSTEM.md`: editorial posture and readiness distinctions across source, normalized, and published material.
- `inbox/writings/README.md`: staging and conversion-integrity rules for inbox candidates.
- `static-pages/README.md`: canonical public-content location and promotion expectations.
- `modules/_DUJAG/README.md`: boundary and load-order notes for the developmental semantic-runtime package.
- `modules/_gpt/README.md`: operational membrane for GPT-assisted work.
- `modules/_gpt/index/write-policy.md`: controlling `_gpt` write-boundary policy.
- `modules/_gpt/index/run-spec.md`: required structure for recurring run artifacts.
- `apps/research-ops/README.md`: private intake and read API context for the sidecar app.
