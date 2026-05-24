"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import FirmaCTA from "../../components/FirmaCTA";
import { useI18n } from "../../i18n/I18nProvider";
import type { Servicio } from "../../lib/servicios";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const avatarPath: Record<NonNullable<Servicio["avatar"]>, string> = {
  biblioteca: "/avatar/biblioteca.jpg",
  portrait: "/avatar/portrait.jpg",
  mxoffice: "/avatar/mxoffice.jpg",
  crypto: "/avatar/crypto.jpg",
  tmec: "/avatar/tmec.jpg"
};

export default function ServicioClient({ servicio, next }: { servicio: Servicio; next: Servicio }) {
  const { t, locale } = useI18n();
  const content = servicio.i18n[locale];
  const heroRef = useRef<HTMLElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const [openId, setOpenId] = useState<string | null>(content.problematicas[0]?.id ?? null);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(numRef.current, { opacity: 0, x: -20, duration: 0.9, ease: "expo.out" });
      gsap.from(titleRef.current, { opacity: 0, y: 40, duration: 1.2, ease: "expo.out", delay: 0.15 });
      if (sceneRef.current) {
        gsap.to(sceneRef.current.querySelectorAll("[data-orb]"), {
          y: "+=40",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6
          }
        });
      }
    }, heroRef);
    return () => ctx.revert();
  }, [content.title]);

  const accentGlow =
    servicio.accent === "ember"
      ? "oklch(0.72 0.155 50)"
      : servicio.accent === "gold"
      ? "oklch(0.76 0.115 82)"
      : "oklch(0.34 0.080 150)";
  const accentText =
    servicio.accent === "ember" ? "text-ember" : servicio.accent === "gold" ? "text-gold" : "text-forest-glow";

  return (
    <main className="relative overflow-x-hidden w-full max-w-full">
      <Nav />

      <section
        ref={heroRef}
        data-surface="dark"
        className="relative bg-forest text-bone overflow-hidden grain min-h-[100svh]"
      >
        <div ref={sceneRef} className="absolute inset-0 pointer-events-none">
          <div
            data-orb
            className="absolute top-[18%] right-[-12%] w-[55vmin] h-[55vmin] rounded-full opacity-25 blur-[140px]"
            style={{ background: accentGlow }}
          />
          <div
            data-orb
            className="absolute bottom-[-15%] left-[-10%] w-[45vmin] h-[45vmin] rounded-full opacity-20 blur-[160px]"
            style={{ background: "oklch(0.34 0.080 150)" }}
          />
          <svg
            className="absolute top-1/2 right-[8%] -translate-y-1/2 w-[36vmin] h-[36vmin] opacity-25 hidden md:block"
            viewBox="0 0 400 400"
            data-orb
          >
            <defs>
              <radialGradient id="g1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={accentGlow} stopOpacity="0.6" />
                <stop offset="100%" stopColor={accentGlow} stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
            <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            <circle cx="200" cy="200" r="60" fill="url(#g1)" />
          </svg>
        </div>

        <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-32 md:pt-44 pb-16 md:pb-24">
          <Link
            href="/#areas"
            className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-bone/55 hover:text-bone transition-colors duration-500 mb-10"
          >
            <span aria-hidden>←</span>
            {t.servicePage.backHome}
          </Link>

          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-2">
              <span
                ref={numRef}
                className="block font-mono text-[16vw] md:text-[6.5rem] leading-[0.85] text-bone/30"
                style={{ fontWeight: 400 }}
              >
                {servicio.num}
              </span>
            </div>
            <div className="col-span-12 md:col-span-10">
              <h1
                ref={titleRef}
                className="font-serif text-d-2 md:text-d-3 lg:text-d-4 text-balance leading-[0.92]"
                style={{ fontWeight: 400 }}
              >
                {content.title}
              </h1>
            </div>
          </div>

          <div className="mt-10 md:mt-14 max-w-4xl">
            <p className="font-serif italic text-[1.35rem] md:text-[1.85rem] leading-[1.35] text-bone/80" style={{ fontWeight: 400 }}>
              {content.closeExample}
            </p>
          </div>
        </div>
      </section>

      <section data-surface="light" className="relative bg-bone text-ink py-24 md:py-36 overflow-hidden">
        <div className="px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-12 gap-6 mb-10 md:mb-16">
            <div className="col-span-12 md:col-span-7 reveal-init">
              <p className={`font-mono text-[10.5px] uppercase tracking-[0.28em] ${accentText} mb-4`}>
                {t.servicePage.problemasTitle}
              </p>
              <h2 className="font-serif text-d-1 md:text-d-2 text-balance leading-[0.98]" style={{ fontWeight: 400 }}>
                {content.short}
              </h2>
              <p className="mt-5 max-w-2xl text-base md:text-lg text-ink-soft">{t.servicePage.problemasSub}</p>
            </div>

            {servicio.avatar && (
              <div className="col-span-12 md:col-span-4 md:col-start-9 reveal-init">
                <div className="relative aspect-[3/4] w-full max-w-[300px] ml-auto rounded-2xl overflow-hidden border border-ink/15 bg-forest/80">
                  <Image
                    src={avatarPath[servicio.avatar]}
                    alt="Juan Emmanuel Delva"
                    fill
                    sizes="(max-width: 768px) 60vw, 300px"
                    className="object-cover"
                    onError={(e) => ((e.currentTarget as HTMLImageElement).style.opacity = "0")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.24em] text-bone/85">
                    <span>JEDB</span>
                    <span>{servicio.num}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <ul className="border-t border-ink/15">
            {content.problematicas.map((p, i) => {
              const isOpen = openId === p.id;
              return (
                <li
                  key={p.id}
                  className={`border-b border-ink/15 transition-colors duration-500 reveal-init ${
                    isOpen ? "bg-bone-soft/70" : "hover:bg-bone-soft/35"
                  }`}
                  style={{ transitionDelay: `${Math.min(i * 60, 360)}ms` }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : p.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left grid grid-cols-12 gap-3 md:gap-6 items-baseline py-5 md:py-7 px-2 md:px-4 -mx-2 md:-mx-4"
                  >
                    <span className={`col-span-2 md:col-span-1 font-mono text-[10.5px] uppercase tracking-widest ${accentText}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="col-span-10 md:col-span-8">
                      <h3 className="font-serif text-[1.4rem] md:text-[2rem] leading-[1.1] tracking-tight" style={{ fontWeight: 400 }}>
                        {p.title}
                      </h3>
                      <p className="mt-1.5 font-serif italic text-[0.95rem] md:text-[1.1rem] text-ink-soft leading-snug" style={{ fontWeight: 400 }}>
                        {p.hook}
                      </p>
                    </div>
                    <div className="col-span-12 md:col-span-3 md:flex md:justify-end items-baseline mt-2 md:mt-0">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute flex items-center gap-2">
                        {isOpen ? t.areas.collapse : t.servicePage.expandHint}
                        <span
                          aria-hidden
                          className={`inline-block font-serif italic text-2xl transition-transform duration-500 ${
                            isOpen ? "rotate-45" : "rotate-0"
                          }`}
                        >
                          +
                        </span>
                      </span>
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-700 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="grid grid-cols-12 gap-6 px-2 md:px-4 -mx-2 md:-mx-4 pb-8 md:pb-12 pt-2">
                        <div className="col-span-12 md:col-span-6 md:col-start-2">
                          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-mute mb-4">
                            {t.servicePage.examplesLabel}
                          </p>
                          <ul className="space-y-4">
                            {p.examples.map((ex, exi) => (
                              <li key={exi} className="flex items-baseline gap-3">
                                <span className={`font-mono text-[10px] uppercase tracking-widest ${accentText} shrink-0 mt-0.5`}>
                                  {String.fromCharCode(65 + exi)}
                                </span>
                                <p className="font-sans text-[0.95rem] md:text-[1.02rem] text-ink-soft leading-relaxed">
                                  {ex}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="col-span-12 md:col-span-4 md:col-start-9">
                          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-mute mb-4">
                            {t.servicePage.solutionLabel}
                          </p>
                          <p className="font-serif text-[1.05rem] md:text-[1.18rem] leading-[1.45] text-ink" style={{ fontWeight: 400 }}>
                            {p.solution}
                          </p>
                          <a
                            href="#firmar"
                            onClick={() => {
                              setTimeout(() => {
                                const el = document.getElementById("firmar");
                                if (el) el.scrollIntoView({ behavior: "smooth" });
                              }, 50);
                            }}
                            className="inline-flex items-center gap-2 mt-6 font-mono text-[10px] uppercase tracking-[0.22em] border border-ink/35 rounded-full px-4 py-2 hover:bg-ink hover:text-bone transition-colors duration-500"
                          >
                            {t.servicePage.contactCta}
                            <span aria-hidden>→</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <FirmaCTA />

      <section data-surface="light" className="relative bg-bone text-ink py-16 md:py-24 overflow-hidden">
        <div className="px-6 md:px-12 lg:px-20">
          <Link href={`/servicios/${next.slug}`} className="group block border-t border-ink/15 pt-10 md:pt-14">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-ink-mute mb-4 flex items-center gap-2">
                  {t.servicePage.next} <span aria-hidden className="opacity-50">— {next.num}</span>
                </p>
                <h3 className="font-serif text-d-1 md:text-d-2 text-balance leading-[0.96]" style={{ fontWeight: 400 }}>
                  {next.i18n[locale].title}
                </h3>
                <p className="mt-3 font-sans text-base md:text-lg text-ink-soft max-w-[48ch]">
                  {next.i18n[locale].short}
                </p>
              </div>
              <div className="shrink-0 mt-2">
                <span
                  aria-hidden
                  className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border border-ink/35 group-hover:bg-ink group-hover:text-bone transition-all duration-500 text-xl font-serif italic"
                >
                  →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
