"use client";

import { useI18n } from "../i18n/I18nProvider";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Manifiesto() {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const words = wordsRef.current.filter(Boolean) as HTMLSpanElement[];
    if (!words.length || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: { each: 0.04, from: "start" },
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 0.8
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [t]);

  const lead = t.manifiesto.lead;
  const body = t.manifiesto.body.join(" ");
  const words = body.split(/\s+/);

  return (
    <section
      id="manifiesto"
      data-surface="light"
      className="relative bg-bone text-ink py-32 md:py-48 overflow-hidden"
    >
      <div className="px-6 md:px-12 lg:px-20">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-ink-mute mb-10 reveal-init">
          {t.manifiesto.kicker}
        </p>

        <div className="max-w-5xl">
          <h2
            className="font-serif text-d-2 md:text-d-3 text-balance leading-[0.96] reveal-init"
            style={{ fontWeight: 400 }}
          >
            {lead.split(" ").map((w, i) =>
              w.toLowerCase() === "tarde." || w.toLowerCase() === "late." || w.toLowerCase() === "retard" ? (
                <span key={i} className="italic">
                  {w}{" "}
                </span>
              ) : (
                <span key={i}>{w} </span>
              )
            )}
          </h2>
        </div>

        <div
          ref={containerRef}
          className="mt-16 md:mt-24 max-w-3xl font-serif text-[1.4rem] md:text-[1.85rem] leading-[1.45]"
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
  );
}
