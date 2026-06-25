# Operator decision brief - Statusgeologi

Date: 2026-06-26

Branch: `main`

Status: decided and implemented.

Decision: `HYBRID`, selected by Martin on 2026-06-26.

Implementation:

- `statusgeologi.html`
- one new static reader-position in `underhallningsmode.html`
- scoped `.statusgeologi-*` rules in `css/style.css`
- `_rebuild/statusgeologi-publication-note.md`

## What exists now

The PDF `status_negativ_formgivning_fore_efter.pdf` has been selected and transformed into an isolated static prototype.

The publication body is a long vertical descent through seven status layers:

1. intake;
2. review;
3. candidate;
4. source;
5. archive;
6. klenod;
7. canon.

Each layer begins with the collapse it must prevent. The design takes inspiration from the supplied volcano model: pressure becomes passage, passage becomes sediment, and sediment remains capable of return.

The prototype does not import the PDF as a public original and does not reproduce its design. It condenses selected finished copy into a new static public form.

## Artifacts for review

- `_rebuild/statusgeologi-underhallningsmode-prototype.html`
- `_rebuild/statusgeologi-publication-decision.html`
- `_rebuild/statusgeologi-publication-decision.md`

All are `noindex` decision artifacts. They contain no JavaScript, tracking, personalization, quiz, feed, or chatbot behavior.

## Decision record

### HYBRID - recommended

Publish the body as an Underhållningsmode reader-position:

`Jag vill inte lära mig ett statussystem.`

`Bra. Gå nedåt.`

The bottom of the publication receives a restrained XPRMNT-style provenance note identifying source, transformation, allowed use, and forbidden use.

Consequence: the reader's resistance becomes the literary entrance, while the source boundary remains explicit.

Exact live-file effect:

- add one standalone public HTML body at repo root;
- add one small static route section to `underhallningsmode.html`;
- add narrowly scoped CSS to `css/style.css`;
- do not add an XPRMNT-ZN card;
- do not alter existing Underhållningsmode reader positions beyond inserting the new route into their current sequence;
- preserve the user's current uncommitted Underhållningsmode changes.

### XPRMNT

Publish the body as `Statusgeologi 001`, a public XPRMNT-ZN specimen.

Consequence: the object receives the clearest status and provenance, but the direct address to the reluctant reader becomes secondary.

Exact live-file effect:

- add one standalone public HTML body under `static-pages/xprmnt-zn/statusgeologi/`;
- add one existing-form card to `xprmnt-zn.html`;
- add a status/provenance note in `static-pages/xprmnt-zn/`;
- add narrowly scoped CSS to the specimen or shared stylesheet;
- do not change `underhallningsmode.html`.

### STOP

Keep the prototype in `_rebuild/` and make no public change.

Consequence: the completed form remains a decision artifact and the selected PDF is not yet published.

## Recommendation

Choose `HYBRID`.

The reason is not convenience. Underhållningsmode is the stronger literary invention because it begins with an actual reader-position rather than an object label. XPRMNT-ZN contributes the necessary provenance discipline without needing to become the object's public home.

## Boundaries after approval

Whichever route is selected:

- no PDF bulk import;
- no claim that the condensed body is the complete PDF;
- no treatment of the publication as the project's universal status standard;
- no JavaScript or behavioral interaction;
- no rewrite of the source PDF;
- no automatic canon status;
- no use of the source as a generic style bank;
- no alteration of unrelated existing worktree changes.

## Activation result

Martin selected `HYBRID`. The gate is closed and the selected route has been implemented.
