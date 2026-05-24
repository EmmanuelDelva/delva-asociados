"use client";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FirmaCTA from "../components/FirmaCTA";
import TextScramble from "../components/TextScramble";
import { BrandSigil } from "../components/Mark";
import { useI18n } from "../i18n/I18nProvider";

export default function ContactoClient() {
  const { t, locale } = useI18n();

  const intro =
    locale === "es"
      ? "Cuéntanos qué te pasó. Treinta minutos para entender el caso y decirte qué vemos. Después, tú decides."
      : locale === "en"
      ? "Tell us what happened. Thirty minutes to understand the case and share what we see. Then you decide."
      : "Racontez-nous ce qui s'est passé. Trente minutes pour comprendre l'affaire et vous dire ce que nous voyons. Puis, vous décidez.";

  const hoursLabel =
    locale === "es" ? "Horarios" : locale === "en" ? "Hours" : "Horaires";
  const officeLabel =
    locale === "es" ? "Oficina" : locale === "en" ? "Office" : "Bureau";
  const responseLabel =
    locale === "es"
      ? "Respuesta promedio"
      : locale === "en"
      ? "Average response"
      : "Réponse moyenne";

  return (
    <main className="relative overflow-x-hidden w-full max-w-full">
      <Nav />

      <section
        data-surface="dark"
        className="relative bg-forest text-bone overflow-hidden grain pt-28 sm:pt-32 md:pt-40 pb-12 md:pb-20"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/3 right-[-12%] w-[55vmin] h-[55vmin] rounded-full opacity-22 blur-[160px]"
            style={{ background: "oklch(0.72 0.155 50)" }}
          />
          <div
            className="absolute bottom-[-15%] left-[-10%] w-[40vmin] h-[40vmin] rounded-full opacity-15 blur-[160px]"
            style={{ background: "oklch(0.34 0.080 150)" }}
          />
        </div>

        <div className="relative z-10 px-5 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-9">
              <TextScramble
                as="p"
                text={t.firma.kicker}
                className="block font-mono text-[10.5px] uppercase tracking-[0.32em] text-bone/60 mb-6"
              />
              <h1
                className="font-serif text-d-2 md:text-d-3 lg:text-d-4 text-balance leading-[0.92] max-w-5xl"
                style={{ fontWeight: 400 }}
              >
                {t.firma.title}
              </h1>
            </div>
            <div className="col-span-12 md:col-span-3 md:text-right hidden md:block">
              <span
                style={{ width: 96, height: 96 }}
                className="block ml-auto opacity-65"
              >
                <BrandSigil />
              </span>
            </div>
          </div>

          <p
            className="mt-10 md:mt-14 max-w-3xl font-serif italic text-[1.3rem] md:text-[1.6rem] leading-[1.4] text-bone/80"
            style={{ fontWeight: 400 }}
          >
            &ldquo;{intro}&rdquo;
          </p>
        </div>
      </section>

      <FirmaCTA />

      <section
        data-surface="light"
        className="relative bg-bone text-ink py-16 md:py-24"
      >
        <div className="px-5 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 border-t border-ink/12 pt-12 md:pt-16">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute mb-3">
                {officeLabel}
              </p>
              <p
                className="font-serif text-[1.15rem] md:text-[1.3rem] leading-snug max-w-[22ch]"
                style={{ fontWeight: 400 }}
              >
                Guadalajara, Jalisco
                <br />
                México
              </p>
              <p className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-mute">
                Atendemos a todo el país y el extranjero.
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute mb-3">
                {hoursLabel}
              </p>
              <p
                className="font-serif text-[1.15rem] md:text-[1.3rem] leading-snug max-w-[22ch]"
                style={{ fontWeight: 400 }}
              >
                Lun&ndash;Vie · 10:00&ndash;19:00 CT
                <br />
                Sáb · solo casos urgentes
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute mb-3">
                {responseLabel}
              </p>
              <p
                className="font-serif text-[1.15rem] md:text-[1.3rem] leading-snug max-w-[22ch]"
                style={{ fontWeight: 400 }}
              >
                Correo: dentro de 24 h.
                <br />
                WhatsApp: misma jornada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
