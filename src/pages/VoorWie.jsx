import PaginaKop from "../components/ui/PaginaKop";
import Sectie from "../components/ui/Sectie";
import Kaart from "../components/ui/Kaart";
import CTA from "../components/CTA";
import useDocumentTitel from "../hooks/useDocumentTitel";
import { rollen } from "../data/diensten";

export default function VoorWie() {
  useDocumentTitel(
    "Voor wie · Medaman",
    "Voor wie zijn de diensten van MEDAMAN nuttig? Algemeen directeur, diensthoofd MZG, medisch directeur, directeur kwaliteit en innovatie, financieel directeur, directeur processen en directeur IT.",
  );

  return (
    <>
      <PaginaKop
        eyebrow="Voor wie"
        titel="Voor wie zijn de diensten van MEDAMAN nuttig?"
        kruimels={[{ label: "Home", to: "/" }]}
        huidig="Voor wie"
      />

      <Sectie>
        <div className="grid gap-6 sm:grid-cols-2">
          {rollen.map((r) => (
            <Kaart key={r.titel}>
              <h2 className="text-lg font-semibold text-primair">{r.titel}</h2>
              <p className="text-[0.95rem] text-gedempt">{r.tekst}</p>
            </Kaart>
          ))}
        </div>
      </Sectie>

      <CTA />
    </>
  );
}
