# Reading architecture map

Detta dokument kartlägger den befintliga läsarkitekturen efter rebuilden och About-MVP:n. Det är diagnos, inte implementation. Inga publika filer ändrades för att skapa denna karta.

## 1. Scope and evidence

Lästa ytor:

- `_rebuild/post-merge-next-goals-plan.md`
- `writings.html`
- `static-pages/writings/INDEX.md`
- `about.html`
- `praktikanten.html`
- Förlagsdeckaren-relaterade Writings-kort och markdownkroppar:
  - `static-pages/writings/forlagsdeckaren.md`
  - `static-pages/writings/forlagsdeckaren-praktikanten-intro.md`
  - `static-pages/writings/forlagsdeckaren-del-1.md`
  - `static-pages/writings/forlagsdeckaren-del-2.md`
  - `static-pages/writings/forlagsdeckaren-del-3.md`
  - `static-pages/writings/forlagsdeckaren-del-4.md`
  - `static-pages/writings/forlagsdeckaren-del-6-registreringen-har-stangt.md`
  - `static-pages/writings/forlagsdeckaren-lectures-and-workshops.md`
  - `static-pages/writings/tystnad-som-publiceringsform.md`
  - `static-pages/writings/membransch-granssnitt.md`
  - `static-pages/writings/forlagsdeckaren-praktikanten-outro.md`

Stödjande läsning:

- `page.html`, endast för att verifiera att relativa markdownlänkar i `static-pages/writings/INDEX.md` kan lösas vidare genom `page.html?path=...`.

## 2. Diagnostic answer

Den offentliga läsarkitekturen har nu en riktig första tröskel, men den har ännu inte en fullt bärande lässekvensarkitektur.

Det bästa som finns är inte registret. Det bästa är relationen mellan:

1. startsidans `Read public writing`;
2. Writings-sidans `Open curated reading paths`;
3. `static-pages/writings/INDEX.md`;
4. Förlagsdeckaren-vägen;
5. Praktikanten-sidans egna läsvägar.

Problemet är inte att läsaren saknar vägar. Problemet är att bara en av de befintliga vägarna är verkligt sekvenserad: **First Reading Path: Förlagsdeckaren Surface**. Flera andra vägar fungerar mer som grupperade listor eller kompletterande kluster. Det är inte fel, men det gör att Writings lovar "reading paths" medan INDEX i praktiken bär en stark huvudsekvens och flera svagare urval.

Nästa förbättring bör därför inte skapa ny portal eller ny taxonomy. Den bör precisera vad som redan finns: vilka vägar är sekvens, vilka är listor, och vilken första läsning ska en människa ta när den inte redan vet vad Verboten Media är.

## 3. Current reader-entry map

### A. Primary public reading entry

```text
index.html
  -> Read public writing
    -> writings.html
      -> Open curated reading paths
        -> static-pages/writings/INDEX.md rendered through page.html
```

Detta är den renaste läsentrén. Den kräver minst ontologisk förförståelse och leder från offentlig ankomst till Writings och vidare till läsarkartan.

Styrka:

- läsning ligger först på startsidan;
- Writings har reading paths före filter och register;
- `INDEX.md` säger tydligt att en text har ett registerkort men kan ingå i flera läsvägar;
- `page.html` löser relativa markdownlänkar mot aktuell `static-pages/`-bas och konverterar interna `.md`-länkar tillbaka till `page.html?path=...`.

Svaghet:

- Writings-sidan visar bara en liten textlänk till reading paths;
- när läsaren väl öppnar INDEX blir flera "paths" egentligen listor;
- det finns ingen synlig "start here" inne i Writings-registret utöver den lilla reading-path-länken;
- den första starka sekvensen finns ett klick djupare än registret.

### B. Förlagsdeckaren as literary surface

```text
writings.html
  -> Förlagsdeckaren card
    -> forlagsdeckaren.md
      -> back-cover / project map
      -> links to main sequence and satellites
```

`forlagsdeckaren.md` fungerar som baksidetext och intern karta. Den beskriver Förlagsdeckaren som en litterär kropp om publiceringens patologi, serien och dess satelliter. Den listar sexton huvudsekvens- och satellitkapitel, fyra analys-/fragmentytor och en publik testyta.

Styrka:

- bra första orientering för den som redan valt Förlagsdeckaren;
- länkar många publicerade delar utan att de måste dupliceras i Writings;
- visar att Förlagsdeckaren är serie, inte en ensam text.

Svaghet:

- listan i `forlagsdeckaren.md` är bredare än den kuraterade First Reading Path;
- den blandar huvudsekvens, satelliter och senare kroppar i en lång ordning;
- vissa relationer är tydliga för en intern läsare men kräver mer arbete för en ny läsare;
- `forlagsdeckaren-del-4.md` har frontmatter-status `draft` samtidigt som kortet ligger i Writings som offentlig litterär post. Detta är inte en uppgift att fixa här, men det är en status-läsfriktion att notera i framtida Writings-pass.

### C. Praktikanten as monumental reading body

```text
index.html / nav / writings paths
  -> praktikanten.html
    -> intro
    -> outro
    -> HackerStory specimens
    -> preserved markdown status act
```

Praktikanten-sidan är inte bara en destination. Den är en intern läsapparat. Den har hero, statusarkitektur, operativ kronologi, negativt mandat och en egen läsgrid.

Styrka:

- läsaren får tydlig "öppna akten"-rörelse;
- Praktikanten skiljer litterär entré från bevisfält och källstatus;
- intro och outro är de två starkaste direkta textentréerna för Praktikanten;
- sidan säger själv att Praktikanten inte behöver driftas utan läsas.

Svaghet:

- Praktikantens egen läsgrid hoppar från intro till outro utan att inkludera mellanstationen `Registreringen har stängt`, trots att Writings INDEX använder den som steg två i Praktikanten-vägen;
- Praktikanten är så stark som monument att den kan skymma Writings-lässekvensen om läsaren kommer dit först;
- relationen mellan Praktikanten-sidans fyra öppningar och Writings INDEX fyra Praktikanten-steg är inte helt sammanfogad.

### D. About as responsibility return, not reading front

```text
nav About
  -> about.html
    -> Verboten Media
    -> Martin
    -> Contact / Contribute
    -> Writings / XPRMNT-ZN
```

About är nu en minimal ansvarskarta. Den säger uttryckligen att besökaren inte behöver passera About före läsning.

Styrka:

- håller ansvar, publiceringskropp, kontakt och läsning isär;
- skickar tillbaka läsaren till Writings och XPRMNT-ZN;
- gör Martin nåbar utan att göra honom till primär läsfront.

Svaghet:

- ska inte bära lässekvens;
- om den expanderas för tidigt riskerar den att ersätta läsning med förklaring;
- bör därför betraktas som orienteringsretur, inte startpunkt.

### E. Register route

```text
writings.html
  -> filter / cards
    -> individual markdown body
```

Registret är robust och användbart när läsaren redan vet vad den vill öppna. Det är inte i sig en lässekvens.

Styrka:

- en text, ett kort;
- filter fungerar som enkel typorientering;
- Förlagsdeckaren-relaterade kort är synliga;
- Public Nerve ligger kvar som separat kuraterat kluster efter huvudregistret.

Svaghet:

- kortens ordning skapar en blandad kronologi och viktlogik;
- Förlagsdeckaren-kort, Praktikanten-kort, huvuddelar, satelliter och metodtexter delar samma kortform;
- filtret svarar på typ, inte läsrörelse;
- en läsare som börjar i registret kan tappa varför nästa text följer.

## 4. Sequence vs list distinction

### Genuinely sequenced paths

#### First Reading Path: Förlagsdeckaren Surface

Denna väg är den starkaste befintliga lässekvensen:

1. `Förlagsdeckaren`
2. `Förlagsdeckaren - Praktikanten (intro)`
3. `Förlagsdeckaren: Registreringen har stängt`
4. `Tystnad som publiceringsform`
5. `Membransch gränssnitt`
6. `Förlagsdeckaren - Praktikanten (Outro)`

Den fungerar som sekvens eftersom varje steg har en annan uppgift:

- först projektkarta;
- sedan Praktikantens första litterära och operativa inträde;
- sedan sajten som tröskel, vägran och apparat;
- sedan publiceringens tystnad;
- sedan membran, gränssnitt och invändningar;
- sist återkomst genom webhook, grundning och den andra Praktikanten.

Detta är den väg som mest direkt svarar på frågan: "var börjar jag och varför fortsätter jag dit?"

#### Praktikanten

Praktikanten-vägen i `INDEX.md` är delvis sekvenserad:

1. intro;
2. Registreringen har stängt;
3. outro;
4. bevarad markdownakt.

Den är meningsfull och följer en rörelse från inträde till tröskel till återkomst till källstatus. Den är svagare än First Reading Path eftersom den saknar motivering per steg i INDEX, och eftersom `praktikanten.html` själv erbjuder en något annan läsgrid.

### Grouped lists, not full paths

#### Essäer, analyser och lexikon

Detta är ett användbart metod- och analyskluster, men inte en tydlig sekvens. Texterna ligger bredvid varandra som orienteringsfält: Wise Consultant, process-som-verk, Tvärflygeln, promptarkitektur, lexikon och fragment.

Funktion: gruppad metodläsning.

Inte funktion: läsbana med nödvändig ordning.

#### Satelliter och noveller

Detta är ett litterärt sidofält. Det samlar noveller, dispatches och satelliter men ger inte en uttalad rörelse mellan dem.

Funktion: urval och expansion.

Inte funktion: första lässekvens.

#### Offentliga nervtexter

Public Nerve är ett mycket tydligt tematiskt kluster: proveniens, röstgräns och publik passage. Det är däremot inte en sekvens i INDEX. På `writings.html` finns klustret som tre kort efter huvudregistret.

Funktion: orienteringssvit.

Inte funktion: huvudväg in i Förlagsdeckaren.

## 5. First-reading destination candidates

### Best current first reading

**`static-pages/writings/forlagsdeckaren.md`**

Den fungerar som baksida, projektkarta och sammanfattande entré. Den bör fortsatt vara första steg i Förlagsdeckaren-vägen.

### Best direct literary scene entry

**`static-pages/writings/forlagsdeckaren-praktikanten-intro.md`**

Den är bästa direkta sceniska ingången till Praktikanten som litterär och operativ närvaro.

### Best threshold / site-as-scene entry

**`static-pages/writings/forlagsdeckaren-del-6-registreringen-har-stangt.md`**

Den kopplar läsning, sajt, registrering, vägran och publiceringsapparat. Den är central för att förstå varför webbytan själv kan vara litterär scen.

### Best public body entry

**`praktikanten.html`**

Detta är inte första texten i Förlagsdeckaren-sekvensen, men det är bästa offentliga kroppsingången när läsaren behöver förstå varför Praktikanten redan är mer än en karaktär.

### Best responsibility return

**`about.html`**

About ska inte starta läsningen. Den ska lösa frågan "vem eller vad bär ansvar och kontakt?" när den frågan uppstår.

## 6. Where the reader clearly knows the next step

Tydliga nästa steg:

- På startsidan: `Read public writing` leder tydligt till Writings.
- På Writings: `Open curated reading paths` leder tydligt till INDEX.
- I First Reading Path: steg 1 till 6 ger en verklig följd.
- På Praktikanten: läsgridens fyra kort skiljer intro, outro, bevisfält och källstatus.
- I About: `Return to the work` leder tillbaka till Writings och XPRMNT-ZN.

Halvtydliga nästa steg:

- I `forlagsdeckaren.md` finns många länkar, men inte alla har samma läshandling.
- Praktikanten-vägen i INDEX och Praktikanten-sidans läsgrid överlappar men är inte identiska.
- Public Nerve är tydlig som tema men svagare som stegvis läsning.

Otydliga nästa steg:

- Efter ett enskilt registerkort vet läsaren inte alltid vilken text som bör följa.
- Efter Förlagsdeckaren Del 1 till Del 4 finns ingen synlig webbsekvens i Writings-kortet som leder vidare.
- Förlagsdeckaren-huvudkartan listar många delar, men den kuraterade First Reading Path väljer bara sex. Skillnaden är inte explicit namngiven för läsaren.
- `forlagsdeckaren-del-4.md` har `status: draft` i frontmatter men visas som Writings-kort. Det kan skapa osäkerhet om publicerad läsning kontra arbetsstatus.

## 7. Where the site still falls back to register logic

Registret tar över när:

- läsaren går till Writings och börjar scrolla kort i stället för att öppna reading paths;
- läsaren möter flera Förlagsdeckaren-relaterade kort med samma visuella vikt;
- läsaren använder filter som typval snarare än sekvens;
- Public Nerve visas som tre kort, inte som en intern väg;
- `forlagsdeckaren.md` ger en lång länklista snarare än en prioriterad "read next"-rörelse.

Detta är inte ett tekniskt fel. Det är den naturliga följden av en stabil manuell publiceringsstandard. Nästa förbättring ska därför inte ersätta registret. Den ska göra skillnaden mellan register och läsväg mer läsbar.

## 8. Surfaces that should remain pointers or status, not reading fronts

Följande bör inte göras till primära läsfronter i nästa pass:

- **About.** Ansvarskarta och returväg, inte onboarding.
- **Contact / Contribute.** Ansvarskanal, inte läsartratt.
- **Praktikantens bevarade markdownakt.** Källstatus, inte första läsning.
- **HackerStory från Praktikanten.** Bevisfält/specimen, inte start för Förlagsdeckaren-läsning.
- **Public Nerve.** Viktigt orienteringskluster, men bör inte överta huvudsekvensen.
- **Essäer, analyser och lexikon.** Metodisk fördjupning, inte första litterär väg.

## 9. Risks and non-mandates

Nästa pass får inte:

- skapa ny reading portal;
- skapa ny taxonomy;
- ändra markdown publishing standard;
- skriva om kreativ prosa;
- publicera nya texter;
- importera Drive eller externa källor;
- göra Praktikanten till template;
- göra About större för att kompensera för läsfriktion;
- flytta material;
- kanonisera texter genom att lägga dem i en läsväg;
- göra Public Nerve till ny primär ingång;
- dölja eller ersätta Writings-registret.

Särskild risk:

En "läsarkarta" kan lätt bli en ny katalog. Den ska inte beskriva alla möjliga relationer. Den ska hjälpa läsaren att börja och förstå varför nästa steg följer.

## 10. Recommended next action

Rekommenderat nästa steg är en smal diagnos av `static-pages/writings/INDEX.md`, inte en ny publik sida.

### Why

INDEX är redan den centrala läsarkartan. Den behöver inte ersättas. Men den bär ojämna nivåer:

- en stark, motiverad Förlagsdeckaren-sekvens;
- en halvsekvenserad Praktikanten-väg;
- tre gruppade listor.

Det bästa nästa arbetet är att avgöra om INDEX ska:

1. fortsätta vara blandning av sekvens och listor men namnge skillnaden tydligare;
2. ge Praktikanten-vägen korta stegmotiv;
3. ge Public Nerve en uttrycklig "orienteringssvit"-roll;
4. lämnas oförändrad därför att Writings-registret redan gör tillräckligt.

### First safe next `@goal`

```text
@goal WRITINGS_INDEX_SEQUENCE_CLARITY_DIAGNOSIS_V0

ROOM
Verbotenmedia public main / Writings reading architecture.

STATUS
Diagnosis only. Do not edit public HTML, CSS, markdown prose, navigation, source prose, docs, or live-facing files.

TASK
Read `_rebuild/reading-architecture-map.md`, `writings.html`, `static-pages/writings/INDEX.md`, `praktikanten.html`, and the Förlagsdeckaren-related Writings cards. Create only `_rebuild/writings-index-sequence-clarity-diagnosis.md`.

Analyze whether `static-pages/writings/INDEX.md` should remain as-is or later receive a minimal human-approved clarity pass that distinguishes:

1. true reading sequence;
2. grouped list;
3. orientation suite;
4. source/status pointer.

Do not implement the clarity pass. Do not write new public copy. Do not alter reading paths. End with a single recommendation: KEEP_INDEX_AS_IS, PREPARE_MINIMAL_INDEX_COPY_PASS, or NOT_READY.
```

## 11. Completion note

Den befintliga läsarkitekturen är stark nog att användas. Den är inte färdig nog att automatiskt expandera. Den ska först bli mer exakt om vilken typ av väg den redan erbjuder.
