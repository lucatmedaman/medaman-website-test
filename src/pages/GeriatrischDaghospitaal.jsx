import PaginaKop from "../components/ui/PaginaKop";
import Sectie from "../components/ui/Sectie";
import SectieKop from "../components/ui/SectieKop";
import Kaart from "../components/ui/Kaart";
import Lijst from "../components/ui/Lijst";
import CTA from "../components/CTA";
import useDocumentTitel from "../hooks/useDocumentTitel";

const watWeAnalyseren = [
  "Activiteitsvolume per periode, met onderscheid tussen eerste contacten en herhaalcontacten — een groeiend aantal contacten hoeft geen groeiend aantal patiënten te betekenen.",
  "Het profiel van de opgenomen patiënten: leeftijd, comorbiditeit, herkomst van de verwijzing en zorgzwaarte.",
  "Volledigheid van de registratie van het globaal geriatrisch onderzoek en de bijhorende multidisciplinaire verslaggeving.",
  "De verhouding tot de klassieke hospitalisatie: welk deel van de patiënten belandt later alsnog op een verpleegeenheid, en binnen welke termijn.",
  "Verwijspatronen: welke diensten en welke huisartsenkringen verwijzen, en welke opvallend weinig.",
  "Bezetting en doorlooptijd per dag, om te zien of de beschikbare plaatsen benut worden.",
];

const datakenmerken = [
  {
    label: "Geen ligduur om op te sturen",
    tekst:
      "Een daghospitalisatie kent geen verblijfsduur in dagen. Indicatoren die op ligduur steunen — de kern van veel klassieke ziekenhuisanalyses — vallen hier weg en moeten vervangen worden door contact- en trajectmaten.",
  },
  {
    label: "Casemix werkt anders",
    tekst:
      "APR-DRG-groepering is ontworpen voor klassieke opnames. Voor daghospitalisatie levert ze een veel grovere differentiatie op, waardoor een vergelijking tussen ziekenhuizen op casemix minder houvast biedt dan bij een verpleegeenheid.",
  },
  {
    label: "Eén patiënt, veel contacten",
    tekst:
      "Dezelfde patiënt komt vaak meerdere keren terug. Analyses die contacten tellen en analyses die patiënten tellen geven dus sterk verschillende cijfers. Welke van de twee bedoeld wordt, moet expliciet vastliggen.",
  },
  {
    label: "Afbakening tegenover andere daghospitalen",
    tekst:
      "Een ziekenhuis heeft doorgaans meerdere vormen van daghospitalisatie. De cijfers zijn pas vergelijkbaar wanneer duidelijk is welke activiteit onder het geriatrisch daghospitaal valt en welke elders geregistreerd wordt.",
  },
  {
    label: "Registratie volgt de organisatie",
    tekst:
      "Verschillen tussen ziekenhuizen komen vaker voort uit een andere interne afspraak over registreren dan uit een andere zorgpraktijk. Dat onderscheid maken is het eerste werk, niet het laatste.",
  },
];

const indicatoren = [
  "Aantal unieke patiënten en aantal contacten, apart gerapporteerd en over de tijd gevolgd.",
  "Aandeel patiënten bij wie een volledig geriatrisch onderzoek geregistreerd is.",
  "Aandeel patiënten dat binnen een afgesproken termijn alsnog klassiek wordt opgenomen.",
  "Herkomst van de verwijzing, uitgesplitst naar interne dienst, huisarts en spoedgevallendienst.",
  "Benutting van de beschikbare plaatsen per weekdag.",
  "Evolutie van het patiëntenprofiel, om te zien of de doelgroep verschuift.",
];

export default function GeriatrischDaghospitaal() {
  useDocumentTitel(
    "Geriatrisch daghospitaal · Medaman",
    "Wat het geriatrisch daghospitaal bijzonder maakt in de ziekenhuisregistratie, en welke analyses en indicatoren er wél zinvol zijn.",
  );

  return (
    <>
      <PaginaKop
        eyebrow="Kennis"
        titel="Geriatrisch daghospitaal"
        lede="Een zorgvorm die in de cijfers anders werkt dan de rest van het ziekenhuis. Wie er dezelfde indicatoren op loslaat als op een verpleegeenheid, krijgt een vertekend beeld."
        kruimels={[{ label: "Home", to: "/" }]}
        huidig="Geriatrisch daghospitaal"
      />

      <Sectie>
        <SectieKop titel="Waar het over gaat" className="mb-6" />
        <div className="max-w-tekst space-y-4">
          <p className="text-gedempt">
            Het geriatrisch daghospitaal is de plek waar oudere patiënten met een kwetsbaar
            profiel terechtkomen voor onderzoek, behandeling of revalidatie zonder dat ze
            blijven overnachten. Een multidisciplinair team — geriater, verpleegkundigen,
            kinesitherapie, ergotherapie, logopedie, diëtetiek, sociale dienst, psychologie —
            brengt in één of enkele dagdelen een breed beeld van de patiënt samen.
          </p>
          <p className="text-gedempt">
            Voor het ziekenhuis is het een schakel tussen de raadpleging en de klassieke
            opname: het vangt zorgvragen op die te complex zijn voor een consultatie, maar
            waarvoor een opname niet nodig — en vaak niet wenselijk — is.
          </p>
          <p className="text-gedempt">
            Voor wie met de cijfers werkt, is het bovendien een buitenbeentje. Vrijwel alle
            gangbare ziekenhuisindicatoren gaan uit van een opname met een begin, een einde
            en een verblijfsduur ertussen. Hier is dat er niet.
          </p>
        </div>
      </Sectie>

      <Sectie variant="zacht">
        <SectieKop
          eyebrow="Datakenmerken"
          titel="Vijf redenen waarom de gewone analyses hier niet passen"
          lede="Geen van deze punten is een probleem op zich. Ze worden er pas een wanneer ze over het hoofd gezien worden en een rapport conclusies trekt die de data niet draagt."
          className="mb-8"
        />
        <dl className="grid gap-5 sm:grid-cols-2 sm:gap-x-12">
          {datakenmerken.map((k) => (
            <div key={k.label} className="border-l-2 border-rand pl-4">
              <dt className="text-[0.95rem] font-semibold text-primair">{k.label}</dt>
              <dd className="mt-1 text-[0.95rem] text-gedempt">{k.tekst}</dd>
            </div>
          ))}
        </dl>
      </Sectie>

      <Sectie>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectieKop
              eyebrow="Analyse"
              titel="Wat we wél bekijken"
              niveau={2}
              className="mb-6"
            />
            <Lijst items={watWeAnalyseren} />
          </div>
          <div>
            <SectieKop
              eyebrow="Indicatoren"
              titel="Waar een rapport op kan steunen"
              niveau={2}
              className="mb-6"
            />
            <Lijst items={indicatoren} marker="vink" />
          </div>
        </div>
      </Sectie>

      <Sectie variant="zacht">
        <SectieKop
          eyebrow="Aandachtspunt"
          titel="Groei is hier zelden één ding"
          className="mb-6"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <Kaart>
            <h3 className="text-lg font-semibold text-primair">Meer patiënten</h3>
            <p className="text-[0.95rem] text-gedempt">
              De doelgroep wordt werkelijk groter, of het ziekenhuis bereikt een deel van
              die groep dat het voorheen niet zag. Dat is de interpretatie waar meestal
              meteen naar gegrepen wordt.
            </p>
          </Kaart>
          <Kaart>
            <h3 className="text-lg font-semibold text-primair">Meer contacten per patiënt</h3>
            <p className="text-[0.95rem] text-gedempt">
              Dezelfde groep komt vaker terug. Dat kan wijzen op een intensiever traject,
              maar evengoed op onderzoeken die over meerdere dagen gespreid worden.
            </p>
          </Kaart>
          <Kaart>
            <h3 className="text-lg font-semibold text-primair">Anders geregistreerd</h3>
            <p className="text-[0.95rem] text-gedempt">
              Activiteit die vroeger elders geboekt werd, komt nu onder het geriatrisch
              daghospitaal terecht. De zorg veranderde niet, de telling wel.
            </p>
          </Kaart>
        </div>
        <p className="mt-8 max-w-tekst border-l-[3px] border-accent bg-white p-4 text-[0.95rem] text-gedempt">
          Deze drie zien er in een grafiek identiek uit. Ze uit elkaar halen vraagt dat je
          patiënten en contacten apart telt en de registratieafspraken van de betrokken
          periode kent — precies het werk dat een cijfer bruikbaar maakt voor een beslissing.
        </p>
      </Sectie>

      <Sectie>
        <SectieKop
          eyebrow="Verantwoording"
          titel="Wat hier nog niet staat"
          className="mb-6"
        />
        <div className="max-w-tekst space-y-4">
          <p className="text-gedempt">
            Deze pagina beschrijft het geriatrisch daghospitaal vanuit registratie en
            analyse. De regelgevende kant — de erkenningsnormen binnen het zorgprogramma
            voor de geriatrische patiënt, en de precieze financierings- en
            facturatieregels — is bewust weggelaten zolang ze niet nagekeken is.
          </p>
          <p className="placeholder block">
            [[ Nog aan te vullen na verificatie: verwijzing naar de geldende
            erkenningsnormen, de financieringsregels die op het geriatrisch daghospitaal
            van toepassing zijn, en de registratieafspraken zoals die op dit moment
            gelden. Cijfers en juridische verwijzingen horen hier pas te staan nadat ze
            aan de bron getoetst zijn. ]]
          </p>
        </div>
      </Sectie>

      <CTA
        titel="Een vraag over de cijfers van uw daghospitaal?"
        tekst="We bekijken welke registratie u heeft en wat daar betrouwbaar uit te halen valt — inclusief welke vergelijkingen beter niet gemaakt worden."
      />
    </>
  );
}
