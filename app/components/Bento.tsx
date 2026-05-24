"use client";

import { useI18n } from "../i18n/I18nProvider";
import Link from "next/link";
import { servicios } from "../lib/servicios";

const FEATURED_SLUGS = [
  "inteligencia-artificial",
  "web3-blockchain",
  "fintech-pagos",
  "economia-creadores",
  "gaming-metaverso"
];

export default function Bento() {
  const { t, locale } = useI18n();
  const items = FEATURED_SLUGS.map((s) => servicios.find((x) => x.slug === s)!);

  return (
    <section
      data-surface="light"
      id="areas"
      className="relative bg-bone text-ink py-28 md:py-40 overflow-hidden"
    >
      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-6 mb-14 md:mb-20 items-end">
          <div className="col-span-12 md:col-span-7 reveal-init">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-ink-mute mb-5">
              {t.bento.kicker}
            </p>
            <h2 className="font-serif text-d-2 md:text-d-3 text-balance max-w-4xl" style={{ fontWeight: 400 }}>
              {t.bento.title}
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:text-right reveal-init">
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.22em] border border-ink/35 rounded-full px-4 py-2.5 hover:bg-ink hover:text-bone transition-colors duration-500"
            >
              {t.bento.seeAll}
              <span aria-hidden>↓</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-12 grid-flow-dense auto-rows-[minmax(220px,auto)] gap-3 md:gap-4">
          {items.map((s, i) => {
            const layout = [
              "col-span-12 md:col-span-7 row-span-2",
              "col-span-12 md:col-span-5",
              "col-span-12 md:col-span-5",
              "col-span-12 md:col-span-4",
              "col-span-12 md:col-span-8"
            ][i];
            const isFeatured = i === 0;
            const accentBg =
              s.accent === "ember"
                ? "bg-ember/10"
                : s.accent === "forest"
                ? "bg-forest/8"
                : "bg-gold/15";
            return (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className={`group relative ${layout} reveal-init rounded-2xl border border-ink/10 overflow-hidden ${
                  isFeatured ? "bg-forest text-bone" : "bg-bone-soft text-ink"
                } transition-all duration-700 hover:border-ink/30`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`absolute inset-0 ${isFeatured ? "opacity-0" : accentBg} transition-opacity duration-700 group-hover:opacity-100`} />
                {isFeatured && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div
                      className="absolute -top-10 -right-10 w-[40vmin] h-[40vmin] rounded-full opacity-30 blur-[100px]"
                      style={{ background: "oklch(0.72 0.155 50)" }}
                    />
                    <div
                      className="absolute bottom-0 left-0 w-[30vmin] h-[30vmin] rounded-full opacity-25 blur-[120px]"
                      style={{ background: "oklch(0.34 0.080 150)" }}
                    />
                  </div>
                )}
                <div className="relative h-full flex flex-col p-6 md:p-8">
                  <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.22em] opacity-65">
                    <span>{s.num}</span>
                    <span aria-hidden className="transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1">→</span>
                  </div>

                  <div className="mt-auto pt-10">
                    <h3
                      className={`font-serif leading-[1.02] ${
                        isFeatured
                          ? "text-d-1 md:text-d-2"
                          : "text-[1.8rem] md:text-[2.4rem]"
                      }`}
                      style={{ fontWeight: 400 }}
                    >
                      {s.i18n[locale].title}
                    </h3>
                    <p
                      className={`mt-3 font-sans text-[0.95rem] md:text-base leading-relaxed max-w-[42ch] ${
                        isFeatured ? "text-bone/75" : "text-ink-soft"
                      }`}
                    >
                      {s.i18n[locale].oneliner}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
