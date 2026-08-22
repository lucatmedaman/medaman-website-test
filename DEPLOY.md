# Deployen naar Vercel

De site is een statische Vite-build; er is geen server of database nodig.

## Via de webinterface

1. Ga naar [vercel.com/new](https://vercel.com/new).
2. Kies deze repository, `medaman-website-test`.
3. Klik **Deploy**. Er valt niets in te stellen.

`vercel.json` regelt alles:

| Instelling | Waarde |
|---|---|
| Framework | `vite` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Rewrite | alles → `/index.html` (nodig voor client-side routing) |
| Headers | `X-Robots-Tag: noindex, nofollow`, `X-Content-Type-Options`, `Referrer-Policy` |

Die rewrite is niet optioneel: zonder die regel geeft een directe URL zoals
`/diensten` een 404, omdat er op de server geen bestand met die naam bestaat.

## Via de CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## Na de deploy

Dit is een testsite. Laat `noindex` staan zolang dat zo is — het staat op drie
plaatsen: in `public/robots.txt`, als meta-tag in `index.html`, en als header in
`vercel.json`. De testbanner bovenaan elke pagina komt uit `testBanner` in
`src/data/site.js`.

Wil je het contactformulier laten werken, zie dan de sectie *Contactformulier*
in `README.md`. Dat is één regel in `src/data/site.js`.
