"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useI18n } from "../i18n/I18nProvider";
import { areas, getAreaContent } from "../lib/servicios";
import ProblemaScene from "./ProblemaScene";
import TextScramble from "./TextScramble";
import { BrandSigil } from "./Mark";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AreasShowcase() {
  const { t, locale } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!sectionRef.current || !trackRef.current) return;
    const isMobile = window.matchMedia("(max-width: 900px)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isMobile || reduce) return;

    const sectionEl = sectionRef.current;
    const trackEl = trackRef.current;
    const cards = cardsRef.current.filter(Boolean) as HTMLAnchorElement[];

    let trigger: ScrollTrigger | null = null;
    const setup = () => {
      const totalWidth = trackEl.scrollWidth - window.innerWidth;
      trigger = ScrollTrigger.create({
        trigger: sectionEl,
        start: "top top",
        end: () => `+=${Math.max(totalWidth, 1) * 1.05}`,
        scrub: 0.7,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (progressRef.current) {
            progressRef.current.style.transform = `scaleX(${self.progress})`;
          }
          gsap.set(trackEl, { x: -totalWidth * self.progress });

          if (headingRef.current) {
            const fade = Math.max(0, 1 - self.progress * 1.7);
            headingRef.current.style.opacity = String(fade);
            headingRef.current.style.transform = `translateY(${self.progress * -36}px)`;
          }

          const focusCenter = window.innerWidth / 2;
          cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.left + rect.width / 2;
            const distance = Math.abs(cardCenter - focusCenter);
            const proximity = Math.max(
              0,
              1 - distance / (window.innerWidth * 0.45)
            );
            const scale = 0.86 + proximity * 0.22;
            const opacity = 0.42 + proximity * 0.58;
            const blur = (1 - proximity) * 3;
            const yShift = (1 - proximity) * 28;
            const rotation = (cardCenter - focusCenter) / 200;
            card.style.transform = `translate3d(0, ${yShift}px, 0) scale(${scale}) rotate(${rotation}deg)`;
            card.style.opacity = String(opacity);
            card.style.filter = `blur(${blur}px)`;
            card.style.zIndex = String(Math.round(proximity * 10));
          });
        }
      });
    };

    const raf = window.requestAnimationFrame(setup);
    return () => {
      window.cancelAnimationFrame(raf);
      trigger?.kill();
    };
  }, [locale]);

  const hint =
    locale === "es"
      ? "Cada tarjeta es una conversación distinta."
      : locale === "en"
      ? "Each card is a different conversation."
      : "Chaque carte est une conversation différente.";

  const finalLine =
    locale === "es"
      ? "Y mucho más que aún no tiene nombre legal."
      : locale === "en"
      ? "And much more that has no legal name yet."
      : "Et bien plus qui n'a pas encore de nom légal.";

  return (
    <>
      <section
        ref={sectionRef}
        id="areas-showcase"
        data-surface="dark"
        className="relative bg-forest text-bone overflow-hidden grain h-screen hidden md:block"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vmin] h-[65vmin] opacity-14 blur-[180px]"
            style={{
              background:
                "radial-gradient(ellipse, oklch(0.72 0.155 50) 0%, transparent 65%)"
            }}
          />
          <div
            className="absolute bottom-[-15%] right-[-10%] w-[40vmin] h-[40vmin] rounded-full opacity-12 blur-[160px]"
            style={{ background: "oklch(0.34 0.080 150)" }}
          />
        </div>

        <div
          ref={headingRef}
          className="absolute top-24 lg:top-28 left-6 md:left-12 lg:left-20 z-20 max-w-3xl pointer-events-none"
          style={{ willChange: "transform, opacity" }}
        >
          <TextScramble
            as="p"
            text={t.areas.kicker}
            className="block font-mono text-[10.5px] uppercase tracking-[0.32em] text-bone/55 mb-4"
          />
          <h2
            className="font-serif text-[2.2rem] md:text-[2.9rem] lg:text-[3.4rem] text-balance leading-[0.94] mb-5"
            style={{ fontWeight: 400 }}
          >
            {t.areas.title}
          </h2>
          <p
            className="font-serif italic text-[1.15rem] md:text-[1.4rem] text-bone/70 leading-snug max-w-[40ch]"
            style={{ fontWeight: 400 }}
          >
            {hint}
          </p>
        </div>

        <div
          ref={trackRef}
          className="flex h-full items-center pl-[42vw] will-change-transform"
          style={{ width: `${areas.length * 28 + 110}vw` }}
        >
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
              <Link
                key={a.slug}
                href={`/servicios/${a.slug}`}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                className="group shrink-0 w-[22vw] lg:w-[19vw] aspect-[3/4] mr-[6vw] lg:mr-[5vw] relative rounded-2xl overflow-hidden border border-bone/15 bg-forest-soft/70 hover:border-bone/45 transition-colors duration-500 will-change-transform"
                style={{ transformOrigin: "center" }}
              >
                <div className="absolute inset-0 pointer-events-none">
                  <div
                    className="absolute -top-20 -right-20 w-[28vmin] h-[28vmin] rounded-full opacity-40 group-hover:opacity-65 blur-[80px] transition-opacity duration-700"
                    style={{ background: accentGlow }}
                  />
                </div>
                <div className="absolute right-3 top-3 w-[48%] aspect-square text-bone/35 pointer-events-none opacity-85 group-hover:opacity-100 group-hover:text-bone/55 transition-all duration-700">
                  <ProblemaScene scene={a.scene} accent={a.accent} />
                </div>
                <div className="relative h-full flex flex-col p-5 md:p-6">
                  <div className="flex items-center justify-between font-mono text-[9.5px] uppercase tracking-[0.28em] text-bone/65">
                    <span className={accentText}>§ {a.num}</span>
                  </div>
                  <h3
                    className="font-serif mt-auto text-[1.4rem] lg:text-[1.7rem] leading-[1.02] text-balance"
                    style={{ fontWeight: 400 }}
                  >
                    {c.title}
                  </h3>
                  <p className="mt-2 text-bone/70 text-[0.82rem] leading-snug max-w-[28ch]">
                    {c.short}
                  </p>
                  <div className="mt-3 flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-[0.24em] text-bone/55 group-hover:text-bone transition-colors duration-500">
                    <span>{t.areas.open}</span>
                    <span
                      aria-hidden
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}

          <div className="shrink-0 w-[22vw] lg:w-[19vw] aspect-[3/4] flex flex-col items-center justify-center text-bone/70 px-6">
            <span style={{ width: 96, height: 96 }} className="block opacity-80">
              <BrandSigil />
            </span>
            <p
              className="mt-5 font-serif italic text-[1.05rem] lg:text-[1.15rem] text-center max-w-[20ch] leading-snug"
              style={{ fontWeight: 400 }}
            >
              {finalLine}
            </p>
            <div className="mt-4 flex items-center gap-2 opacity-40">
              <span className="block w-8 h-px bg-bone" />
              <span className="block w-1 h-1 rounded-full bg-bone" />
              <span className="block w-8 h-px bg-bone" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-12 right-12 lg:left-20 lg:right-20 z-10 pointer-events-none">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-bone/55 mb-2">
            <span>{t.areas.pick}</span>
            <span>
              {locale === "es"
                ? "Desplaza para recorrer las 13 áreas"
                : locale === "en"
                ? "Scroll through all 13 areas"
                : "Faites défiler les 13 domaines"}{" "}
              →
            </span>
          </div>
          <div className="h-px bg-bone/15 overflow-hidden">
            <div
              ref={progressRef}
              className="h-full bg-bone origin-left"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>
      </section>

      <section
        data-surface="dark"
        className="md:hidden relative bg-forest text-bone overflow-hidden grain pt-14 pb-12 px-5"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-10 right-[-25%] w-[55vmin] h-[55vmin] rounded-full opacity-20 blur-[140px]"
            style={{ background: "oklch(0.72 0.155 50)" }}
          />
        </div>
        <div className="relative mb-8">
          <TextScramble
            as="p"
            text={t.areas.kicker}
            className="block font-mono text-[10px] uppercase tracking-[0.28em] text-bone/60 mb-3"
          />
          <h2
            className="font-serif text-[1.85rem] leading-[1.0] text-balance"
            style={{ fontWeight: 400 }}
          >
            {t.areas.title}
          </h2>
          <p
            className="mt-3 font-serif italic text-[1rem] text-bone/70 leading-snug"
            style={{ fontWeight: 400 }}
          >
            {hint}
          </p>
        </div>
        <ul className="relative space-y-3">
          {areas.map((a) => {
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
                  className="block relative border border-bone/15 rounded-2xl p-5 overflow-hidden hover:border-bone/40 transition-colors"
                >
                  <div
                    className="absolute -top-12 -right-12 w-[18vmin] h-[18vmin] rounded-full opacity-30 blur-[60px] pointer-events-none"
                    style={{ background: accentGlow }}
                  />
                  <div className="absolute right-2 top-2 w-[28%] aspect-square text-bone/30 pointer-events-none opacity-80">
                    <ProblemaScene scene={a.scene} accent={a.accent} />
                  </div>
                  <div className="relative">
                    <div className={`font-mono text-[10px] uppercase tracking-widest ${accentText} mb-3`}>
                      <span>§ {a.num}</span>
                    </div>
                    <h3
                      className="font-serif text-[1.45rem] leading-tight max-w-[14ch]"
                      style={{ fontWeight: 400 }}
                    >
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm text-bone/70 max-w-[34ch]">{c.short}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
