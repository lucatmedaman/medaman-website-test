import { Link } from "react-router-dom";
import Placeholder from "../ui/Placeholder";
import { site, isPlaceholder } from "../../data/site";
import { diensten } from "../../data/diensten";

export default function Footer() {
  const c = site.contact;
  const jaar = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      <div className="border-b border-rand bg-white py-8">
        <div className="mx-auto flex w-full max-w-[1160px] flex-wrap items-center gap-8 px-4 sm:px-6">
          <img src="/images/logo-medaman.png" alt="Medaman" className="h-9 w-auto" />
          <img
            src="/images/badge-ehden.png"
            alt="EHDEN Certified SME 2021"
            className="h-10 w-auto"
          />
          <img
            src="/images/badge-eihd.png"
            alt="Member of The European Institute For Innovation Through Health Data"
            className="h-16 w-auto"
          />
        </div>
        <div className="mx-auto mt-6 w-full max-w-[1160px] px-4 sm:px-6">
          <p className="text-xs text-gedempt">
            Copyright © 2018-{jaar} {site.naam}. All rights reserved.
          </p>
        </div>
      </div>

      <div className="bg-primair-diep pb-6 pt-14 text-sm text-[#CDE8E6]">
        <div className="mx-auto w-full max-w-[1160px] px-4 sm:px-6">
          <div className="grid gap-8 pb-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
            <div>
              <span className="text-lg font-bold text-white">Medaman</span>
              <p className="mt-3 max-w-[26ch] text-[#CDE8E6]/75">{site.tagline}</p>
            </div>

            <nav aria-label="Wie is Medaman">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent-licht">
                Wie is Medaman
              </h2>
              <ul className="grid gap-2">
                {diensten.map((d) => (
                  <li key={d.slug}>
                    <Link
                      to={`/wie-is-medaman#${d.slug}`}
                      className="no-underline hover:text-white hover:underline"
                    >
                      {d.titel}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Bedrijf">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent-licht">
                Bedrijf
              </h2>
              <ul className="grid gap-2">
                <li>
                  <Link to="/voor-wie" className="no-underline hover:text-white hover:underline">
                    Voor wie
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="no-underline hover:text-white hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/links" className="no-underline hover:text-white hover:underline">
                    Links
                  </Link>
                </li>
              </ul>
            </nav>

            <div>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent-licht">
                Contact
              </h2>
              <address className="not-italic leading-loose text-[#CDE8E6]/85 [&_.placeholder]:border-[#CDE8E6]/35 [&_.placeholder]:text-[#CDE8E6]/60">
                <Placeholder
                  waarde={c.email}
                  href={isPlaceholder(c.email) ? undefined : `mailto:${c.email}`}
                />
                <br />
                <Placeholder
                  waarde={c.telefoon}
                  href={
                    isPlaceholder(c.telefoon)
                      ? undefined
                      : `tel:${c.telefoon.replace(/\s/g, "")}`
                  }
                />
              </address>
            </div>
          </div>

          <p className="border-t border-white/15 pt-4 text-xs text-[#CDE8E6]/50">
            {site.testBanner}
          </p>
        </div>
      </div>
    </footer>
  );
}
