"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Mark, { Wordmark } from "../../components/Mark";
import { useI18n } from "../../i18n/I18nProvider";
import type { Servicio } from "../../lib/servicios";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicioClient({ servicio, next }: { servicio: Servicio; next: Servicio }) {
  const { t, locale } = useI18n();
  const content = servicio.i18n[locale];
  const heroRef = useRef<HTMLElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(numRef.current, { opacity: 0, x: -20, duration: 0.9, ease: "expo.out" });
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "expo.out",
        delay: 0.15
      });
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
            className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[40vmin] h-[40vmin] opacity-25"
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

        <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-36 md:pt-48 pb-20 md:pb-28">
          <Link
            href="/#servicios"
            className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-bone/55 hover:text-bone transition-colors duration-500 mb-12"
          >
            <span aria-hidden>←</span>
            {t.services.back}
          </Link>

          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-2">
              <span
                ref={numRef}
                className="block font-mono text-[14vw] md:text-[6.5rem] leading-[0.85] text-bone/35"
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

          <p className="mt-12 md:mt-16 max-w-3xl font-serif italic text-[1.4rem] md:text-[1.85rem] leading-[1.4] text-bone/80" style={{ fontWeight: 400 }}>
            {content.oneliner}
          </p>
        </div>
      </section>

      <section data-surface="light" className="relative bg-bone text-ink py-28 md:py-40 overflow-hidden">
        <div className="px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-12 gap-6 md:gap-12">
            <div className="col-span-12 md:col-span-5">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-ember mb-6 reveal-init">
                {t.services.problemLabel}
              </p>
              <h2 className="font-serif text-d-1 md:text-d-2 text-balance leading-[0.98] mb-8 reveal-init" style={{ fontWeight: 400 }}>
                {content.problem}
              </h2>
              <p className="font-serif text-[1.15rem] md:text-[1.3rem] leading-[1.5] text-ink-soft max-w-prose reveal-init" style={{ fontWeight: 400 }}>
                {content.problemLong}
              </p>
            </div>

            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-ink-mute mb-6 reveal-init">
                {t.services.solutionLabel}
              </p>
              <ul className="space-y-0 border-t border-ink/15">
                {content.solution.map((s, i) => (
                  <li
                    key={i}
                    className="border-b border-ink/15 py-5 md:py-6 reveal-init"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="flex items-baseline gap-4 md:gap-6">
                      <span className="font-mono text-[10.5px] uppercase tracking-widest text-ink-mute shrink-0 w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="font-serif text-[1.2rem] md:text-[1.45rem] leading-[1.35] text-ink" style={{ fontWeight: 400 }}>
                        {s}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 reveal-init">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-ink-mute mb-3">
                  {t.services.tagsLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {content.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10.5px] uppercase tracking-widest text-ink-soft border border-ink/20 rounded-full px-3 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-surface="dark" className="relative bg-forest text-bone py-24 md:py-32 overflow-hidden grain">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vmin] h-[60vmin] rounded-full opacity-20 blur-[160px]"
            style={{ background: accentGlow }}
          />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-20 grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 md:col-span-7">
            <h3 className="font-serif text-d-2 md:text-d-3 text-balance leading-[0.92] reveal-init" style={{ fontWeight: 400 }}>
              {t.services.contactCta}
            </h3>
          </div>
          <div className="col-span-12 md:col-span-5 md:text-right reveal-init">
            <div className="flex flex-wrap md:justify-end gap-3">
              <a
                href="https://wa.me/523312136004"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-bone text-forest font-mono text-[11px] uppercase tracking-[0.22em] rounded-full px-5 py-3 hover:bg-ember transition-colors duration-500"
              >
                WhatsApp
                <span aria-hidden>→</span>
              </a>
              <a
                href="mailto:emmanueldelva@gmail.com"
                className="inline-flex items-center gap-2 border border-bone/40 font-mono text-[11px] uppercase tracking-[0.22em] rounded-full px-5 py-3 hover:bg-bone hover:text-forest transition-colors duration-500"
              >
                {t.dialogo.email}
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section data-surface="light" className="relative bg-bone text-ink py-20 md:py-28 overflow-hidden">
        <div className="px-6 md:px-12 lg:px-20">
          <Link
            href={`/servicios/${next.slug}`}
            className="group block border-t border-ink/15 pt-10 md:pt-14"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-ink-mute mb-4 flex items-center gap-2">
                  {t.services.next} <span aria-hidden className="opacity-50">— {next.num}</span>
                </p>
                <h3 className="font-serif text-d-2 md:text-d-3 text-balance leading-[0.96]" style={{ fontWeight: 400 }}>
                  {next.i18n[locale].title}
                </h3>
                <p className="mt-4 font-sans text-base md:text-lg text-ink-soft max-w-[48ch]">
                  {next.i18n[locale].oneliner}
                </p>
              </div>
              <div className="shrink-0 flex items-center mt-2">
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
