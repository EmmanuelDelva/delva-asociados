"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FirmaCTA from "../components/FirmaCTA";
import { useI18n } from "../i18n/I18nProvider";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ManifiestoClient() {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const words = wordsRef.current.filter(Boolean) as HTMLSpanElement[];
    if (!words.length || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: { each: 0.04, from: "start" },
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 30%",
            scrub: 0.8
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [t.manifiestoPage]);

  const body = t.manifiestoPage.body.join(" ");
  const words = body.split(/\s+/);

  return (
    <main className="relative overflow-x-hidden w-full max-w-full">
      <Nav />

      <section
        data-surface="light"
        className="relative bg-bone text-ink overflow-hidden pt-32 md:pt-44 pb-16 md:pb-24"
      >
        <div className="px-6 md:px-12 lg:px-20">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-ink-mute mb-8 reveal-init">
            {t.manifiestoPage.kicker}
          </p>
          <h1 className="font-serif text-d-2 md:text-d-3 text-balance leading-[0.95] max-w-5xl reveal-init" style={{ fontWeight: 400 }}>
            {t.manifiestoPage.title}
          </h1>
        </div>
      </section>

      <section data-surface="light" className="relative bg-bone text-ink py-12 md:py-20 overflow-hidden">
        <div className="px-6 md:px-12 lg:px-20">
          <div
            ref={containerRef}
            className="max-w-4xl font-serif text-[1.4rem] md:text-[1.95rem] leading-[1.45]"
            style={{ fontWeight: 400 }}
          >
            {words.map((w, i) => (
              <span
                key={i}
                ref={(el) => {
                  wordsRef.current[i] = el;
                }}
                className="inline-block mr-[0.22em]"
              >
                {w}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section data-surface="dark" className="relative bg-forest text-bone py-24 md:py-32 overflow-hidden grain">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vmin] h-[60vmin] rounded-full opacity-12 blur-[160px]"
            style={{ background: "oklch(0.72 0.155 50)" }}
          />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-20">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-bone/55 mb-8 reveal-init">
            Pull quote
          </p>
          <p className="font-serif italic text-d-1 md:text-d-2 max-w-5xl leading-[1.1] text-balance reveal-init" style={{ fontWeight: 400 }}>
            &ldquo;{t.manifiestoPage.pull}&rdquo;
          </p>
        </div>
      </section>

      <FirmaCTA />
      <Footer />
    </main>
  );
}
