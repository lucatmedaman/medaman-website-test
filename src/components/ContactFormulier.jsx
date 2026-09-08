import { useRef, useState } from "react";
import { formulier, site, isPlaceholder } from "../data/site";

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
    fout ? "border-[#B3261E]" : "border-rand-sterk"
  }`;

export default function ContactFormulier() {
  const [waarden, setWaarden] = useState(LEEG);
  const [fouten, setFouten] = useState({});
  const [geprobeerd, setGeprobeerd] = useState(false);
  const [verzonden, setVerzonden] = useState(false);
  const formRef = useRef(null);

  const gekoppeld = formulier.endpoint !== null;
  const emailBekend = !isPlaceholder(site.contact.email);

  const wijzig = (e) => {
    const { name, value } = e.target;
    const nieuw = { ...waarden, [name]: value };
    setWaarden(nieuw);
    if (geprobeerd) setFouten(valideer(nieuw));
  };

  const verzend = (e) => {
    e.preventDefault();
    setGeprobeerd(true);

    const nieuweFouten = valideer(waarden);
    setFouten(nieuweFouten);

    const eerste = Object.keys(nieuweFouten)[0];
    if (eerste) {
      const veld = formRef.current?.elements[eerste];
      veld?.focus();
      veld?.scrollIntoView({ block: "center", behavior: "smooth" });
      return;
    }

    if (waarden.website) {
      setWaarden(LEEG);
      setVerzonden(true);
      return;
    }

    if (!gekoppeld) {
      setVerzonden(true);
      return;
    }

    formRef.current.submit();
  };

  const Fout = ({ veld }) =>
    fouten[veld] ? (
      <span id={`fout-${veld}`} className="text-[0.87rem] font-medium text-[#B3261E]">
        {fouten[veld]}
      </span>
    ) : null;

  const aria = (veld) => ({
    "aria-invalid": fouten[veld] ? "true" : undefined,
    "aria-describedby": fouten[veld] ? `fout-${veld}` : undefined,
  });

  return (
    <form
      ref={formRef}
      onSubmit={verzend}
      method="post"
      action={formulier.endpoint ?? undefined}
      noValidate
      className="max-w-[560px]"
    >
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
        className="mt-5 inline-flex items-center justify-center rounded border border-primair bg-primair px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primair-diep"
      >
        Verzenden
      </button>

      <p role="status" aria-live="polite">
        {verzonden && (
          <span className="mt-4 block rounded border border-accent bg-accent-zacht p-4 text-[0.93rem]">
            Alles is correct ingevuld, maar in deze testversie is het formulier nog niet
            aan een mailbox gekoppeld.
            {emailBekend ? ` Stuur uw vraag zolang naar ${site.contact.email}.` : ""}
          </span>
        )}
      </p>

      {!gekoppeld && (
        <p className="mt-5 border-l-[3px] border-accent bg-zacht p-4 text-[0.9rem] text-gedempt">
          <strong className="text-primair">Let op:</strong> dit is v1 zonder
          backend-koppeling. Het formulier valideert wel volledig, maar verzendt nog
          niets. Koppelen gebeurt op één plek in <code>src/data/site.js</code>.
        </p>
      )}
    </form>
  );
}
