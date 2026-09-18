import PaginaKop from "../components/ui/PaginaKop";
import Sectie from "../components/ui/Sectie";
import Knop from "../components/ui/Knop";
import useDocumentTitel from "../hooks/useDocumentTitel";
import { openCookievoorkeuren } from "../hooks/useCookieConsent";
import { cookieCategorieen } from "../data/cookies";
import { site } from "../data/site";

export default function Cookiebeleid() {
  useDocumentTitel(
    "Cookiebeleid · Medaman",
    "Welke cookies medaman.be gebruikt, waarvoor, en hoe je je voorkeuren aanpast.",
  );

  const c = site.contact;

  return (
    <>
      <PaginaKop
        eyebrow="Cookiebeleid"
        titel="Cookiebeleid"
        lede="Wat een cookie is, welke wij gebruiken, en hoe je je keuze op elk moment kan wijzigen."
        kruimels={[{ label: "Home", to: "/" }]}
        huidig="Cookiebeleid"
      />

      <Sectie>
        <div className="grid max-w-tekst gap-8 text-tekst">
          <div>
            <h2 className="mb-2 text-xl font-semibold text-primair">Wat is een cookie?</h2>
            <p>
              Een cookie is een klein tekstbestand dat een website op je toestel
              plaatst wanneer je de site bezoekt. Cookies worden onder meer gebruikt
              om voorkeuren te onthouden of om bezoekersgedrag anoniem te meten.
              Sommige functies gebruiken hiervoor geen cookie maar een vergelijkbare
              techniek (bv. localStorage) — in dit beleid hanteren we "cookie" als
              overkoepelende term voor beide.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-primair">
              Welke cookies gebruiken we?
            </h2>
            <ul className="grid gap-4">
              {cookieCategorieen.map((cat) => (
                <li key={cat.id} className="rounded-md border border-rand p-4">
                  <p className="font-medium text-primair">
                    {cat.titel}
                    {cat.verplicht && (
                      <span className="ml-2 text-xs font-normal uppercase tracking-wide text-gedempt">
                        altijd actief
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-sm text-gedempt">{cat.beschrijving}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-primair">Cookies in detail</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-rand-sterk text-primair">
                    <th className="py-2 pr-4 font-semibold">Naam</th>
                    <th className="py-2 pr-4 font-semibold">Doel</th>
                    <th className="py-2 pr-4 font-semibold">Bewaartermijn</th>
                    <th className="py-2 font-semibold">Categorie</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-rand">
                    <td className="py-2 pr-4 align-top">medaman-cookie-consent</td>
                    <td className="py-2 pr-4 align-top">
                      Onthoudt je cookievoorkeuren (localStorage, geen cookie)
                    </td>
                    <td className="py-2 pr-4 align-top">Tot je 'm wist of je keuze aanpast</td>
                    <td className="py-2 align-top">Noodzakelijk</td>
                  </tr>
                  <tr className="border-b border-rand">
                    <td className="py-2 pr-4 align-top">Cloudflare Web Analytics</td>
                    <td className="py-2 pr-4 align-top">
                      Anonieme, geaggregeerde bezoekstatistieken — plaatst zelf geen
                      cookie en volgt bezoekers niet individueel
                    </td>
                    <td className="py-2 pr-4 align-top">n.v.t.</td>
                    <td className="py-2 align-top">Analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-gedempt">
              Er zijn op dit moment geen marketing- of advertentiecookies op deze
              site actief.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-primair">
              Je voorkeur aanpassen
            </h2>
            <p className="mb-3">
              Je kan je keuze op elk moment wijzigen of intrekken.
            </p>
            <Knop variant="secundair" onClick={openCookievoorkeuren}>
              Cookievoorkeuren wijzigen
            </Knop>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-primair">
              Cookies via je browser
            </h2>
            <p>
              Naast de keuze hierboven kan je cookies ook beheren via de
              instellingen van je browser, bijvoorbeeld door bestaande cookies te
              verwijderen of nieuwe cookies te blokkeren. Hoe dat precies werkt,
              verschilt per browser — raadpleeg de helpfunctie van je browser voor
              de exacte stappen.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-primair">Contact</h2>
            <p>
              Vragen over dit cookiebeleid? Neem contact op via{" "}
              <a href={`mailto:${c.email}`} className="text-primair-licht hover:underline">
                {c.email}
              </a>
              .
            </p>
          </div>

          <p className="text-xs text-gedempt">Laatst bijgewerkt: september 2026.</p>
        </div>
      </Sectie>
    </>
  );
}
