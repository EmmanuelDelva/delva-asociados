"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FirmaCTA from "../components/FirmaCTA";
import ProblemaScene from "../components/ProblemaScene";
import TextScramble from "../components/TextScramble";
import { useI18n } from "../i18n/I18nProvider";
import { areas, getAreaContent } from "../lib/servicios";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServiciosClient() {
  const { t, locale } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current || !trackRef.current) return;
    const isMobile = window.matchMedia("(max-width: 900px)").matches;
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const cards = cardsRef.current.filter(Boolean) as HTMLAnchorElement[];
      const totalWidth = track.scrollWidth - window.innerWidth;

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${totalWidth * 1.3}`,
        scrub: 0.7,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (progressRef.current) {
            progressRef.current.style.transform = `scaleX(${self.progress})`;
          }
          gsap.set(track, { x: -totalWidth * self.progress });

          const focusCenter = window.innerWidth / 2;
          cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.left + rect.width / 2;
            const distance = Math.abs(cardCenter - focusCenter);
            const proximity = Math.max(0, 1 - distance / (window.innerWidth * 0.45));

            const scale = 0.88 + proximity * 0.18;
            const opacity = 0.45 + proximity * 0.55;
            const blur = (1 - proximity) * 2.5;
            const yShift = (1 - proximity) * 20;
            const rotation = (cardCenter - focusCenter) / 220;

            card.style.transform = `translate3d(0, ${yShift}px, 0) scale(${scale}) rotate(${rotation}deg)`;
            card.style.opacity = String(opacity);
            card.style.filter = `blur(${blur}px)`;
            card.style.zIndex = String(Math.round(proximity * 10));
          });
        }
      });

      return () => trigger.kill();
    }, sectionRef);
    return () => ctx.revert();
  }, [locale]);

  return (
    <main className="relative overflow-x-hidden w-full max-w-full">
      <Nav />

      <section data-surface="dark" className="relative bg-forest text-bone overflow-hidden grain pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-[-15%] w-[50vmin] h-[50vmin] rounded-full opacity-25 blur-[140px]" style={{ background: "oklch(0.72 0.155 50)" }} />
          <div className="absolute bottom-[-25%] left-[-10%] w-[45vmin] h-[45vmin] rounded-full opacity-15 blur-[160px]" style={{ background: "oklch(0.34 0.080 150)" }} />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-20">
          <TextScramble
            as="p"
            text={t.areas.kicker}
            className="block font-mono text-[10.5px] uppercase tracking-[0.32em] text-bone/60 mb-6"
          />
          <h1 className="font-serif text-d-2 md:text-d-3 lg:text-d-4 text-balance leading-[0.93] max-w-6xl" style={{ fontWeight: 400 }}>
            {t.areas.title}
          </h1>
          <p className="mt-7 max-w-2xl font-serif italic text-[1.2rem] md:text-[1.55rem] text-bone/80 leading-relaxed" style={{ fontWeight: 400 }}>
            {t.areas.sub}
          </p>
        </div>
      </section>

      <section
        ref={sectionRef}
        data-surface="dark"
        className="relative bg-forest text-bone overflow-hidden grain h-screen hidden md:block"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vmin] h-[60vmin] opacity-10 blur-[180px]" style={{ background: "radial-gradient(ellipse, oklch(0.72 0.155 50) 0%, transparent 65%)" }} />
        </div>

        <div
          ref={trackRef}
          className="flex h-full items-center pl-[40vw] will-change-transform"
          style={{ width: `${areas.length * 28 + 80}vw` }}
        >
          {areas.map((a, i) => {
            const c = getAreaContent(a, locale);
            const accentGlow =
              a.accent === "ember"
                ? "oklch(0.72 0.155 50)"
                : a.accent === "gold"
                ? "oklch(0.76 0.115 82)"
                : "oklch(0.34 0.080 150)";
            return (
              <Link
                key={a.slug}
                href={`/servicios/${a.slug}`}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                className="shrink-0 w-[22vw] lg:w-[19vw] aspect-[3/4] mr-[6vw] lg:mr-[5vw] relative rounded-2xl overflow-hidden border border-bone/12 bg-forest-soft transition-colors duration-500 hover:border-bone/45 will-change-transform"
                style={{ transformOrigin: "center" }}
              >
                {a.image && (
                  <div className="absolute inset-0">
                    <Image
                      src={a.image}
                      alt=""
                      fill
                      sizes="22vw"
                      className="object-cover opacity-55"
                      priority={i < 4}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/40 to-forest/15" />
                  </div>
                )}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-20 -right-20 w-[28vmin] h-[28vmin] rounded-full opacity-35 blur-[80px]" style={{ background: accentGlow }} />
                </div>
                <div className="absolute right-2 top-2 w-[45%] aspect-square text-bone/35 pointer-events-none opacity-80">
                  <ProblemaScene scene={a.scene} accent={a.accent} />
                </div>
                <div className="relative h-full flex flex-col p-5 md:p-6">
                  <div className="flex items-center justify-between font-mono text-[9.5px] uppercase tracking-[0.28em] text-bone/65">
                    <span>§ {a.num}</span>
                  </div>
                  <h2
                    className="font-serif mt-auto text-[1.4rem] lg:text-[1.7rem] leading-[1.02] text-balance"
                    style={{ fontWeight: 400 }}
                  >
                    {c.title}
                  </h2>
                  <p className="mt-2 text-bone/70 text-[0.82rem] leading-snug max-w-[28ch]">
                    {c.short}
                  </p>
                </div>
              </Link>
            );
          })}
          <div className="shrink-0 w-[15vw]" />
        </div>

        <div className="absolute bottom-6 left-12 right-12 lg:left-20 lg:right-20 z-10 pointer-events-none">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-bone/55 mb-2">
            <span>{t.areas.pick}</span>
            <span>
              {locale === "es" ? "Desplaza para recorrer las 12 áreas" : locale === "en" ? "Scroll through all 12 areas" : "Faites défiler les 12 domaines"} →
            </span>
          </div>
          <div className="h-px bg-bone/15 overflow-hidden">
            <div ref={progressRef} className="h-full bg-bone origin-left" style={{ transform: "scaleX(0)" }} />
          </div>
        </div>
      </section>

      <section data-surface="light" className="md:hidden bg-bone text-ink py-12 px-6">
        <ul className="space-y-3">
          {areas.map((a) => {
            const c = getAreaContent(a, locale);
            return (
              <li key={a.slug}>
                <Link href={`/servicios/${a.slug}`} className="block border border-ink/15 rounded-2xl p-5 hover:border-ink/40 transition-colors">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute mb-3">
                    <span>{a.num}</span>
                  </div>
                  <h3 className="font-serif text-[1.5rem] leading-tight" style={{ fontWeight: 400 }}>{c.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{c.short}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <FirmaCTA />
      <Footer />
    </main>
  );
}
