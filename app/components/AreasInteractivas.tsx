"use client";

import Link from "next/link";
import { useI18n } from "../i18n/I18nProvider";
import { areas, getAreaContent } from "../lib/servicios";
import TextScramble from "./TextScramble";
import ProblemaScene from "./ProblemaScene";

export default function AreasInteractivas() {
  const { t, locale } = useI18n();

  return (
    <section
      id="areas"
      data-surface="dark"
      className="relative bg-forest text-bone overflow-hidden grain py-16 md:py-24 lg:py-28"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 right-[-15%] w-[55vmin] h-[55vmin] rounded-full opacity-18 blur-[160px]"
          style={{ background: "oklch(0.72 0.155 50)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[-15%] w-[45vmin] h-[45vmin] rounded-full opacity-15 blur-[180px]"
          style={{ background: "oklch(0.34 0.080 150)" }}
        />
      </div>

      <div className="relative z-10 px-5 sm:px-6 md:px-12 lg:px-20">
        <div className="mb-10 md:mb-14 max-w-4xl">
          <TextScramble
            as="p"
            text={t.areas.kicker}
            className="block font-mono text-[10.5px] uppercase tracking-[0.32em] text-bone/60 mb-4"
          />
          <h2
            className="font-serif text-[2.1rem] sm:text-[2.6rem] md:text-d-2 lg:text-d-3 text-balance leading-[0.95]"
            style={{ fontWeight: 400 }}
          >
            {t.areas.title}
          </h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {areas.map((a, i) => {
            const c = getAreaContent(a, locale);
            const accentGlow =
              a.accent === "ember"
                ? "oklch(0.72 0.155 50)"
                : a.accent === "gold"
                ? "oklch(0.76 0.115 82)"
                : "oklch(0.34 0.080 150)";
            const accentText =
              a.accent === "ember"
                ? "text-ember"
                : a.accent === "gold"
                ? "text-gold"
                : "text-forest-glow";
            return (
              <li key={a.slug}>
                <Link
                  href={`/servicios/${a.slug}`}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-bone/12 bg-forest-soft/60 hover:bg-forest-soft hover:border-bone/40 transition-all duration-500 p-5 md:p-6"
                  style={{ transitionDelay: `${Math.min(i * 30, 240)}ms` }}
                >
                  <div className="absolute inset-0 pointer-events-none">
                    <div
                      className="absolute -top-16 -right-16 w-[22vmin] h-[22vmin] rounded-full opacity-30 group-hover:opacity-55 blur-[60px] transition-opacity duration-700"
                      style={{ background: accentGlow }}
                    />
                  </div>

                  <div className="absolute right-3 top-3 w-[38%] aspect-square text-bone/35 pointer-events-none opacity-80 group-hover:opacity-100 group-hover:text-bone/60 transition-all duration-700">
                    <ProblemaScene scene={a.scene} accent={a.accent} />
                  </div>

                  <div className="relative h-full flex flex-col min-h-[260px] md:min-h-[300px]">
                    <div className="flex items-center justify-between font-mono text-[9.5px] uppercase tracking-[0.28em] text-bone/60">
                      <span className={accentText}>§ {a.num}</span>
                    </div>

                    <h3
                      className="font-serif mt-auto text-[1.5rem] md:text-[1.7rem] leading-[1.04] text-balance max-w-[16ch]"
                      style={{ fontWeight: 400 }}
                    >
                      {c.title}
                    </h3>
                    <p className="mt-2.5 text-bone/70 text-[0.92rem] md:text-[0.95rem] leading-snug max-w-[30ch]">
                      {c.short}
                    </p>

                    <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-bone/60 group-hover:text-bone transition-colors duration-500">
                      <span>{t.areas.open}</span>
                      <span
                        aria-hidden
                        className="transition-transform duration-500 group-hover:translate-x-1.5"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <p className="mt-12 md:mt-16 max-w-2xl font-serif italic text-base md:text-lg text-bone/70 leading-snug" style={{ fontWeight: 400 }}>
          {t.areas.cta}
        </p>
      </div>
    </section>
  );
}
