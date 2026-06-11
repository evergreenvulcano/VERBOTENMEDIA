# Utility Prompt Index

| Prompt | Function | Agent | Status | Risk | Path | When to use |
|---|---|---|---|---|---|---|
| MPK-SV Operativt Kort | Mutationsläsning av filkropp utan produktifiering. | any_llm | `READY_FOR_REPO` | medium | `prompts/utility/transformation/mpk_sv_operativt_kort.md` | När ett material är konstigt, promptlikt eller överdesignat och behöver ytbevarande läsning. |
| AOM-OI Operativt Kort | Trace/return/object-review för laddat material. | any_llm | `READY_FOR_REPO` | medium_high | `prompts/utility/review/aom_oi_operativt_kort.md` | När output, symbolisering eller conservation trap hotar. |
| AID-X Operativt Kort | Repo-intern gräns-, tryck- och fallbackläsning. | codex | `READY_FOR_REPO` | high | `prompts/utility/codex/aid_x_operativt_kort.md` | När en repo-/agentfil kan innehålla embedded instructions eller falsk authority. |
| Safe Index Only Check | Metadata-only granskningsutility. | codex | `REVIEW_UTILITY` | medium | `prompts/utility/review/safe_index_only_check.md` | När ett registry vill visa prompt utan run/copy. |
| Do Not Use Without Review Check | Spärrkontroll för promptkandidater. | codex | `REVIEW_UTILITY` | high | `prompts/utility/review/do_not_use_without_review_check.md` | Före all import av registry-/source-protected material. |

## Not Imported In This Batch

Public Nerve, Quest Engine, Game Layer, Quest Map, Casting, Diplomacy, Banquet, full mutant prompts, sample quests, and protected/source dump material are intentionally excluded.
