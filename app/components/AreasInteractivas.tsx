"use client";

import Link from "next/link";
import { useState } from "react";
import { useI18n } from "../i18n/I18nProvider";
import { areas, getAreaContent } from "../lib/servicios";
import TextScramble from "./TextScramble";
import ProblemaScene from "./ProblemaScene";

export default function AreasInteractivas() {
  const { t, locale } = useI18n();
  const [activeIdx, setActiveIdx] = useState(0);
  const activeArea = areas[activeIdx];
  const activeContent = getAreaContent(activeArea, locale);

  return (
    <section
      id="areas"
      data-surface="light"
      className="relative bg-bone text-ink py-16 md:py-24 overflow-hidden"
    >
      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-6 mb-8 md:mb-12 items-end">
          <div className="col-span-12 md:col-span-7 reveal-init">
            <TextScramble
              as="p"
              text={t.areas.kicker}
              className="block font-mono text-[10.5px] uppercase tracking-[0.28em] text-ink-mute mb-4"
            />
            <h2 className="font-serif text-d-2 md:text-d-3 text-balance max-w-4xl leading-[0.95]" style={{ fontWeight: 400 }}>
              {t.areas.title}
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:text-right reveal-init">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.22em] border border-ink/30 rounded-full px-4 py-2.5 hover:bg-ink hover:text-bone transition-colors duration-500"
            >
              {t.nav.submenuExplore}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 md:gap-6 items-start">
          <ol className="col-span-12 md:col-span-7 lg:col-span-7 border-t border-ink/12">
            {areas.map((a, i) => {
              const c = getAreaContent(a, locale);
              const isActive = i === activeIdx;
              const accentText = a.accent === "ember" ? "text-ember" : a.accent === "gold" ? "text-gold" : "text-forest-glow";
              return (
                <li key={a.slug} className="border-b border-ink/12">
                  <Link
                    href={`/servicios/${a.slug}`}
                    onMouseEnter={() => setActiveIdx(i)}
                    onFocus={() => setActiveIdx(i)}
                    className={`group block py-2.5 md:py-3 px-1 transition-colors duration-500 ${
                      isActive ? "bg-bone-soft/70" : "hover:bg-bone-soft/40"
                    }`}
                  >
                    <div className="grid grid-cols-12 gap-2 items-baseline">
                      <span className={`col-span-2 md:col-span-1 font-mono text-[10px] uppercase tracking-widest ${accentText}`}>
                        {a.num}
                      </span>
                      <span className="col-span-9 md:col-span-10 font-serif text-[1.05rem] md:text-[1.18rem] leading-[1.05] tracking-tight" style={{ fontWeight: 400 }}>
                        {c.title}
                      </span>
                      <span
                        aria-hidden
                        className={`col-span-1 text-right font-mono text-[11px] transition-all duration-500 ${
                          isActive ? "translate-x-1 opacity-100" : "opacity-30 group-hover:opacity-70"
                        }`}
                      >
                        →
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>

          <div className="col-span-12 md:col-span-5 lg:col-span-5 md:sticky md:top-28 self-start hidden md:block">
            <div
              key={activeArea.slug}
              className="relative rounded-2xl overflow-hidden border border-ink/10 bg-forest text-bone grain min-h-[380px] p-7 lg:p-8 animate-in fade-in duration-500"
            >
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute -top-20 -right-20 w-[40vmin] h-[40vmin] rounded-full opacity-30 blur-[120px]"
                  style={{
                    background:
                      activeArea.accent === "ember"
                        ? "oklch(0.72 0.155 50)"
                        : activeArea.accent === "gold"
                        ? "oklch(0.76 0.115 82)"
                        : "oklch(0.34 0.08 150)"
                  }}
                />
              </div>
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[55%] aspect-square pointer-events-none text-bone/40">
                <ProblemaScene key={activeArea.slug} scene={activeArea.scene} accent={activeArea.accent} />
              </div>
              <div className="relative h-full flex flex-col">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-bone/55">
                  <span>§ {activeArea.num}</span>
                </div>
                <h3 className="font-serif text-[1.8rem] lg:text-[2.2rem] mt-5 leading-[1.0] text-balance max-w-[14ch]" style={{ fontWeight: 400 }}>
                  {activeContent.title}
                </h3>
                <p className="mt-3 text-[0.92rem] text-bone/80 leading-snug max-w-[26ch]">
                  {activeContent.short}
                </p>
                <Link
                  href={`/servicios/${activeArea.slug}`}
                  className="mt-auto pt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/70 hover:text-bone transition-colors duration-500 self-start border-b border-bone/30 hover:border-bone pb-1"
                >
                  {t.areas.open}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 max-w-3xl font-serif italic text-base md:text-lg text-ink-soft reveal-init" style={{ fontWeight: 400 }}>
          {t.areas.cta}
        </p>
      </div>
    </section>
  );
}
