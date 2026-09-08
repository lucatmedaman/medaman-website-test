/**
 * Vercel serverless function: verstuurt het contactformulier via Resend.
 *
 * Vereist een environment variable RESEND_API_KEY in het Vercel-project
 * (Project Settings -> Environment Variables). Zonder die key faalt dit
 * netjes met een 500 en een duidelijke foutmelding, het formulier blijft
 * verder gewoon werken (client toont dan de foutmelding aan de gebruiker).
 */

const DOEL_EMAIL = "Luc.belmans@medaman.be";

// Standaard-afzender van Resend; werkt zonder domeinverificatie/DNS-wijzigingen.
// Kan later vervangen worden door bv. "Medaman website <website@medaman.be>"
// zodra medaman.be geverifieerd is bij Resend (vraagt extra DNS-records).
const AFZENDER = "Medaman website <onboarding@resend.dev>";

function valideer(body) {
  const fouten = [];
  const email = String(body?.email ?? "").trim();
  const bericht = String(body?.bericht ?? "").trim();

  if (!email) fouten.push("E-mailadres is verplicht.");
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) fouten.push("E-mailadres is ongeldig.");
  if (!bericht) fouten.push("Bericht is verplicht.");

  return fouten;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, fout: "Alleen POST toegestaan." });
  }

  const body = req.body ?? {};

  // Honeypot: stil "succes" teruggeven zonder iets te versturen.
  if (body.website) {
    return res.status(200).json({ ok: true });
  }

  const fouten = valideer(body);
  if (fouten.length > 0) {
    return res.status(400).json({ ok: false, fout: fouten.join(" ") });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY ontbreekt als environment variable.");
    return res.status(500).json({
      ok: false,
      fout: "Formulier is nog niet volledig geconfigureerd (ontbrekende serverinstelling).",
    });
  }

  const email = String(body.email).trim();
  const telefoon = String(body.telefoon ?? "").trim();
  const bericht = String(body.bericht).trim();

  try {
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: AFZENDER,
        to: [DOEL_EMAIL],
        reply_to: email,
        subject: `Nieuw bericht via medaman.be — ${email}`,
        text: [
          `E-mailadres: ${email}`,
          telefoon ? `Telefoonnummer: ${telefoon}` : null,
          "",
          "Bericht:",
          bericht,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    });

    if (!resendRes.ok) {
      const detail = await resendRes.text();
      console.error("Resend-fout:", resendRes.status, detail);
      return res.status(502).json({ ok: false, fout: "Versturen is mislukt. Probeer later opnieuw." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Onverwachte fout bij versturen:", err);
    return res.status(500).json({ ok: false, fout: "Er ging iets mis. Probeer later opnieuw." });
  }
}
