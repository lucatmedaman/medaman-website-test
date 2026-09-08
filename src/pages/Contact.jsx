import PaginaKop from "../components/ui/PaginaKop";
import Sectie from "../components/ui/Sectie";
import Placeholder from "../components/ui/Placeholder";
import ContactFormulier from "../components/ContactFormulier";
import useDocumentTitel from "../hooks/useDocumentTitel";
import { site, isPlaceholder } from "../data/site";

export default function Contact() {
  useDocumentTitel(
    "Contact · Medaman",
    "Contacteer ons nu voor meer informatie! Bel ons op +32 14 96 04 37 of e-mail naar info@medaman.be.",
  );

  const c = site.contact;

  return (
    <>
      <PaginaKop
        eyebrow="Contact"
        titel="Contacteer ons nu voor meer informatie!"
        kruimels={[{ label: "Home", to: "/" }]}
        huidig="Contact"
      />

      <Sectie>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(260px,0.8fr)] lg:gap-14">
          <ContactFormulier />

          <aside aria-label="Contactgegevens" className="grid gap-4">
            <div className="overflow-hidden rounded-md border border-rand">
              <img
                src="/images/contact-rapportage.jpg"
                alt="Rapportage en laptop op tafel"
                className="h-full w-full object-cover"
                width="1600"
                height="1043"
              />
            </div>

            <div className="rounded-md border border-rand p-5">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                Bel ons
              </h2>
              <p className="font-medium">
                <Placeholder
                  waarde={c.telefoon}
                  href={
                    isPlaceholder(c.telefoon)
                      ? undefined
                      : `tel:${c.telefoon.replace(/\s/g, "")}`
                  }
                />
              </p>
            </div>

            <div className="rounded-md border border-rand p-5">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                E-mail
              </h2>
              <p className="font-medium">
                <Placeholder
                  waarde={c.email}
                  href={isPlaceholder(c.email) ? undefined : `mailto:${c.email}`}
                />
              </p>
            </div>
          </aside>
        </div>
      </Sectie>
    </>
  );
}
