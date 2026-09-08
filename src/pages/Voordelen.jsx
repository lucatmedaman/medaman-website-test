import PaginaKop from "../components/ui/PaginaKop";
import Sectie from "../components/ui/Sectie";
import CTA from "../components/CTA";
import useDocumentTitel from "../hooks/useDocumentTitel";
import { voordelen } from "../data/diensten";
import { Check } from "lucide-react";

function VinkLijst({ items }) {
  return (
    <ul className="grid gap-5">
      {items.map((v) => (
        <li key={v} className="flex gap-3 text-gedempt">
          <Check className="mt-1 h-5 w-5 flex-none text-gedempt" strokeWidth={2} aria-hidden="true" />
          <span>{v}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Voordelen() {
  useDocumentTitel(
    "Voordelen · Medaman",
    "Uw voordeel met het gebruik van diensten van Medaman: van omzetverhoging tot best evidence-based practice.",
  );

  const eersteBlok = voordelen.slice(0, 4);
  const rest = voordelen.slice(4);

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
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <VinkLijst items={eersteBlok} />
          <div className="overflow-hidden rounded-md border border-rand">
            <img
              src="/images/voordelen-1.jpg"
              alt="Stethoscoop naast een tablet met handgeschreven notities"
              className="h-full w-full object-cover"
              width="1600"
              height="1937"
            />
          </div>
        </div>

        <div className="mt-10">
          <VinkLijst items={rest} />
        </div>
      </Sectie>

      <CTA />
    </>
  );
}
