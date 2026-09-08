import PaginaKop from "../components/ui/PaginaKop";
import Sectie from "../components/ui/Sectie";
import CTA from "../components/CTA";
import useDocumentTitel from "../hooks/useDocumentTitel";
import { voordelen } from "../data/diensten";

export default function Voordelen() {
  useDocumentTitel(
    "Voordelen · Medaman",
    "Uw voordeel met het gebruik van diensten van Medaman: van omzetverhoging tot best evidence-based practice.",
  );

  return (
    <>
      <PaginaKop
        eyebrow="Voordelen"
        titel="Uw voordeel met het gebruik van diensten van Medaman"
        lede="Ziekenhuizen die al gebruikers zijn van de Medaman-diensten waarderen het gebruik van deze diensten om verschillende redenen, redenen die zeker ook door u zullen worden gewaardeerd:"
        kruimels={[{ label: "Home", to: "/" }, { label: "Voor wie", to: "/voor-wie" }]}
        huidig="Voordelen"
      />

      <Sectie>
        <ul className="grid max-w-tekst gap-3">
          {voordelen.map((v) => (
            <li key={v} className="flex gap-3 text-gedempt">
              <span className="mt-[0.7em] h-0.5 w-2 flex-none bg-accent" aria-hidden="true" />
              <span>{v}</span>
            </li>
          ))}
        </ul>
      </Sectie>

      <CTA />
    </>
  );
}
