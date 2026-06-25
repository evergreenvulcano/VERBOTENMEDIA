# Post-merge next goals plan

Detta dokument är en strategisk planeringsyta efter rebuilden, banketten och About-MVP:n. Det är inte ett implementationsmandat. Det föreslår större arbetsprogram för nästa meningsfulla fas av Verboten Media `main`, men inget program nedan får genomföras utan ett separat, smalt `@goal`.

Planen utgår från att `main` och `origin/main` matchar commit `df9b8c5`, där den publika hierarkin är omviktad, About är klickbar ansvarskarta och rebuild-kön är uttömd.

## 1. Post-merge state

`main` är nu en fungerande offentlig statisk publiceringskropp snarare än en materialhög som väntar på form. Den har flera tydliga organ:

- startsidan erbjuder först läsning, sedan Underhållningsmode, därefter huvudingångar och sekundära routes;
- Writings har reading paths som första curatoriska tröskel, filter/register därefter och Public Nerve som sekundärt kuraterat kluster;
- XPRMNT-ZN visar materialkroppar först, andra publika former i mitten och operativa pek sist;
- Praktikanten har monumental form och fungerar som modell för förtjänad offentlig kropp, inte som template;
- Underhållningsmode öppnar med läsarvägran och förblir statisk text-as-interface;
- Banketter är etablerade som ceremoniell tid, inte blogg, kalender eller changelog;
- Martin och Contact / Contribute är flyttade till About-zonen;
- `about.html` är en minimal ansvarskarta som skiljer publiceringskropp, ansvarig författarperson, kontakt och återgång till verket;
- rebuild-diagnoserna är bevarade i `_rebuild/` som besluts- och revisionsyta.

Det nya läget är därför inte brist på entréer. Det nya läget är ett mer krävande läsproblem: hur hjälper sajten en människa att välja en väg genom befintliga kroppar utan att platta ut dem till katalog, onboarding eller content strategy?

Nästa fas bör behandla Verboten Media som en publicerad kropp som nu behöver läsarkapacitet över tid. Det betyder inte mer material i första hand. Det betyder bättre relation mellan lässtart, lässekvens, dossier, specimen, ceremoni och ansvar.

## 2. What is now closed

Följande arcs är genomförda och ska inte öppnas om utan konkret friktion:

- **Homepage hierarchy pass.** Writings har fått första publika läshandling. Martin är inte längre primär ankomstkropp.
- **Writings reading-path reweight.** Reading paths står ensam som första curatoriska tröskel före registerlogik.
- **XPRMNT-ZN card order.** Fulla materialkroppar ligger före metodfigurer, ceremonier, utilities och operativa pek.
- **Praktikanten model pass.** Praktikanten är normbildande som princip, inte mall för andra ytor.
- **Underhållningsmode front pass.** Sidan öppnar med `I do not want to read` och har inte blivit app, feed, chatbot eller CTA.
- **EHM and PRF-SRG diagnosis.** Båda har fått diagnostisk behandling. PRF-SRG ska inte byggas om. EHM kräver läsarbeslut före eventuell ny portal.
- **Bankett form clarification.** Två publicerade banketter visas. Nästa bankett saknar datum med avsikt.
- **About navigation and MVP.** About är klickbar meta-yta och ansvarskarta. Martin och Contact ligger kvar under den.
- **Mobile contact overflow.** Den kända lilla kontaktmejl-defekten är åtgärdad.

Det betyder: nästa fas ska inte vara en andra rebuild-kö. Den ska välja ett större program som gör den nuvarande offentliga kroppen mer användbar utan att omförhandla varje nyligen stängd nivå.

## 3. Remaining strategic tensions

Följande är inte buggar. De är fält för framtida arbete.

1. **Lässtart kontra register.** Writings är mer ordnat än före rebuilden, men den verkliga läsarkapaciteten ligger fortfarande i hur reading paths fungerar som faktisk karta, inte bara länk.
2. **Sekvens kontra kropp.** Förlagsdeckaren, Praktikanten, Public Nerve, EHM och PRF-SRG har olika typer av intern ordning. Sajten behöver kunna stödja flera läslogiker utan ny taxonomy.
3. **Dossierfullständighet kontra första steg.** EHM är starkt därför att det är komplett, men det gör också första lässteget tungt. HackerStory har specimenstyrka men kan senare behöva tydligare dossierfält.
4. **About som MVP.** About gör sitt jobb men är medvetet minimal. Den måste få mogna genom faktisk friktion, inte expanderas reflexmässigt till generisk `about us`.
5. **Underhållningsmode som frontlogik.** Sidan är originell men ännu inte fullt prövad som väg in för ovillig eller trött läsare. Den får inte bli produktbeteende.
6. **XPRMNT-ZN som membran.** Ordningen är förbättrad, men sidan måste fortsatt undvika att bli komplett katalog, produktportal eller förklärd Drive-import.
7. **Ceremoniell tid kontra drift.** Banketter har fungerande form. Just därför finns risken att formen börjar användas för ofta eller för tidigt.
8. **Underhåll utan byråkrati.** Rebuilden skapade bra diagnoser. Framtida auditvanor måste skydda statusgränser utan att bli ett nytt administrativt system.

## 4. Candidate next programs

### Program A: Curated reader architecture

**Purpose**

Bygga nästa fas kring hur en människa börjar läsa, fortsätter läsa och förstår relationen mellan verk, läsväg och register. Programmet ska göra reading paths till verklig läsarkapacitet, inte bara en korrekt placerad länk.

**Why now**

Rebuilden har redan lyft läsning på startsidan och gjort reading paths till första tröskel på Writings. Det gör läsarkartan till nästa Pareto-punkt. Om den fungerar bättre påverkar den hela sajten: Förlagsdeckaren, Praktikanten, Public Nerve, metodtexter, dossierkroppar och XPRMNT-ZN kan nås genom mer avsiktliga rörelser utan att nya publika kroppar skapas.

**Files/surfaces involved**

- `writings.html`
- `static-pages/writings/INDEX.md`
- `index.html`
- `underhallningsmode.html`
- `praktikanten.html`
- `xprmnt-zn.html`
- relevanta Writings-kort och deras befintliga destinationer
- `_rebuild/writings-reading-path-reweight-diagnosis.md`

**Risk**

Att en läsarkarta glider in i ny taxonomy, ny CMS-logik, fler labels, ny publiceringsstandard eller överförklarande onboarding. Det finns också risk att reading paths börjar lova mer sekvens än `static-pages/writings/INDEX.md` faktiskt bär.

**What must not be mixed in**

- nya publicerade texter;
- ändring av markdownstandard;
- rewrite av kortcopy eller prosa;
- ny kategoriapparat;
- automatiserad registry generation;
- generell redesign av Writings;
- kanonisering av texter enbart genom att de får läsväg.

**Smallest safe first @goal**

`READING_ARCHITECTURE_MAP_V0`

Diagnostisera den befintliga läsarkartan över `index.html`, `writings.html`, `static-pages/writings/INDEX.md`, `praktikanten.html`, `underhallningsmode.html` och `xprmnt-zn.html`. Skapa endast `_rebuild/reading-architecture-map.md`. Kartlägg vilka befintliga lässekvenser som är verkliga, vilka som bara är grupperade listor, vilka destinationer som fungerar som första läsning, och var läsaren tappar nästa steg. Föreslå inga nya texter och ändra inga publika filer.

**Suggested Codex model level**

High

### Program B: Dossier and specimen clarity

**Purpose**

Utveckla en mer precis förståelse för hur fulla dossierer, sviter och specimen ska läsas utan att alla får egna portaler. Programmet ska skilja mellan fullständig kropp, curated start, specimenfält och metodiskt källregister.

**Why now**

EHM, PRF-SRG och HackerStory har alla offentlig form men olika läsproblem. PRF-SRG är starkast i svitordning och ska lämnas i fred. EHM har skala och behöver möjligen en lässtart. HackerStory har specimenform och kan senare behöva tydligare intern dossierkänsla utan att bli bok eller AI-demo.

**Files/surfaces involved**

- `static-pages/xprmnt-zn/ehm-levels-virusprosa/index.html`
- `static-pages/xprmnt-zn/prf-srg/index.html`
- `research-specimens/hackerstory/index.html`
- `xprmnt-zn.html`
- `_rebuild/ehm-dossier-readability-diagnosis.md`
- `_rebuild/prf-srg-suite-readability-diagnosis.md`
- `_rebuild/praktikanten-model-comparison-diagnosis.md`

**Risk**

Att fullständiga kroppar överkurateras, att specimen görs för släta, eller att nya portalsidor skapas för att dämpa läsarens initiala överväldigande känsla. Dossierer måste få vara stora när storleken är del av formen.

**What must not be mixed in**

- import av externa eller Drive-baserade original;
- omskrivning av dossierprosa;
- ändring av källordning;
- ändring av PRF-SRG utan separat redaktionellt beslut;
- Praktikanten-lik hero eller lagergrid;
- kanonisering av HackerStory.

**Smallest safe first @goal**

`DOSSIER_SPECIMEN_READER_START_DIAGNOSIS_V0`

Läs EHM, PRF-SRG, HackerStory och XPRMNT-ZN som befintliga offentliga läsytor. Skapa endast `_rebuild/dossier-specimen-reader-start-diagnosis.md`. Bedöm om varje yta behöver ingen åtgärd, en bättre befintlig länkväg, en minimal lässtart, eller fortsatt specimenstatus utan mer synlighet. Ändra inga publika filer.

**Suggested Codex model level**

High

### Program C: About and responsibility architecture maturation

**Purpose**

Låta About-MVP:n mogna till en tillförlitlig ansvarsyta utan att bli generisk About, Martin-CV eller projektontologi. Programmet ska avgöra vilka relationer som faktiskt behöver mer mänsklig copy senare.

**Why now**

About finns nu och är klickbar. Det löser den akuta hierarkin men lämnar en avsiktlig tomhet: sidan är MVP och template-aktig. Den behöver bevakas så den inte expanderas åt fel håll när nya frågor uppstår.

**Files/surfaces involved**

- `about.html`
- `martin.html`
- `verboten-media.html`
- `contact.html`
- `contribute.html`
- `writings.html`
- `_rebuild/about-meta-surface-design.md`

**Risk**

Att About blir en sjätte primär kropp, att Martin återcentreras, att Verboten Media reduceras till personligt varumärke, eller att ansvarsspråk blir onboarding och försvar före läsning.

**What must not be mixed in**

- ny About-sida;
- CV, portfolio eller biografisk expansion;
- ändring av Martin-sidan;
- ny kontaktinfrastruktur;
- team-, startup-, plattforms- eller communityspråk;
- förklaring av hela repo-ontologin.

**Smallest safe first @goal**

`ABOUT_MVP_FRICTION_AUDIT_V0`

Läs `about.html`, `martin.html`, `verboten-media.html`, `contact.html` och `contribute.html`. Skapa endast `_rebuild/about-mvp-friction-audit.md`. Identifiera vilka ansvarsförhållanden About redan löser, vilka den medvetet inte ska lösa, och vilka konkreta frågor från en läsare eller samarbetspartner skulle motivera mänsklig copy senare. Ändra inga publika filer.

**Suggested Codex model level**

Medium

### Program D: Underhållningsmode as reader-front logic

**Purpose**

Pröva Underhållningsmode som frontlogik för läsare som inte börjar med vilja, tålamod eller systemförståelse. Programmet ska undersöka hur vägran, Förläggaren, maskinrummet, idén och förlusten leder mot befintliga läsytor.

**Why now**

Startsidan ger Underhållningsmode hög scenisk vikt, och sidan själv öppnar nu med `I do not want to read`. Det gör den redo att analyseras som läsarväg, inte bara originell sida.

**Files/surfaces involved**

- `underhallningsmode.html`
- `docs/underhallning-inte-content.md`
- `index.html`
- `writings.html`
- `xprmnt-zn.html`
- `contact.html`
- eventuellt `praktikanten.html`

**Risk**

Att Underhållningsmode görs för smart, för funktionellt eller för marknadsnära. Om programmet börjar föreslå app, feed, chatbot, persona, CTA, tracking eller personalisering har det missförstått objektet.

**What must not be mixed in**

- interaktivitet;
- datainsamling;
- ny Förläggare-persona;
- generativt gränssnitt;
- conversion funnel;
- ny public-route hub;
- rewrite av interfacepositionerna.

**Smallest safe first @goal**

`UNDERHALLNINGSMODE_READER_ROUTE_AUDIT_V0`

Läs `underhallningsmode.html`, `docs/underhallning-inte-content.md`, `index.html`, `writings.html` och `xprmnt-zn.html`. Skapa endast `_rebuild/underhallningsmode-reader-route-audit.md`. Kartlägg vad varje befintlig position får läsaren att göra, vilka destinationer den öppnar, och var route-logik riskerar att bli contentlogik. Ändra inga publika filer.

**Suggested Codex model level**

High

### Program E: XPRMNT-ZN membrane maintenance

**Purpose**

Göra XPRMNT-ZN långsiktigt hållbart som membran: en publik passage som visar valda kroppar utan att bli katalog, portal, importyta eller produkt.

**Why now**

Card order är förbättrad men det finns fortsatt ett större ansvar: framtida material kommer fresta fram fler kort. Utan ett lätt auditmönster kan XPRMNT-ZN glida från representativ passage till samlingsplats för allt som är spännande.

**Files/surfaces involved**

- `xprmnt-zn.html`
- `docs/doctrine/xprmnt-zn-membrane.md`
- `_rebuild/XPRMNT_ZN_REPO_SLUICE.md`
- `static-pages/xprmnt-zn/README.md`
- `static-pages/xprmnt-zn/SLUICE_REGISTER_TEMPLATE.md`
- `contribute.html`

**Risk**

Att ett membranprogram blir ny doctrine eller ny taxonomy. Det behövs en lätt driftregel, inte ett nytt system.

**What must not be mixed in**

- bulkimport;
- Drive-spegling;
- komplett XPRMNT-katalog;
- nya experimentkort utan kandidatstatus;
- produktportal;
- communityingång;
- ändring av membrandoctrine utan separat mandat.

**Smallest safe first @goal**

`XPRMNT_ZN_MEMBRANE_DRIFT_CHECK_V0`

Läs `xprmnt-zn.html`, `docs/doctrine/xprmnt-zn-membrane.md`, `_rebuild/XPRMNT_ZN_REPO_SLUICE.md` och aktuella XPRMNT-diagnoser. Skapa endast `_rebuild/xprmnt-zn-membrane-drift-check.md`. Formulera en lätt checklista för framtida kandidater: public-readiness, provenance, reader action, status, overlaunch risk och why-not-now. Ändra inga publika filer och skapa ingen ny taxonomy.

**Suggested Codex model level**

Medium

### Program F: Bankett readiness and ceremonial time discipline

**Purpose**

Skydda bankettformen från rutinproduktion och samtidigt göra det lättare att känna igen när en framtida ceremoni faktiskt är mogen.

**Why now**

Två banketter finns nu. Det gör formen verklig, men också sårbar. En form som fungerar kan börja användas för ofta. Nästa bankett ska inte komma därför att det finns en kalenderlucka, utan därför att ett arbetsläge bär offentlig tid.

**Files/surfaces involved**

- `banketter.html`
- `static-pages/banketter/`
- `static-pages/xprmnt-zn/banketter.md`
- `_rebuild/bankett-form-diagnosis.md`
- relevanta framtida paste/review-underlag när sådana uttryckligen ges

**Risk**

Att readiness blir en checklist-pipeline, eller att frånvaron av nästa bankett läses som backlog i stället för korrekt status.

**What must not be mixed in**

- bankettkalender;
- automatisk ceremony generation;
- excerpting av externa paket;
- publicering utan inklistrad text och provenance;
- ny release-note-form;
- ändring av befintliga bankettprosa.

**Smallest safe first @goal**

`BANKETT_READINESS_CRITERIA_NOTE_V0`

Läs `banketter.html`, befintliga bankettfiler, `static-pages/xprmnt-zn/banketter.md` och `_rebuild/bankett-form-diagnosis.md`. Skapa endast `_rebuild/bankett-readiness-criteria-note.md`. Beskriv hur en framtida människa eller agent avgör om en ny bankett är mogen, för tidig eller frånvarande med rätta. Ändra inga publika filer och skapa ingen ny bankett.

**Suggested Codex model level**

Medium

### Program G: Light post-merge maintenance guardrails

**Purpose**

Skapa små auditvanor som hindrar drift utan att bygga byråkrati. Programmet ska hjälpa framtida pass att upptäcka brutna länkar, statusglidning, nav-hierarkisk drift och överpublicering.

**Why now**

Rebuilden var framgångsrik eftersom den hade tydliga diagnoser och gränser. Efter merge behövs inte ett nytt system, men det behövs enkla återkommande frågor som hindrar att varje framtida ändring blir en ny rebuild.

**Files/surfaces involved**

- `_rebuild/merge-readiness-audit.md`
- `_rebuild/rebuild-run-ledger.md`
- `README.md`
- `AGENTS.md`
- root HTML files as audited surfaces

**Risk**

Att guardrails blir process för processens skull, checklist inflation eller ett nytt obligatoriskt system för små textändringar.

**What must not be mixed in**

- CI-pipeline;
- CMS;
- new issue templates;
- mandatory bureaucracy for every typo fix;
- broad docs rewrite;
- new doctrine.

**Smallest safe first @goal**

`POST_MERGE_LIGHT_GUARDRAILS_NOTE_V0`

Läs `_rebuild/merge-readiness-audit.md`, `README.md`, `AGENTS.md` och den aktuella root-nav-strukturen. Skapa endast `_rebuild/post-merge-light-guardrails-note.md`. Föreslå högst sju lätta kontrollfrågor för framtida public-site-pass. De ska skydda länkar, status, public-ready/public-readable-gräns, About-hierarki och bankettform utan att skapa ny pipeline. Ändra inga publika filer.

**Suggested Codex model level**

Low

## 5. Recommended next program

Rekommenderat nästa program är **Program A: Curated reader architecture**.

Pareto-skäl:

1. Det angriper den bredaste återstående friktionen: inte brist på material, utan hur en människa börjar läsa och fortsätter utan att behöva förstå hela apparaten först.
2. Det använder redan publicerade kroppar och befintliga länkar. Ingen import, ny publik kropp eller ny prosa krävs för första steget.
3. Det förbinder flera stängda rebuild-arcs utan att öppna dem igen: startsidans READ-position, Writings reading paths, Praktikantens läsvägar, Underhållningsmodes vägran och XPRMNT-ZN:s materialfront.
4. Det kan skapa bättre beslut för andra program. EHM, HackerStory, About och Underhållningsmode bör inte utvecklas isolerat förrän den övergripande läsarkartan är klarare.
5. Det skyddar mot den största framtida risken: att varje stark yta kräver egen portal, kortgrupp, hero eller navpunkt.

Målet är inte att bygga ett nytt reading-path-system. Målet är först att förstå vilka läsrörelser som redan finns, vilka som är verkligt sekvenserade och vilka som bara är listor. När den kartan finns kan en senare människa välja om `static-pages/writings/INDEX.md`, `writings.html` eller en helt annan befintlig yta behöver en smal omviktning.

## 6. First executable @goal

```text
@goal READING_ARCHITECTURE_MAP_V0

ROOM
Verbotenmedia public main / post-merge reading architecture.

STATUS
Planning and diagnosis only. Do not edit public HTML, CSS, navigation, markdown prose, source prose, docs, or live-facing files.

CONTEXT
The rebuild and About-MVP are merged and pushed. The next strategic need is not more material or another redesign pass, but a clearer understanding of how a reader starts, continues, and moves between existing public bodies.

TASK
Create `_rebuild/reading-architecture-map.md`.

READ

* `_rebuild/post-merge-next-goals-plan.md`
* `_rebuild/writings-reading-path-reweight-diagnosis.md`
* `_rebuild/index-dramaturgic-readability-diagnosis.md`
* `_rebuild/underhallningsmode-front-diagnosis.md`
* `_rebuild/xprmnt-zn-hierarchy-diagnosis.md`
* `index.html`
* `writings.html`
* `static-pages/writings/INDEX.md`
* `praktikanten.html`
* `underhallningsmode.html`
* `xprmnt-zn.html`
* `about.html`

ANALYZE

Map the existing reader movements without creating new ones:

1. Which reading paths are genuinely sequenced?
2. Which are only grouped lists?
3. Which public bodies currently function as first reading destinations?
4. Where does a reader clearly know the next step?
5. Where does the site still fall back to register logic?
6. Which surfaces should remain pointers/status rather than reading fronts?
7. Which later implementation, if any, would be the smallest safe improvement?

DELIVERABLE
`_rebuild/reading-architecture-map.md` with:

* current reader-entry map;
* sequence vs list distinction;
* first-reading destination candidates;
* points where the reader loses the next step;
* risks and non-mandates;
* one recommended next action, diagnosis or implementation, if justified.

BOUNDARIES
Do not edit public files.
Do not publish new material.
Do not change reading paths.
Do not rewrite copy.
Do not create a taxonomy, CMS, pipeline, or new nav.
Do not promote, canonize, import, or move material.

FINAL RESPONSE
Report the file created, the main finding, the recommended next action, and whether any public files changed.
```

## 7. Do not do yet

Följande är lockande men för tidigt:

- skapa en ny publik reading portal;
- skapa nya reading-path-kategorier innan befintliga sekvenser är kartlagda;
- skriva om `static-pages/writings/INDEX.md` utan separat mandat;
- göra EHM till kortad portal eller guide innan läsart är vald;
- ge HackerStory boklik presentation;
- göra Wise Consultant större eller mer interaktiv;
- expandera About med biografi, CV, teamcopy eller projektontologi;
- göra Underhållningsmode till app, feed, chatbot, CTA eller personaliserad upplevelse;
- lägga till fler XPRMNT-ZN-kort för att representera mer av materialet;
- skapa nästa bankett därför att formen nu finns;
- importera Drive- eller externa källkroppar;
- skapa CMS, taxonomy, issue-template, pipeline eller automatiserad registrylogik;
- röra public prose för att lösa arkitekturkänsla;
- använda `main` som bevis för canon när rätt status är public, specimen, method object, ceremony, process artifact eller archival remainder.

Nästa goda rörelse är alltså inte större publik volym. Den är en karta över faktisk läsning.
