---
title: Safe Index Only Check
status: REVIEW_UTILITY
source_path: _codex/proposals/safe_to_index_only_memo_v0.md
intended_agent: codex
use_case: Avgör om en promptkandidat får visas som metadata men inte köras, kopieras eller skickas vidare.
input_required: Registryrad eller promptkandidat med source_path och föreslagen användning.
output_required: Beslut: index-only / needs review / do not index, samt tillåtna och förbjudna UI-handlingar.
risk_level: medium
risk_boundary: Index-only får inte glida över i körbarhet, kopiering eller public rendering. Repo-användning ska hålla metadata synlig utan att göra prompten användbar.
stop_conditions: Stoppa om någon ber om full prompttext, run-knapp, copy prompt, send-to-agent eller public rendering.
last_reviewed: 2026-06-11
---

Granska följande promptkandidat som möjlig `safe_index_only`.

Returnera:
- metadata som får visas;
- vad som fortfarande är förbjudet;
- vilken review som krävs före användning;
- säker UI-label;
- exakt stoppvillkor.

Grundregel:
`safe_index_only` betyder synlig som metadata för navigering och reviewplanering. Det betyder inte körbar, copybar, publicerbar, metodinstallerad eller skickbar till agent.

Kandidat:
[klistra in registryrad eller kandidat]
