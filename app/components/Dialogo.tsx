"use client";

import { useI18n } from "../i18n/I18nProvider";

export default function Dialogo() {
  const { t } = useI18n();

  const canales = [
    {
      n: "01",
      k: t.dialogo.email,
      v: "emmanueldelva@gmail.com",
      href: "mailto:emmanueldelva@gmail.com?subject=Delva%20%26%20Asociados"
    },
    {
      n: "02",
      k: t.dialogo.whatsapp,
      v: "+52 33 1213 6004",
      href: "https://wa.me/523312136004"
    },
    {
      n: "03",
      k: t.dialogo.agenda,
      v: "Calendly",
      href: "https://calendar.google.com/calendar/u/0/r/eventedit?text=Delva+%26+Asociados"
    },
    {
      n: "04",
      k: t.dialogo.sede,
      v: "Guadalajara, MX",
      href: null
    }
  ];

  return (
    <section
      id="dialogo"
      data-surface="dark"
      className="relative bg-forest text-bone py-28 md:py-40 overflow-hidden grain"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 right-0 w-[70vmin] h-[70vmin] rounded-full opacity-15 blur-[160px]"
          style={{ background: "oklch(0.72 0.155 50)" }}
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-bone/55 mb-10 reveal-init">
          {t.dialogo.kicker}
        </p>

        <h2
          className="font-serif text-d-3 md:text-d-4 max-w-5xl text-balance leading-[0.92] reveal-init"
          style={{ fontWeight: 400 }}
        >
          {t.dialogo.title}
        </h2>

        <p className="mt-8 max-w-2xl font-serif text-[1.15rem] md:text-[1.3rem] text-bone/70 leading-relaxed reveal-init">
          {t.dialogo.sub}
        </p>

        <ul className="mt-16 md:mt-20 border-t border-bone/15 max-w-5xl">
          {canales.map((c, i) => {
            const inner = (
              <div className="grid grid-cols-12 gap-4 py-6 md:py-8 items-baseline transition-colors duration-500">
                <div className="col-span-2 md:col-span-1">
                  <span className="font-mono text-[10.5px] uppercase tracking-widest text-bone/55">
                    {c.n}
                  </span>
                </div>
                <div className="col-span-10 md:col-span-3">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-bone/55">
                    {c.k}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-7 md:col-start-5">
                  <span className="font-serif text-[1.8rem] md:text-[2.6rem]" style={{ fontWeight: 400 }}>
                    {c.v}
                  </span>
                </div>
                {c.href && (
                  <div className="col-span-1 hidden md:flex md:justify-end items-baseline text-bone/45 group-hover:text-ember transition-colors duration-500">
                    <span aria-hidden className="text-xl font-serif italic transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                )}
              </div>
            );
            return (
              <li
                key={c.n}
                className="border-b border-bone/15 reveal-init"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group block px-2 md:px-4 -mx-2 md:-mx-4 hover:bg-forest-soft/60 transition-colors duration-500"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="px-2 md:px-4 -mx-2 md:-mx-4">{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
