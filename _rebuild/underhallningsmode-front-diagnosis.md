# Underhållningsmode front diagnosis

## Diagnostic answer

Underhållningsmode har rätt innehåll men fel första rörelse.

Startsidan ger redan Underhållningsmode en stark scenisk entré. När besökaren kommer fram möts den däremot först av `Choose a public route`, en generell routingsektion med länkar till Writings, XPRMNT-ZN och Contact. Den litterära frontlogiken börjar först därefter med `I do not want to read`.

Det gör att sidan öppnar som navigationshub innan den öppnar som text-as-interface.

## Observed current hierarchy

1. Sidhuvud: `External text-as-interface`.
2. `Choose a public route`.
3. Generella vägar till läsning, membran och idé.
4. `I do not want to read`.
5. `Give me a Förläggare`.
6. `Show me the machine room without leaking it`.
7. `I have an idea`.
8. `I want to get lost`.

De fem originella interfacepositionerna finns redan och följer en begriplig rörelse från vägran till förlag, maskinrum, idé och förlust. Den generella route-sektionen står dock före hela denna rörelse.

## Friction

- `Choose a public route` gör sidan till router innan den hinner iscensätta läsarens position.
- De tre första länkarna upprepar destinationer som senare får mer specifik litterär betydelse.
- `Bring an idea near` föregriper den senare sektionen `I have an idea`.
- `Understand the membrane` föregriper `Show me the machine room without leaking it`.
- `Read the literary surface` erbjuder vanlig läsning innan vägran har fått fungera som entré.
- Sidans starkaste formulering, `I do not want to read`, ligger som andra sektion i stället för första publika handling.

## What already works

- Sidan är helt statisk.
- Ingen personalisering eller simulerad samtalspartner finns.
- Vägranspositionen är tydlig och litterär.
- Förläggaren beskrivs uttryckligen som icke-chatbot.
- Maskinrumspositionen håller skyddade original utanför.
- Idépositionen skiljer ankomst från publicerings- och kanonbeslut.
- Förlustpositionen leder till en publik labyrint, inte en privat rådump.
- Startsidan ger redan Underhållningsmode scenisk vikt.

## Pareto recommendation

### Highest-effect minimal change

Flytta det befintliga blocket `Choose a public route` efter de fem interfacepositionerna.

Sidan skulle då öppna direkt med `I do not want to read` och låta hela litterära rörelsen verka innan den avslutas med en praktisk routingsektion.

Detta kräver:

- ingen ny copy;
- inga nya länkar;
- ingen CSS;
- ingen interaktivitet;
- ingen förändring av destinationer.

Den funktionella ordningen blir:

**vägran -> Förläggare -> kontrollerad maskinrumsblick -> idé -> offentlig förlust -> praktisk routing.**

## Leave untouched

- Sidhuvudets copy;
- alla fem interfacepositioner och deras ordalydelse;
- länkar och destinationer;
- global navigation;
- CSS och JavaScript;
- anti-content-dokumentet;
- inga nya modes, funktioner eller personliga flöden.

## Implementation mandate

Diagnosen stödjer en enda lokal implementation: flytta det befintliga `Choose a public route`-blocket till slutet av `.public-surface-body`.

## Implementation note

`Choose a public route` flyttades intakt efter de fem litterära interfacepositionerna.

Underhållningsmode öppnar nu med `I do not want to read`, fortsätter genom Förläggaren, maskinrumsblicken, idén och den publika labyrinten, och avslutas först därefter med praktisk routing.

Följande ändrades inte:

- copy;
- länkar;
- destinationer;
- CSS;
- JavaScript;
- global navigation;
- sidhuvud;
- anti-content-principen.

Visuell kontroll ska bekräfta att den första sektionen nu känns som en litterär början och att den avslutande routingsektionen fungerar som utgång snarare än CTA-funnel.
