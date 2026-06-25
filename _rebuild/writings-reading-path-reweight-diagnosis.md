# Writings reading-path reweight diagnosis

## Diagnostic answer

`writings.html` har en verklig curatorisk reading-path-entré och placerar den korrekt före registret. Den fungerar däremot inte ännu som sidans tydliga primära mänskliga entré.

Reading paths är semantiskt först men handlingsmässigt underviktad. Besökaren möter en liten textlänk till läsarkartan, därefter ett andra featured-block med tre omedelbart klickbara Public Nerve-kort, sedan filter och ett register med 23 kort. Den samlade interaktionsvikten ligger därför i kortregistret, inte i den curatoriska sekvensen.

Sidan säger att sequence kommer från reading paths. Sidans faktiska affordance säger fortfarande: välj ett kort.

## Observed current hierarchy

Den synliga ordningen är:

1. Sidhuvud med den breda kategorin essays, criticism och literary texts.
2. Featured-blocket `Reading paths / Choose an entrance`.
3. En liten länk: `Open curated reading paths`.
4. Featured-blocket `Public Nerve / Material Under Pressure`.
5. Tre klickbara Public Nerve-kort.
6. Filter: All, Literary, Analysis, Fragment.
7. Huvudregistret med 23 klickbara textkort.

Den implicita prioriteten blir:

**orientering -> reading-path-påstående -> featured text cluster -> filter -> register.**

Reading-path-blocket står först och har stor rubrik. Men dess enda fortsättningshandling är typografiskt mindre än korten som följer. Public Nerve använder samma `featured-text`-struktur och får dessutom en intern grid med tre fulla kort. Resultatet är att första och andra featured-blocket ser ut som två jämförbara redaktionella förord, medan det andra erbjuder mer omedelbar handling.

Filtret skapar sedan en tydlig verktygsövergång. När besökaren når `All / Literary / Analysis / Fragment` känns det som att den egentliga Writings-sidan börjar.

## Reading-path quality

`static-pages/writings/INDEX.md` är inte ett tomt pek. Den innehåller fem befintliga läsvägssektioner:

- First Reading Path: Förlagsdeckaren Surface;
- Praktikanten;
- Essäer, analyser och lexikon;
- Satelliter och noveller;
- Offentliga nervtexter.

Den första Förlagsdeckaren-vägen är den starkaste curatoriska kroppen. Den har sex ordnade steg och korta motiveringar som förklarar varför nästa text följer. Den erbjuder verklig sekvens.

Praktikanten-vägen är också ordnad, men mer koncentrerad och utan förklaringar för varje steg.

De tre återstående sektionerna fungerar främst som grupperade länklistor. De är användbara orienteringsfält, men de ger mindre svar på "varför denna ordning?" och "vad händer om jag följer vägen?".

Reading index levererar alltså två olika saker:

- en faktisk sekvenserad läsbana;
- kategoriserade urval som ännu ligger närmare curatoriska listor.

Detta är inte ett publiceringsfel. Det betyder att Writings-sidans formulering om flera curatoriska routes är sann, men att löftet är ojämnt realiserat. En framtida omviktning bör inte förstora påståendet mer än indexet kan bära.

## Friction

- Reading paths och Public Nerve använder samma featured-form trots olika funktion. Den ena är en passage till sekvens; den andra är ett konkret texturval.
- Reading-path-länken är visuellt liten och inbäddad i metadatafältet.
- Reading-path-blockets stora högerspalt används till principen `One text, one card`, inte till själva läshandlingen.
- Public Nerve erbjuder tre stora klickbara kort omedelbart efter reading paths och får därför högre faktisk handlingsvikt.
- Filterraden signalerar en tydlig, bekant kontrollpunkt och drar besökaren mot registerlogik.
- Huvudregistret har 23 kort. Dess längd och repetitiva klickbarhet överväger snabbt den curatoriska entréns enskilda länk.
- Sidhuvudet beskriver texttyper men förbereder inte besökaren på skillnaden mellan att följa en väg och att söka i registret.
- Förlagsdeckaren, Praktikanten och Public Nerve har meningsfull curatorisk struktur, men den strukturen är delad mellan reading index, featured-block och registerkort.
- Public Nerve-korten ligger utanför huvudregistrets filteryta. Det är funktionellt möjligt, men förstärker känslan av ett mindre register ovanför det stora registret.
- "One text, one card" är en viktig registerprincip, men den tar scenisk plats från frågan "vad ska jag läsa först?".

## What already works

- Reading paths ligger före filter och register. Grundordningen är korrekt.
- `Choose an entrance` är en bra mänsklig rubrik och kräver ingen intern repo-förståelse.
- Reading index återanvänder publicerade texter utan duplicerade registerkort.
- Förlagsdeckaren-vägen erbjuder en verklig sexstegssekvens med motiv för varje steg.
- Praktikanten har en egen koncentrerad läsbana och kopplar till dess offentliga passageakt.
- Public Nerve har redan en begriplig gemensam funktion: provenance, röstgräns och publik passage.
- Filter och register är robusta och användbara för den som redan vet vilken typ av text den söker.
- Registret följer principen en text, ett kort och behöver inte ersättas.
- Sidan behöver inte fler texter, fler kategorier eller ett nytt publiceringssystem.

## Pareto recommendation

### Highest-effect minimal future change

Gör den befintliga reading-path-entrén till sidans enda featured-tröskel före filter och register.

Det innebär i ett senare implementationspass att Public Nerve-blocket flyttas ur den omedelbara featured-position som konkurrerar med reading paths. Public Nerve ska behållas intakt som befintligt kuraterat textkluster, men placeras efter registertröskeln eller i en tydligt sekundär position där det inte ser ut som en alternativ huvudentré.

Detta är Pareto-förändringen eftersom den:

- använder endast befintliga block, texter och länkar;
- ger reading paths ensamrätt på den första curatoriska tröskeln;
- låter filtret markera övergången från läsbana till register;
- behåller Public Nerve som viktigt urval utan att låta dess tre kort överrösta den enda reading-path-länken;
- kräver ingen ny text, ny taxonomy, ny publicering eller ändring av markdownstandarden.

Den avsedda funktionella ordningen blir:

**sidhuvud -> välj läsväg -> registerfilter och register -> sekundärt kuraterat kluster.**

### Secondary alternative 1

Behåll blockordningen men ge reading-path-länken den stora handlingspositionen i första featured-blockets högerspalt, medan principtexten `One text, one card` flyttas till den mindre metadatafunktionen. Detta kan öka handlingens vikt utan att flytta Public Nerve, men kan kräva en snäv HTML- eller klassjustering.

### Secondary alternative 2

Behåll båda featured-blocken före registret men reducera Public Nerve från `featured-text` till en sekundär registersektion. Detta skulle tydliggöra funktionsskillnaden, men innebär mer strukturell stylingrisk än en ren blockflytt.

## Leave untouched

Ett senare implementationsmandat bör lämna följande oförändrat om inget annat uttryckligen auktoriseras:

- global navigation;
- sidhuvudets copy;
- samtliga publicerade markdowntexter;
- `static-pages/writings/INDEX.md`;
- reading paths innehåll och ordning;
- markdown publishing standard;
- kortens titlar, sammanfattningar, typer, datum och destinationer;
- principen en text, ett kort;
- filterfunktion och filterkategorier;
- JavaScript-rendering och kortklick;
- Public Nerve-texternas status och innehåll;
- huvudregistrets kortordning;
- CSS-systemet i stort;
- destination pages.

## Implementation mandate required

Om diagnosen accepteras behöver ett senare Codex-pass uttryckligt tillstånd att:

1. ändra endast blockordningen i `writings.html`;
2. flytta det befintliga Public Nerve-blocket till en sekundär position efter registertröskeln eller huvudregistret;
3. behålla reading-path-blocket som ensam featured-tröskel före filtret;
4. vid behov göra en mycket snäv lokal strukturjustering i `writings.html`, men utan ny copy eller nya länkar.

CSS ska inte ingå i första mandatet. Om blockflytten visar ett konkret visuellt fel ska ett separat, snävt CSS-mandat begäras efter lokal rendering.

## Implemented goal

`IMPLEMENT_WRITINGS_READING_PATH_PARETO_REWEIGHT_V0`

Detta mål genomfördes genom den blockomviktning som dokumenteras nedan.

## Implementation note

Det befintliga Public Nerve-blocket flyttades intakt från positionen direkt efter reading-path-entrén till positionen efter huvudregistret.

Detta var Pareto-förändringen eftersom reading paths nu är den enda featured-tröskeln före filter och register. Besökaren möter först den curatoriska läsvägen, därefter registerverktyget och dess kort, och sist Public Nerve som ett sekundärt kuraterat kluster.

Följande lämnades medvetet orört:

- all copy;
- samtliga länkar och destinationer;
- reading index och dess ordning;
- Public Nerve-kortens innehåll och status;
- filterfunktion och kategorier;
- huvudregistrets kort och ordning;
- JavaScript;
- CSS;
- markdown publishing standard;
- destination pages.

Martin bör visuellt kontrollera:

- om reading paths nu känns som sidans tydliga mänskliga startpunkt;
- om övergången från featured-tröskel till filter känns tillräckligt avsiktlig;
- om Public Nerve fortfarande behåller redaktionell vikt efter det långa registret;
- om sidans längd gör Public Nerve för undanskymt på desktop eller mobil;
- om den nya ordningen känns som läsväg -> register -> sekundärt urval, inte som att Public Nerve har degraderats i status.

Nästa rekommenderade `@goal`:

`XPRMNT_ZN_HIERARCHY_DIAGNOSIS_V0`

Det passet bör diagnostisera de befintliga XPRMNT-ZN-posterna efter publik funktion utan att lägga till material, ändra status eller skapa en ny taxonomy.
