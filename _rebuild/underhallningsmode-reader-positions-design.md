# Underhållningsmode reader positions design

## 1. Current page logic

`underhallningsmode.html` är redan byggd som en statisk text-as-interface. Sidan frågar inte vem läsaren är, lagrar inget val och simulerar ingen dialog. Den erbjuder i stället ett antal offentliga läsarpositioner:

1. `I do not want to read`
2. `Give me a Förläggare`
3. `Show me the machine room without leaking it`
4. `I have an idea`
5. `I want to get lost`
6. `Choose a public route`

Efter rebuild-passet öppnar sidan med vägran och avslutar med den generella route-sektionen. Det var rätt omviktning. Sidan börjar nu litterärt och erbjuder praktisk orientering först efter att de mer specifika positionerna har fått verka.

Den befintliga rörelsen är:

`vägran -> förlagsapparat -> kontrollerad maskinrumsblick -> idégräns -> offentlig förlust -> praktisk routing`

Detta är redan mer än en meny. Rubrikerna låter läsaren inta en hållning till verket innan en destination väljs. Underhållningsmode fungerar därför bäst när det behandlar motstånd, trötthet, nyfikenhet och begär som legitima läsarter, inte som problem som ska konverteras bort.

## 2. What the blinking words currently do

Det finns ingen blinkande eller roterande ordlogik i `underhallningsmode.html`.

Den automatiska ordväxling som finns i den publika sajten ligger på `index.html`. Elementet `.rotating-line` fylls av den befintliga funktionen i `js/main.js`. Den växlar mellan sex fraser:

- `LIFE DESIGN - OR LACK THEREOF`
- `LOKALT OCH GLOBALT GENOM TEKNISKA UNIVERSALER`
- `PERSONHOOD AS PERFORMATIVE INTEGRITY`
- `ALL NUMBERS END`
- `FOREVER ENDEAVOUR`
- `WE HAVE NEVER HAD PARIS`

Fraserna skapar ton, rytm och en känsla av pågående utsändning. De uttrycker däremot inte läsarpositioner och har ingen varierande route-logik. Samma statiska sida och samma länkhierarki ligger kvar oavsett vilken fras som visas.

Det betyder att två skilda system lätt kan blandas ihop:

- startsidans roterande slogans är atmosfär;
- Underhållningsmodes rubriker är redan statiska reader positions.

En framtida implementation bör inte försöka göra slogans klickbara, individuellt routade eller responsiva på besökaren. Då skulle en dekorativ rytm börja fungera som ett dolt gränssnitt och kräva ny beteendelogik. Den säkra utvecklingen är i stället att göra Underhållningsmodes befintliga statiska positioner semantiskt fullständigare och låta eventuell roterande copy förbli en scenisk signal, inte en väljare.

## 3. Proposed reader positions

Sex positioner täcker sidans publika uppgift utan att skapa en produktmodell. Fem finns redan i nära form. Två behöver tydligare åtskillnad från den generella route- och idélogiken.

### Position 1: Refuses to read

**Reader mood or resistance**

Läsaren vill inte bli undervisad, introducerad eller bunden till ett långt verk. Motståndet är den faktiska ankomstpunkten.

**Existing public destination**

- `runtext.html`

**Static phrase**

`I do not want to read`

Den befintliga frasen är redan exakt. Den ska inte göras vänligare eller mer säljande.

**What must not happen**

- ingen uppmaning att registrera sig eller välja preferenser;
- ingen belöning, streak eller progressindikator;
- ingen kortformad content-feed som ersätter verket;
- ingen ton som behandlar vägran som ett konverteringshinder.

### Position 2: Wants fiction first

**Reader mood or resistance**

Läsaren accepterar fiktion men vill inte förstå publiceringsapparaten, terminologin eller repoformen före första mötet med verket.

**Existing public destination**

- `writings.html`
- den befintliga Förlagsdeckaren-ingången via Writings och dess curated reading paths

**Static phrase**

`Give me fiction first`

Alternativt kan svensk fras prövas i mänsklig copy: `Ge mig fiktionen först`. Funktionen är viktigare än språkvalet.

**What must not happen**

- ingen projektontologi före texten;
- ingen ny portal eller separat fiction hub;
- ingen algoritmisk rekommendation;
- inget löfte om en enda korrekt läsordning för allt material.

### Position 3: Wants a Förläggare

**Reader mood or resistance**

Läsaren vill känna att någon eller något redan har arbetat med materialet. Den vill möta urval, apparat, komisk institution och offentlig arbetskropp, inte en neutral lista med filer.

**Existing public destination**

- `writings.html`, för Förlagsdeckaren och dess reading paths;
- `praktikanten.html`, för den mest fullständiga offentliga arbetskroppen.

**Static phrase**

`Give me a Förläggare`

Den befintliga frasen ska behållas. Den bär sidans egenart och behöver inte förklaras till en tjänst.

**What must not happen**

- Förläggaren får inte bli chatbot, guidepersona eller assistent;
- inget fejkat svarsläge;
- ingen personalisering eller simulering av att apparaten känner läsaren;
- ingen konsult- eller beställningslogik.

### Position 4: Wants the machine room without leakage

**Reader mood or resistance**

Läsaren vill förstå hur den offentliga kroppen arbetar, men ska inte behöva eller få tillgång till råa källor, privata lagringsytor eller skyddat material.

**Existing public destination**

- `xprmnt-zn.html`
- `banketter.html`

XPRMNT-ZN visar membran, specimens och publika experiment. Banketter visar arbetsmognad som ceremoniell tid utan att bli driftlogg.

**Static phrase**

`Show me the machine room without leaking it`

Den befintliga frasen är både begär och gräns. Den ska inte kortas till en generisk `Behind the scenes`.

**What must not happen**

- ingen Drive-spegel eller bulkimport;
- inga privata processloggar;
- ingen dashboard;
- ingen påstådd transparens som upplöser statusgränser;
- ingen katalogisering av allt som råkar finnas.

### Position 5: Wants to get lost

**Reader mood or resistance**

Läsaren vill inte ha onboarding eller optimal väg. Den vill ha en offentlig labyrint där text, skämt, kapslar och apparat kan kollidera utan att bli personaliserad feed.

**Existing public destination**

- `capsules.html`
- `skalle.html`
- `runtext.html`
- den befintliga doktrinlänken `docs/underhallning-inte-content.md` som gräns- och återläsningsyta

**Static phrase**

`I want to get lost`

Den befintliga frasen är rätt. Förlusten ska vara vald och offentlig, inte producerad genom oändlig scroll.

**What must not happen**

- ingen slumpgenerator som låtsas vara kuratering;
- ingen infinite scroll;
- ingen feed, ranking eller rekommendationsmotor;
- inget mätande av vad läsaren fastnar för;
- ingen artificiell friktion vars enda funktion är att hålla kvar uppmärksamhet.

### Position 6: Wants proof, provenance or work-body

**Reader mood or resistance**

Läsaren är intresserad men skeptisk. Den vill se att arbetet har hänt, att materialets status går att läsa och att den publika formen bär spår av arbetskropp utan att göra process till content.

**Existing public destination**

- `praktikanten.html`
- `banketter.html`
- `xprmnt-zn.html`

Praktikanten bär beviskedja och arbetskropp. Banketter bär tidsmarkörer. XPRMNT-ZN bär kontrollerad specimen- och membranstatus.

**Static phrase**

`Show me the work-body`

Ett mer explicit alternativ är `Show me that the work happened`. Den slutliga ordalydelsen bör väljas i ett mänskligt copy-pass.

**What must not happen**

- ingen förenklad claim om full transparens;
- ingen självgranskande dashboard;
- ingen processpornografi;
- ingen automatisk befordran från public-readable till public-ready eller canon;
- ingen Praktikanten-imitation på andra ytor.

## 4. Existing destination map

| Reader position | Primary existing destination | Secondary existing destination | Public function |
| --- | --- | --- | --- |
| Refuses to read | `runtext.html` | ingen krävs | Texten får börja utan orienteringsplikt |
| Wants fiction first | `writings.html` | Förlagsdeckarens curated reading path | Fiktion före systemförklaring |
| Wants a Förläggare | `writings.html` | `praktikanten.html` | Förlagsapparat och arbetsfigur |
| Wants the machine room without leakage | `xprmnt-zn.html` | `banketter.html` | Publikt membran och ceremoniell arbetstid |
| Wants to get lost | `capsules.html` | `skalle.html`, `runtext.html` | Offentlig labyrint utan feed |
| Wants proof / provenance / work-body | `praktikanten.html` | `banketter.html`, `xprmnt-zn.html` | Beviskedja, status och offentlig arbetskropp |

`I have an idea` fyller fortfarande en legitim funktion, men är inte i första hand en reader position. Den är en ansvars- och gränsyta för inkommande bidrag. Den bör därför behållas som en separat statisk passage till `contact.html`, inte räknas som motorn som iscensätter läsarter.

`Choose a public route` är på samma sätt en avslutande orienteringsyta. Den ska inte konkurrera med positionerna och ska inte göras till CTA-panel. Dess nuvarande placering sist på sidan är korrekt.

## 5. MVP recommendation

Implementation är motiverad, men endast som ett senare, lokalt copy-pass.

MVP:n bör inte skapa blinkande beteende på `underhallningsmode.html` och inte ge de roterande startsidesfraserna individuell länklogik. Den bör göra följande:

1. Behålla de fem starka befintliga positionerna och deras statiska struktur.
2. Låta `I have an idea` förbli en separat contribution-gräns, inte en läsarposition.
3. Låta `Choose a public route` förbli sista praktiska utgång.
4. Pröva två saknade positioner i minimal copy:
   - `Give me fiction first`;
   - `Show me the work-body`.
5. Återanvända endast befintliga destinationer.
6. Bedöma om de två positionerna kan tillkomma som korta statiska sektioner utan att sidan blir längre än dess dramaturgi bär. Om de inte kan det bör de användas som ersättande eller sammanförande copy, inte som fler funktioner.

Den viktigaste designregeln är:

> En reader position ska namnge ett faktiskt läsarmotstånd eller begär och öppna en redan existerande offentlig kropp. Den ska inte samla data, välja åt läsaren eller låtsas svara.

Startsidesrotationen bör lämnas orörd i denna MVP. Om den senare ska relateras till Underhållningsmode krävs ett separat mandat som först avgör om slogans ska fortsätta vara atmosfär eller bli statiska signaler för olika läsarter. De två funktionerna ska inte blandas genom en omärklig JavaScript-ändring.

## 6. What must remain forbidden

- Ingen ny JavaScript-logik.
- Ingen klickbar eller individuellt routad roterande fras.
- Ingen quiz, meny med valresultat eller stegvis onboarding.
- Ingen chatbot, Förläggar-assistent eller simulerad dialog.
- Ingen personalisering, tracking eller lagring av läsarposition.
- Ingen feed, infinite scroll eller rekommendationsmotor.
- Ingen CTA- eller conversion funnel.
- Ingen ny destinationssida.
- Ingen ny taxonomy för läsartyper.
- Ingen omskrivning av hela sidan.
- Ingen förändring av XPRMNT-ZN:s, Praktikantens eller Banketternas status.
- Ingen sammanblandning av publik arbetskropp och privata källor.
- Ingen användning av `I have an idea` som lead capture.
- Ingen användning av vägran som problem som sajten ska övervinna.

## 7. Exact next @goal

```text
@goal IMPLEMENT_UNDERHALLNINGSMODE_STATIC_READER_POSITIONS_COPY_V0

ROOM
Verbotenmedia main / Underhållningsmode.

STATUS
Minimal static copy implementation. This is not a redesign, not new interaction, and not a new reader-routing system.

READ

* `underhallningsmode.html`
* `_rebuild/underhallningsmode-reader-positions-design.md`
* `_rebuild/underhallningsmode-front-diagnosis.md`
* `docs/underhallning-inte-content.md`

TASK
Make the smallest local copy and markup adjustment that lets Underhållningsmode express these six static reader positions:

* refuses to read;
* wants fiction first;
* wants a Förläggare;
* wants the machine room without leakage;
* wants to get lost;
* wants proof / provenance / work-body.

Reuse existing public destinations only.

Keep `I have an idea` as a separate bounded contact/contribution passage.
Keep `Choose a public route` as the final practical routing section.

DO NOT

* add or edit JavaScript;
* create blinking behavior on `underhallningsmode.html`;
* change the homepage rotating slogans;
* create quiz, feed, chatbot, onboarding, personalization, tracking, CTA or conversion behavior;
* create new destination pages;
* rewrite the whole page;
* make Förläggaren an assistant or persona;
* change public status boundaries.

LIKELY FILE

* `underhallningsmode.html`

VALIDATION

Check desktop and mobile rendering, link reachability, console, section order and horizontal overflow.

FINAL RESPONSE

Report:

* exact copy/section changes;
* destination reuse;
* whether all behavior remains static;
* validation result;
* files changed.
```
