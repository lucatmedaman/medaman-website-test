/**
 * Centrale bedrijfsgegevens.
 *
 * Alles tussen [[dubbele haken]] is een placeholder: gegevens die niet verzonnen
 * mogen worden. Vul ze hier in, dan kloppen ze meteen overal op de site.
 * Placeholders worden zichtbaar gemarkeerd (gestippelde onderlijn).
 *
 * Bron van de tekstinhoud van de site: Notion "Mdm - Website" (Inhoud home,
 * Voor wie, Voordelen), 8 sept 2026 — niet de eerdere outcome-copy.
 */

export const isPlaceholder = (waarde) =>
  typeof waarde === "string" && waarde.trimStart().startsWith("[[");

export const site = {
  naam: "Medaman",
  tagline: "Ontsluit het potentieel van uw ziekenhuisgegevens",

  contact: {
    email: "info@medaman.be",
    telefoon: "+32 14 96 04 37",
    straat: "[[Straatnaam 1]]",
    postcode: "[[9160]]",
    gemeente: "[[gemeente]]",
    land: "België",
    ondernemingsnummer: "[[BE 0000.000.000]]",
  },

  /** Zichtbaar bovenaan elke pagina zolang dit een testomgeving is. */
  testBanner:
    "Testversie — dit is een preview en niet de officiële website van Medaman.",

  navigatie: [
    {
      to: "/voor-wie",
      label: "Voor wie",
      children: [
        { to: "/voor-wie", label: "Voor wie" },
        { to: "/voordelen", label: "Voordelen" },
      ],
    },
    { to: "/wie-is-medaman", label: "Wie is Medaman" },
    { to: "/contact", label: "Contact" },
    { to: "/links", label: "Links" },
  ],
};

/**
 * Koppeling van het contactformulier.
 *
 * Zolang `endpoint` null is, verstuurt het formulier niets: het valideert wel
 * volledig en toont daarna een melding. Aanzetten gebeurt hier, op één plek:
 *   Formspree            → endpoint: 'https://formspree.io/f/xxxxxxx'
 *   Vercel function      → endpoint: '/api/contact'
 */
export const formulier = {
  endpoint: null,
};
