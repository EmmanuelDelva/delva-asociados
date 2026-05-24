"use client";

import { useI18n } from "../i18n/I18nProvider";

export default function Despacho() {
  const { t } = useI18n();

  return (
    <section
      id="despacho"
      data-surface="light"
      className="relative bg-bone text-ink py-28 md:py-40 overflow-hidden"
    >
      <div className="px-6 md:px-12 lg:px-20">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-ink-mute mb-10 reveal-init">
          {t.conduccion.kicker}
        </p>

        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="col-span-12 md:col-span-4">
            <div className="relative aspect-[3/4] w-full max-w-[380px] reveal-init">
              <div className="absolute inset-0 bg-forest rounded-2xl overflow-hidden grain">
                <div className="absolute inset-0 pointer-events-none">
                  <div
                    className="absolute -top-10 -right-10 w-[35vmin] h-[35vmin] rounded-full opacity-25 blur-[80px]"
                    style={{ background: "oklch(0.72 0.155 50)" }}
                  />
                </div>
                <div className="relative h-full flex flex-col justify-between p-6 text-bone">
                  <div className="flex items-start justify-between font-mono text-[9.5px] uppercase tracking-[0.28em] text-bone/65">
                    <span>JEDB</span>
                    <span>MMXXV</span>
                  </div>
                  <div>
                    <p
                      className="font-serif italic leading-[0.82]"
                      style={{ fontSize: "min(28vw, 9.5rem)", fontWeight: 400 }}
                    >
                      ED
                    </p>
                    <div className="mt-5 h-px w-10 bg-bone/35" />
                    <p className="mt-4 font-mono text-[9.5px] uppercase tracking-[0.28em] text-bone/70">
                      Juan E. Delva Benavides
                    </p>
                    <p className="font-mono text-[9.5px] uppercase tracking-[0.28em] text-bone/50">
                      {t.conduccion.label}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <h2
              className="font-serif text-d-2 md:text-d-3 mb-10 md:mb-14 reveal-init"
              style={{ fontWeight: 400 }}
            >
              {t.conduccion.title}
            </h2>
            <div className="space-y-6 font-serif text-[1.18rem] md:text-[1.3rem] leading-[1.5] text-ink-soft reveal-init" style={{ fontWeight: 400 }}>
              {t.conduccion.bio.map((p, i) => (
                <p key={i} className={i === t.conduccion.bio.length - 1 ? "text-ink" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
