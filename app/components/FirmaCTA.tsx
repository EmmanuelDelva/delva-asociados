"use client";

import { useI18n } from "../i18n/I18nProvider";

export default function FirmaCTA() {
  const { t } = useI18n();

  const options = [
    {
      n: "01",
      label: t.firma.optionEmail,
      value: "emmanueldelva@gmail.com",
      href: "mailto:emmanueldelva@gmail.com?subject=Delva%20%26%20Asociados",
      detail: null
    },
    {
      n: "02",
      label: t.firma.optionWhatsapp,
      value: "+52 33 1213 6004",
      href: "https://wa.me/523312136004?text=Hola%20Lic.%20Delva%2C%20quisiera%20conversar%20sobre%20mi%20caso.",
      detail: null
    },
    {
      n: "03",
      label: t.firma.optionAgenda,
      value: "Calendly · 30 min",
      href: "https://calendar.google.com/calendar/u/0/r/eventedit?text=Delva+%26+Asociados+%E2%80%94+Dialogo",
      detail: null
    },
    {
      n: "04",
      label: t.firma.optionMetaverso,
      value: "Immersed / Meta Workrooms",
      href: "mailto:emmanueldelva@gmail.com?subject=Reunion%20en%20metaverso",
      detail: t.firma.optionMetaversoDetail
    }
  ];

  return (
    <section
      id="firmar"
      data-surface="dark"
      className="relative bg-forest text-bone py-28 md:py-40 overflow-hidden grain"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 right-0 w-[70vmin] h-[70vmin] rounded-full opacity-15 blur-[160px]"
          style={{ background: "oklch(0.72 0.155 50)" }}
        />
        <div
          className="absolute top-0 left-0 w-[50vmin] h-[50vmin] rounded-full opacity-10 blur-[140px]"
          style={{ background: "oklch(0.34 0.080 150)" }}
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-bone/55 mb-8 reveal-init">
          {t.firma.kicker}
        </p>

        <h2
          className="font-serif text-d-3 md:text-d-4 max-w-5xl text-balance leading-[0.92] reveal-init"
          style={{ fontWeight: 400 }}
        >
          {t.firma.title}
        </h2>

        <p className="mt-8 max-w-2xl font-serif italic text-[1.2rem] md:text-[1.45rem] text-bone/70 leading-relaxed reveal-init" style={{ fontWeight: 400 }}>
          {t.firma.sub}
        </p>

        <ul className="mt-16 md:mt-20 border-t border-bone/15 max-w-5xl">
          {options.map((c, i) => (
            <li
              key={c.n}
              className="border-b border-bone/15 reveal-init"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group block px-2 md:px-4 -mx-2 md:-mx-4 hover:bg-forest-soft/60 transition-colors duration-500"
              >
                <div className="grid grid-cols-12 gap-4 py-6 md:py-8 items-baseline">
                  <div className="col-span-2 md:col-span-1">
                    <span className="font-mono text-[10.5px] uppercase tracking-widest text-bone/55">{c.n}</span>
                  </div>
                  <div className="col-span-10 md:col-span-3">
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-bone/55">{c.label}</span>
                  </div>
                  <div className="col-span-12 md:col-span-7 md:col-start-5">
                    <span className="font-serif text-[1.5rem] md:text-[2.4rem] leading-tight block" style={{ fontWeight: 400 }}>
                      {c.value}
                    </span>
                    {c.detail && (
                      <span className="block mt-2 font-sans text-[0.9rem] md:text-base text-bone/55 leading-snug max-w-[52ch]">
                        {c.detail}
                      </span>
                    )}
                  </div>
                  <div className="col-span-1 hidden md:flex md:justify-end items-baseline text-bone/45 group-hover:text-ember transition-colors duration-500">
                    <span aria-hidden className="text-xl font-serif italic transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
