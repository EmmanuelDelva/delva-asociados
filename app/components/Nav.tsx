"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Wordmark } from "./Mark";
import { useI18n } from "../i18n/I18nProvider";
import { locales } from "../i18n/dict";
import { areas, getAreaContent } from "../lib/servicios";

export default function Nav() {
  const { locale, setLocale, t } = useI18n();
  const [onDark, setOnDark] = useState(true);
  const [open, setOpen] = useState<"servicios" | "mobile" | null>(null);
  const closeTimer = useRef<number | null>(null);

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
  const panelBg = onDark ? "bg-forest border-bone/12 text-bone" : "bg-bone border-ink/10 text-ink";

  const openServicios = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpen("servicios");
  };
  const closeServiciosSoon = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(null), 220);
  };

  return (
    <header className={`fixed top-3 md:top-5 left-0 right-0 z-50 px-3 md:px-6 transition-colors duration-700 ease-out ${tone}`} data-nav>
      <div className={`relative mx-auto flex items-center justify-between gap-2 max-w-[1400px] rounded-full ${pill} pl-3 pr-2 py-2 transition-colors duration-700`}>
        <Link href="/" className="flex items-center gap-2.5 pl-2 group shrink-0">
          <Wordmark className="text-[11px] sm:text-[12px]" />
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5 font-mono text-[10.5px] uppercase tracking-[0.2em]">
          <div className="relative" onMouseEnter={openServicios} onMouseLeave={closeServiciosSoon}>
            <Link
              href="/servicios"
              className="px-3 py-1.5 opacity-80 hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5"
              aria-expanded={open === "servicios"}
            >
              {t.nav.servicios}
              <span aria-hidden className="text-[8px] opacity-60">▼</span>
            </Link>

            {open === "servicios" && (
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[640px] rounded-3xl border ${panelBg} p-5 shadow-2xl`}
                onMouseEnter={openServicios}
                onMouseLeave={closeServiciosSoon}
              >
                <div className="grid grid-cols-2 gap-1">
                  {areas.map((a) => {
                    const c = getAreaContent(a, locale);
                    return (
                      <Link
                        key={a.slug}
                        href={`/servicios/${a.slug}`}
                        onClick={() => setOpen(null)}
                        className="group flex items-baseline gap-3 px-3 py-2.5 rounded-xl hover:bg-current/5 transition-colors duration-300"
                      >
                        <span className="font-mono text-[9.5px] opacity-50 w-5 shrink-0">{a.num}</span>
                        <span className="font-serif normal-case tracking-normal text-[13.5px] leading-tight">
                          {c.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-3 pt-3 border-t border-current/15">
                  <Link
                    href="/#areas"
                    onClick={() => setOpen(null)}
                    className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] opacity-70 hover:opacity-100 px-3 py-1.5"
                  >
                    {t.nav.submenuExplore}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/despacho" className="px-3 py-1.5 opacity-80 hover:opacity-100 transition-opacity duration-300">
            {t.nav.nosotros}
          </Link>
          <Link href="/#firmar" className="px-3 py-1.5 opacity-80 hover:opacity-100 transition-opacity duration-300">
            {t.nav.contacto}
          </Link>
        </nav>

        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5 font-mono text-[10px] uppercase tracking-widest px-0.5 sm:px-1">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => setLocale(loc)}
                aria-pressed={locale === loc}
                className={`px-1.5 py-1 rounded-full transition-all duration-300 uppercase ${
                  locale === loc ? "opacity-100 underline underline-offset-4" : "opacity-50 hover:opacity-90"
                }`}
              >
                {loc.toUpperCase()}
              </button>
            ))}
          </div>
          <a
            href="#firmar"
            className={`hidden md:inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] rounded-full px-3.5 py-2 transition-all duration-500 ${
              onDark ? "bg-bone text-forest hover:bg-ember" : "bg-ink text-bone hover:bg-forest"
            }`}
          >
            {t.nav.cta}
            <span aria-hidden>→</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen(open === "mobile" ? null : "mobile")}
            className={`lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border ${
              onDark ? "border-bone/30" : "border-ink/30"
            }`}
            aria-label="Menu"
          >
            <span className="font-mono text-[10px]">{open === "mobile" ? "×" : "≡"}</span>
          </button>
        </div>
      </div>

      {open === "mobile" && (
        <div className={`lg:hidden mt-2 mx-auto max-w-[1400px] rounded-3xl border ${panelBg} p-5 max-h-[80vh] overflow-y-auto`}>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-60 mb-3">
            {t.nav.servicios}
          </div>
          <div className="grid grid-cols-1 gap-0">
            {areas.map((a) => {
              const c = getAreaContent(a, locale);
              return (
                <Link
                  key={a.slug}
                  href={`/servicios/${a.slug}`}
                  onClick={() => setOpen(null)}
                  className="flex items-baseline gap-3 py-3 border-b border-current/10"
                >
                  <span className="font-mono text-[10px] opacity-50 w-7">{a.num}</span>
                  <span className="font-serif text-[15px] leading-tight">{c.title}</span>
                </Link>
              );
            })}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <Link
              href="/despacho"
              onClick={() => setOpen(null)}
              className="font-mono text-[10.5px] uppercase tracking-[0.2em] py-2.5 rounded-full border border-current/30 text-center"
            >
              {t.nav.nosotros}
            </Link>
            <Link
              href="/manifiesto"
              onClick={() => setOpen(null)}
              className="font-mono text-[10.5px] uppercase tracking-[0.2em] py-2.5 rounded-full border border-current/30 text-center"
            >
              {t.footer.manifiesto}
            </Link>
          </div>
          <a
            href="#firmar"
            onClick={() => setOpen(null)}
            className={`mt-3 inline-flex w-full items-center justify-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.2em] rounded-full px-4 py-3 ${
              onDark ? "bg-bone text-forest" : "bg-ink text-bone"
            }`}
          >
            {t.nav.cta} <span aria-hidden>→</span>
          </a>
          <div className="mt-4 flex justify-center gap-2 font-mono text-[10px] uppercase tracking-widest">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => setLocale(loc)}
                className={`px-2 py-1 rounded-full ${locale === loc ? "bg-current/15" : "opacity-60"}`}
              >
                {loc.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
