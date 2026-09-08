import PaginaKop from "../components/ui/PaginaKop";
import Sectie from "../components/ui/Sectie";
import SectieKop from "../components/ui/SectieKop";
import Kaart from "../components/ui/Kaart";
import CTA from "../components/CTA";
import useDocumentTitel from "../hooks/useDocumentTitel";
import { diensten, voordelen, slotpunten } from "../data/diensten";

export default function WieIsMedaman() {
  useDocumentTitel(
    "Wie is Medaman · Diensten, voordelen, missie en visie",
    "Diensten van MEDAMAN: feedback, clinical documentation improvement, data analyse en codeerondersteuning. Missie: hoogkwalitatieve ziekenhuiszorg aan lagere kosten.",
  );

  return (
    <>
      <PaginaKop
        eyebrow="Wie is Medaman"
        titel="Wie is Medaman"
        kruimels={[{ label: "Home", to: "/" }]}
        huidig="Wie is Medaman"
      />

      <Sectie id="over-ons">
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

      <Sectie id="expertise">
        <SectieKop eyebrow="Expertise" titel="Hoe kunnen wij u helpen" className="mb-8" />
        <div className="grid gap-6 sm:grid-cols-2">
          {diensten.map((d) => (
            <Kaart key={d.slug} id={d.slug}>
              <h3 className="text-lg font-semibold text-primair">{d.titel}</h3>
              <p className="text-[0.95rem] text-gedempt">{d.tekst}</p>
            </Kaart>
          ))}
        </div>
      </Sectie>

      <Sectie variant="zacht">
        <SectieKop
          eyebrow="Voordelen"
          titel="Uw voordeel met het gebruik van diensten van Medaman"
          lede="Ziekenhuizen die al gebruikers zijn van de Medaman-diensten waarderen het gebruik van deze diensten om verschillende redenen, redenen die zeker ook door u zullen worden gewaardeerd:"
          className="mb-8"
        />
        <ul className="grid gap-3 sm:grid-cols-2">
          {voordelen.map((v) => (
            <li key={v} className="flex gap-3 text-[0.95rem] text-gedempt">
              <span className="mt-[0.7em] h-0.5 w-2 flex-none bg-accent" aria-hidden="true" />
              <span>{v}</span>
            </li>
          ))}
        </ul>
      </Sectie>

      <Sectie>
        <SectieKop eyebrow="Missie & visie" titel="Onze focus" className="mb-8" />
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-primair">Onze Missie</h3>
            <p className="text-gedempt">
              Faciliteren van hoogkwalitatieve ziekenhuiszorg aan lagere kosten
              resulterend in voordelen voor ziekenhuis, arts en patiënt dankzij state
              of the art codering, analyse van ziekenhuisgegevens en vergelijkingen
              met peers.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-primair">Onze Visie</h3>
            <p className="text-gedempt">
              Het potentieel van beschikbare ziekenhuisgegevens ontsluiten voor
              innovatieve zorginstellingen. Door op een veilige en anonieme wijze
              zorgprocessen te toetsen met peers verhogen ziekenhuizen hun kennis over
              de zorg met meer doelgerichte patiëntenzorg tot gevolg.
            </p>
          </div>
        </div>

        <ul className="mt-10 grid gap-3 border-t border-rand pt-8">
          {slotpunten.map((p) => (
            <li key={p} className="flex gap-3 text-[0.95rem] text-gedempt">
              <span className="mt-[0.7em] h-0.5 w-2 flex-none bg-accent" aria-hidden="true" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </Sectie>

      <CTA />
    </>
  );
}
