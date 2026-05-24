"use client";

import { useEffect, useRef } from "react";
import { useI18n } from "../i18n/I18nProvider";
import Marquee from "./Marquee";
import TextScramble from "./TextScramble";

export default function Hero() {
  const { t } = useI18n();
  const ampRef = useRef<HTMLSpanElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (ampRef.current) {
          ampRef.current.style.transform = `translate3d(0, ${y * -0.05}px, 0) rotate(${y * 0.012}deg)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!sectionRef.current || !gradientRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      gradientRef.current.style.background = `radial-gradient(600px circle at ${x}% ${y}%, oklch(0.72 0.155 50 / 0.18), transparent 70%)`;
    };
    const node = sectionRef.current;
    if (node) node.addEventListener("mousemove", onMove);
    return () => {
      if (node) node.removeEventListener("mousemove", onMove);
    };
  }, []);

  const heroProblems = [
    t.stage.problems[2],
    t.stage.problems[6],
    t.stage.problems[1],
    t.stage.problems[4],
    t.stage.problems[5]
  ].filter(Boolean);

  return (
    <section
      id="top"
      ref={sectionRef}
      data-surface="dark"
      className="relative bg-forest text-bone overflow-hidden grain min-h-[100svh] flex flex-col"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-forest/85 via-forest/70 to-forest/95 pointer-events-none" />
      <div ref={gradientRef} className="absolute inset-0 pointer-events-none transition-opacity duration-500" />

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 right-[-15%] w-[60vmin] h-[60vmin] rounded-full opacity-20 blur-[140px]"
          style={{ background: "oklch(0.34 0.080 150)" }}
        />
        <div
          className="absolute -bottom-32 left-[-10%] w-[50vmin] h-[50vmin] rounded-full opacity-15 blur-[160px]"
          style={{ background: "oklch(0.72 0.155 50)" }}
        />
      </div>

      <span
        ref={ampRef}
        aria-hidden
        className="pointer-events-none absolute select-none font-serif italic text-forest-glow/15"
        style={{
          right: "-8vw",
          bottom: "-10vh",
          fontSize: "min(80vh, 80vw)",
          lineHeight: 0.8,
          fontWeight: 400
        }}
      >
        &amp;
      </span>

      <div className="relative z-10 flex-1 flex flex-col px-5 sm:px-6 md:px-12 lg:px-20 pt-28 sm:pt-32 md:pt-40 pb-16">
        <p className="reveal-init font-mono text-[10.5px] uppercase tracking-[0.28em] opacity-75 mb-8 sm:mb-10 md:mb-14 flex flex-wrap items-center gap-3">
          <TextScramble as="span" text={t.hero.eyebrow} trigger="mount" duration={1.6} />
          <span className="opacity-50 hidden sm:inline">— MMXXV · Guadalajara · Internacional</span>
        </p>

        <div className="flex-1 flex items-center max-w-6xl">
          <h1
            className="reveal-init font-serif text-d-2 md:text-d-3 text-balance"
            style={{ fontWeight: 400 }}
          >
            {t.hero.title}
          </h1>
        </div>

        <div className="grid grid-cols-12 gap-6 mt-14 md:mt-20 items-end">
          <div className="col-span-12 md:col-span-7 reveal-init">
            <p className="font-sans text-[1.02rem] md:text-[1.12rem] leading-[1.55] text-bone/75 max-w-[58ch]">
              {t.hero.sub}
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-wrap items-center gap-3 md:justify-end reveal-init">
            <a
              href="#firmar"
              data-magnetic
              className="group inline-flex items-center gap-2 bg-bone text-forest font-mono text-[11px] uppercase tracking-[0.2em] rounded-full px-5 py-3 hover:bg-ember transition-colors duration-500"
            >
              {t.hero.ctaPrimary}
              <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#areas"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-bone/75 hover:text-bone transition-colors duration-500 border-b border-bone/30 hover:border-bone pb-1"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="absolute bottom-5 left-6 md:left-12 lg:left-20 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] opacity-55">
          <span className="font-serif italic text-[18px] text-bone/80" aria-hidden>&amp;</span>
          <span className="opacity-70">MMXXV</span>
        </div>
      </div>

      <div className="relative z-10 border-t border-bone/12 py-5 md:py-7 overflow-hidden text-bone/75">
        <Marquee items={heroProblems} speed={48} />
      </div>
    </section>
  );
}
