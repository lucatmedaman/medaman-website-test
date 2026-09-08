import Sectie from "../components/ui/Sectie";
import SectieKop from "../components/ui/SectieKop";
import Kaart from "../components/ui/Kaart";
import Knop from "../components/ui/Knop";
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
            <Knop to="/wie-is-medaman#over-ons" className="!bg-primair-licht !border-primair-licht">
              Wie is Medaman
            </Knop>
            <Knop to="/contact" variant="lijnOpDonker">
              Contact us
            </Knop>
          </div>
        </div>
      </section>

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
