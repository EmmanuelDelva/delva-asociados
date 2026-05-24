"use client";

import { useI18n } from "../i18n/I18nProvider";
import TextScramble from "./TextScramble";

function IconMail({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="M3 6 12 13 21 6" />
    </svg>
  );
}

function IconWhatsapp({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 12a9 9 0 1 1 4 7.5L3 21l1.5-3.8A9 9 0 0 1 3 12z" />
      <path d="M9 9.5c0-.6.4-1.5 1.2-1.5.4 0 .6.4.8.9l.6 1.4c.2.4.1.7-.2 1l-.5.5c.5 1 1.4 1.9 2.4 2.4l.5-.5c.3-.3.6-.4 1-.2l1.4.6c.5.2.9.4.9.8 0 .8-.9 1.2-1.5 1.2-2.7 0-6.6-3.9-6.6-6.6z" />
    </svg>
  );
}

function IconCalendar({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
      <circle cx="8" cy="14" r="0.8" fill="currentColor" />
      <circle cx="12" cy="14" r="0.8" fill="currentColor" />
      <circle cx="16" cy="14" r="0.8" fill="currentColor" />
    </svg>
  );
}

function IconMetaverse({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M2 11.5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v2.5a3 3 0 0 1-3 3h-3l-2.5-2.3a2 2 0 0 0-3 0L8 16.5H5a3 3 0 0 1-3-3z" />
      <circle cx="8" cy="12" r="1.4" />
      <circle cx="16" cy="12" r="1.4" />
    </svg>
  );
}

export default function FirmaCTA() {
  const { t } = useI18n();

  const options = [
    {
      Icon: IconMail,
      label: t.firma.optionEmail,
      value: "emmanueldelva@gmail.com",
      href: "mailto:emmanueldelva@gmail.com?subject=Delva%20%26%20Asociados"
    },
    {
      Icon: IconWhatsapp,
      label: t.firma.optionWhatsapp,
      value: "+52 33 1213 6004",
      href: "https://wa.me/523312136004?text=Hola%20Lic.%20Delva%2C%20quisiera%20conversar%20sobre%20mi%20caso."
    },
    {
      Icon: IconCalendar,
      label: t.firma.optionAgenda,
      value: "Calendly · 30 min",
      href: "https://calendar.google.com/calendar/u/0/r/eventedit?text=Delva+%26+Asociados+%E2%80%94+Dialogo"
    },
    {
      Icon: IconMetaverse,
      label: t.firma.optionMetaverso,
      value: "Immersed · Workrooms",
      href: "mailto:emmanueldelva@gmail.com?subject=Reunion%20en%20metaverso"
    }
  ];

  return (
    <section
      id="firmar"
      data-surface="dark"
      className="relative bg-forest text-bone py-20 md:py-28 overflow-hidden grain"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[60vmin] h-[60vmin] rounded-full opacity-12 blur-[160px]" style={{ background: "oklch(0.72 0.155 50)" }} />
        <div className="absolute top-0 left-0 w-[40vmin] h-[40vmin] rounded-full opacity-10 blur-[140px]" style={{ background: "oklch(0.34 0.080 150)" }} />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-6 items-end mb-10 md:mb-14">
          <div className="col-span-12 md:col-span-7">
            <TextScramble
              as="p"
              text={t.firma.kicker}
              className="block font-mono text-[10.5px] uppercase tracking-[0.32em] text-bone/55 mb-5"
            />
            <h2 className="font-serif text-d-2 md:text-d-3 max-w-4xl text-balance leading-[0.95] reveal-init" style={{ fontWeight: 400 }}>
              {t.firma.title}
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:text-right reveal-init">
            <p className="font-serif italic text-[1.05rem] md:text-[1.15rem] text-bone/65 leading-snug max-w-[34ch] md:ml-auto" style={{ fontWeight: 400 }}>
              {t.firma.sub}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl">
          {options.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              data-magnetic
              className="group relative aspect-[4/5] md:aspect-[5/6] rounded-2xl border border-bone/15 bg-forest-soft/60 hover:border-bone/45 hover:bg-forest-soft transition-all duration-500 reveal-init overflow-hidden p-4 md:p-5 flex flex-col justify-between"
              style={{ transitionDelay: `${i * 70}ms` }}
              aria-label={`${c.label} — ${c.value}`}
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full bg-bone/8 group-hover:bg-bone group-hover:text-forest transition-all duration-500">
                  <c.Icon size={18} />
                </span>
                <span aria-hidden className="font-serif italic text-bone/40 group-hover:text-bone transition-colors duration-500 text-lg translate-x-0 group-hover:translate-x-0.5 -translate-y-0.5">
                  →
                </span>
              </div>

              <div>
                <p className="font-mono text-[9.5px] md:text-[10px] uppercase tracking-[0.24em] text-bone/55 mb-1.5">
                  {String(i + 1).padStart(2, "0")} · {c.label}
                </p>
                <p className="font-serif text-[0.95rem] md:text-[1.05rem] leading-tight text-bone/95 break-words" style={{ fontWeight: 400 }}>
                  {c.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-10 md:mt-14 max-w-2xl text-[0.9rem] md:text-[0.95rem] text-bone/55 leading-relaxed reveal-init">
          {t.firma.optionMetaversoDetail}
        </p>
      </div>
    </section>
  );
}
