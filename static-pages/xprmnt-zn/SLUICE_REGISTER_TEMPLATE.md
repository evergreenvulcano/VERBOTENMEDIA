# XPRMNT-ZN sluice register template

Status: template with placeholder examples; not a public-ready registry.

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

## Placeholder entries

### praktikanten

```yaml
name: praktikanten
source_area: repo public writings + experimental sandbox + source/runtime material; Drive/XPRMNT-ZN relation not imported
repo_destination: static-pages/xprmnt-zn/praktikanten.md, future public representation if approved
status: active repo body; future XPRMNT-ZN representation candidate
public_readable: true, as status note and existing repo traces
public_ready: false, for fuller XPRMNT-ZN representation
allowed_use: status pointer, orientation, prevention of reinvention
forbidden_use: Drive import, mascot invention, prose rewrite, source-anchor dump
next_human_decision: decide what repo-grounding is sufficient before public representation expands
related_public_page: xprmnt-zn.html
review_dependency: public writings and source/runtime boundary review
forlagsdeckaren_dependency: yes — relation to Förlagsdeckaren must be thought in parallel
stop_condition: source boundary unclear or representation starts replacing literary work
```

### wise-consultant

```yaml
name: wise-consultant
source_area: modules/method-thought-figure + consultant/thought-figure repo traces; external workspace not imported
repo_destination: static-pages/xprmnt-zn/wise-consultant.md, future Norrotiv/XPRMNT pointer if approved
status: active consultant/thought-figure body; pointer/status-only candidate
public_readable: true, as status note and repo source pointer
public_ready: false, for public figure package
allowed_use: pointer language, consultative boundary, Norrotiv-adjacent routing
forbidden_use: private mail publication, Drive path exposure, proof-of-concept dump, repo-native authority claim
next_human_decision: decide whether Wise Consultant belongs in public XPRMNT-ZN, Norrotiv, or remains source-layer only
related_public_page: xprmnt-zn.html
review_dependency: repo-grounding and consultant-source boundary review
forlagsdeckaren_dependency: yes — consultative role must be read beside Förlagsdeckaren machinery
stop_condition: role starts speaking as canon without review
```

### bankett-astrologi-radio

```yaml
name: bankett-astrologi-radio
source_area: pending paste from latest astrology/radio bankett; older bankett exists as historical reference but is not imported
repo_destination: banketter.html index candidate, future static page only after review
status: public-bound in principle; source review and static-render decision still required
public_readable: false, except as placeholder status
public_ready: false
allowed_use: receiver slot, method planning, readiness checklist, candidate tracking
forbidden_use: generated bankett prose, fake excerpt, unreviewed Drive import, premature static render
next_human_decision: locate source material, confirm provenance, and run human/GPT review before render
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
