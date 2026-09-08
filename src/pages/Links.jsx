import PaginaKop from "../components/ui/PaginaKop";
import Sectie from "../components/ui/Sectie";
import Placeholder from "../components/ui/Placeholder";
import useDocumentTitel from "../hooks/useDocumentTitel";
import { links } from "../data/diensten";

export default function Links() {
  useDocumentTitel("Links · Medaman", "Nuttige links van Medaman.");

  return (
    <>
      <PaginaKop
        eyebrow="Links"
        titel="Links"
        kruimels={[{ label: "Home", to: "/" }]}
        huidig="Links"
      />

      <Sectie>
        <p className="mb-6 max-w-tekst text-[0.9rem] text-gedempt">
          Geen Notion-bron gevonden voor deze pagina — onderstaande lijst is nog
          gebaseerd op eerdere screenshots van de live site, niet bevestigd, en de
          URL's zijn nog niet ingevuld.
        </p>
        <ul className="grid max-w-tekst gap-3">
          {links.map((l) => (
            <li key={l.label} className="rounded-md border border-rand p-4">
              <span className="font-medium text-primair">{l.label}</span>{" "}
              <Placeholder waarde={l.href} />
            </li>
          ))}
        </ul>
      </Sectie>
    </>
  );
}
