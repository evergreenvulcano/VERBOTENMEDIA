# VERBOTEN MEDIA

VERBOTEN MEDIA is a static public site, publishing membrane, and agent-readable production environment for a literary work and its associated experiments.

It is not a second brain, AIOS, life operating system, productivity machine, SaaS concept, or generic content platform. It can use skulls, brains, machines, and publishing apparatuses as literary objects. The repo itself is a bounded production and publication environment.

## Start here

Public entrances:

- [`index.html`](index.html) — landing page and primary routes.
- [`martin.html`](martin.html) — Martin Nygren as authorial person.
- [`verboten-media.html`](verboten-media.html) — Verboten Media as publishing body / literary machine / entertainment apparatus.
- [`norrotiv.html`](norrotiv.html) — public-readable and usable but deliberately unfinished interaction surface for ideas, bounded proposals, PRs, and collaborator traffic.
- [`xprmnt-zn.html`](xprmnt-zn.html) — XPRMNT-ZN public afterimage and repo sluice; represented stepwise here, not bulkimported here.
- [`underhallningsmode.html`](underhallningsmode.html) — static external text-as-interface for Förlagsdeckaren; entertainment, not content.
- [`banketter.html`](banketter.html) — receiver structure for future chronological/status renderings; first candidate waits for paste/review.
- [`contact.html`](contact.html) / [`contribute.html`](contribute.html) — routing for publishing inquiries, Norrotiv ideas, repo questions, and bounded PRs.

Additional public site surfaces:

```text
writings.html               Public writings registry
experimental-sandbox.html   Existing public experimental markdown registry
capsules.html               Short public-facing knowledge/status units
skalle.html                 Diegetic skull/brain-adjacent public surface
runtext.html                Static running-text renderer
associated-projects.html    Linked initiatives
lectures-workshops.html     Public offerings
```

## Repo surfaces

```text
root *.html                 Public site shell and static pages
css/style.css               Site design system
js/main.js                  Minimal static rendering/navigation behavior
utility_prompts/            Public utility/quest layer for routing external material through editorial operations
static-pages/writings/      Public-ready or published writings surfaced by writings.html
static-pages/experimental-sandbox/  Public-readable experimental markdown surfaces
static-pages/xprmnt-zn/     Safe representational layer and sluice register templates for XPRMNT-ZN afterimages/status notes
inbox/writings/             Staging; not canon by default
modules/                    Source, development, machine-room, and active repo bodies; public-readable in GitHub but not automatically public-ready
modules/_gpt/               Operational memory, runs, source anchors, and proposals
_rebuild/                   Current rebuild diagnostics, syscall contracts, and operator decision surfaces
docs/                       Editorial, publishing, orientation, and method contracts
apps/research-ops/          Private operational tooling / sidecar app context
```

## Status language

Placement first: material in a public GitHub repo is public-readable.

Status second: public-readable is not the same as public-ready. Use labels such as:

- `public-ready`
- `public-readable-but-not-public-ready`
- `source engine`
- `machine room`
- `staging`
- `legacy`
- `active repo body`
- `private-custody candidate`
- `protected`
- `non-import`

Use last: distinguish reading, citing, rendering, moving, publishing, prompt-feeding, summarizing, and transforming.

## Drive / external custody

Drive and local external workspaces may contain originals, XPRMNT-ZN material, bankett packages, contamination zones, protected material, or private-custody candidates. Do not bulkimport them. Use `_rebuild/XPRMNT_ZN_REPO_SLUICE.md` for stepwise representation. If a task needs external material, read register/topology/blocklist files first and document the boundary before producing public surfaces.

## How humans can interact

- Readers can simply read.
- Publishing inquiries go through Verboten Media.
- Authorial/interview/context questions can be routed to Martin.
- Idea tests, DragonKeep-like adjacency, bounded PRs, and collaborator proposals go through Norrotiv first; they route to Verboten Media only if they become publishing/world/canon questions.
- Repo work should clarify status and surface boundaries rather than importing everything.

Contact: [`contact.html`](contact.html).

## Use the machine

This repo can also be used as an editorial capacity battery: plug in material, choose a voice shield, choose an operation, choose a modulator, and get a playable v0 back.

Start with [`utility_prompts/00_NORTHSTAR_CAPACITY_BATTERY_AND_QUEST_LAYER.md`](utility_prompts/00_NORTHSTAR_CAPACITY_BATTERY_AND_QUEST_LAYER.md). Utility prompts are the repo's public interface toward other people's material, not generic helper snippets. The first utility quest is [`UQ_PERIODICAL_MACHINE__material_to_issue_v0.md`](utility_prompts/UQ_PERIODICAL_MACHINE__material_to_issue_v0.md): give the machine a material cluster and ask for a possible periodical issue v0.

## Local preview

The site is fully static. No build step is required.

Preferred Docker preview:

```bash
docker compose up
```

Then open `http://localhost:8080`.

Non-Docker preview:

```bash
python3 -m http.server 8000
```

or open HTML files directly in a browser.

## Agent contract

See [`AGENTS.md`](AGENTS.md). During usability passes explicitly authorized by the live user, Codex may build concrete public/static structure while preserving source/protected boundaries. Human-in-the-loop output must include an operator decision brief, not only audit files.
