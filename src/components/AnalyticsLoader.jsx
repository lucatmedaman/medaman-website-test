import { useEffect } from "react";
import { CONSENT_EVENT, haalConsentOp } from "../data/cookies";

const SCRIPT_ID = "cloudflare-web-analytics";
// Cloudflare Web Analytics: geen cookies, geen client-side fingerprinting
// (bron: developers.cloudflare.com/web-analytics/data-metrics/). Toch achter de
// analytics-toestemming geplaatst — het is wel bezoekstatistiek-tracking, en zo
// blijft de banner-keuze van de bezoeker overal consistent.
const BEACON_TOKEN = "72557b4892aa46f785c71ecebd9649d8";

function voegScriptToe() {
  if (document.getElementById(SCRIPT_ID)) return;
  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.type = "module";
  script.src = "https://static.cloudflareinsights.com/beacon.min.js";
  script.setAttribute("data-cf-beacon", JSON.stringify({ token: BEACON_TOKEN }));
  document.head.appendChild(script);
}

function verwijderScript() {
  document.getElementById(SCRIPT_ID)?.remove();
}

/** Onzichtbaar component: (de)activeert de analytics-beacon op basis van consent. */
export default function AnalyticsLoader() {
  useEffect(() => {
    const toepassen = (consent) => {
      if (consent?.analytics) {
        voegScriptToe();
      } else {
        verwijderScript();
      }
    };

    toepassen(haalConsentOp());

    const bijWijziging = (e) => toepassen(e.detail);
    window.addEventListener(CONSENT_EVENT, bijWijziging);
    return () => window.removeEventListener(CONSENT_EVENT, bijWijziging);
  }, []);

  return null;
}
