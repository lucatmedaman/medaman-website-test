import { useRef, useState } from "react";
import { formulier } from "../data/site";

const LEEG = {
  email: "",
  telefoon: "",
  bericht: "",
  website: "", // honeypot
};

/**
 * Velden komen exact overeen met het formulier zoals het in Notion staat:
 * "E-mailadres *", "Telefoonnummer (optioneel)", "Uw vraag / bericht:".
 * Geen extra velden toegevoegd die niet in de bron staan.
 */
function valideer(waarden) {
  const fouten = {};
  if (!waarden.email.trim()) {
    fouten.email = "Dit veld is verplicht.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(waarden.email.trim())) {
    fouten.email = "Vul een geldig e-mailadres in.";
  }
  if (!waarden.bericht.trim()) {
    fouten.bericht = "Dit veld is verplicht.";
  }
  return fouten;
}

const veldKlasse = (fout) =>
  `w-full rounded border px-3 py-2.5 text-[0.97rem] text-tekst focus:border-primair-licht focus:outline-none focus:ring-2 focus:ring-primair-licht/35 ${
    fout ? "border-fout" : "border-rand-sterk"
  }`;

export default function ContactFormulier() {
  const [waarden, setWaarden] = useState(LEEG);
  const [fouten, setFouten] = useState({});
  const [geprobeerd, setGeprobeerd] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | bezig | verzonden | mislukt
  const [serverFout, setServerFout] = useState("");
  const formRef = useRef(null);

  const wijzig = (e) => {
    const { name, value } = e.target;
    const nieuw = { ...waarden, [name]: value };
    setWaarden(nieuw);
    if (geprobeerd) setFouten(valideer(nieuw));
  };

  const verzend = async (e) => {
    e.preventDefault();
    setGeprobeerd(true);
    setServerFout("");

    const nieuweFouten = valideer(waarden);
    setFouten(nieuweFouten);

    const eersteVeld = Object.keys(nieuweFouten)[0];
    if (eersteVeld) {
      const veld = formRef.current?.elements[eersteVeld];
      veld?.focus();
      veld?.scrollIntoView({ block: "center", behavior: "smooth" });
      return;
    }

    setStatus("bezig");
    try {
      const respons = await fetch(formulier.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(waarden),
      });
      const data = await respons.json().catch(() => ({}));

      if (!respons.ok || !data.ok) {
        setServerFout(data.fout || "Versturen is mislukt. Probeer later opnieuw.");
        setStatus("mislukt");
        return;
      }

      setWaarden(LEEG);
      setGeprobeerd(false);
      setStatus("verzonden");
    } catch {
      setServerFout("Kon geen verbinding maken. Controleer uw internetverbinding.");
      setStatus("mislukt");
    }
  };

  const Fout = ({ veld }) =>
    fouten[veld] ? (
      <span id={`fout-${veld}`} className="text-[0.87rem] font-medium text-fout">
        {fouten[veld]}
      </span>
    ) : null;

  const aria = (veld) => ({
    "aria-invalid": fouten[veld] ? "true" : undefined,
    "aria-describedby": fouten[veld] ? `fout-${veld}` : undefined,
  });

  return (
    <form ref={formRef} onSubmit={verzend} noValidate className="max-w-[560px]">
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Vul dit veld niet in</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={waarden.website}
          onChange={wijzig}
        />
      </div>

      <div className="grid gap-5">
        <p className="grid gap-2">
          <label htmlFor="email" className="text-[0.92rem] font-semibold text-primair">
            E-mailadres <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={waarden.email}
            onChange={wijzig}
            className={veldKlasse(fouten.email)}
            {...aria("email")}
          />
          <Fout veld="email" />
        </p>

        <p className="grid gap-2">
          <label htmlFor="telefoon" className="text-[0.92rem] font-semibold text-primair">
            Telefoonnummer <span className="font-normal text-gedempt">(optioneel)</span>
          </label>
          <input
            id="telefoon"
            name="telefoon"
            type="tel"
            autoComplete="tel"
            value={waarden.telefoon}
            onChange={wijzig}
            className={veldKlasse(false)}
          />
        </p>

        <p className="grid gap-2">
          <label htmlFor="bericht" className="text-[0.92rem] font-semibold text-primair">
            Uw vraag / bericht: <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="bericht"
            name="bericht"
            rows={6}
            value={waarden.bericht}
            onChange={wijzig}
            className={`${veldKlasse(fouten.bericht)} min-h-32 resize-y`}
            {...aria("bericht")}
          />
          <Fout veld="bericht" />
        </p>
      </div>

      <button
        type="submit"
        disabled={status === "bezig"}
        className="mt-5 inline-flex items-center justify-center rounded border border-primair bg-primair px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primair-diep disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "bezig" ? "Bezig met verzenden…" : "Verzenden"}
      </button>

      <p role="status" aria-live="polite">
        {status === "verzonden" && (
          <span className="mt-4 block rounded border border-succes bg-succes-vlak p-4 text-[0.93rem]">
            Bedankt, uw bericht is verzonden. We nemen zo snel mogelijk contact op.
          </span>
        )}
        {status === "mislukt" && (
          <span className="mt-4 block rounded border border-fout bg-fout-vlak p-4 text-[0.93rem]">
            {serverFout}
          </span>
        )}
      </p>
    </form>
  );
}
