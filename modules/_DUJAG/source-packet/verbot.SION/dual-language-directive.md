# Dual Language Directive

Source status: user-supplied language policy note.
Intended use: upload with Copilot handoff as source material for the new `/modules/<new-module>/` folder.
Normalization note: preserved as markdown source; this is suitable for direct admission into a glossary/language-policy layer after review.

---

Om vi går till spliten mellan svenska och engelska, så skulle jag resonera ganska strikt där också.

Engelska är bättre för interoperabilitet, modulkontrakt, teknisk arkitektur, dokumentfamiljer, runtime-beskrivningar och arbete som ska kunna röra sig mellan system, modeller eller utvecklingsmiljöer. Engelska ger också ett slags hårdare standardisering, vilket kan vara nyttigt när du behöver kontroll och jämförbarhet.

Svenska är bättre när du behöver hålla fast vid semantisk egenart, erfarenhetsnärhet, rytmisk precision, eller när termernas laddning riskerar att falskt standardiseras i engelska. Svenska är också bättre om ordet måste stå nära din egen fenomenologiska intuition snarare än nära etablerat fackspråk.

Så snarare än att välja språk generellt skulle jag dela upp det efter funktion.

Engelska för:

- arkitektur
- kontrakt
- sekvenser
- moduler
- reviews
- fail modes
- specifikationer
- kompilering
- interoperabla arbetsord

Svenska för:

- högintensiva termer
- fenomenologiska definitioner
- inre skillnader som annars plattas ut
- förstaformuleringar av skyddade ord
- korrigering av falska engelska standardbetydelser

Det vill säga: engelska för struktur, svenska för semantisk suveränitet.

Sedan kan du göra en tredje nivå:

bilingual control entries

Alltså poster där båda språken finns, men där du markerar att de inte är fullständiga översättningar av varandra. Exempelvis:

## Third eye

Arbetsöversättning: cognitive locus

Svensk systembetydelse: upplevelselokus / punkt för situerat undergående

Förbjudna glidningar: kamera, gudsvy, mystisk accessoar

## Empathy

Arbetsöversättning: empathy

Svensk systembetydelse: subjektinstabiliserande asymmetrisk åtkomsthändelse

Förbjudna glidningar: vänlighet, varm förståelse, prosocial omtanke

Det där är sannolikt det bästa sättet att hantera spliten. Inte som “ska jag jobba på svenska eller engelska?” utan som “vilket språk ska bära vilken sorts ansvar?”

Min skarpare rekommendation är därför:

Ha ett engelskt arbetslager för arkitektur.

Ha ett svenskt kärnlexikon för skyddade systemtermer.

Ha versionshistorik för termer som redan vandrat mellan olika användningar.

Canonisera inte ord bara för att de råkade hjälpa ett resonemang i en viss tidslinje.
