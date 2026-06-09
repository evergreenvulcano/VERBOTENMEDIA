# VERBOTENMEDIA

VERBOTENMEDIA is a public proof-of-work surface for AI-assisted publishing, editorial systems, literary system design, and semantic infrastructure.

This is not a conventional code library. It is a working repository for text, systems, publishing surfaces, and AI-assisted method. The current tree is meant to be readable; the deeper history remains available through git.

Förlagsdeckaren was born here. Its source material, runtime logic, public fragments, and editorial machinery are part of the repository's core evidence.

## Start Here

- [`case-studies/`](case-studies/) - the quickest human entry point.
- [`docs/orientation.md`](docs/orientation.md) - a short map of what the repository is and how to read it.
- [`static-pages/`](static-pages/) - canonical public markdown content.
- Root HTML/CSS/JS - the current static public site surface.

## Main Areas

```text
README.md       Public orientation.
case-studies/   Short proof-of-work cases for human readers.
docs/           Publishing, editorial, and repository orientation specs.
static-pages/   Canonical public markdown surfaces.
modules/        Source engine and historical machine room.
inbox/          Staged conversion candidates; not canon by default.
apps/           Private operational tooling.
archive/        Current-tree parking for material kept out of first reading.
_rebuild/       Local notes from repository presentation passes.
```

## Reading Rule

`modules/` is source engine and historical machine room. It contains origins, runs, old systems, proof-of-work, and sediment. It is important, but it is not the primary onboarding surface.

Read the case studies and orientation docs first. Enter `modules/` when you want provenance, machinery, and source pressure.

## Local Preview

The public site is static. Open the HTML files directly, or run a small static server:

```bash
python3 -m http.server 8000
```

The Docker setup is still available for consistent preview:

```bash
docker compose up
```
