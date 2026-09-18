import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { cookieCategorieen } from "../data/cookies";
import useCookieConsent from "../hooks/useCookieConsent";
import Knop from "./ui/Knop";

function VoorkeurenPaneel({ initieleVoorkeuren, onBewaar, onSluiten }) {
  const [voorkeuren, setVoorkeuren] = useState(initieleVoorkeuren);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookievoorkeuren-titel"
      className="fixed inset-0 z-[210] flex items-end justify-center bg-primair-diep/50 p-0 sm:items-center sm:p-4"
    >
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t border border-rand bg-white p-6 shadow-xl sm:rounded">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 id="cookievoorkeuren-titel" className="text-lg font-semibold text-primair">
            Cookievoorkeuren
          </h2>
          <button
            type="button"
            onClick={onSluiten}
            aria-label="Sluiten"
            className="rounded p-1 text-gedempt hover:bg-zacht hover:text-primair"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <p className="mb-5 text-sm text-tekst">
          Kies per categorie of we dit mogen gebruiken. Je kan dit later altijd
          wijzigen via de link "Cookievoorkeuren" onderaan de site.
        </p>

        <ul className="mb-6 grid gap-4">
          {cookieCategorieen.map((cat) => (
            <li key={cat.id} className="rounded-md border border-rand p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-primair">{cat.titel}</p>
                  <p className="mt-1 text-sm text-gedempt">{cat.beschrijving}</p>
                </div>
                <label className="relative inline-flex shrink-0 cursor-pointer items-center">
                  <span className="sr-only">{cat.titel} toestaan</span>
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={cat.verplicht ? true : !!voorkeuren[cat.id]}
                    disabled={cat.verplicht}
                    onChange={(e) =>
                      setVoorkeuren((v) => ({ ...v, [cat.id]: e.target.checked }))
                    }
                  />
                  <span
                    className={`h-6 w-11 rounded-full border transition-colors ${
                      cat.verplicht
                        ? "border-rand bg-accent/60"
                        : "border-rand-sterk bg-grijs-200 peer-checked:bg-accent peer-focus-visible:ring-2 peer-focus-visible:ring-focus"
                    }`}
                  >
                    <span
                      className={`mt-0.5 block h-5 w-5 translate-x-0.5 rounded-full bg-white shadow transition-transform ${
                        cat.verplicht || voorkeuren[cat.id] ? "translate-x-[22px]" : ""
                      }`}
                    />
                  </span>
                </label>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3">
          <Knop variant="primair" onClick={() => onBewaar(voorkeuren)}>
            Voorkeuren bewaren
          </Knop>
          <Knop variant="secundair" onClick={onSluiten}>
            Annuleren
          </Knop>
        </div>

        <p className="mt-5 text-xs text-gedempt">
          Meer details vind je in ons{" "}
          <Link to="/cookiebeleid" className="text-primair-licht hover:underline">
            cookiebeleid
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

/**
 * Cookiebanner. Accepteren en weigeren zijn gelijkwaardig (zelfde stijl, zelfde
 * grootte) — vereist onder de AVG/e-Privacyrichtlijn: weigeren mag niet moeilijker
 * zijn dan accepteren. Verschijnt pas nadat een bezoeker nog geen (geldige) keuze
 * maakte; zie CONSENT_VERSION in data/cookies.js om een nieuwe keuze af te dwingen.
 */
export default function CookieConsent() {
  const { consent, heeftGekozen, paneelOpen, setPaneelOpen, accepteer, weiger, bewaarVoorkeuren } =
    useCookieConsent();

  const toonBanner = !heeftGekozen && !paneelOpen;

  return (
    <>
      {toonBanner && (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookiebanner-titel"
          className="fixed inset-x-0 bottom-0 z-[200] border-t border-rand bg-white px-4 py-5 shadow-[0_-4px_16px_rgba(16,50,47,0.12)] sm:px-6"
        >
          <div className="mx-auto flex w-full max-w-[1160px] flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[70ch]">
              <p id="cookiebanner-titel" className="font-medium text-primair">
                We gebruiken cookies
              </p>
              <p className="mt-1 text-sm text-gedempt">
                Noodzakelijke cookies staan altijd aan. Voor analytics vragen we
                eerst je toestemming. Lees ons{" "}
                <Link to="/cookiebeleid" className="text-primair-licht hover:underline">
                  cookiebeleid
                </Link>{" "}
                voor meer info.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Knop variant="secundair" onClick={weiger}>
                Weigeren
              </Knop>
              <Knop variant="primair" onClick={accepteer}>
                Accepteren
              </Knop>
              <Knop variant="secundair" onClick={() => setPaneelOpen(true)}>
                Voorkeuren
              </Knop>
            </div>
          </div>
        </div>
      )}

      {paneelOpen && (
        <VoorkeurenPaneel
          initieleVoorkeuren={{
            analytics: consent?.analytics ?? false,
            marketing: consent?.marketing ?? false,
          }}
          onBewaar={bewaarVoorkeuren}
          onSluiten={() => setPaneelOpen(false)}
        />
      )}
    </>
  );
}
