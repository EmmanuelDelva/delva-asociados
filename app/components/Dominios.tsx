"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useI18n } from "../i18n/I18nProvider";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Line = { word: string; note: string };

const COPY: Record<"es" | "en" | "fr", { kicker: string; lead: string; lines: Line[]; close: string }> = {
  es: {
    kicker: "Donde sucede",
    lead: "El derecho contemporáneo no pasa en los tribunales. Pasa antes.",
    lines: [
      { word: "El metaverso.", note: "Donde tu avatar firma." },
      { word: "La wallet.", note: "Donde vive tu patrimonio." },
      { word: "El deepfake.", note: "Donde te suplantan." },
      { word: "La herencia digital.", note: "Donde nadie sabe entrar." },
      { word: "La IA generativa.", note: "Donde el autor es ambiguo." }
    ],
    close: "Aquí estamos antes de que llegue el problema."
  },
  en: {
    kicker: "Where it happens",
    lead: "Contemporary law doesn't happen in court. It happens before.",
    lines: [
      { word: "The metaverse.", note: "Where your avatar signs." },
      { word: "The wallet.", note: "Where your estate lives." },
      { word: "The deepfake.", note: "Where they impersonate you." },
      { word: "The digital legacy.", note: "Where no one knows how to enter." },
      { word: "Generative AI.", note: "Where authorship is ambiguous." }
    ],
    close: "We're here before the problem arrives."
  },
  fr: {
    kicker: "Là où ça se passe",
    lead: "Le droit contemporain ne se passe pas au tribunal. Il se passe avant.",
    lines: [
      { word: "Le métaverse.", note: "Où votre avatar signe." },
      { word: "Le wallet.", note: "Où vit votre patrimoine." },
      { word: "Le deepfake.", note: "Où l'on vous usurpe." },
      { word: "L'héritage numérique.", note: "Où personne ne sait entrer." },
      { word: "L'IA générative.", note: "Où l'auteur est ambigu." }
    ],
    close: "Nous sommes là avant que le problème n'arrive."
  }
};

export default function Dominios() {
  const { locale } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLUListElement>(null);
  const closeRef = useRef<HTMLParagraphElement>(null);

  const t = COPY[locale];

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current || !stackRef.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const items = stackRef.current!.querySelectorAll<HTMLLIElement>("[data-dominio]");
      items.forEach((el) => {
        gsap.set(el, { opacity: 0.12, x: -28, filter: "blur(3px)" });
      });
      gsap.set(closeRef.current, { opacity: 0, y: 16 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 55%",
          scrub: 0.7
        }
      });

      items.forEach((el, i) => {
        tl.to(el, { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.5, ease: "expo.out" }, i * 0.4);
        if (i < items.length - 1) {
          tl.to(el, { opacity: 0.25, x: 10, filter: "blur(1.2px)", duration: 0.4 }, i * 0.4 + 0.5);
        }
      });

      tl.to(closeRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "expo.out" }, "+=0.15");
    }, sectionRef);

    return () => ctx.revert();
  }, [locale]);

  return (
    <section
      ref={sectionRef}
      data-surface="dark"
      className="relative bg-forest text-bone overflow-hidden grain py-24 md:py-36"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-[-15%] w-[50vmin] h-[50vmin] rounded-full opacity-18 blur-[160px]" style={{ background: "oklch(0.72 0.155 50)" }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vmin] h-[40vmin] rounded-full opacity-12 blur-[160px]" style={{ background: "oklch(0.34 0.08 150)" }} />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-6 mb-14 md:mb-20 items-end">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.32em] text-bone/55">
              {t.kicker}
            </p>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-4">
            <h2 className="font-serif text-d-2 md:text-d-3 text-balance leading-[0.96]" style={{ fontWeight: 400 }}>
              {t.lead}
            </h2>
          </div>
        </div>

        <ul ref={stackRef} className="space-y-1 md:space-y-2 max-w-5xl mx-auto">
          {t.lines.map((line, i) => (
            <li
              key={i}
              data-dominio
              className="grid grid-cols-12 gap-3 md:gap-6 items-baseline py-2"
            >
              <span className="col-span-2 md:col-span-1 font-mono text-[10px] uppercase tracking-widest text-ember/85">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="col-span-10 md:col-span-5 font-serif text-[1.8rem] md:text-[2.6rem] lg:text-[3.1rem] leading-[0.98] tracking-tight"
                style={{ fontWeight: 400 }}
              >
                {line.word}
              </h3>
              <p className="col-span-12 md:col-span-5 md:col-start-8 font-serif italic text-[1rem] md:text-[1.18rem] text-bone/65 leading-snug mt-1.5 md:mt-0" style={{ fontWeight: 400 }}>
                {line.note}
              </p>
            </li>
          ))}
        </ul>

        <p
          ref={closeRef}
          className="mt-14 md:mt-20 max-w-3xl mx-auto text-center font-serif italic text-[1.3rem] md:text-[1.75rem] text-bone/80 leading-snug"
          style={{ fontWeight: 400 }}
        >
          &ldquo;{t.close}&rdquo;
        </p>
      </div>
    </section>
  );
}
