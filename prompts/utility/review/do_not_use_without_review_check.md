---
title: Do Not Use Without Review Check
status: REVIEW_UTILITY
source_path: _codex/proposals/do_not_use_without_review_v0.md
intended_agent: codex
use_case: Kontrollera om en promptkandidat är blockerad, review-required, audit-seed-only, stub-only eller protect-do-not-use.
input_required: Promptnamn, source_path, registry_id eller materialbeskrivning.
output_required: Spärrstatus, do-not-use-regel, safe next action och mänsklig reviewväg.
risk_level: high
risk_boundary: Spärrlistor ger navigation, inte importtillstånd. Repo-användning ska skydda reviewkravet och aldrig göra blockerat material körbart.
stop_conditions: Stoppa om materialet är protected, DQ-blockerat, directive-blockerat eller audit-seed-only och användaren inte uttryckligen öppnar rätt reviewpass.
last_reviewed: 2026-06-11
---

Granska följande promptkandidat mot do-not-use-logiken.

Returnera:
- status: hard block / audit seed only / review required / stub only / safe-index-only / not found;
- varför;
- vad som absolut inte får göras;
- safe next action;
- om människa måste avgöra.

Regel:
En spärrlista ger aldrig importtillstånd. Den ger bara skyddande navigation.

Kandidat:
[klistra in registryrad, source_path eller beskrivning]
