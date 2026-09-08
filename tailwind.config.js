/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        /* --------------------------------------------------------------
           Medaman-huisstijl (teal). Rauwe schaal + semantische aliassen
           eronder — componenten verwijzen naar de semantische namen,
           dus een volgende huisstijl-update kan hier centraal gebeuren.
           Bron: Productie/Huisstijl/huisstijl-web.css
           -------------------------------------------------------------- */
        teal: {
          900: "#10322F",
          800: "#2E5450",
          700: "#3A5F5C",
          600: "#0E7C7B",
          500: "#159A99",
          400: "#9CC4C1",
          300: "#CDE8E6",
          200: "#E8F4F3",
          100: "#F5FAFA",
        },
        grijs: {
          900: "#12201F",
          800: "#1E3130",
          700: "#33484A",
          600: "#4A6062",
          500: "#5A7378",
          400: "#8AA0A2",
          300: "#B7C9CB",
          200: "#D6E4E5",
          100: "#E9F0F0",
          50: "#F6F9F9",
        },

        /* Semantisch — hier verwijzen de componenten naar. */
        primair: {
          DEFAULT: "#2E5450", // teal-800 · koppen op licht, primaire knop
          licht: "#0E7C7B", // teal-600 · link, icoon, secundaire knop-accent
          diep: "#10322F", // teal-900 · donkere secties, hover op knop
        },
        accent: {
          DEFAULT: "#0E7C7B", // teal-600 · merkkleur als tekst op wit (AA)
          licht: "#4FD1C5", // brightTeal · uitsluitend op donkere achtergrond
          zacht: "#E8F4F3", // teal-200 · vlak/achtergrond
        },
        zacht: "#E8F4F3", // teal-200 · sectieachtergrond
        tekst: "#33484A", // grijs-700 · bodytekst (AAA)
        gedempt: "#4A6062", // grijs-600 · secundaire tekst (AA)
        rand: {
          DEFAULT: "#CDE8E6", // teal-300 · kaartrand, scheidingslijn
          sterk: "#13A5A4", // rand-control · formulierrand (3:1 UI-contrast)
        },
        focus: "#159A99", // teal-500 · focusring

        succes: { DEFAULT: "#1C865E", vlak: "#EAFBF4" },
        waarschuwing: { DEFAULT: "#A56A00", vlak: "#FFF6E5" },
        fout: { DEFAULT: "#B3261E", vlak: "#FBEAE9" },
        info: { DEFAULT: "#0E7C7B", vlak: "#E8FCFC" },
      },
      fontFamily: {
        sans: [
          "Carlito",
          "Calibri",
          "Segoe UI",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        serif: ['"Source Serif 4"', "Cambria", "Georgia", "serif"],
      },
      maxWidth: {
        tekst: "68ch",
      },
      borderRadius: {
        DEFAULT: "4px",
      },
    },
  },
  plugins: [],
};
