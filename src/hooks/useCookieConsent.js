import { useCallback, useEffect, useState } from "react";
import {
  CONSENT_EVENT,
  accepteerAlles,
  haalConsentOp,
  slaConsentOp,
  weigerAlles,
} from "../data/cookies";

const OPEN_VOORKEUREN_EVENT = "medaman:open-cookievoorkeuren";

/** Elders in de app (bv. footerlink) een klik → heropent het voorkeurenpaneel. */
export function openCookievoorkeuren() {
  window.dispatchEvent(new Event(OPEN_VOORKEUREN_EVENT));
}

export default function useCookieConsent() {
  const [consent, setConsent] = useState(() => haalConsentOp());
  const [paneelOpen, setPaneelOpen] = useState(false);

  useEffect(() => {
    const bijConsentWijziging = (e) => setConsent(e.detail);
    const bijOpenVerzoek = () => setPaneelOpen(true);
    window.addEventListener(CONSENT_EVENT, bijConsentWijziging);
    window.addEventListener(OPEN_VOORKEUREN_EVENT, bijOpenVerzoek);
    return () => {
      window.removeEventListener(CONSENT_EVENT, bijConsentWijziging);
      window.removeEventListener(OPEN_VOORKEUREN_EVENT, bijOpenVerzoek);
    };
  }, []);

  const accepteer = useCallback(() => {
    accepteerAlles();
    setPaneelOpen(false);
  }, []);

  const weiger = useCallback(() => {
    weigerAlles();
    setPaneelOpen(false);
  }, []);

  const bewaarVoorkeuren = useCallback((voorkeuren) => {
    slaConsentOp(voorkeuren);
    setPaneelOpen(false);
  }, []);

  return {
    consent,
    heeftGekozen: consent !== null,
    paneelOpen,
    setPaneelOpen,
    accepteer,
    weiger,
    bewaarVoorkeuren,
  };
}
