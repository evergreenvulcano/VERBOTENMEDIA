# VERBOTEN MEDIA

VERBOTEN MEDIA is a static public site, publishing membrane, and agent-readable production environment for a literary work and its associated experiments.

It is not a second brain, AIOS, life operating system, productivity machine, SaaS concept, or generic content platform. It can use skulls, brains, machines, and publishing apparatuses as literary objects. The repo itself is a bounded production and publication environment.

## Start here

Public entrances:

- [`index.html`](index.html) - landing page and primary routes.
- [`martin.html`](martin.html) - Martin Nygren as authorial person.
- [`verboten-media.html`](verboten-media.html) - Verboten Media as publishing body / literary machine / entertainment apparatus.
- [`praktikanten.html`](praktikanten.html) - Praktikanten as literary figure, runtime, working body, book, and evidence chain.
- [`praktikanten-boken.html`](praktikanten-boken.html) - Praktikanten as public book body with chapter order and reading entrance.
- [`xprmnt-zn.html`](xprmnt-zn.html) - public experimental passage for specimens, method figures, ceremonies, utilities, and boundary work.
- [`underhallningsmode.html`](underhallningsmode.html) - static external text-as-interface for Förlagsdeckaren; entertainment, not content.
- [`banketter.html`](banketter.html) - published ceremonial time markers, beginning with *Bankett för en radiostjärna utan zodiak*.
- [`contact.html`](contact.html) / [`contribute.html`](contribute.html) - routing for publishing inquiries, proposals, repo questions, and bounded PRs.

Additional public site surfaces:

```text
writings.html               Public writings registry
experimental-sandbox.html   Existing public experimental markdown registry
research-specimens/hackerstory/  Published fragmentary HackerStory HTML artifacts
capsules.html               Short public-facing knowledge/status units
skalle.html                 Diegetic skull/brain-adjacent public surface
runtext.html                Static running-text renderer
associated-projects.html    Neutral public relation map
lectures-workshops.html     Public archive of inquiry formats and material
```

## Repo surfaces

```text
root *.html                 Public site shell and static pages
css/style.css               Site design system
js/main.js                  Minimal static rendering/navigation behavior
utility_prompts/            Public utility/quest layer for routing external material through editorial operations
static-pages/writings/      Public-ready or published writings surfaced by writings.html
static-pages/praktikanten-book/ Published Praktikanten book chapters surfaced by praktikanten-boken.html
static-pages/experimental-sandbox/  Public-readable experimental markdown surfaces
static-pages/xprmnt-zn/     Public figures, ceremonies, passage notes, and sluice templates for XPRMNT-ZN
research-specimens/         Public artifacts whose fragmentary/process status is part of their form
inbox/writings/             Staging; not canon by default
modules/                    Public source, development, machine-room, and active repo bodies; not every file needs a promoted HTML entrance
modules/_gpt/               Operational memory, runs, source anchors, and proposals
_rebuild/                   Current rebuild diagnostics, syscall contracts, and operator decision surfaces
docs/                       Editorial, publishing, orientation, and method contracts
apps/research-ops/          Private operational tooling / sidecar app context
```

## Publication presumption

Material in the leading public branch is presumed publishable. Publication can
mean literary work, fragment, research specimen, method object, ceremony,
process artifact, public working body, or archival remainder.

Concrete exceptions are private or personal data, credentials, local machine
paths, unclear rights, explicitly withheld material, and legacy public copy
that contradicts current doctrine.

Use status to name the kind of public object:

- `published`
- `research specimen`
- `public method figure`
- `living and revisable`
- `ceremony`
- `process artifact`
- `source engine`
- `machine room`
- `legacy`
- `active repo body`
- `private-custody candidate`
- `protected`
- `non-import`

Do not use status merely to repeat anxiety about public existence. Continue to
distinguish reading, citing, rendering, moving, publishing, prompt-feeding,
summarizing, and transforming.

## Drive / external custody

Drive and local external workspaces may contain originals, XPRMNT-ZN material, bankett packages, contamination zones, protected material, or private-custody candidates. Do not bulkimport them. Use `_rebuild/XPRMNT_ZN_REPO_SLUICE.md` for stepwise representation. If a task needs external material, read register/topology/blocklist files first and document the boundary before producing public surfaces.

## How humans can interact

- Readers can simply read.
- Publishing inquiries go through Verboten Media.
- Authorial/interview/context questions can be routed to Martin.
- Idea tests, bounded PRs, and collaborator proposals use the contact and contribution routes; they reach Verboten Media only if they become publishing, world, or canon questions.
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
