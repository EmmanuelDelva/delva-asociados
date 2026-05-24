"use client";

import Link from "next/link";
import Mark, { Wordmark } from "./Mark";
import { useI18n } from "../i18n/I18nProvider";
import { locales } from "../i18n/dict";
import { servicios } from "../lib/servicios";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/DelvaAsociados/", icon: "F" },
  { label: "Instagram", href: "https://instagram.com/DelvaAsociados", icon: "Ig" },
  { label: "LinkedIn", href: "https://linkedin.com/company/delva-asociados", icon: "In" },
  { label: "X / Twitter", href: "https://x.com/DelvaAsociados", icon: "X" }
];

export default function Footer() {
  const { t, locale, setLocale } = useI18n();

  return (
    <footer
      data-surface="light"
      className="relative bg-bone text-ink pt-20 md:pt-28 pb-10 overflow-hidden"
    >
      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-6 border-t border-ink/15 pt-12">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-3">
              <Mark size={42} />
              <Wordmark className="text-[11.5px] md:text-[12.5px]" />
            </div>
            <p className="mt-5 max-w-[40ch] font-serif italic text-ink-soft text-lg leading-snug" style={{ fontWeight: 400 }}>
              {t.footer.tagline}
            </p>

            <div className="mt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute mb-3">
                {t.footer.social}
              </p>
              <div className="flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="group inline-flex items-center justify-center w-10 h-10 rounded-full border border-ink/20 hover:border-ink hover:bg-ink hover:text-bone transition-all duration-500"
                  >
                    <span className="font-serif italic text-base group-hover:scale-110 transition-transform duration-500" style={{ fontWeight: 400 }}>
                      {s.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-6 md:col-span-3 mt-8 md:mt-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute mb-4">
              {t.footer.explore}
            </p>
            <ul className="space-y-2 font-sans text-sm text-ink-soft">
              {servicios.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/servicios/${s.slug}`} className="hover:text-ink transition-colors">
                    {s.i18n[locale].title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#areas" className="font-mono uppercase tracking-widest text-[10.5px] text-ink-mute hover:text-ink transition-colors">
                  {t.nav.submenuExplore} →
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute mb-4">
              {t.footer.contact}
            </p>
            <ul className="space-y-2 font-sans text-sm text-ink-soft">
              <li>
                <a href="mailto:emmanueldelva@gmail.com" className="hover:text-ink transition-colors break-words">
                  emmanueldelva@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/523312136004" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">
                  +52 33 1213 6004
                </a>
              </li>
              <li>
                <Link href="/despacho" className="hover:text-ink transition-colors">
                  {t.nav.despacho}
                </Link>
              </li>
              <li>
                <Link href="/manifiesto" className="hover:text-ink transition-colors">
                  {t.nav.manifiesto}
                </Link>
              </li>
              <li className="pt-2">
                <span className="text-ink/70">Guadalajara, Jalisco · México</span>
              </li>
            </ul>

            <div className="mt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute mb-2">
                ES · EN · FR
              </p>
              <div className="flex gap-1 font-mono text-[11px] uppercase tracking-widest">
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setLocale(loc)}
                    aria-pressed={locale === loc}
                    className={`px-2 py-1 rounded-full transition-all duration-300 uppercase ${
                      locale === loc ? "bg-ink text-bone" : "text-ink-mute hover:text-ink"
                    }`}
                  >
                    {loc.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute">
          <span>© MMXXV — Delva &amp; Asociados · {t.footer.rights}</span>
          <div className="flex flex-wrap gap-4">
            {t.footer.legalLinks.map((l) => (
              <span key={l} className="hover:text-ink transition-colors">{l}</span>
            ))}
          </div>
        </div>

        <div className="relative mt-14 md:mt-20 -mb-2 md:-mb-6 overflow-hidden">
          <p
            className="font-serif leading-[0.85] text-ink select-none"
            style={{
              fontSize: "clamp(4rem, 21vw, 21rem)",
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
