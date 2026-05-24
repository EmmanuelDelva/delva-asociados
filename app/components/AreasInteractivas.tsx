"use client";

import Link from "next/link";
import { useState } from "react";
import { useI18n } from "../i18n/I18nProvider";
import { areas, getAreaContent, getProblematicaContent } from "../lib/servicios";
import ProblemaScene from "./ProblemaScene";
import TextScramble from "./TextScramble";

export default function AreasInteractivas() {
  const { t, locale } = useI18n();
  const [activeIdx, setActiveIdx] = useState(0);
  const activeArea = areas[activeIdx];
  const activeContent = getAreaContent(activeArea, locale);

  return (
    <section
      id="areas"
      data-surface="light"
      className="relative bg-bone text-ink py-20 md:py-32 overflow-hidden"
    >
      <div className="px-5 sm:px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16 items-end">
          <div className="col-span-12 md:col-span-8 reveal-init">
            <TextScramble
              as="p"
              text={t.areas.kicker}
              className="block font-mono text-[10.5px] uppercase tracking-[0.32em] text-ink-mute mb-5"
            />
            <h2
              className="font-serif text-d-2 md:text-d-3 text-balance max-w-4xl leading-[0.95]"
              style={{ fontWeight: 400 }}
            >
              {t.areas.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base md:text-lg text-ink-soft">
              {t.areas.sub}
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right reveal-init">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.22em] border border-ink/30 rounded-full px-4 py-2.5 hover:bg-ink hover:text-bone transition-colors duration-500"
            >
              {t.nav.submenuExplore}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-8 items-stretch">
          <ol className="col-span-12 md:col-span-5 lg:col-span-4 border-t border-ink/12">
            {areas.map((a, i) => {
              const c = getAreaContent(a, locale);
              const isActive = i === activeIdx;
              const accentText =
                a.accent === "ember"
                  ? "text-ember"
                  : a.accent === "gold"
                  ? "text-gold"
                  : "text-forest-glow";
              return (
                <li key={a.slug} className="border-b border-ink/12">
                  <Link
                    href={`/servicios/${a.slug}`}
                    onMouseEnter={() => setActiveIdx(i)}
                    onFocus={() => setActiveIdx(i)}
                    onClick={() => setActiveIdx(i)}
                    className={`group block py-3 md:py-3.5 px-1 transition-colors duration-500 ${
                      isActive ? "bg-bone-soft/70" : "hover:bg-bone-soft/40"
                    }`}
                  >
                    <div className="grid grid-cols-12 gap-2 md:gap-3 items-baseline">
                      <span
                        className={`col-span-2 font-mono text-[10.5px] uppercase tracking-widest ${accentText}`}
                      >
                        {a.num}
                      </span>
                      <span
                        className="col-span-9 font-serif text-[1.08rem] md:text-[1.2rem] leading-[1.1] tracking-tight"
                        style={{ fontWeight: 400 }}
                      >
                        {c.title}
                      </span>
                      <span
                        aria-hidden
                        className={`col-span-1 text-right font-mono text-[12px] transition-all duration-500 ${
                          isActive
                            ? "translate-x-1 opacity-100"
                            : "opacity-30 group-hover:opacity-70"
                        }`}
                      >
                        →
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
            <li className="pt-4 pb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
              <span>{t.areas.pick}</span>
              <span>
                {String(activeIdx + 1).padStart(2, "0")} / {String(areas.length).padStart(2, "0")}
              </span>
            </li>
          </ol>

          <div className="col-span-12 md:col-span-7 lg:col-span-8 md:sticky md:top-24 self-start">
            <div
              key={activeArea.slug}
              className="relative h-full min-h-[460px] md:min-h-[580px] rounded-3xl overflow-hidden border border-ink/10 bg-forest text-bone grain animate-in fade-in duration-700"
            >
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute -top-20 -right-20 w-[55vmin] h-[55vmin] rounded-full opacity-30 blur-[120px]"
                  style={{
                    background:
                      activeArea.accent === "ember"
                        ? "oklch(0.72 0.155 50)"
                        : activeArea.accent === "gold"
                        ? "oklch(0.76 0.115 82)"
                        : "oklch(0.34 0.08 150)"
                  }}
                />
                <div
                  className="absolute -bottom-20 -left-20 w-[40vmin] h-[40vmin] rounded-full opacity-15 blur-[140px]"
                  style={{ background: "oklch(0.34 0.080 150)" }}
                />
              </div>

              <div className="relative h-full flex flex-col md:flex-row">
                <div className="flex-1 flex flex-col p-6 md:p-9 lg:p-11">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-bone/60">
                    <span>§ {activeArea.num}</span>
                    <span>
                      {activeArea.problematicas.length}{" "}
                      {locale === "es" ? "casos" : locale === "en" ? "cases" : "cas"}
                    </span>
                  </div>

                  <h3
                    className="font-serif text-[2rem] md:text-[3rem] lg:text-[3.5rem] mt-5 md:mt-7 leading-[0.96] text-balance max-w-[14ch]"
                    style={{ fontWeight: 400 }}
                  >
                    {activeContent.title}
                  </h3>

                  <p className="mt-5 max-w-[42ch] text-bone/75 leading-relaxed text-[0.95rem] md:text-base">
                    {activeContent.intro}
                  </p>

                  <ul className="mt-6 md:mt-7 space-y-2 max-w-[42ch]">
                    {activeArea.problematicas.slice(0, 3).map((p) => {
                      const pc = getProblematicaContent(p, locale);
                      return (
                        <li
                          key={p.id}
                          className="flex items-baseline gap-3 font-sans text-[0.9rem] md:text-[0.96rem] text-bone/80"
                        >
                          <span aria-hidden className="opacity-50 text-[10px] font-mono">
                            —
                          </span>
                          <span className="leading-snug">{pc.title}</span>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-auto pt-7 md:pt-9 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/servicios/${activeArea.slug}`}
                      className="inline-flex items-center gap-2 bg-bone text-forest font-mono text-[10.5px] uppercase tracking-[0.2em] rounded-full px-4 py-2.5 hover:bg-ember transition-colors duration-500"
                    >
                      {t.areas.open}
                      <span aria-hidden>→</span>
                    </Link>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55">
                      {activeArea.problematicas.length}{" "}
                      {locale === "es"
                        ? "problemas resueltos"
                        : locale === "en"
                        ? "problems resolved"
                        : "problèmes résolus"}
                    </span>
                  </div>
                </div>

                <div className="hidden md:flex w-[42%] lg:w-[40%] items-center justify-center p-6 lg:p-10 border-l border-bone/12">
                  <div className="w-full max-w-[340px] aspect-square text-bone/85">
                    <ProblemaScene
                      key={activeArea.slug}
                      scene={activeArea.scene}
                      accent={activeArea.accent}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-12 md:mt-16 max-w-3xl font-serif italic text-base md:text-lg text-ink-soft reveal-init" style={{ fontWeight: 400 }}>
          {t.areas.cta}
        </p>
      </div>
    </section>
  );
}
