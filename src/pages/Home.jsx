import Sectie from "../components/ui/Sectie";
import SectieKop from "../components/ui/SectieKop";
import Kaart from "../components/ui/Kaart";
import Knop from "../components/ui/Knop";
import DataVisual from "../components/DataVisual";
import CTA from "../components/CTA";
import useDocumentTitel from "../hooks/useDocumentTitel";
import { diensten } from "../data/diensten";

export default function Home() {
  useDocumentTitel(
    "Medaman · Ontsluit het potentieel van uw ziekenhuisgegevens",
    "Medaman verleent diensten aan ziekenhuizen op het vlak van feedback, clinical documentation improvement, data analyse en codeerondersteuning.",
  );

  return (
    <>
      <section className="border-b border-rand bg-gradient-to-b from-[#FBFCFD] to-white py-14 md:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1160px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.12em] text-accent">
              MEDAMAN
            </span>
            <h1 className="max-w-[19ch] text-4xl font-semibold leading-tight tracking-tight text-primair text-balance sm:text-5xl">
              Ontsluit het potentiëel van uw ziekenhuisgegevens!
            </h1>
            <div className="mt-6 flex flex-wrap gap-3">
              <Knop to="/wie-is-medaman">Wie is Medaman</Knop>
              <Knop to="/contact" variant="secundair">
                Contact
              </Knop>
            </div>
          </div>

          <div className="rounded-md border border-rand bg-white p-6 sm:p-8">
            <DataVisual />
          </div>
        </div>
      </section>

      <Sectie>
        <SectieKop
          eyebrow="Over ons"
          titel="Wie we zijn en wat we doen"
          className="mb-8"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <p className="text-gedempt">
            MEDAMAN is een organisatie die diensten verleent aan ziekenhuizen die
            innovatie naar een nog hoger niveau willen brengen. Uit gestructureerde
            ziekenhuisgegevens die in verschillende bronnen beschikbaar zijn, wordt de
            meest relevante informatie voor zorgverleners gecreëerd. Deze worden snel
            en op een gebruiksvriendelijke manier ter beschikking gesteld met het oog
            op kwaliteitsvollere zorg.
          </p>
          <p className="text-gedempt">
            Het bedrijf werd reeds opgericht in 2019 door Dr. Luc Belmans, een arts
            die reeds zijn sporen verdiend heeft in het ziekenhuisbeheer! De diensten
            van MEDAMAN omvatten een volledige ondersteuning van de
            zorgregistratiecyclus.
          </p>
        </div>
      </Sectie>

      <Sectie variant="zacht">
        <SectieKop
          eyebrow="Expertise"
          titel="Hoe kunnen wij u helpen"
          className="mb-8"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {diensten.map((d) => (
            <Kaart key={d.slug} to="/wie-is-medaman">
              <h3 className="text-base font-semibold text-primair">{d.titel}</h3>
            </Kaart>
          ))}
        </div>
      </Sectie>

      <CTA />
    </>
  );
}
