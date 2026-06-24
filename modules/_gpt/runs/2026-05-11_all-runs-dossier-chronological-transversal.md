# All Runs Dossier - Chronological Transversal

Source file: `modules/_gpt/runs/2026-05-11_all-runs-dossier.md`  
Created: 2026-05-11  
Purpose: traversal index for the all-runs dossier and its backing files in `modules/_gpt/runs/`.

## Preservation Boundary

This file is an analytical traversal index. It does not replace, prune, normalize, or rewrite `2026-05-11_all-runs-dossier.md`.

The source dossier remains the bundled chronological content file. The individual files in `modules/_gpt/runs/` remain the underlying preservation copies.

This traversal records:

- every detected `BEGIN FILE` block in the all-runs dossier
- the line span of each block inside the all-runs dossier
- the underlying source file path
- date evidence used for chronological traversal
- run kind / surface type
- source file line counts and hash prefixes
- whether the bundled payload matches the underlying file
- chronological cautions where filenames or session labels are weak evidence

## Validation Summary

Validation was performed against the current repo files on 2026-05-11.

- `BEGIN FILE` blocks found: 51
- Underlying source files found: 51
- Missing backing files: 0
- Payload/source mismatches: 0
- Payload match rule: the all-runs dossier adds separator lines and outer blank lines around each payload; after stripping only those generated wrappers, each payload matches its source file.
- README/control block included: yes

## Ordering Method

Session numbers are weak evidence only. The traversal uses:

1. ISO dates in filenames, when present.
2. Written dates in filenames, when present.
3. Compact filename dates, when unambiguous in context.
4. Frontmatter or first-run metadata dates, when filenames lack a date.
5. Source order inside `2026-05-11_all-runs-dossier.md` for same-day entries without explicit times.

All known run dates here are in April-May 2026. Times are only asserted when the file itself contains a time.

## Chronological Cautions

- `README.md` is a control block, not a dated run.
- `260421-postprune-initiation-context.md` is interpreted as 2026-04-21 by compact `YYMMDD` filename evidence and by its position next to the 2026-04-21 run.
- `merge-nightfold-session8.md` and `merge-nightfold-extrascope.md` have no date in their filenames; their frontmatter supplies `26 April 2026 / 23:07 CEST` and `26 April 2026 / 23:18 CEST`.
- Files named with written dates, such as `25 APRIL 2026, midday run.md`, are ordered by the written filename date plus source order unless a time is present.
- Same-day order is not always an execution-time claim. Where explicit times are absent, it is a stable traversal order from the all-runs dossier.

## Source Block Inventory

| # | Dossier Lines | Source File | Date Evidence | Kind | Lines | Hash Prefix | Payload Match |
|---:|---:|---|---|---|---:|---|---|
| 1 | 4-28 | `modules/_gpt/runs/README.md` | undated; control | control | 18 | `7d44aba5cbe9` | yes |
| 2 | 33-104 | `modules/_gpt/runs/2026-04-15_repo-transition-plan.md` | 2026-04-15; filename ISO | transition | 65 | `e6e4d0c4f0bf` | yes |
| 3 | 109-182 | `modules/_gpt/runs/2026-04-16_mornest.md` | 2026-04-16; filename ISO | mornest | 67 | `d5e3469587cf` | yes |
| 4 | 187-271 | `modules/_gpt/runs/2026-04-16_midpulse.md` | 2026-04-16; filename ISO | midpulse | 78 | `3f6ac3f3e7fe` | yes |
| 5 | 276-347 | `modules/_gpt/runs/2026-04-16_nightfold.md` | 2026-04-16; filename ISO | nightfold | 65 | `d638f3c00be8` | yes |
| 6 | 352-445 | `modules/_gpt/runs/2026-04-16_merge-hackerstory.md` | 2026-04-16; filename ISO | merge/dossier | 87 | `ca374de9c431` | yes |
| 7 | 450-581 | `modules/_gpt/runs/2026-04-20_mornest.md` | 2026-04-20; filename ISO | mornest | 125 | `130f457acd56` | yes |
| 8 | 586-687 | `modules/_gpt/runs/2026-04-20_midpulse.md` | 2026-04-20; filename ISO | midpulse | 95 | `bd4cdb57399a` | yes |
| 9 | 692-768 | `modules/_gpt/runs/2026-04-20_nightfold.md` | 2026-04-20; filename ISO | nightfold | 70 | `2886a4922826` | yes |
| 10 | 773-918 | `modules/_gpt/runs/2026-04-20_merge-hackerstory.md` | 2026-04-20; filename ISO | merge/dossier | 139 | `66ea6ffb3fad` | yes |
| 11 | 923-1038 | `modules/_gpt/runs/2026-04-21_merge-hackerstory.md` | 2026-04-21; filename ISO | merge/dossier | 109 | `263156938956` | yes |
| 12 | 1043-1807 | `modules/_gpt/runs/260421-postprune-initiation-context.md` | 2026-04-21; compact filename | run/context | 758 | `17f7b698fed9` | yes |
| 13 | 1812-2385 | `modules/_gpt/runs/2026-04-23-middayrun.md` | 2026-04-23; filename ISO | run/context | 567 | `495f883ec33b` | yes |
| 14 | 2390-4981 | `modules/_gpt/runs/2026-04-24_session_initiation_lillfrugan.md` | 2026-04-24; filename ISO | lillfrugan | 2585 | `0c11bcdafe72` | yes |
| 15 | 4986-5150 | `modules/_gpt/runs/24 April 2026-afternoon-run-sagas-procedural-mysticism` | 2026-04-24; written filename date | run/context | 158 | `11ce51f263af` | yes |
| 16 | 5155-5682 | `modules/_gpt/runs/2026-04-25-mn-dawnrun.md` | 2026-04-25; filename ISO | run/context | 521 | `a1147da2e8fe` | yes |
| 17 | 5687-6393 | `modules/_gpt/runs/25 APRIL 2026, midday run.md` | 2026-04-25; written filename date | run/context | 700 | `3e86c1920335` | yes |
| 18 | 6398-6573 | `modules/_gpt/runs/25 April 2026, night run.md` | 2026-04-25; written filename date | run/context | 169 | `704c60498f71` | yes |
| 19 | 6578-6802 | `modules/_gpt/runs/26-04-2026-sst-legacy-session` | 2026-04-26; DMY filename | run/context | 218 | `82f5afedf8aa` | yes |
| 20 | 6807-7008 | `modules/_gpt/runs/26 April 2026` | 2026-04-26; written filename date | run/context | 195 | `8e2ddc71d934` | yes |
| 21 | 7013-7245 | `modules/_gpt/runs/merge-nightfold-session8.md` | 2026-04-26 23:07 CEST; frontmatter | nightfold | 226 | `3b8e04d9ac47` | yes |
| 22 | 7250-7412 | `modules/_gpt/runs/merge-nightfold-extrascope.md` | 2026-04-26 23:18 CEST; frontmatter | nightfold | 156 | `a90a1750c0e4` | yes |
| 23 | 7417-7517 | `modules/_gpt/runs/2026-04-27_merge-hackerstory.md` | 2026-04-27; filename ISO | merge/dossier | 94 | `ae7562040e05` | yes |
| 24 | 7522-7886 | `modules/_gpt/runs/2026-04-27_sediment-assessment.md` | 2026-04-27; filename ISO | assessment | 358 | `bb8aad5d2d20` | yes |
| 25 | 7891-7974 | `modules/_gpt/runs/2026-04-28_mornest.md` | 2026-04-28; filename ISO | mornest | 77 | `cc1c46939622` | yes |
| 26 | 7979-8005 | `modules/_gpt/runs/2026-04-28_midpulse.md` | 2026-04-28; filename ISO | midpulse | 20 | `9f5ebd52f10d` | yes |
| 27 | 8010-8201 | `modules/_gpt/runs/2026-04-28_nightfold.md` | 2026-04-28; filename ISO | nightfold | 185 | `21219b6cc32c` | yes |
| 28 | 8206-8641 | `modules/_gpt/runs/2026-04-28_merge-hackerstory.md` | 2026-04-28; filename ISO | merge/dossier | 429 | `cc29f62feb71` | yes |
| 29 | 8646-8919 | `modules/_gpt/runs/2026-04-29_mornest.md` | 2026-04-29; filename ISO | mornest | 267 | `f9b00a6b8243` | yes |
| 30 | 8924-9466 | `modules/_gpt/runs/2026-04-29_midpulse.md` | 2026-04-29; filename ISO | midpulse | 536 | `9023952947c9` | yes |
| 31 | 9471-9699 | `modules/_gpt/runs/2026-04-29_nightfold.md` | 2026-04-29; filename ISO | nightfold | 222 | `c9b7b833af53` | yes |
| 32 | 9704-9834 | `modules/_gpt/runs/2026-04-29_lillfrugan-signal-layer.md` | 2026-04-29; filename ISO | lillfrugan | 124 | `f3e425e0c94c` | yes |
| 33 | 9839-10297 | `modules/_gpt/runs/2026-04-29_merge-hackerstory.md` | 2026-04-29; filename ISO | merge/dossier | 452 | `fdd11048fe11` | yes |
| 34 | 10302-10541 | `modules/_gpt/runs/2026-04-30_mornest.md` | 2026-04-30; filename ISO | mornest | 233 | `4a2a625e295f` | yes |
| 35 | 10546-10694 | `modules/_gpt/runs/2026-04-30_lillfrugan-drift-early-cycle.md` | 2026-04-30; filename ISO | lillfrugan | 142 | `c145e059bdda` | yes |
| 36 | 10699-10983 | `modules/_gpt/runs/2026-04-30_midpulse.md` | 2026-04-30; filename ISO | midpulse | 278 | `eafd9267c2fb` | yes |
| 37 | 10988-11140 | `modules/_gpt/runs/2026-04-30_lillfrugan-drift-mid-cycle-pressure.md` | 2026-04-30; filename ISO | lillfrugan | 146 | `1ba2858a33ed` | yes |
| 38 | 11145-11299 | `modules/_gpt/runs/2026-04-30_lillfrugan-drift-evening-convergence.md` | 2026-04-30; filename ISO | lillfrugan | 148 | `d8df9b2f55da` | yes |
| 39 | 11304-11557 | `modules/_gpt/runs/2026-04-30_nightfold.md` | 2026-04-30; filename ISO | nightfold | 247 | `13bb119c4768` | yes |
| 40 | 11562-11702 | `modules/_gpt/runs/2026-04-30_lillfrugan-drift-nightfall-integration.md` | 2026-04-30; filename ISO | lillfrugan | 134 | `dbd4d27cc2bc` | yes |
| 41 | 11707-11951 | `modules/_gpt/runs/2026-04-30_merge-hackerstory.md` | 2026-04-30; filename ISO | merge/dossier | 238 | `fe8fe501778a` | yes |
| 42 | 11956-12221 | `modules/_gpt/runs/2026-05-01_merge-hackerstory.md` | 2026-05-01; filename ISO | merge/dossier | 259 | `086fd4815d8d` | yes |
| 43 | 12226-12363 | `modules/_gpt/runs/2026-05-02_midpulse.md` | 2026-05-02; filename ISO | midpulse | 131 | `793e36c2344a` | yes |
| 44 | 12368-12541 | `modules/_gpt/runs/2026-05-02_nightfold.md` | 2026-05-02; filename ISO | nightfold | 167 | `e62ca7aa24e9` | yes |
| 45 | 12546-12693 | `modules/_gpt/runs/2026-05-02_merge-hackerstory.md` | 2026-05-02; filename ISO | merge/dossier | 141 | `d785e0304bbf` | yes |
| 46 | 12698-12865 | `modules/_gpt/runs/2026-05-03_mornest.md` | 2026-05-03; filename ISO | mornest | 161 | `1267744bc200` | yes |
| 47 | 12870-13057 | `modules/_gpt/runs/2026-05-03_midpulse.md` | 2026-05-03; filename ISO | midpulse | 181 | `d1909020e73c` | yes |
| 48 | 13062-13285 | `modules/_gpt/runs/2026-05-03_nightfold.md` | 2026-05-03; filename ISO | nightfold | 217 | `abb512642ea1` | yes |
| 49 | 13290-13485 | `modules/_gpt/runs/2026-05-03_merge-hackerstory.md` | 2026-05-03; filename ISO | merge/dossier | 189 | `f9af533db85c` | yes |
| 50 | 13490-13744 | `modules/_gpt/runs/2026-05-04_nightfold.md` | 2026-05-04; filename ISO | nightfold | 248 | `71329d07aea6` | yes |
| 51 | 13749-14126 | `modules/_gpt/runs/2026-05-07_where-the-rules-live.md` | 2026-05-07; filename ISO | policy map | 372 | `4648a3821efc` | yes |

## Chronological Traversal

### Undated Control

- Block 1: `README.md`  
  Role: folder contract / control surface.  
  Note: included as contextual metadata, not as a dated dossier run.

### 2026-04-15

- Block 2: `2026-04-15_repo-transition-plan.md`  
  Role: repo transition policy.  
  Primary signal: establishing repo-native sources as long-term continuity over uploaded chat files.

### 2026-04-16

- Block 3: `2026-04-16_mornest.md`  
  Role: Mornest smoke-test.
- Block 4: `2026-04-16_midpulse.md`  
  Role: Midpulse smoke-test.
- Block 5: `2026-04-16_nightfold.md`  
  Role: Nightfold run.
- Block 6: `2026-04-16_merge-hackerstory.md`  
  Role: merge_hackerstory continuous dossier run.

### 2026-04-20

- Block 7: `2026-04-20_mornest.md`  
  Role: Mornest cycle.
- Block 8: `2026-04-20_midpulse.md`  
  Role: Midpulse cycle.
- Block 9: `2026-04-20_nightfold.md`  
  Role: Nightfold cycle.
- Block 10: `2026-04-20_merge-hackerstory.md`  
  Role: merge_hackerstory continuous dossier run.

### 2026-04-21

- Block 11: `2026-04-21_merge-hackerstory.md`  
  Role: merge_hackerstory continuous dossier run.
- Block 12: `260421-postprune-initiation-context.md`  
  Role: reinitiation / post-prune context.  
  Caution: date comes from compact filename evidence, not a conventional ISO filename.

### 2026-04-23

- Block 13: `2026-04-23-middayrun.md`  
  Role: midday dossier run.

### 2026-04-24

- Block 14: `2026-04-24_session_initiation_lillfrugan.md`  
  Role: Lillfrugan initiation run.
- Block 15: `24 April 2026-afternoon-run-sagas-procedural-mysticism`  
  Role: afternoon run / sagas / procedural mysticism.

### 2026-04-25

- Block 16: `2026-04-25-mn-dawnrun.md`  
  Role: dawn run.
- Block 17: `25 APRIL 2026, midday run.md`  
  Role: midday run.
- Block 18: `25 April 2026, night run.md`  
  Role: night run.

### 2026-04-26

- Block 19: `26-04-2026-sst-legacy-session`  
  Role: SST legacy session.
- Block 20: `26 April 2026`  
  Role: Session 8b continuation.
- Block 21: `merge-nightfold-session8.md`  
  Role: Nightfold / Session 8 run.  
  Time evidence: `23:07 CEST`.
- Block 22: `merge-nightfold-extrascope.md`  
  Role: revised / extra-scope Nightfold correction.  
  Time evidence: `23:18 CEST`.

### 2026-04-27

- Block 23: `2026-04-27_merge-hackerstory.md`  
  Role: merge_hackerstory continuous dossier run.
- Block 24: `2026-04-27_sediment-assessment.md`  
  Role: sediment assessment.

### 2026-04-28

- Block 25: `2026-04-28_mornest.md`  
  Role: Mornest cycle.
- Block 26: `2026-04-28_midpulse.md`  
  Role: Midpulse cycle.
- Block 27: `2026-04-28_nightfold.md`  
  Role: Nightfold cycle.
- Block 28: `2026-04-28_merge-hackerstory.md`  
  Role: merge_hackerstory continuous dossier run.

### 2026-04-29

- Block 29: `2026-04-29_mornest.md`  
  Role: Mornest cycle.
- Block 30: `2026-04-29_midpulse.md`  
  Role: Midpulse cycle.
- Block 31: `2026-04-29_nightfold.md`  
  Role: Nightfold cycle.
- Block 32: `2026-04-29_lillfrugan-signal-layer.md`  
  Role: Lillfrugan signal-layer pass.
- Block 33: `2026-04-29_merge-hackerstory.md`  
  Role: merge_hackerstory continuous dossier run.

### 2026-04-30

- Block 34: `2026-04-30_mornest.md`  
  Role: Mornest cycle.
- Block 35: `2026-04-30_lillfrugan-drift-early-cycle.md`  
  Role: Lillfrugan drift early-cycle pass.
- Block 36: `2026-04-30_midpulse.md`  
  Role: Midpulse cycle.
- Block 37: `2026-04-30_lillfrugan-drift-mid-cycle-pressure.md`  
  Role: Lillfrugan drift mid-cycle pressure pass.
- Block 38: `2026-04-30_lillfrugan-drift-evening-convergence.md`  
  Role: Lillfrugan drift evening convergence pass.
- Block 39: `2026-04-30_nightfold.md`  
  Role: Nightfold cycle.
- Block 40: `2026-04-30_lillfrugan-drift-nightfall-integration.md`  
  Role: Lillfrugan drift nightfall integration pass.
- Block 41: `2026-04-30_merge-hackerstory.md`  
  Role: merge_hackerstory continuous dossier run.

### 2026-05-01

- Block 42: `2026-05-01_merge-hackerstory.md`  
  Role: merge_hackerstory continuous dossier run.

### 2026-05-02

- Block 43: `2026-05-02_midpulse.md`  
  Role: Midpulse cycle.
- Block 44: `2026-05-02_nightfold.md`  
  Role: Nightfold cycle.
- Block 45: `2026-05-02_merge-hackerstory.md`  
  Role: merge_hackerstory continuous dossier run.

### 2026-05-03

- Block 46: `2026-05-03_mornest.md`  
  Role: Mornest cycle.
- Block 47: `2026-05-03_midpulse.md`  
  Role: Midpulse cycle.
- Block 48: `2026-05-03_nightfold.md`  
  Role: Nightfold cycle.
- Block 49: `2026-05-03_merge-hackerstory.md`  
  Role: merge_hackerstory continuous dossier run.

### 2026-05-04

- Block 50: `2026-05-04_nightfold.md`  
  Role: Nightfold cycle.

### 2026-05-07

- Block 51: `2026-05-07_where-the-rules-live.md`  
  Role: rule-location / policy-map run.

## Content Status

`2026-05-11_all-runs-dossier.md` already functions as the chronological content bundle for these 51 underlying files.

This traversal therefore adds navigational and validation structure rather than producing another content copy. If a future combined chronological content file is needed across both the legacy dossiers and the all-runs dossier, this file can be used as the verified block map for the all-runs side.
