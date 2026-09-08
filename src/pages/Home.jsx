import Sectie from "../components/ui/Sectie";
import Kaart from "../components/ui/Kaart";
import Knop from "../components/ui/Knop";
import CTA from "../components/CTA";
import useDocumentTitel from "../hooks/useDocumentTitel";
import { diensten } from "../data/diensten";
import { Smartphone, PanelTop, Paintbrush, Puzzle } from "lucide-react";

/** Iconen zoals op de live site, per dienst-slug. */
const EXPERTISE_ICONS = {
  feedback: Smartphone,
  "clinical-documentation-improvement": PanelTop,
  "data-analyse": Paintbrush,
  codeerondersteuning: Puzzle,
};

export default function Home() {
  useDocumentTitel(
    "Medaman · Ontsluit het potentieel van uw ziekenhuisgegevens",
    "Medaman verleent diensten aan ziekenhuizen op het vlak van feedback, clinical documentation improvement, data analyse en codeerondersteuning.",
  );

  return (
    <>
      <section
        className="relative flex min-h-[420px] items-center bg-cover bg-center py-16 md:min-h-[520px] md:py-24"
        style={{ backgroundImage: "url(/images/hero-arts-tablet.jpg)" }}
      >
        <div className="absolute inset-0 bg-[#1B2A33]/60" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-[1160px] px-4 text-center sm:px-6">
          <span className="mb-3 block text-sm font-medium uppercase tracking-[0.12em] text-white/85">
            Ontsluit het potentiëel van uw ziekenhuisgegevens!
          </span>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            MEDAMAN
          </h1>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Knop to="/contact" className="!bg-primair-licht !border-primair-licht">
              Contact us
            </Knop>
          </div>
        </div>
      </section>

      <Sectie variant="zacht" id="over-ons">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-accent sm:text-5xl">
            OVER ONS
          </h2>
          <p className="mt-3 text-xl text-gedempt">Wie we zijn en wat we doen</p>
        </div>

        <div className="grid gap-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <p className="text-gedempt lg:order-1">
              MEDAMAN is een organisatie die diensten verleent aan ziekenhuizen die
              innovatie naar een nog hoger niveau willen brengen. Uit gestructureerde
              ziekenhuisgegevens die in verschillende bronnen beschikbaar zijn, wordt de
              meest relevante informatie voor zorgverleners gecreëerd. Deze worden snel
              en op een gebruiksvriendelijke manier ter beschikking gesteld met het oog
              op kwaliteitsvollere zorg.
            </p>
            <div className="overflow-hidden rounded-md border border-rand lg:order-2">
              <img
                src="/images/over-ons-laptop.jpg"
                alt="Arts typt op een laptop, met rapportages en een stethoscoop op tafel"
                className="h-full w-full object-cover"
                width="1600"
                height="1064"
              />
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-md border border-rand lg:order-1">
              <img
                src="/images/over-ons-dashboard.jpg"
                alt="Laptop met een dashboard van ziekenhuisdata-analyses"
                className="h-full w-full object-cover"
                width="1600"
                height="1067"
              />
            </div>
            <p className="text-gedempt lg:order-2">
              Het bedrijf werd reeds opgericht in 2019 door Dr. Luc Belmans, een arts
              die reeds zijn sporen verdiend heeft in het ziekenhuisbeheer! De diensten
              van MEDAMAN omvatten een volledige ondersteuning van de
              zorgregistratiecyclus.
            </p>
          </div>
        </div>
      </Sectie>

      <Sectie>
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-accent sm:text-5xl">
            EXPERTISE
          </h2>
          <p className="mt-3 text-xl text-gedempt">Hoe kunnen wij u helpen</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {diensten.map((d) => {
            const Icoon = EXPERTISE_ICONS[d.slug];
            return (
              <Kaart key={d.slug}>
                {Icoon && <Icoon className="h-8 w-8 text-accent" strokeWidth={1.5} aria-hidden="true" />}
                <h3 className="text-xl font-semibold text-primair">{d.titel}</h3>
                <p className="text-gedempt">{d.tekst}</p>
              </Kaart>
            );
          })}
        </div>
      </Sectie>

      <Sectie variant="zacht">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-accent sm:text-5xl">
            MISSIE &amp; VISIE
          </h2>
          <p className="mt-3 text-xl text-gedempt">Onze focus</p>
        </div>

        <div className="grid gap-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-md border border-rand lg:order-1">
              <img
                src="/images/missie-armen.jpg"
                alt="Zorgverlener met gekruiste armen en stethoscoop"
                className="h-full w-full object-cover"
                width="1600"
                height="1067"
              />
            </div>
            <div className="lg:order-2">
              <h3 className="mb-2 text-2xl font-semibold text-primair">Onze Missie</h3>
              <p className="text-gedempt">
                Faciliteren van hoogkwalitatieve ziekenhuiszorg aan lagere kosten
                resulterend in voordelen voor ziekenhuis, arts en patiënt dankzij state
                of the art codering, analyse van ziekenhuisgegevens en vergelijkingen
                met peers.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="lg:order-1">
              <h3 className="mb-2 text-2xl font-semibold text-primair">Onze Visie</h3>
              <p className="text-gedempt">
                Het potentieel van beschikbare ziekenhuisgegevens ontsluiten voor
                innovatieve zorginstellingen. Door op een veilige en anonieme wijze
                zorgprocessen te toetsen met peers verhogen ziekenhuizen hun kennis over
                de zorg met meer doelgerichte patiëntenzorg tot gevolg.
              </p>
            </div>
            <div className="overflow-hidden rounded-md border border-rand lg:order-2">
              <img
                src="/images/visie-team.jpg"
                alt="Drie zorgverleners bekijken samen medische beeldvorming"
                className="h-full w-full object-cover"
                width="1600"
                height="1068"
              />
            </div>
          </div>
        </div>
      </Sectie>

      <CTA />
    </>
  );
}
