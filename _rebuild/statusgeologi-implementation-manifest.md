# Statusgeologi implementation manifest

Status: HYBRID selected and implemented on 2026-06-26.

This manifest records the bounded implementation contract and the route that was authorized.

## Shared publication body

Source prototype:

`_rebuild/statusgeologi-underhallningsmode-prototype.html`

Shared requirements:

- preserve the seven-layer text sequence;
- remove the prototype bar and Human-in-the-loop decision footer from the live body;
- add normal Verboten Media navigation and footer;
- add a visible provenance/status footer inside the work;
- use ordinary ASCII hyphens instead of em dashes;
- remain fully static;
- validate at desktop and mobile widths;
- validate root-relative links after choosing destination.

## HYBRID route - implemented

Proposed live files:

- `statusgeologi.html` - new standalone public body;
- `underhallningsmode.html` - add one route section only;
- `css/style.css` - add `.statusgeologi-*` styles only;
- `_rebuild/statusgeologi-publication-note.md` - record source boundary and public transformation.

Proposed Underhållningsmode section:

Heading:

`I do not want to learn a status system`

Body function:

Name the reader's refusal and open the static descent without explaining the complete doctrine first.

Destination:

`statusgeologi.html`

Placement:

After `Show me the machine room without leaking it` and before `I want to get lost`.

This placement distinguishes the new route from:

- fiction-first reading;
- proof/work-body reading;
- generic public labyrinth;
- contribution.

Provenance footer fields:

- source: `Status som negativ formgivning - före / efter / nu`;
- transformation: condensed static render;
- public status: Underhållningsmode passage / non-canon;
- allowed use: reading and bounded discussion;
- forbidden use: complete replacement for the PDF, universal status standard, generic style model;
- next passage: human revision or explicit promotion decision.

## XPRMNT route

Proposed live files:

- `static-pages/xprmnt-zn/statusgeologi/index.html` - new standalone specimen;
- `xprmnt-zn.html` - add one existing-form card;
- `static-pages/xprmnt-zn/statusgeologi.md` - provenance and status note;
- optional specimen-local stylesheet, or narrowly scoped `.statusgeologi-*` styles in `css/style.css`.

Proposed XPRMNT card:

Title:

`Statusgeologi 001`

Status:

`publicerat metodspecimen / kondenserad render / ej kanon`

Function:

`En vertikal undersökning av status som förbjuden kollaps, passage och sediment.`

Placement:

After `HackerStory` and before `Wise Consultant`.

This makes it a specimen/method body after the existing large readable bodies and before the method figure, ceremony, utility, and operational pointers.

Provenance note fields:

- external source filename;
- source boundary;
- selected copy transformation;
- relation to the supplied volcano model;
- allowed and forbidden use;
- public-ready decision date;
- next human review.

## Verification for either route

- no horizontal overflow at 1280 px and a narrow mobile viewport;
- seven layers render in intended order;
- navigation and footer links resolve;
- provenance note is visible and legible;
- no console errors;
- no JavaScript added for the publication;
- no em dash in changed files;
- no unrelated worktree content modified;
- final diff reviewed specifically around the user's existing uncommitted `underhallningsmode.html` changes.
