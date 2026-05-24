"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Wordmark } from "./Mark";
import { useI18n } from "../i18n/I18nProvider";

const STAGE_DONE_KEY = "dya.stage.seen.v5";

export default function Stage() {
  const { t } = useI18n();
  const stageRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<(HTMLSpanElement | null)[]>([]);
  const revealRef = useRef<HTMLDivElement>(null);
  const sigilRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const seen = window.sessionStorage.getItem(STAGE_DONE_KEY);
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (seen === "1" || reduce) {
        setActive(false);
        document.documentElement.classList.remove("stage-active");
        return;
      }
      setActive(true);
      document.documentElement.classList.add("stage-active");
      document.body.style.overflow = "hidden";
    } catch {
      setActive(false);
    }
  }, []);

  useEffect(() => {
    if (!active) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set(linesRef.current, { opacity: 0, y: 24, filter: "blur(8px)" });
      gsap.set(revealRef.current, { opacity: 0, y: 16 });
      gsap.set(sigilRef.current, { opacity: 0, scale: 0.9 });
      gsap.set(wordmarkRef.current, { opacity: 0, y: 10 });

      tl.to(progressRef.current, { scaleX: 1, duration: 7.8, ease: "none" }, 0);

      const lines = linesRef.current.filter(Boolean) as HTMLSpanElement[];
      const per = 1.05;
      lines.forEach((el, i) => {
        tl.to(el, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.65 }, i * per);
        tl.to(el, { opacity: 0, y: -16, filter: "blur(6px)", duration: 0.45 }, i * per + 0.7);
      });

      const after = lines.length * per;
      tl.to(revealRef.current, { opacity: 1, y: 0, duration: 0.8 }, after - 0.15)
        .to(sigilRef.current, { opacity: 1, scale: 1, duration: 1.0, ease: "expo.out" }, after + 0.05)
        .to(wordmarkRef.current, { opacity: 1, y: 0, duration: 0.7 }, after + 0.45)
        .to(stageRef.current, { opacity: 0, duration: 0.7, ease: "power2.inOut" }, after + 1.55)
        .add(() => exit(), after + 2.2);

      return () => tl.kill();
    }, stageRef);

    return () => ctx.revert();
  }, [active]);

  const exit = () => {
    try {
      window.sessionStorage.setItem(STAGE_DONE_KEY, "1");
    } catch {}
    document.documentElement.classList.remove("stage-active");
    document.body.style.overflow = "";
    if (stageRef.current) stageRef.current.style.display = "none";
    setActive(false);
  };

  const skip = () => {
    gsap.to(stageRef.current, { opacity: 0, duration: 0.45, ease: "power2.out", onComplete: exit });
  };

  if (active === false) return null;

  return (
    <div
      ref={stageRef}
      className="fixed inset-0 z-[200] bg-forest text-bone grain overflow-hidden"
      style={{ opacity: active === null ? 0 : 1 }}
      aria-hidden={!active}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-[55vmin] h-[55vmin] rounded-full opacity-25 blur-[120px]"
          style={{ background: "oklch(0.34 0.080 150)" }}
        />
        <div
          className="absolute bottom-0 -left-20 w-[40vmin] h-[40vmin] rounded-full opacity-15 blur-[140px]"
          style={{ background: "oklch(0.72 0.155 50)" }}
        />
      </div>

      <div className="absolute top-5 left-5 right-5 md:top-7 md:left-7 md:right-7 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] opacity-70 z-10">
        <span>{t.stage.kicker}</span>
        <button
          onClick={skip}
          className="border border-bone/35 rounded-full px-4 py-1.5 hover:bg-bone hover:text-forest transition-colors duration-500"
        >
          {t.stage.skip} →
        </button>
      </div>

      <div className="absolute left-5 right-5 md:left-7 md:right-7 bottom-5 md:bottom-7 h-px bg-bone/15 z-10">
        <div ref={progressRef} className="origin-left h-full bg-bone" style={{ transform: "scaleX(0)" }} />
      </div>

      <div className="relative z-10 flex h-full min-h-screen items-center justify-center px-6 md:px-12 lg:px-20">
        <div className="w-full max-w-6xl text-center">
          <div className="relative h-[28vh] md:h-[34vh] flex items-center justify-center">
            {t.stage.problems.map((p, i) => (
              <span
                key={i}
                ref={(el) => {
                  linesRef.current[i] = el;
                }}
                className="absolute font-serif text-d-2 md:text-d-3 leading-[0.95] text-balance px-4"
                style={{ fontWeight: 400 }}
              >
                {p}
              </span>
            ))}
          </div>

          <div ref={revealRef} className="mt-12 md:mt-20">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] opacity-65">
              {t.stage.reveal}
            </p>
            <div ref={sigilRef} className="flex justify-center mt-8 md:mt-12">
              <svg
                width="92"
                height="92"
                viewBox="0 0 92 92"
                fill="none"
                aria-hidden="true"
                className="block"
              >
                <circle
                  cx="46"
                  cy="46"
                  r="44"
                  stroke="currentColor"
                  strokeOpacity="0.35"
                  strokeWidth="1"
                />
                <circle
                  cx="46"
                  cy="46"
                  r="38"
                  stroke="currentColor"
                  strokeOpacity="0.12"
                  strokeWidth="0.5"
                />
                <text
                  x="46"
                  y="46"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontFamily="'Instrument Serif', 'Times New Roman', serif"
                  fontStyle="italic"
                  fontSize="58"
                  fill="currentColor"
                  fillOpacity="0.95"
                >
                  &amp;
                </text>
              </svg>
            </div>
            <div ref={wordmarkRef} className="mt-6 md:mt-8">
              <Wordmark className="text-[13px] md:text-[15px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
