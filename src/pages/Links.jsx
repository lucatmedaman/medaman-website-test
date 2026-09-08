import PaginaKop from "../components/ui/PaginaKop";
import Sectie from "../components/ui/Sectie";
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
        <ul className="grid max-w-tekst gap-3">
          {links.map((l) => (
            <li key={l.label} className="rounded-md border border-rand p-4">
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primair-licht hover:text-primair"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </Sectie>
    </>
  );
}
