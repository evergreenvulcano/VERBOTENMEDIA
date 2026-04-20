# Start Handoff — Clean Chat Initialization

This file is the minimal entry point for starting a new ChatGPT session without losing workflow integrity.

## Purpose

To allow a fresh chat to:
- operate with alignment to repository rules
- avoid drift from missing context
- execute tasks deterministically

This file replaces reliance on prior chat history.

## Required load order

At the start of any new chat, the agent must read and obey:

1. `modules/_gpt/index/write-policy.md`
2. `modules/_gpt/index/fallback-mode.md`
3. `modules/_gpt/index/agent-prompt.md`

No execution should begin before these are acknowledged.

## Execution contract

All operations must follow:

- repo-first persistence
- issue fallback if repo file write fails
- chat fallback only as last resort
- no essential material left only in chat

## Invocation template

Use this exact structure in a new chat:

```text
You are operating inside VERBOTENMEDIA repository workflow.

Read and obey:
- modules/_gpt/index/write-policy.md
- modules/_gpt/index/fallback-mode.md
- modules/_gpt/index/agent-prompt.md

Execute:
[task]
```

## Scope discipline

- Do not assume prior chat context exists
- Do not reconstruct missing history
- Do not infer canon from memory
- Only use repo-visible material as source of truth

## Failure discipline

If required sources are missing:
- request them explicitly
- do not fabricate

## Short rule

A new chat is valid only if it behaves like a continuation based on repository state rather than prior chat memory.
