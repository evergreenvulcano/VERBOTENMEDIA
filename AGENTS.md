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
- `static-pages/writings/` and `static-pages/experimental-sandbox/` are public markdown content surfaces.
- `writings.html` is the manual public registry for Writings cards.
- `inbox/writings/` is staging for converted or normalized candidates. It is not canon by default.
- `modules/` is source and development space. It may contain meaningful anchors, but it is not publish-ready by default.
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
5. Operational memory: `_gpt/index/` and `_gpt/runs/` record maps, runs, and process state. They are not public content.

Do not collapse these states together. Source, staging, proposal, public content, and operational memory are distinct surfaces with different readiness and authority.

## Mutation permissions

- Read broadly across the repository before changing anything.
- Write narrowly, and only in the surface the task actually targets.
- Do not treat `modules/` as publish-ready by default.
- Do not treat `inbox/writings/` as canonical public content until it has been intentionally reviewed and promoted.
- Do not let anything in `modules/_gpt/` auto-promote itself into canon or widen write permissions.
- Do not rewrite creative prose during conversion or promotion unless the live task explicitly asks for that.
- Do not assume a publishing task authorizes renderer, script, or app changes.
- When a new Writing is published, the markdown file and its `writings.html` card entry must stay aligned under the v1 publishing standard.

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
