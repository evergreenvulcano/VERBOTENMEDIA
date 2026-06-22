# XPRMNT-ZN sluice register template

Status: public method template with historical and current examples.

Use this file to stage candidate movements from Drive / XPRMNT-ZN toward repo representation. Placeholder entries below are examples of structure, not import decisions.

## Entry schema

```yaml
name:
source_area:
repo_destination:
status:
public_readable:
public_ready:
allowed_use:
forbidden_use:
next_human_decision:
related_public_page:
review_dependency:
forlagsdeckaren_dependency:
stop_condition:
```

## Example entries

### praktikanten

```yaml
name: praktikanten
source_area: repo public writings + experimental sandbox + source/runtime material; Drive/XPRMNT-ZN relation not imported
repo_destination: static-pages/xprmnt-zn/praktikanten.md
status: published working body; public passage figure
public_readable: true
public_ready: true, as a non-interactive public figure and preserved process body
allowed_use: public orientation, reading path, chronology, documented passage between work and fiction
forbidden_use: Drive import, mascot invention, prose rewrite, source-anchor dump
next_human_decision: decide only whether a later visual edition is useful
related_public_page: xprmnt-zn.html
review_dependency: public writings and source/runtime boundary review
forlagsdeckaren_dependency: yes — relation to Förlagsdeckaren must be thought in parallel
stop_condition: source boundary unclear or representation starts replacing literary work
```

### wise-consultant

```yaml
name: wise-consultant
source_area: modules/method-thought-figure + consultant/thought-figure repo traces; external workspace not imported
repo_destination: static-pages/xprmnt-zn/wise-consultant.md
status: public method figure; non-interactive
public_readable: true
public_ready: true, as a small method figure rather than a service
allowed_use: consultative reading method, Norrotiv-adjacent routing, XPRMNT-ZN context
forbidden_use: private mail publication, Drive path exposure, proof-of-concept dump, repo-native authority claim
next_human_decision: decide only whether additional representative method objects should be linked
related_public_page: xprmnt-zn.html
review_dependency: repo-grounding and consultant-source boundary review
forlagsdeckaren_dependency: yes — consultative role must be read beside Förlagsdeckaren machinery
stop_condition: role starts speaking as canon without review
```

### bankett-astrologi-radio

```yaml
name: bankett-astrologi-radio
source_area: bankett-/ceremonipaket dated 2026-06-10
repo_destination: static-pages/banketter/bankett-radiostjarna-utan-zodiak_2026-06-10.md
status: published ceremony; revisable time marker
public_readable: true
public_ready: true
allowed_use: ceremonial reading, XPRMNT-ZN chronology, public time marker
forbidden_use: treating the ceremony as changelog, roadmap, or final doctrine
next_human_decision: none required for current publication; later revision remains possible
related_public_page: banketter.html
review_dependency: paste exists; human/GPT formalization; provenance note; static render decision
forlagsdeckaren_dependency: possible — depends on ceremony relation to publishing-world chronology
stop_condition: material absent or provenance unclear
```

### bankett-efterhandsmaskinen

```yaml
name: bankett-efterhandsmaskinen
source_area: bankett celebrating Efterhandsmaskinen; explicitly not erotiska satelliter
repo_destination: banketter.html index candidate, future static page only after review
status: public-bound in principle; source review and static-render decision still required
public_readable: false, except as placeholder status
public_ready: false
allowed_use: receiver slot, method planning, readiness checklist, candidate tracking
forbidden_use: generated bankett prose, fake excerpt, protected-source import, premature static render
next_human_decision: locate source material, confirm provenance, and run human/GPT review before render
related_public_page: banketter.html
review_dependency: source exists; human/GPT formalization; provenance note; static render decision
forlagsdeckaren_dependency: yes — relation to Efterhandsmaskinen and publishing-world chronology must be preserved
stop_condition: source boundary unclear or candidate is confused with erotiska satelliter
```
