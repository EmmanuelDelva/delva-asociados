"use client";

import Link from "next/link";
import { useState } from "react";
import { useI18n } from "../i18n/I18nProvider";
import { servicios } from "../lib/servicios";

export default function AreasInteractivas() {
  const { t, locale } = useI18n();
  const [active, setActive] = useState<string | null>(servicios[0].slug);

  return (
    <section
      id="areas"
      data-surface="light"
      className="relative bg-bone text-ink py-24 md:py-36 overflow-hidden"
    >
      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-6 mb-12 md:mb-20 items-end">
          <div className="col-span-12 md:col-span-8 reveal-init">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-ink-mute mb-5">
              {t.areas.kicker}
            </p>
            <h2 className="font-serif text-d-2 md:text-d-3 text-balance max-w-4xl leading-[0.95]" style={{ fontWeight: 400 }}>
              {t.areas.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-ink-soft leading-relaxed">{t.areas.sub}</p>
          </div>
        </div>

        <div className="border-t border-ink/12">
          {servicios.map((s, i) => {
            const isOpen = active === s.slug;
            const content = s.i18n[locale];
            const accentColor =
              s.accent === "ember" ? "text-ember" : s.accent === "gold" ? "text-gold" : "text-forest-glow";
            return (
              <div
                key={s.slug}
                className={`group border-b border-ink/12 transition-colors duration-500 reveal-init ${
                  isOpen ? "bg-bone-soft/60" : "hover:bg-bone-soft/35"
                }`}
                style={{ transitionDelay: `${Math.min(i * 50, 400)}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? null : s.slug)}
                  className="w-full text-left py-6 md:py-8 px-2 md:px-4 -mx-2 md:-mx-4 grid grid-cols-12 gap-3 md:gap-6 items-baseline"
                  aria-expanded={isOpen}
                >
                  <span className={`col-span-2 md:col-span-1 font-mono text-[11px] uppercase tracking-widest ${accentColor}`}>
                    {s.num}
                  </span>
                  <div className="col-span-10 md:col-span-6">
                    <h3 className="font-serif text-2xl md:text-[2.3rem] leading-[1.02] tracking-tight" style={{ fontWeight: 400 }}>
                      {content.title}
                    </h3>
                  </div>
                  <div className="col-span-12 md:col-span-4 mt-2 md:mt-0">
                    <p className="font-sans text-[0.95rem] md:text-base leading-snug text-ink-soft">
                      {content.short}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-1 md:flex md:justify-end mt-2 md:mt-0">
                    <span
                      aria-hidden
                      className={`inline-block font-serif italic text-3xl md:text-4xl transition-transform duration-500 ${
                        isOpen ? "rotate-45" : "rotate-0 opacity-50 group-hover:opacity-100"
                      }`}
                    >
                      +
                    </span>
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-700 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-12 gap-6 px-2 md:px-4 -mx-2 md:-mx-4 pb-8 md:pb-12 pt-2">
                      <div className="col-span-12 md:col-span-6 md:col-start-2">
                        <p className="font-serif italic text-xl md:text-2xl text-ink-soft leading-snug" style={{ fontWeight: 400 }}>
                          {content.closeExample}
                        </p>

                        <ul className="mt-6 space-y-2">
                          {content.problematicas.slice(0, 3).map((p) => (
                            <li key={p.id} className="font-sans text-sm md:text-base text-ink-soft flex items-baseline gap-3">
                              <span className={`font-mono text-[10px] uppercase tracking-widest ${accentColor} shrink-0 mt-0.5`}>
                                {p.id.slice(0, 2)}
                              </span>
                              <span>{p.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col gap-3 md:items-end">
                        <Link
                          href={`/servicios/${s.slug}`}
                          className="inline-flex items-center gap-2 bg-ink text-bone font-mono text-[10.5px] uppercase tracking-[0.2em] rounded-full px-4 py-2.5 hover:bg-forest transition-colors duration-500 group"
                        >
                          {t.areas.detail}
                          <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                        </Link>
                        <a
                          href="#firmar"
                          className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute hover:text-ink transition-colors"
                        >
                          {t.nav.cta} →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 max-w-3xl reveal-init">
          <p className="font-serif italic text-lg md:text-xl text-ink-soft" style={{ fontWeight: 400 }}>
            {t.areas.cta}
          </p>
        </div>
      </div>
    </section>
  );
}
