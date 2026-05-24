"use client";

import Link from "next/link";
import { Wordmark } from "./Mark";
import { useI18n } from "../i18n/I18nProvider";
import { areas, getAreaContent } from "../lib/servicios";

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.412c0-3.027 1.792-4.7 4.533-4.7 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.49 0-1.956.93-1.956 1.886v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.099 24 12.073z" />
    </svg>
  );
}

export default function Footer() {
  const { t, locale } = useI18n();

  return (
    <footer
      data-surface="light"
      className="relative bg-bone text-ink pt-20 md:pt-28 pb-10 overflow-hidden"
    >
      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-6 border-t border-ink/15 pt-12">
          <div className="col-span-12 md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-4 group" aria-label="Delva & Asociados">
              <svg
                width="68"
                height="68"
                viewBox="0 0 92 92"
                fill="none"
                aria-hidden
                className="block shrink-0 text-ink/85 transition-colors duration-500 group-hover:text-ink"
              >
                <circle cx="46" cy="46" r="44" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1" />
                <circle cx="46" cy="46" r="38" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" />
                <text
                  x="46"
                  y="46"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontFamily="'Instrument Serif', 'Times New Roman', serif"
                  fontStyle="italic"
                  fontSize="58"
                  fill="currentColor"
                >
                  &amp;
                </text>
              </svg>
              <Wordmark className="text-[12px] sm:text-[13px]" />
            </Link>
            <p className="mt-6 max-w-[40ch] font-serif italic text-ink-soft text-lg leading-snug" style={{ fontWeight: 400 }}>
              {t.footer.tagline}
            </p>

            <div className="mt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute mb-3">
                {t.footer.social}
              </p>
              <a
                href="https://www.facebook.com/DelvaAsociados/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook — Delva & Asociados"
                className="group inline-flex items-center gap-3 border border-ink/20 hover:border-ink hover:bg-ink hover:text-bone rounded-full pl-3 pr-5 py-2.5 transition-all duration-500"
              >
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-ink/8 group-hover:bg-bone/15 transition-colors duration-500">
                  <FacebookIcon size={14} />
                </span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.22em]">
                  /DelvaAsociados
                </span>
              </a>
            </div>
          </div>

          <div className="col-span-6 md:col-span-3 mt-8 md:mt-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute mb-4">
              {t.footer.explore}
            </p>
            <ul className="space-y-2 font-sans text-sm text-ink-soft">
              {areas.slice(0, 7).map((a) => {
                const c = getAreaContent(a, locale);
                return (
                  <li key={a.slug}>
                    <Link href={`/servicios/${a.slug}`} className="hover:text-ink transition-colors">
                      {c.title}
                    </Link>
                  </li>
                );
              })}
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
                  {t.nav.nosotros}
                </Link>
              </li>
              <li>
                <Link href="/manifiesto" className="hover:text-ink transition-colors">
                  {t.footer.manifiesto}
                </Link>
              </li>
              <li className="pt-2">
                <span className="text-ink/70">Guadalajara, Jalisco · México</span>
              </li>
            </ul>
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
      </div>
    </footer>
  );
}
