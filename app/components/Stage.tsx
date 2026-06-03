"use client";

import { useEffect, useRef, useState } from "react";
import { BrandSigil, Wordmark } from "./Mark";
import { useI18n } from "../i18n/I18nProvider";

const SKIPPED_KEY = "dya.stage.skipped";
const SKIPPED_TTL_MS = 30 * 60 * 1000;

export default function Stage() {
  const { t } = useI18n();
  const stageRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<(HTMLSpanElement | null)[]>([]);
  const revealRef = useRef<HTMLDivElement>(null);
  const sigilRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const gsapRef = useRef<any>(null);
  const [active, setActive] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const forced = new URLSearchParams(window.location.search).has("stage");
      let recentlySkipped = false;
      if (!forced) {
        const raw = window.localStorage.getItem(SKIPPED_KEY);
        if (raw) {
          const ts = parseInt(raw, 10);
          if (!Number.isNaN(ts) && Date.now() - ts < SKIPPED_TTL_MS) {
            recentlySkipped = true;
          }
        }
      }
      if ((!forced && recentlySkipped) || reduce) {
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

    let cancelled = false;
    let tl: { kill(): void } | null = null;

    // GSAP se carga de forma diferida (sale del bundle inicial). Si no carga,
    // salimos de la intro para no dejar el overlay bloqueando el sitio.
    import("gsap")
      .then(({ default: gsap }) => {
        if (cancelled) return;
        gsapRef.current = gsap;

        const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl = timeline;

        const lines = linesRef.current.filter(Boolean) as HTMLSpanElement[];

        gsap.set(lines, { opacity: 0, y: 24, filter: "blur(8px)" });
        gsap.set(revealRef.current, { opacity: 0, y: 16 });
        gsap.set(sigilRef.current, { opacity: 0, scale: 0.9 });
        gsap.set(wordmarkRef.current, { opacity: 0, y: 10 });

        const per = 1.05;
        const totalSec = lines.length * per + 2.2;

        timeline.to(progressRef.current, { scaleX: 1, duration: totalSec - 0.3, ease: "none" }, 0);

        lines.forEach((el, i) => {
          timeline.to(el, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.65 }, i * per);
          timeline.to(el, { opacity: 0, y: -16, filter: "blur(6px)", duration: 0.45 }, i * per + 0.7);
        });

        const after = lines.length * per;
        timeline
          .to(revealRef.current, { opacity: 1, y: 0, duration: 0.8 }, after - 0.15)
          .to(sigilRef.current, { opacity: 1, scale: 1, duration: 1.0, ease: "expo.out" }, after + 0.05)
          .to(wordmarkRef.current, { opacity: 1, y: 0, duration: 0.7 }, after + 0.45)
          .to(stageRef.current, { opacity: 0, duration: 0.7, ease: "power2.inOut" }, after + 1.55)
          .add(() => exit(true), after + 2.2);
      })
      .catch(() => {
        if (!cancelled) exit(true);
      });

    return () => {
      cancelled = true;
      tl?.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const exit = (markSkipped: boolean) => {
    if (markSkipped) {
      try {
        window.localStorage.setItem(SKIPPED_KEY, String(Date.now()));
        window.sessionStorage.removeItem("dya.stage.seen.v10");
      } catch {}
    }
    document.documentElement.classList.remove("stage-active");
    document.body.style.overflow = "";
    if (stageRef.current) stageRef.current.style.display = "none";
    setActive(false);
  };

  const skip = () => {
    const gsap = gsapRef.current;
    if (!gsap) {
      exit(true);
      return;
    }
    gsap.to(stageRef.current, {
      opacity: 0,
      duration: 0.45,
      ease: "power2.out",
      onComplete: () => exit(true)
    });
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
        <div
          ref={progressRef}
          className="origin-left h-full bg-bone"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <div className="relative z-10 flex h-full min-h-screen items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="w-full max-w-6xl text-center">
          <div className="relative h-[44vh] sm:h-[36vh] md:h-[34vh] flex items-center justify-center">
            {t.stage.problems.map((p, i) => (
              <span
                key={i}
                ref={(el) => {
                  linesRef.current[i] = el;
                }}
                className="absolute font-serif text-[clamp(1.85rem,7vw,5.25rem)] md:text-d-3 leading-[0.98] md:leading-[0.95] text-balance px-2 sm:px-4"
                style={{ fontWeight: 400, opacity: 0 }}
              >
                {p}
              </span>
            ))}
          </div>

          <div ref={revealRef} className="mt-12 md:mt-20" style={{ opacity: 0 }}>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] opacity-65">
              {t.stage.reveal}
            </p>
            <div ref={sigilRef} className="flex justify-center mt-8 md:mt-12" style={{ opacity: 0 }}>
              <span style={{ width: 120, height: 120 }} className="block">
                <BrandSigil />
              </span>
            </div>
            <div className="mt-5 flex items-center justify-center gap-2 opacity-50">
              <span className="block w-10 h-px bg-bone" />
              <span className="block w-1 h-1 rounded-full bg-bone" />
              <span className="block w-10 h-px bg-bone" />
            </div>
            <div ref={wordmarkRef} className="mt-6 md:mt-8" style={{ opacity: 0 }}>
              <Wordmark className="text-[13px] md:text-[15px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
