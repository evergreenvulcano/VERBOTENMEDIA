# Night Material Up 01

Date: 2026-06-12

Branch: `night-material-up-01-2026-06-12`

## Valda Materialytor

- Del 1: `static-pages/writings/`
- Del 2: `static-pages/xprmnt-zn/`

## Varför De Valdes

`static-pages/writings/` var redan repo-lämplig och rik på läsbara markdowntexter. Den behövde en tydligare första läsordning, inte ny import.

`static-pages/xprmnt-zn/` valdes som nyare materialyta eftersom den redan innehöll repo-lämpliga statusnoter men behövde bli mer synlig som publik/semipublik materialyta.

## Filer Ändrade

- `writings.html`
- `xprmnt-zn.html`
- `static-pages/xprmnt-zn/README.md`

## Filer Skapade

- `static-pages/writings/INDEX.md`
- `static-pages/writings/PARKED.md`
- `_codex/runs/2026-06-12_night_material_up_01.md`

## Del 1 — Material Som Lyftes

Första läsordningen lyfter sex befintliga texter:

1. `static-pages/writings/forlagsdeckaren.md`
2. `static-pages/writings/forlagsdeckaren-praktikanten-intro.md`
3. `static-pages/writings/forlagsdeckaren-del-6-registreringen-har-stangt.md`
4. `static-pages/writings/tystnad-som-publiceringsform.md`
5. `static-pages/writings/membransch-granssnitt.md`
6. `static-pages/writings/forlagsdeckaren-praktikanten-outro.md`

This is intentionally not the whole Writings architecture. It is a small first path.

## Del 2 — XPRMNT-ZN Material Cards

Five existing repo-suitable XPRMNT-ZN entrances were made easier to find:

1. `static-pages/xprmnt-zn/praktikanten.md`
2. `static-pages/xprmnt-zn/wise-consultant.md`
3. `static-pages/xprmnt-zn/banketter.md`
4. `static-pages/xprmnt-zn/SLUICE_REGISTER_TEMPLATE.md`
5. `docs/doctrine/xprmnt-zn-membrane.md`

They are presented as cards with title, orientation, status, and link. No Drive apparatus, Public Nerve, Quest Engine, Game Layer, Casting, Diplomacy, or Banquet material was imported.

## Del 3 — Martin Surface

Skipped. PR #62's Martin material was not present in this branch's working base.

## Material Som Parkerades

See `static-pages/writings/PARKED.md`.

Parked groups:

- chronological Förlagsdeckaren / shortstory sequence
- satellite texts
- analysis / lexicon / fragments

The strongest candidates for later work were parked because this pass needed one coherent reading surface, not a full writings IA.

## Kontroller Som Kördes

- Inventoried `static-pages/writings/`.
- Checked existing `writings.html` `data-md-path` targets.
- Inventoried `static-pages/xprmnt-zn/`.
- Ran local path/link sanity checks after edits.
- Ran HTTP smoke check against local static server:
  - `writings.html` returned 200 and contained `Start Here`.
  - `xprmnt-zn.html` returned 200 and contained `Readable material entrances`.
- Attempted Playwright browser smoke check, but the local Playwright Chromium executable was not installed in this environment.
- Verified Git diff before commit.

## Kvarstående Risker

- The wider Writings folder is still too broad for one flat list.
- Some readable texts need sequence cards before they should be promoted in the public list.
- `forlagsdeckaren.md` still contains a link to `declaration-of-intent.md`, but that draft-status support text was not imported in this pass after course correction.
- This pass improves discoverability; it does not solve the whole writings architecture.
- XPRMNT-ZN cards are pointers only; they do not populate the sluice or activate public functions.

## Nästa 3 Konkreta Materialbatchar

1. **Förlagsdeckaren sequence batch**  
   Organize `forlagsdeckaren-del-1.md` through `forlagsdeckaren-del-4.md` plus `shortstory-vm-4.md` to `shortstory-vm-6.md` into chronological/publication order.

2. **Satellite batch**  
   Give `abdikering-under-bordet.md`, `dawkin-danielson-burning-man-black-rock-city.md`, `vmaptb-mail-flempo-jens.md`, and `forlagsdeckaren-lectures-and-workshops.md` a clear satellite relation note.

3. **XPRMNT-ZN sluice population batch**  
   Choose 3-5 already reviewed repo-suitable XPRMNT-ZN status entries and populate the sluice register without importing originals.
