"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import FirmaCTA from "../../../components/FirmaCTA";
import ProblemaScene from "../../../components/ProblemaScene";
import { useI18n } from "../../../i18n/I18nProvider";
import type { Area, Problematica } from "../../../lib/servicios";
import { getAreaContent, getProblematicaContent } from "../../../lib/servicios";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProblemaClient({
  area,
  problema,
  next
}: {
  area: Area;
  problema: Problematica;
  next: Problematica;
}) {
  const { t, locale } = useI18n();
  const areaContent = getAreaContent(area, locale);
  const content = getProblematicaContent(problema, locale);
  const nextContent = getProblematicaContent(next, locale);

  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sceneWrapRef = useRef<HTMLDivElement>(null);
  const examplesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll(".word");
        gsap.from(words, {
          opacity: 0,
          y: 24,
          filter: "blur(8px)",
          duration: 1,
          ease: "expo.out",
          stagger: 0.05
        });
      }
      gsap.from("[data-anim-fade]", {
        opacity: 0,
        y: 24,
        duration: 1,
        ease: "expo.out",
        stagger: 0.1,
        delay: 0.4
      });

      if (sceneWrapRef.current) {
        gsap.to(sceneWrapRef.current, {
          y: -40,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6
          }
        });
      }

      if (examplesRef.current) {
        gsap.from(examplesRef.current.querySelectorAll("[data-example]"), {
          opacity: 0,
          x: -30,
          stagger: 0.15,
          duration: 0.9,
          ease: "expo.out",
          scrollTrigger: {
            trigger: examplesRef.current,
            start: "top 75%"
          }
        });
      }
    }, heroRef);
    return () => ctx.revert();
  }, [content.title]);

  const accentGlow =
    area.accent === "ember"
      ? "oklch(0.72 0.155 50)"
      : area.accent === "gold"
      ? "oklch(0.76 0.115 82)"
      : "oklch(0.34 0.080 150)";
  const accentText =
    area.accent === "ember" ? "text-ember" : area.accent === "gold" ? "text-gold" : "text-forest-glow";

  const titleWords = content.title.split(" ");

  return (
    <main className="relative overflow-x-hidden w-full max-w-full">
      <Nav />

      <section ref={heroRef} data-surface="dark" className="relative bg-forest text-bone overflow-hidden grain min-h-[100svh]">
        <div ref={sceneWrapRef} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[15%] right-[-15%] w-[65vmin] h-[65vmin] rounded-full opacity-30 blur-[140px]" style={{ background: accentGlow }} />
          <div className="absolute bottom-[-15%] left-[-10%] w-[50vmin] h-[50vmin] rounded-full opacity-20 blur-[160px]" style={{ background: "oklch(0.34 0.080 150)" }} />
          <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[36vmin] h-[36vmin] hidden md:block opacity-50">
            <ProblemaScene scene={problema.scene} accent={area.accent} />
          </div>
        </div>

        <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-16 md:pb-24">
          <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55 mb-10 max-w-full" data-anim-fade>
            <Link href="/#areas" className="hover:text-bone transition-colors">
              {t.problemaPage.breadcrumb}
            </Link>
            <span aria-hidden className="opacity-60">/</span>
            <Link href={`/servicios/${area.slug}`} className="hover:text-bone transition-colors truncate max-w-[60vw] md:max-w-none">
              {areaContent.title}
            </Link>
            <span aria-hidden className="opacity-60">/</span>
            <span className={accentText}>{String(area.problematicas.findIndex((p) => p.id === problema.id) + 1).padStart(2, "0")}</span>
          </nav>

          <p className={`font-mono text-[10.5px] uppercase tracking-[0.28em] ${accentText} mb-6`} data-anim-fade>
            {areaContent.title} · {area.num}
          </p>

          <h1
            ref={titleRef}
            className="font-serif text-d-2 md:text-d-3 text-balance leading-[0.93] max-w-5xl"
            style={{ fontWeight: 400 }}
          >
            {titleWords.map((w, i) => (
              <span key={i} className="word inline-block mr-[0.2em]">
                {w}
              </span>
            ))}
          </h1>

          <p className="mt-8 md:mt-12 max-w-3xl font-serif italic text-[1.3rem] md:text-[1.75rem] leading-[1.35] text-bone/80" data-anim-fade style={{ fontWeight: 400 }}>
            &ldquo;{content.hook}&rdquo;
          </p>

          <div className="mt-12 md:hidden h-[280px]" data-anim-fade>
            <ProblemaScene scene={problema.scene} accent={area.accent} />
          </div>
        </div>
      </section>

      <section ref={examplesRef} data-surface="light" className="relative bg-bone text-ink py-20 md:py-32 overflow-hidden">
        <div className="px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16">
            <div className="col-span-12 md:col-span-8 reveal-init">
              <p className={`font-mono text-[10.5px] uppercase tracking-[0.28em] ${accentText} mb-5`}>
                {t.problemaPage.familiarTitle}
              </p>
              <h2 className="font-serif text-d-1 md:text-d-2 text-balance leading-[0.98]" style={{ fontWeight: 400 }}>
                {t.problemaPage.examplesLabel}
              </h2>
            </div>
          </div>

          <ol className="border-t border-ink/15">
            {content.examples.map((ex, i) => (
              <li
                key={i}
                data-example
                className="border-b border-ink/15 py-8 md:py-12 grid grid-cols-12 gap-4 md:gap-8 items-start"
              >
                <div className="col-span-12 md:col-span-2">
                  <span className={`font-mono text-[10.5px] uppercase tracking-widest ${accentText}`}>
                    {String.fromCharCode(65 + i)}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-10">
                  <p className="font-serif text-[1.2rem] md:text-[1.55rem] leading-[1.4] text-ink-soft max-w-[68ch]" style={{ fontWeight: 400 }}>
                    {ex}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {content.consequence && (
        <section data-surface="dark" className="relative bg-forest text-bone py-20 md:py-28 overflow-hidden grain">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vmin] h-[60vmin] rounded-full opacity-12 blur-[160px]" style={{ background: accentGlow }} />
          </div>
          <div className="relative z-10 px-6 md:px-12 lg:px-20">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-bone/55 mb-8 reveal-init">
              {t.problemaPage.consequenceLabel}
            </p>
            <p className="font-serif italic text-d-1 md:text-[3rem] max-w-5xl leading-[1.15] text-balance reveal-init" style={{ fontWeight: 400 }}>
              &ldquo;{content.consequence}&rdquo;
            </p>
          </div>
        </section>
      )}

      <section data-surface="light" className="relative bg-bone text-ink py-20 md:py-32 overflow-hidden">
        <div className="px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-12 gap-6 md:gap-12 items-start">
            <div className="col-span-12 md:col-span-5 reveal-init">
              <p className={`font-mono text-[10.5px] uppercase tracking-[0.28em] ${accentText} mb-5`}>
                {t.problemaPage.solutionLabel}
              </p>
              <h2 className="font-serif text-d-1 md:text-d-2 text-balance leading-[0.98]" style={{ fontWeight: 400 }}>
                {t.problemaPage.ctaTitle}
              </h2>
              <div className="mt-8 aspect-square max-w-[320px] text-ink-soft hidden md:block">
                <ProblemaScene scene={problema.scene} accent={area.accent} />
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <ul className="border-t border-ink/15">
                {content.solution.map((s, i) => (
                  <li key={i} className="flex items-baseline gap-4 md:gap-6 border-b border-ink/15 py-5 md:py-6 reveal-init" style={{ transitionDelay: `${i * 80}ms` }}>
                    <span className={`font-mono text-[10.5px] uppercase tracking-widest ${accentText} shrink-0 w-6`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-serif text-[1.15rem] md:text-[1.35rem] leading-[1.35] text-ink" style={{ fontWeight: 400 }}>
                      {s}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-10 reveal-init">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-ink text-bone font-mono text-[11px] uppercase tracking-[0.2em] rounded-full px-5 py-3 hover:bg-forest transition-colors duration-500 group"
                >
                  {t.problemaPage.ctaButton}
                  <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </Link>
                <p className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-mute">
                  {t.problemaPage.ctaSub}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FirmaCTA />

      <section data-surface="light" className="relative bg-bone text-ink py-16 md:py-24 overflow-hidden">
        <div className="px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch">
            <Link
              href={`/servicios/${area.slug}`}
              className="group flex-1 border border-ink/15 rounded-2xl p-6 md:p-8 hover:bg-bone-soft/60 transition-colors duration-500"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute mb-3 flex items-center gap-2">
                <span aria-hidden>←</span>
                {t.problemaPage.back}
              </p>
              <h3 className="font-serif text-[1.4rem] md:text-[1.7rem] leading-[1.1] tracking-tight" style={{ fontWeight: 400 }}>
                {areaContent.title}
              </h3>
            </Link>

            <Link
              href={`/servicios/${area.slug}/${next.id}`}
              className="group flex-1 border border-ink/15 rounded-2xl p-6 md:p-8 hover:bg-bone-soft/60 transition-colors duration-500 text-right"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute mb-3 flex items-center justify-end gap-2">
                {t.problemaPage.next}
                <span aria-hidden>→</span>
              </p>
              <h3 className="font-serif text-[1.4rem] md:text-[1.7rem] leading-[1.1] tracking-tight" style={{ fontWeight: 400 }}>
                {nextContent.title}
              </h3>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
