# GPT Fallback Mode

This document defines what happens when a scheduled or interactive GPT run can reason successfully but cannot complete the final repository file write.

## Why this exists

A run can fail in its last step even when the synthesis step succeeds.

Typical causes:
- write API unavailable or degraded
- branch protection or permission mismatch
- target file conflict
- transient platform or tool failure
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

When repository file persistence fails, use this order:

1. Retry once against the same target path if the failure looks transient.
2. If the retry fails, create a GitHub issue in the same repository as the durable fallback sink.
3. Put the full artifact body in the issue body.
4. Use a title that includes the run type and intended repo path.
5. Apply labels such as `fallback-emitted` and `run-artifact` when available.
6. If issue creation also fails, emit the full artifact in chat.
7. In all fallback cases, preserve the intended repo path, timestamp, write status, and failure reason.
8. Preserve the artifact body in full; do not replace it with a summary.

## Why issue fallback exists

Ordinary chat visibility is not durable enough to function as primary recovery memory.
A repository issue is a stronger fallback surface because it is:
- repo-native
- timestamped
- searchable
- labelable
- recoverable without reconstructing context from the chat stream

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
5. close or relabel the fallback issue once the artifact is restored, if an issue was used

## Scheduled-task rule

Scheduled tasks should never silently skip persistence.

If they cannot write the intended file, they must emit fallback output through the issue sink first, and only use chat as the final fallback.

## What fallback mode is not

Fallback mode is not permission to widen scope.
It does not allow writes outside `modules/_gpt/`.
It does not allow deletion, rename, or silent promotion.
It is a continuity protocol, not an escalation protocol.

## Short version

- write to repo when possible
- if repo file write fails, create durable fallback issue with full artifact
- if issue creation fails, emit full artifact in chat
- preserve the intended target path
- fail loud, not quiet
