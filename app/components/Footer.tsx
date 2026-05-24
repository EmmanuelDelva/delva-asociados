"use client";

import Mark, { Wordmark } from "./Mark";
import { useI18n } from "../i18n/I18nProvider";
import { locales } from "../i18n/dict";

export default function Footer() {
  const { t, locale, setLocale } = useI18n();

  return (
    <footer
      data-surface="light"
      className="relative bg-bone text-ink pt-20 md:pt-28 pb-10 overflow-hidden"
    >
      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-6 border-t border-ink/15 pt-12">
          <div className="col-span-12 md:col-span-6">
            <div className="flex items-center gap-3">
              <Mark size={44} />
              <Wordmark className="text-[12px] md:text-[13px]" />
            </div>
            <p className="mt-5 max-w-[40ch] font-serif italic text-ink-soft text-lg leading-snug" style={{ fontWeight: 400 }}>
              {t.footer.tagline}
            </p>
          </div>

          <div className="col-span-6 md:col-span-2 mt-8 md:mt-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute mb-4">
              {t.footer.explore}
            </p>
            <ul className="space-y-2 font-sans text-sm text-ink-soft">
              <li><a href="#servicios" className="hover:text-ink transition-colors">{t.nav.practica}</a></li>
              <li><a href="#manifiesto" className="hover:text-ink transition-colors">{t.nav.manifiesto}</a></li>
              <li><a href="#despacho" className="hover:text-ink transition-colors">{t.nav.conduccion}</a></li>
              <li><a href="#dialogo" className="hover:text-ink transition-colors">{t.nav.dialogo}</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute mb-4">
              {t.footer.contact}
            </p>
            <ul className="space-y-2 font-sans text-sm text-ink-soft">
              <li><a href="mailto:emmanueldelva@gmail.com" className="hover:text-ink transition-colors break-words">emmanueldelva@gmail.com</a></li>
              <li><a href="https://wa.me/523312136004" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">+52 33 1213 6004</a></li>
              <li>Guadalajara, MX</li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute mb-4">
              ES · EN · FR
            </p>
            <div className="flex gap-1 font-mono text-[11px] uppercase tracking-widest">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setLocale(loc)}
                  aria-pressed={locale === loc}
                  className={`px-2 py-1 rounded-full transition-all duration-300 ${
                    locale === loc ? "bg-ink text-bone" : "text-ink-mute hover:text-ink"
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute">
          <span>© MMXXV — Delva &amp; Asociados · {t.footer.rights}</span>
          <div className="flex gap-4">
            {t.footer.legalLinks.map((l) => (
              <span key={l} className="hover:text-ink transition-colors">{l}</span>
            ))}
          </div>
        </div>

        <div className="relative mt-14 md:mt-20 -mb-2 md:-mb-6 overflow-hidden">
          <p
            className="font-serif leading-[0.85] text-ink select-none"
            style={{
              fontSize: "clamp(4.5rem, 21vw, 21rem)",
              fontWeight: 400,
              letterSpacing: "-0.045em",
              whiteSpace: "nowrap"
            }}
          >
            Delva <span className="italic">&amp;</span> Asociados
          </p>
        </div>
      </div>
    </footer>
  );
}
