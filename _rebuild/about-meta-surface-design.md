# About meta-surface design

## 1. Current state

`About` finns nu som en icke-klickbar metaetikett i huvudnavigationen. Under etiketten ligger två länkar:

- `Martin`
- `Contact / Contribute`

Grupperingen gör en viktig nivåskillnad. `Start`, `Verboten Media`, `XPRMNT-ZN`, `Underhållningsmode` och `Banketter` står kvar som arbets-, verk- och passageorienterade publika poster. Martin och kontaktvägen ligger lägre som ansvar, proveniens och möjlighet att närma sig kroppen.

Det finns samtidigt redan en rootfil med namnet `about.html`. Den är inte en ny fil och är inte kopplad från den nuvarande `About`-etiketten. Sidans titel är `Orientation - VERBOTEN MEDIA`, och dess egen text säger att den äldre generella About-sidan har neutraliserats till en enkel router. Den pekar vidare till Martin, Verboten Media, XPRMNT-ZN och Writings.

Det betyder att sajten för närvarande har tre skilda saker som inte ska förväxlas:

1. `About` som navigationsgrupp;
2. `about.html` som äldre neutraliserad orienteringsrouter;
3. de faktiska ansvarsbärande ytorna `martin.html`, `contact.html` och `contribute.html`.

Den nya navigationsgrupperingen fungerar utan att `about.html` behöver bära en aktuell offentlig roll. About är just nu en syntax för hierarki, inte en utlovad destinationssida.

## 2. Problem

När Martin låg direkt efter `Start` lästes personen som en huvudingång jämförbar med publiceringskroppen och de publika verksytorna. Den friktionen är nu korrigerad.

Det som återstår är inte främst ett navigationsproblem utan ett relationsproblem. Sajten har korrekta separata påståenden, men ingen enskild publik yta håller deras relation kort och samlat:

- `verboten-media.html` beskriver Verboten Media som publiceringskropp, litterär maskin och underhållningsapparat;
- `martin.html` beskriver Martin som ansvarig författarperson och skiljer honom från imprint, bidragsväg och portfolio;
- `contact.html` förklarar att författarskap, publicering, experiment och repoändringar inte är samma kropp;
- `contribute.html` skiljer läsning, idé, PR, publiceringskropp, experimentzon och författarfråga;
- `index.html` prioriterar läsning, Underhållningsmode och de publika kropparna;
- `about.html` fungerar endast som en äldre router.

En besökare kan alltså rekonstruera relationen, men måste göra det genom flera sidor. Samtidigt är det farligt att lösa detta genom en ny generell förklaringssida. En klickbar About-yta kan lätt:

- återföra Martin till centrum genom en annan dörr;
- göra Verboten Media till personligt varumärke;
- upprepa innehållet i `verboten-media.html`;
- bli en portal som försöker förklara hela ontologin;
- placera metod och ansvar före mötet med litteraturen;
- göra kontaktvägen till en konverteringsfunktion;
- skapa ytterligare en likvärdig navpunkt när rebuilden just har minskat sådan horisontalitet.

Den centrala frågan är därför inte om sajten kan ha en About-sida. Den är om en sådan sida kan utföra en distinkt publik handling som de befintliga ytorna inte redan utför.

## 3. Function of About

About bör, om det senare blir en publik meta-yta, vara en kort ansvarskarta för relationer som annars riskerar att blandas. Den ska inte vara introduktion till hela projektet och inte den plats där verket förklaras.

Dess primära publika handling ska vara:

> att hjälpa en besökare som redan behöver orientering att förstå vem eller vad som talar, publicerar, bär ansvar och tar emot kontakt utan att göra dessa funktioner till samma kropp.

About bör göra följande:

- skilja författarperson från publiceringskropp;
- skilja publiceringskropp från fiktionens enskilda gestalter och verk;
- visa att juridiskt, socialt och redaktionellt ansvar ytterst måste kunna nå en person;
- visa att Martin bär författaransvar utan att Verboten Media reduceras till hans personliga varumärke;
- visa att kontakt och bidrag är ansvarskanaler, inte deltagartrattar;
- leda vidare till befintliga sidor i stället för att återberätta dem;
- vara tillgänglig för den som aktivt söker ansvar och sammanhang, men inte stå före läsning.

About bör inte:

- vara generisk `about us`;
- vara biografi, CV, portfolio eller kompetenssammanställning;
- beskriva Martin som huvudperson för hela den publika kroppen;
- beskriva Verboten Media som team, startup, plattform, studio eller serviceorganisation;
- sammanfatta verkens handling eller förklara Praktikanten;
- katalogisera alla experiment, specimens eller publika filer;
- lära ut hela relationen mellan repo, Drive, membran och statusdisciplin;
- formulera ny doktrin;
- lova samarbete, medlemskap, svarstid eller öppen medverkan;
- ersätta `verboten-media.html`, `martin.html`, `contact.html` eller `contribute.html`;
- bli onboarding före litteraturen.

De möjliga konceptuella axlarna kan hållas, men bara i stram form:

- **Fiction before content:** verket och läsningen har företräde framför förklaringen av organisationen.
- **Author as social function:** författaren är den person som kan bära ansvar, proveniens och kontakt, inte sajtens personlighetsfront.
- **Writer / author / publishing body:** skrivandet utförs av personen; författarskap markerar ansvar och verkrelation; Verboten Media ger arbetet publiceringskropp och offentlig form.
- **Public body rather than platform:** Verboten Media är en kropp som kan publicera, iscensätta och bära status, inte ett generellt system för användare.
- **Contact as responsibility channel:** kontakt finns för att frågor och förslag ska kunna nå rätt kropp utan att läsaren görs till lead eller medlem.

## 4. Relation map

| Yta | Primär offentlig funktion | Relation till About | Ska inte bli |
|---|---|---|---|
| **Verboten Media** | Publiceringskropp, litterär maskin och underhållningsapparat. Håller verk, publika entréer och publiceringsformer. | About ska peka hit för frågan vad som publicerar och bär offentlig form. | Martins personliga varumärke, generisk plattform eller studio. |
| **Martin** | Ansvarig författarperson. Bär social, litterär och kontaktbar proveniens bakom arbetet. | About ska peka hit för frågan vem som bär författaransvar. | Primär dramaturgisk entré, CV, portfolio eller personlighetssida för hela systemet. |
| **Contact / Contribute** | Kanal för frågor, förslag och avgränsad extern handling; skiljer mottagande kroppar och mandat. | About ska peka hit när besökaren vill närma sig arbetet eller den ansvariga personen. | CTA, growth-loop, communityingång eller löfte om medskapande. |
| **Writings** | Primär publik läsyta och register, med curatoriska läsvägar. | About ska inte förklara texterna men kan ge en enda väg tillbaka till läsning. | Bilaga till organisationsförklaringen eller portfolio över Martins prestationer. |
| **Praktikanten** | Monumental litterär arbetskropp: figur, runtime, bok, beviskedja och passagefenomen. | About behöver högst markera att en litterär kropp inte är samma sak som författarperson eller publiceringskropp. Direktlänk är inte nödvändig i en minimal version. | Exempelpersona, bot, guide eller pedagogiskt case för organisationsmodellen. |
| **XPRMNT-ZN** | Publik experimentell passage för utvalda kroppar, specimen, metodfigurer, ceremonier och gränsarbete. | About kan peka hit endast för att skilja experimentpassagen från publiceringskroppen och kontaktvägen. | Komplett katalog, produktportal eller generell About för maskinrummet. |
| **Banketter** | Ceremoniell tidsform som markerar mognad utan att bli blogg eller changelog. | About behöver inte beskriva formen. Banketter hör till offentlig brukstid, inte ansvarspresentation. | Organisationshistorik, nyhetsflöde eller bevis för aktivitet. |

Relationen kan sammanfattas utan att plattas ut:

- Writings och de litterära kropparna är det besökaren främst ska möta.
- Verboten Media är kroppen som gör mötet offentligt.
- Martin är personen som kan bära författarskap och ansvar.
- Contact / Contribute är vägen att rikta en fråga eller avgränsad handling.
- XPRMNT-ZN är passagen för experimentell offentlighet.
- Banketter bokför mogen tid.

About ska endast hålla isär dessa funktioner. Det ska inte samla dem till ett nytt överordnat varumärke.

## 5. Recommendation

`CREATE_MINIMAL_ABOUT_PAGE`

Efter mänskligt beslut är den befintliga `about.html` omarbetad till en minimal ansvarskarta. Den ska läsas som MVP och template-aktig yta för senare mänsklig ifyllnad, inte som färdig doktrin eller fullständig projektförklaring.

Navigationen gör `About` klickbar i den redan befintliga meta-gruppen. Martin och Contact / Contribute ligger kvar under gruppen. Därmed blir `about.html` nåbar utan att Martin återförs till primär hierarki och utan att en ny navigationsstruktur skapas.

Den publika funktionen är smal:

- skilja Verboten Media som publiceringskropp från Martin som ansvarig författarperson;
- hålla kontakt och bidrag som ansvarskanaler, inte konvertering;
- skicka läsaren tillbaka till Writings och XPRMNT-ZN;
- låta sidan vara en orienteringsyta för den som behöver ansvarskarta, inte en obligatorisk entré före verket.

## 6. If CREATE_MINIMAL_ABOUT_PAGE

Denna rekommendation väljs inte nu. Följande är därför en framtida designspecifikation, inte ett implementationsmandat.

### Exact filename

`about.html`

Filen finns redan och ska i så fall omarbetas. Ingen parallell `about-us.html`, `responsibility.html` eller ny meta-route ska skapas.

### Minimum sections

1. **What this page is for**
   - En kort mening: sidan skiljer verk, publiceringskropp, författaransvar och kontakt.
   - En tydlig regel: läsningen kräver inte att besökaren först förstår dessa relationer.

2. **The public body**
   - Verboten Media som publiceringskropp.
   - Länk till `verboten-media.html`.

3. **The responsible author-person**
   - Martin som ansvarig författarperson, inte primär sajtgestalt.
   - Länk till `martin.html`.

4. **Approach and responsibility**
   - Contact / Contribute som riktad ansvarskanal.
   - Länk till `contact.html` och, om det krävs för mandatgränser, `contribute.html`.

5. **Return to the work**
   - En enda väg tillbaka till läsning.
   - Länk till `writings.html`.

### Existing pages it may link to

- `verboten-media.html`
- `martin.html`
- `contact.html`
- `contribute.html`
- `writings.html`
- möjligen `xprmnt-zn.html` om skillnaden mellan publiceringskropp och experimentell passage inte kan uttryckas utan den länken

Den minimala sidan behöver inte länka till Praktikanten, Banketter, Underhållningsmode, HackerStory, EHM, PRF-SRG, utilities, docs eller repoavtal.

### What must not be said

Sidan får inte:

- kalla Verboten Media ett team om den faktiska offentliga ansvarskedjan inte stöder det;
- kalla Martin grundare, VD, kreativ ledare eller liknande utan separat verifierad och avsiktlig offentlig formulering;
- beskriva sajten som produkt, plattform, community, AI-projekt eller tjänst;
- hävda att alla publika kroppar är skrivna, skapade eller ägda på samma sätt;
- beskriva Praktikanten som assistent eller persona;
- antyda att kontakt innebär öppen medverkan;
- formulera en ny teori om författarskap eller publiceringskropp som om den redan vore doctrine;
- återge Martins kompetenslista;
- använda About för att försvara eller förklara tekniken före verket;
- göra den äldre routerns fulla katalogfunktion till sidans huvudsak.

### Navigation behavior

Om en minimal About-yta senare implementeras bör `About` bli den klickbara gruppetiketten och Martin samt Contact / Contribute ligga kvar som underordnade länkar.

Detta ska endast ske om:

- klickbarheten är begriplig i både desktop- och mobilmeny;
- gruppens visuella underordning bevaras;
- `About` inte blir en sjätte primär publik kropp;
- aktivt läge kan visas utan ny komplex menylogik;
- länken ersätter den icke-klickbara etiketten i stället för att lägga till ännu en navpost.

Om dessa villkor kräver dropdownsystem, ny JavaScript-mekanik eller bred navigationsredesign ska etiketten förbli icke-klickbar.

## 7. Next @goal

Ingen implementation är motiverad före merge. Inget nästa `@goal` utfärdas från denna diagnos.

Ett framtida implementation goal bör endast formuleras efter ett uttryckligt mänskligt beslut att den befintliga `about.html` ska få en ny offentlig funktion och efter att den minimala copyn har godkänts som ansvarstext, inte genererats som generell sajtinformation.
