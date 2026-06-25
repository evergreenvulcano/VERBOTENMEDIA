# XPRMNT-ZN hierarchy diagnosis

## Diagnostic answer

`xprmnt-zn.html` har tydliga gränser men en för horisontell materialyta.

Sidan förklarar först status, membran och passagevillkor. När materialet väl öppnas presenteras nio ontologiskt olika poster i samma `service-grid`, med samma kortform och utan en läsordning som skiljer fulla publika kroppar från metodfigurer, ceremonier, specimen, utilities och operativa pek.

Problemet är inte att posterna finns. Problemet är att deras nuvarande ordning blandar publik gravitation.

## Observed current hierarchy

Den synliga ordningen är:

1. Sidhuvud: XPRMNT-ZN som publik experimentell passage.
2. `Start with status, not import`.
3. `Status`.
4. `What can pass`.
5. `Readable material entrances`.
6. Nio likvärdiga service-kort:
   - Praktikanten;
   - Wise Consultant;
   - Banketter;
   - HackerStory;
   - EHM Levels Virusprosa;
   - PRF-SRG;
   - Playable utilities;
   - XPRMNT-ZN Sluice;
   - XPRMNT-ZN Membrane.
7. `What does not pass`.
8. `Time and banketter`.

Sidan prioriterar alltså korrekt gräns före import, men kräver tre metod- och statussektioner före mötet med materialet. Inne i materialytan börjar den med Praktikanten, men går sedan metodfigur -> ceremoni -> specimen -> två fulla prosakroppar -> utility -> operativ template -> doktrin.

Den ordningen uttrycker bredd men inte rang.

## Public-function map

Följande är en diagnostisk funktionskarta, inte en ny taxonomy:

- **Full läsbar eller monumental kropp:** Praktikanten, EHM Levels Virusprosa, PRF-SRG.
- **Forskningsspecimen:** HackerStory.
- **Offentlig metodfigur:** Wise Consultant.
- **Ceremoniell tidsform:** Banketter.
- **Experimentell utility:** Playable utilities.
- **Operativ gränsform:** XPRMNT-ZN Sluice.
- **Doktrinpek:** XPRMNT-ZN Membrane.

Praktikanten har redan monumental publik form. EHM och PRF-SRG beskrivs som fullständigt prosadossier respektive fullständig prosasvit. HackerStory har en avsiktlig specimenform. Dessa fyra erbjuder direkt möte med offentlig materialkropp.

Wise Consultant, Banketter och Playable utilities är publika men erbjuder andra handlingar: metodläsning, ceremoniell tid och spelbart metodobjekt.

Sluice och Membrane hjälper en agent eller särskilt intresserad läsare att förstå gräns och doctrine. De är viktiga pek, men de är inte jämförbara med att läsa en prosakropp.

## Friction

- Alla nio poster använder samma kortform trots olika publik funktion och mognad.
- Wise Consultant och Banketter bryter den läsbara kroppslinjen direkt efter Praktikanten.
- EHM och PRF-SRG ligger mitt i griden trots att deras status uttryckligen säger fullständigt prosadossier och fullständig prosasvit.
- HackerStory, som faktiskt specimenfält, separeras från de andra materialkropparna av metodfigur och ceremoni.
- Sluice och Membrane får samma visuella vikt som fulla prosakroppar.
- Sidans inledande tre sektioner placerar metod och gränsförklaring före material. Det skyddar membranet men ökar tröskeln för läsaren.
- `Readable material entrances` gör ingen skillnad mellan att läsa ett verk, öppna en metodfigur, gå till en ceremoni, använda en utility eller läsa doctrine.
- Banketter återkommer både som kort och som egen avslutande sektion. Återkomsten är begriplig men ökar dess relativa synlighet.

## What already works

- Sidan säger uttryckligen att materialentréerna inte är en komplett katalog.
- Membranprincipen är tydlig: ingen spegling av Drive och ingen bulkimport.
- Varje kort har en faktisk statusformulering.
- Praktikanten ligger redan först.
- EHM och PRF-SRG har tydliga fullkroppsstatusar och direkta läsingångar.
- HackerStory bevarar specimen-status i stället för att låtsas vara traditionell bok.
- Wise Consultant är tydligt icke-interaktiv.
- Sluice och Membrane är pek, inte automatiska systeminstallationer.
- Alla nio poster kan behållas. Ingen behöver tas bort eller befordras.

## Pareto recommendation

### Highest-effect minimal future change

Ordna om de nio befintliga korten så att direkt läsbara materialkroppar kommer först och operativa pek kommer sist.

Rekommenderad befintlig kortordning:

1. Praktikanten;
2. EHM Levels Virusprosa;
3. PRF-SRG;
4. HackerStory;
5. Wise Consultant;
6. Banketter;
7. Playable utilities;
8. XPRMNT-ZN Sluice;
9. XPRMNT-ZN Membrane.

Detta är Pareto-förändringen eftersom den skapar en faktisk läsrörelse utan ny copy, nya kategorirubriker, nya kort, statusändringar eller CSS. Besökaren möter först kroppar att läsa, därefter andra publika former och sist gränsapparaten.

Ordningen är en presentationsordning, inte en ny taxonomy eller kanonhierarki.

### Secondary alternative 1

Behåll kortordningen men flytta hela `Readable material entrances` före `Start with status, not import`. Detta skulle ge snabbare materialkontakt men riskerar att försvaga sidans uttalade membran- och sluiceprincip.

### Secondary alternative 2

Dela service-griden med befintliga funktionsrubriker. Detta skulle göra ontologin tydligare men kräver ny copy och börjar närma sig ett nytt klassificeringslager. Det är därför inte första säkra steg.

## Leave untouched

Ett senare implementationsmandat bör lämna följande oförändrat:

- global navigation;
- sidhuvudets copy;
- de inledande membran- och statussektionerna;
- samtliga korttexter, statusar, länkar och destinationer;
- antalet kort;
- `What does not pass`;
- `Time and banketter`;
- membrandoctrine;
- Sluice-template;
- Public Nerve, Writings och andra destination pages;
- CSS;
- JavaScript;
- materialstatus och kanon.

## Implementation mandate required

Om diagnosen accepteras krävs endast tillstånd att ändra ordningen på de nio befintliga `service-item`-blocken i `xprmnt-zn.html`.

Ingen copy, länk, status, klass, destination eller annan sektion behöver ändras.

## Implemented goal

`IMPLEMENT_XPRMNT_ZN_CARD_ORDER_PARETO_V0`

Detta mål genomfördes genom den kortomordning som dokumenteras nedan.

## Implementation note

De nio befintliga korten i `Readable material entrances` ordnades om till:

1. Praktikanten;
2. EHM Levels Virusprosa;
3. PRF-SRG;
4. HackerStory;
5. Wise Consultant;
6. Banketter;
7. Playable utilities;
8. XPRMNT-ZN Sluice;
9. XPRMNT-ZN Membrane.

Detta var Pareto-förändringen eftersom läsaren nu möter fulla publika materialkroppar först, andra publika former därefter och operativa gränspek sist. Omordningen ändrar presentation, inte status eller kanon.

Följande lämnades medvetet orört:

- alla korttexter;
- samtliga statusformuleringar;
- länkar och destinationer;
- antalet kort;
- alla övriga sektioner;
- membrandoctrine och Sluice-template;
- CSS och JavaScript;
- global navigation;
- materialstatus och publiceringsbeslut.

Martin bör visuellt kontrollera:

- om de fyra första korten nu läses som en begriplig materialfront;
- om Wise Consultant och Banketter behåller tillräcklig egen vikt i mitten;
- om Sluice och Membrane tydligt känns som avslutande operativa pek;
- om den linjära kortrörelsen på desktop känns avsiktlig över sidans längd;
- om den linjära mobilordningen känns naturlig.

Nästa rekommenderade `@goal`:

`PRAKTIKANTEN_MODEL_COMPARISON_DIAGNOSIS_V0`

Det passet bör jämföra EHM, PRF-SRG, HackerStory och Wise Consultant mot Praktikantens modell utan att ändra, befordra eller imitera någon av ytorna.
