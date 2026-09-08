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

function BeeldBlok({ items, src, alt, breedte, hoogte, omgekeerd = false }) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
      <div className={omgekeerd ? "lg:order-2" : "lg:order-1"}>
        <VinkLijst items={items} />
      </div>
      <div className={`overflow-hidden rounded-md border border-rand lg:h-full ${omgekeerd ? "lg:order-1" : "lg:order-2"}`}>
        <img
          src={src}
          alt={alt}
          className="h-full min-h-[260px] w-full object-cover"
          width={breedte}
          height={hoogte}
        />
      </div>
    </div>
  );
}

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
        <div className="grid gap-14">
          <BeeldBlok
            items={voordelen.slice(0, 4)}
            src="/images/voordelen-1.jpg"
            alt="Stethoscoop naast een tablet met handgeschreven notities"
            breedte="1600"
            hoogte="1937"
          />
          <BeeldBlok
            items={voordelen.slice(4, 7)}
            src="/images/voordelen-2.jpg"
            alt="Bloeddrukmeting met klembord en rapportageschema"
            breedte="1600"
            hoogte="1067"
          />
          <BeeldBlok
            items={voordelen.slice(7, 11)}
            src="/images/contact-rapportage.jpg"
            alt="Klembord met dagrapport naast een laptop"
            breedte="1600"
            hoogte="1043"
          />
        </div>
      </Sectie>

      <CTA />
    </>
  );
}
