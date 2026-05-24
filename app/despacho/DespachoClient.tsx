"use client";

import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FirmaCTA from "../components/FirmaCTA";
import { useI18n } from "../i18n/I18nProvider";

export default function DespachoClient() {
  const { t } = useI18n();

  return (
    <main className="relative overflow-x-hidden w-full max-w-full">
      <Nav />

      <section
        data-surface="dark"
        className="relative bg-forest text-bone overflow-hidden grain pt-32 md:pt-44 pb-20 md:pb-32"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 right-[-12%] w-[60vmin] h-[60vmin] rounded-full opacity-20 blur-[160px]"
            style={{ background: "oklch(0.72 0.155 50)" }}
          />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-20">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-bone/60 mb-8 reveal-init">
            {t.nosotrosPage.kicker}
          </p>
          <h1 className="font-serif text-d-3 md:text-d-4 max-w-5xl leading-[0.9] reveal-init" style={{ fontWeight: 400 }}>
            {t.nosotrosPage.title}
          </h1>
        </div>
      </section>

      <section data-surface="light" className="relative bg-bone text-ink py-24 md:py-36 overflow-hidden">
        <div className="px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-12 gap-6 md:gap-12 items-start">
            <div className="col-span-12 md:col-span-5 reveal-init">
              <div className="relative aspect-[3/4] w-full max-w-[440px] rounded-2xl overflow-hidden border border-ink/15 bg-forest/95 grain">
                <Image
                  src="/avatar/biblioteca.jpg"
                  alt="Juan Emmanuel Delva — biblioteca"
                  fill
                  sizes="(max-width: 768px) 90vw, 440px"
                  priority
                  className="object-cover"
                  onError={(e) => ((e.currentTarget as HTMLImageElement).style.opacity = "0")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-bone">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-bone/80">
                      Juan Emmanuel Delva Benavides
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-bone/55">
                      {t.nosotrosPage.label} · MMXXV
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-7 reveal-init">
              <div className="space-y-6 font-serif text-[1.18rem] md:text-[1.35rem] leading-[1.5] text-ink-soft" style={{ fontWeight: 400 }}>
                {t.nosotrosPage.bio.map((p, i) => (
                  <p key={i} className={i === t.nosotrosPage.bio.length - 1 ? "text-ink" : ""}>
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/#areas"
                  className="inline-flex items-center gap-2 bg-ink text-bone font-mono text-[11px] uppercase tracking-[0.2em] rounded-full px-5 py-3 hover:bg-forest transition-colors duration-500"
                >
                  {t.nav.submenuExplore}
                  <span aria-hidden>→</span>
                </Link>
                <a
                  href="/#firmar"
                  className="inline-flex items-center gap-2 border border-ink/40 font-mono text-[11px] uppercase tracking-[0.2em] rounded-full px-5 py-3 hover:bg-ink hover:text-bone transition-colors duration-500"
                >
                  {t.nosotrosPage.credCta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FirmaCTA />
      <Footer />
    </main>
  );
}
