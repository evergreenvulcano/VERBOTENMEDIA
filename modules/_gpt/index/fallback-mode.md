# GPT Fallback Mode

This document defines what happens when a scheduled or interactive GPT run can reason successfully but cannot complete the final repository write.

## Why this exists

A run can fail in its last step even when the synthesis step succeeds.

Typical causes:
- write API unavailable or degraded
- branch protection or permission mismatch
- target file conflict
- transient platform/tool failure
- path resolution error

Without fallback behavior, the repository looks silent even though the run actually happened.

## Core rule

If a run cannot persist its artifact to the intended repository path, it must degrade visibly rather than fail invisibly.

## Primary target

The normal target remains the repository itself.

Preferred write surfaces:
- `modules/_gpt/runs/`
- `modules/_gpt/index/`
- `modules/_gpt/proposals/`

## Fallback sequence

When repository persistence fails, use this order:

1. Retry once against the same target path if the failure looks transient.
2. If the retry fails, emit the full artifact in chat.
3. Label the artifact clearly with the intended repo path and timestamp.
4. State whether the failure was write-path, permission, conflict, or unknown.
5. Preserve the artifact body in full; do not replace it with a summary.

## Required fallback header

Every fallback artifact should begin with:

- intended path
- run type
- timestamp
- write status
- brief failure reason

## Example header

Intended path: `modules/_gpt/runs/YYYY-MM-DD_midpulse.md`
Run type: Midpulse
Timestamp: ISO-8601
Write status: fallback-emitted
Failure reason: repo write unavailable

## Human recovery path

If fallback mode was used, the next human or agent handling the repo should:

1. copy the artifact into the intended path
2. preserve the original timestamp if possible
3. avoid rewriting for style unless explicitly requested
4. mark the recovery as complete in the next run notes

## Scheduled-task rule

Scheduled tasks should never silently skip persistence.

If they cannot write, they must emit fallback output visibly.

## What fallback mode is not

Fallback mode is not permission to widen scope.
It does not allow writes outside `modules/_gpt/`.
It does not allow deletion, rename, or silent promotion.
It is a continuity protocol, not an escalation protocol.

## Short version

- write to repo when possible
- if repo write fails, emit full artifact visibly
- preserve the intended target path
- fail loud, not quiet
