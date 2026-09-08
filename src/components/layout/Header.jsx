import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Link2 } from "lucide-react";
import Logo from "../ui/Logo";
import { site } from "../../data/site";

const navKlasse = ({ isActive }) =>
  `block border-b-2 py-2 text-sm font-medium no-underline transition-colors ${
    isActive
      ? "border-accent text-primair"
      : "border-transparent text-tekst hover:text-primair-licht"
  }`;

/** Navigatie-item met submenu (bv. "Voor wie" > Voor wie / Voordelen). */
function NavItemMetSubmenu({ item }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const buitenKlik = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", buitenKlik);
    return () => document.removeEventListener("mousedown", buitenKlik);
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-1.5 border-b-2 border-transparent py-2 text-sm font-medium text-tekst hover:text-primair-licht lg:w-auto lg:rounded lg:border-0 lg:px-2 lg:hover:bg-zacht"
      >
        {item.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <ul
        className={`${
          open ? "block" : "hidden"
        } grid gap-1 pb-2 pl-4 lg:absolute lg:left-0 lg:top-full lg:z-10 lg:min-w-[180px] lg:rounded-md lg:border lg:border-rand lg:bg-white lg:p-2 lg:pl-2 lg:shadow-lg`}
      >
        {item.children.map((sub) => (
          <li key={sub.to}>
            <NavLink
              to={sub.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded px-2 py-1.5 text-sm no-underline transition-colors ${
                  isActive ? "text-primair" : "text-gedempt hover:bg-zacht hover:text-primair"
                }`
              }
            >
              <Link2 className="h-3.5 w-3.5 flex-none" aria-hidden="true" />
              {sub.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const knopRef = useRef(null);
  const { pathname } = useLocation();

  // Menu sluit bij elke routewissel, anders blijft het openstaan na navigatie.
  useEffect(() => setOpen(false), [pathname]);

  // Escape sluit het menu en geeft de focus terug aan de knop.
  useEffect(() => {
    if (!open) return;
    const opEscape = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        knopRef.current?.focus();
      }
    };
    document.addEventListener("keydown", opEscape);
    return () => document.removeEventListener("keydown", opEscape);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-rand bg-white">
      <p className="bg-primair-diep px-4 py-1 text-center text-xs text-[#DFEAF2]">
        {site.testBanner}
      </p>

      <div className="mx-auto flex w-full max-w-[1160px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="no-underline" aria-label={`${site.naam} — naar de startpagina`}>
          <Logo />
        </Link>

        <button
          ref={knopRef}
          type="button"
          className="rounded border border-rand-sterk p-2 text-primair lg:hidden"
          aria-expanded={open}
          aria-controls="hoofdmenu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Menu sluiten" : "Menu openen"}</span>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <nav
          id="hoofdmenu"
          aria-label="Hoofdnavigatie"
          className={`${
            open ? "block" : "hidden"
          } absolute inset-x-0 top-full border-b border-rand bg-white shadow-lg lg:static lg:block lg:border-0 lg:shadow-none`}
        >
          <ul className="mx-auto flex w-full max-w-[1160px] flex-col gap-0 px-4 pb-5 pt-2 sm:px-6 lg:flex-row lg:items-center lg:gap-6 lg:p-0">
            {site.navigatie.map((item) =>
              item.children ? (
                <li key={item.label} className="border-b border-rand lg:border-0">
                  <NavItemMetSubmenu item={item} />
                </li>
              ) : (
                <li key={item.to} className="border-b border-rand lg:border-0">
                  <NavLink to={item.to} className={navKlasse}>
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
