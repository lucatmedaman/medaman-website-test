/**
 * Cookie-consent — datamodel en opslag.
 *
 * Categorieën:
 *  - noodzakelijk: altijd aan, geen toestemming vereist (art. 5(3) e-Privacyrichtlijn,
 *    uitzondering voor cookies strikt noodzakelijk voor de gevraagde dienst).
 *  - analytics: huidige site gebruikt Cloudflare Web Analytics (zie AnalyticsLoader).
 *  - marketing: momenteel geen marketing-/advertentiecookies op deze site. De categorie
 *    staat hier klaar voor als dat verandert — laat 'm niet aanvinken als er niets is
 *    om toestemming voor te vragen.
 *
 * CONSENT_VERSION ophogen dwingt een nieuwe banner af (bv. na toevoegen van een
 * cookie-categorie), ook bij bezoekers die al eerder een keuze maakten.
 */

export const CONSENT_VERSION = 1;
export const CONSENT_STORAGE_KEY = "medaman-cookie-consent";
export const CONSENT_EVENT = "medaman:cookie-consent-changed";

export const cookieCategorieen = [
  {
    id: "noodzakelijk",
    titel: "Noodzakelijk",
    verplicht: true,
    beschrijving:
      "Nodig om de website te laten functioneren (bv. onthouden van je cookievoorkeur). Kunnen niet worden uitgeschakeld.",
  },
  {
    id: "analytics",
    titel: "Analytics",
    verplicht: false,
    beschrijving:
      "Anonieme, geaggregeerde bezoekstatistieken via Cloudflare Web Analytics — geen cookies, geen fingerprinting, geen persoonlijke profielen.",
  },
  {
    id: "marketing",
    titel: "Marketing",
    verplicht: false,
    beschrijving:
      "Momenteel niet in gebruik op deze site. Deze categorie staat klaar voor het geval dat verandert.",
  },
];

const standaardVoorkeuren = () => ({
  noodzakelijk: true,
  analytics: false,
  marketing: false,
});

export function haalConsentOp() {
  try {
    const ruw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!ruw) return null;
    const opgeslagen = JSON.parse(ruw);
    if (opgeslagen.versie !== CONSENT_VERSION) return null;
    return opgeslagen;
  } catch {
    return null;
  }
}

export function slaConsentOp(voorkeuren) {
  const record = {
    versie: CONSENT_VERSION,
    tijdstip: new Date().toISOString(),
    ...standaardVoorkeuren(),
    ...voorkeuren,
    noodzakelijk: true,
  };
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
  } catch {
    // localStorage kan geblokkeerd zijn (bv. privémodus) — consent geldt dan enkel
    // voor deze sessie, banner verschijnt opnieuw bij volgend bezoek.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: record }));
  return record;
}

export function accepteerAlles() {
  return slaConsentOp({ analytics: true, marketing: true });
}

export function weigerAlles() {
  return slaConsentOp({ analytics: false, marketing: false });
}
