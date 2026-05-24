"use client";

import Link from "next/link";
import { useI18n } from "../i18n/I18nProvider";
import { servicios } from "../lib/servicios";

export default function ServiciosRail() {
  const { t, locale } = useI18n();

  return (
    <section
      id="servicios"
      data-surface="dark"
      className="relative bg-forest text-bone py-28 md:py-40 overflow-hidden grain"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70vmin] h-[70vmin] rounded-full opacity-10 blur-[160px]"
          style={{ background: "oklch(0.34 0.080 150)" }}
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 mb-12 md:mb-16">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-8 reveal-init">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-bone/55 mb-5">
              {t.servicios.kicker}
            </p>
            <h2
              className="font-serif text-d-2 md:text-d-3 text-balance max-w-4xl"
              style={{ fontWeight: 400 }}
            >
              {t.servicios.title}
            </h2>
          </div>
          <div className="col-span-12 md:col-span-3 md:col-start-10 md:text-right reveal-init">
            <a
              href="#dialogo"
              className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.22em] border border-bone/35 rounded-full px-4 py-2.5 hover:bg-bone hover:text-forest transition-colors duration-500"
            >
              {t.servicios.cta}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div
          className="flex gap-3 md:gap-5 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 lg:px-20 pb-6"
          style={{ scrollbarWidth: "thin", scrollbarColor: "oklch(0.34 0.04 150 / 0.5) transparent" }}
        >
          {servicios.map((s) => (
            <Link
              key={s.slug}
              href={`/servicios/${s.slug}`}
              className="group snap-start shrink-0 w-[78vw] sm:w-[58vw] md:w-[42vw] lg:w-[34vw] xl:w-[28vw] aspect-[3/4] relative rounded-2xl overflow-hidden border border-bone/15 bg-forest-soft hover:border-bone/45 transition-all duration-700"
            >
              <div className="absolute inset-0">
                <div
                  className="absolute -top-20 -right-20 w-[40vmin] h-[40vmin] rounded-full opacity-30 blur-[100px] transition-opacity duration-700 group-hover:opacity-50"
                  style={{
                    background:
                      s.accent === "ember"
                        ? "oklch(0.72 0.155 50)"
                        : s.accent === "gold"
                        ? "oklch(0.76 0.115 82)"
                        : "oklch(0.34 0.080 150)"
                  }}
                />
              </div>
              <div className="relative h-full flex flex-col p-6 md:p-7">
                <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-bone/55">
                  <span>{s.num}</span>
                  <span aria-hidden className="transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1">
                    →
                  </span>
                </div>
                <div className="mt-auto">
                  <h3
                    className="font-serif text-[1.85rem] md:text-[2.4rem] leading-[1.02] text-balance"
                    style={{ fontWeight: 400 }}
                  >
                    {s.i18n[locale].title}
                  </h3>
                  <p className="mt-3 font-sans text-[0.9rem] md:text-[0.95rem] leading-relaxed text-bone/70 max-w-[34ch]">
                    {s.i18n[locale].oneliner}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55 border-b border-bone/25 pb-1 group-hover:text-bone group-hover:border-bone transition-colors duration-500">
                    {t.servicios.readMore}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
