"use client";

import { useEffect, useState } from "react";
import Mark, { Wordmark } from "./Mark";
import { useI18n } from "../i18n/I18nProvider";
import { locales, type Locale } from "../i18n/dict";

export default function Nav() {
  const { locale, setLocale, t } = useI18n();
  const [onDark, setOnDark] = useState(true);

  useEffect(() => {
    const update = () => {
      const sections = document.querySelectorAll<HTMLElement>("[data-surface]");
      const midline = window.innerHeight * 0.1;
      let current: "dark" | "light" = "dark";
      sections.forEach((s) => {
        const r = s.getBoundingClientRect();
        if (r.top <= midline && r.bottom > midline) {
          current = (s.dataset.surface as "dark" | "light") || "dark";
        }
      });
      setOnDark(current === "dark");
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const tone = onDark ? "text-bone" : "text-ink";
  const pill = onDark
    ? "bg-forest/55 border border-bone/12 backdrop-blur-xl"
    : "bg-bone/65 border border-ink/10 backdrop-blur-xl";

  const links = [
    { label: t.nav.practica, href: "#servicios" },
    { label: t.nav.manifiesto, href: "#manifiesto" },
    { label: t.nav.conduccion, href: "#despacho" },
    { label: t.nav.dialogo, href: "#dialogo" }
  ];

  return (
    <header
      className={`fixed top-4 md:top-5 left-0 right-0 z-50 px-4 md:px-6 transition-colors duration-700 ease-out ${tone}`}
      data-nav
    >
      <div className={`mx-auto flex items-center justify-between gap-3 max-w-[1400px] rounded-full ${pill} pl-3 pr-2 py-2 transition-colors duration-700`}>
        <a href="#top" className="flex items-center gap-2.5 pl-1 group">
          <Mark size={30} />
          <Wordmark className="hidden sm:inline text-[11px]" />
        </a>

        <nav className="hidden md:flex items-center gap-1 font-mono text-[10.5px] uppercase tracking-[0.2em]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 opacity-65 hover:opacity-100 transition-opacity duration-500"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-0.5 font-mono text-[10px] uppercase tracking-widest opacity-75 px-1">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => setLocale(loc)}
                aria-pressed={locale === loc}
                className={`px-1.5 py-1 rounded-full transition-all duration-300 ${
                  locale === loc ? "opacity-100 underline underline-offset-4" : "opacity-50 hover:opacity-90"
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
          <a
            href="#dialogo"
            className={`inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] rounded-full px-4 py-2 transition-all duration-500 ${
              onDark
                ? "bg-bone text-forest hover:bg-ember"
                : "bg-ink text-bone hover:bg-forest"
            }`}
          >
            {t.nav.cta}
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
