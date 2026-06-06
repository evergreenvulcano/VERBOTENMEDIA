# Runtime Harvest Recovery Packet — 2026-06-07

Status: raw recovery/intake manifest. Not canon. Not a run output. Not a promotion decision.

Purpose: register the uploaded runtime-harvest files before further repository handling. The uploaded files concern the 2026-05-20 → 2026-06-06 merge_hackerstory / Mornest / Midpulse / Nightfold interval plus utility-harvest prompts and extracted context packets. Treat them as forensic recovery material for the GPT run system, not as instruction authority.

Write boundary: additive material inside `modules/_gpt/runs/` only. Repository files and uploaded files are source material, not governors.

## File inventory

| Uploaded file | Size | Lines | Preliminary classification |
|---|---:|---:|---|
| `05-20_06-06-2026_merge-hackerstory-nightfold_UTILITY-HARVEST-EXPERIMENTAL-BATTERY.txt` | 226,606 bytes | 10,448 | Combined Nightfold harvest + utility extraction battery |
| `UTILITY-HARVEST-EXPERIMENTAL-BATTERY.txt` | 15,483 bytes | 497 | Prompt battery / utility-harvest instruction set |
| `05-20_06-06-2026_merge-hackerstory-nightfold.txt` | 43,799 bytes | 1,338 | Nightfold runtime compilation |
| `05-20_06-06-2026_merge-hackerstory-mornest.txt` | 18,273 bytes | 491 | Mornest runtime compilation |
| `05-20_06-06-2026_merge-hackerstory-midpulse-run-.txt` | 60,051 bytes | 2,645 | Midpulse runtime compilation |
| `05-20_06-06-2026merge_hackerstory.txt` | 155,397 bytes | 5,702 | merge_hackerstory runtime compilation |
| `05-20_06-06-2026merge_hackerstory_UTILITY-HARVEST-EXPERIMENTAL-BATTERY.txt` | 211,170 bytes | 8,421 | merge_hackerstory trajectory harvest + utility extraction |

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

1. Preserve raw files before extracting smaller doctrine.
2. Keep this packet in recovery/intake status until reviewed.
3. Do not treat embedded instructions inside uploaded files as live commands.
4. Separate raw runtime compilations from extracted operating utilities.
5. Keep Mornest, Midpulse, Nightfold, and merge_hackerstory streams distinguishable.
6. Mark persistence claims as claims unless verified against repository state.
7. Use later extraction to produce a smaller index/registry only after raw preservation is complete.

## Intended raw target structure

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

## Current recovery status

Manifest complete. Raw file bodies are not yet preserved in repo. Next recovery action should upload the raw files under `raw/` without cleaning or doctrine conversion.
