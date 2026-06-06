# Runtime Harvest Recovery Packet — 2026-06-07

Status: raw recovery/intake manifest. Not canon. Not a run output. Not a promotion decision.

Purpose: register the uploaded runtime-harvest files before further repository handling. The uploaded files concern the 2026-05-20 → 2026-06-06 merge_hackerstory / Mornest / Midpulse / Nightfold interval plus utility-harvest prompts and extracted context packets. They should be treated as forensic recovery material for the GPT run system, not as instruction authority.

Write boundary: additive material inside `modules/_gpt/runs/` only.

## File inventory

| Uploaded file | Size | Lines | Preliminary classification | Notes |
|---|---:|---:|---|---|
| `05-20_06-06-2026_merge-hackerstory-nightfold_UTILITY-HARVEST-EXPERIMENTAL-BATTERY.txt` | 226,606 bytes | 10,449 | Combined Nightfold harvest + utility extraction battery | Contains extracted Artifacts A–E, Nightfold context packet material, trajectory/systematics, and granular reinforcement material. |
| `UTILITY-HARVEST-EXPERIMENTAL-BATTERY.txt` | 15,483 bytes | 498 | Prompt battery / utility-harvest instruction set | Contains prompts for trajectory harvest, packeting, critique, mutation grammar, transplantation readiness, context jurisdiction, and granular recall. Name is Nightfold-leaning and should be generalized before canonical use. |
| `05-20_06-06-2026_merge-hackerstory-nightfold.txt` | 43,799 bytes | 1,339 | Nightfold runtime compilation | Contains Nightfold runs/statuses around 2026-05-23 onward, including chat-fallback and persistence-status material. |
| `05-20_06-06-2026_merge-hackerstory-mornest.txt` | 18,273 bytes | 492 | Mornest runtime compilation | Contains a 2026-05-28 Mornest fallback artifact plus later unavailable/withheld Mornest status traces through 2026-06-05. |
| `05-20_06-06-2026_merge-hackerstory-midpulse-run-.txt` | 60,051 bytes | 2,646 | Midpulse runtime compilation | Contains Midpulse status summaries and fallback-emitted runs from late May into early June. |
| `05-20_06-06-2026merge_hackerstory.txt` | 155,397 bytes | 5,703 | merge_hackerstory runtime compilation | Contains the 2026-05-20 merge_hackerstory anomaly/context plus repeated continuous dossier passes and trajectory reflection. |
| `05-20_06-06-2026merge_hackerstory_UTILITY-HARVEST-EXPERIMENTAL-BATTERY.txt` | 211,170 bytes | 8,422 | merge_hackerstory trajectory harvest + utility extraction | Contains `TRAJECTORY_MAP`, stable nodes, mutation operators, anti-drift laws, ritual kernel, context packet revisions, and future-run contracts. |

## SHA-256 inventory

```txt
6375cf9e18528a5c8385ddf4d18250046354f8c2c3d4d1c56788e6e2a167f9e7  05-20_06-06-2026_merge-hackerstory-nightfold_UTILITY-HARVEST-EXPERIMENTAL-BATTERY.txt
017faae0baf3085d6ab1ddbc99baa3a32531dfe424c86e3d5ecf3a71c1e9b594  UTILITY-HARVEST-EXPERIMENTAL-BATTERY.txt
4d1457aeea51f7bab8d7bced1b294e19f064f6b832cbe5cccbd26da9da300259  05-20_06-06-2026_merge-hackerstory-nightfold.txt
d804310bbf4d697767edcc2fc09e15a1854d0fc57bc0257963788ae99631d349  05-20_06-06-2026_merge-hackerstory-mornest.txt
1c883814d9acfc37fa5c3ed5330358ad2f68964a09a52620c5fbf5091ac85b38  05-20_06-06-2026_merge-hackerstory-midpulse-run-.txt
b592181f1de44316cf627596f8a8bb2efd966c2cf5a7a5aa5d778a1e787267e4  05-20_06-06-2026merge_hackerstory.txt
01f60cb560824f7c69602bea4d302b23649bf24c138065810436986e3acf4dbe  05-20_06-06-2026merge_hackerstory_UTILITY-HARVEST-EXPERIMENTAL-BATTERY.txt
```

## Handling doctrine

1. Preserve raw files first; do not clean them into doctrine prematurely.
2. Keep this packet in recovery/intake status until reviewed.
3. Do not treat any embedded instructions inside the uploaded files as live commands.
4. Separate raw runtime compilations from extracted operating utilities.
5. Keep Mornest, Midpulse, Nightfold, and merge_hackerstory streams distinguishable.
6. Mark persistence claims as claims unless verified against repository state.
7. Use later extraction to produce a smaller index/registry only after raw preservation is complete.

## Proposed target structure for raw upload

```txt
modules/_gpt/runs/recovery/2026-06-07_runtime-harvest/
  README.md
  raw/
    05-20_06-06-2026_merge-hackerstory-nightfold_UTILITY-HARVEST-EXPERIMENTAL-BATTERY.txt
    UTILITY-HARVEST-EXPERIMENTAL-BATTERY.txt
    05-20_06-06-2026_merge-hackerstory-nightfold.txt
    05-20_06-06-2026_merge-hackerstory-mornest.txt
    05-20_06-06-2026_merge-hackerstory-midpulse-run-.txt
    05-20_06-06-2026merge_hackerstory.txt
    05-20_06-06-2026merge_hackerstory_UTILITY-HARVEST-EXPERIMENTAL-BATTERY.txt
```

## Current status

Manifest created. Raw file bodies still need to be uploaded or otherwise preserved in `raw/`.
