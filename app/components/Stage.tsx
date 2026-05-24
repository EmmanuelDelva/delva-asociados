"use client";

import { useEffect, useRef, useState } from "react";
import { BrandSigil, Wordmark } from "./Mark";
import { useI18n } from "../i18n/I18nProvider";

const STAGE_DONE_KEY = "dya.stage.seen.v8";
const PER_LINE = 1.4;
const TAIL = 2.6;

export default function Stage() {
  const { t } = useI18n();
  const stageRef = useRef<HTMLDivElement>(null);
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
    const lines = t.stage.problems.length;
    const totalMs = (lines * PER_LINE + TAIL) * 1000;
    const id = window.setTimeout(() => exit(), totalMs);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const exit = () => {
    try {
      window.sessionStorage.setItem(STAGE_DONE_KEY, "1");
    } catch {}
    document.documentElement.classList.remove("stage-active");
    document.body.style.overflow = "";
    const el = stageRef.current;
    if (el) {
      el.style.transition = "opacity 700ms ease-out";
      el.style.opacity = "0";
      window.setTimeout(() => {
        if (el) el.style.display = "none";
        setActive(false);
      }, 720);
    } else {
      setActive(false);
    }
  };

  const skip = () => {
    exit();
  };

  if (active === false) return null;

  const lines = t.stage.problems.length;
  const totalSec = lines * PER_LINE + TAIL;

  return (
    <div
      ref={stageRef}
      className="fixed inset-0 z-[200] bg-forest text-bone grain overflow-hidden"
      style={{ opacity: active === null ? 0 : 1, transition: "opacity 400ms ease" }}
      aria-hidden={!active}
    >
      <style jsx>{`
        @keyframes stageLine {
          0%   { opacity: 0; transform: translateY(28px); filter: blur(8px); }
          18%  { opacity: 1; transform: translateY(0); filter: blur(0); }
          70%  { opacity: 1; transform: translateY(0); filter: blur(0); }
          100% { opacity: 0; transform: translateY(-18px); filter: blur(6px); }
        }
        @keyframes stageReveal {
          0%, 70% { opacity: 0; transform: translateY(20px); }
          100%    { opacity: 1; transform: translateY(0); }
        }
        @keyframes stageProgress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .stage-line {
          animation: stageLine ${PER_LINE * 1.6}s cubic-bezier(0.16, 1, 0.3, 1) both;
          opacity: 0;
        }
        .stage-reveal {
          animation: stageReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: ${lines * PER_LINE - 0.4}s;
        }
        .stage-progress {
          animation: stageProgress ${totalSec - TAIL + 0.4}s linear both;
          transform-origin: left center;
        }
      `}</style>

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

      <div className="absolute left-5 right-5 md:left-7 md:right-7 bottom-5 md:bottom-7 h-px bg-bone/15 z-10 overflow-hidden">
        <div className="stage-progress h-full bg-bone" />
      </div>

      <div className="relative z-10 flex h-full min-h-screen items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="w-full max-w-6xl text-center">
          <div className="relative h-[44vh] sm:h-[36vh] md:h-[34vh] flex items-center justify-center">
            {t.stage.problems.map((p, i) => (
              <span
                key={i}
                className="stage-line absolute font-serif text-[clamp(1.85rem,7vw,5.25rem)] md:text-d-3 leading-[0.98] md:leading-[0.95] text-balance px-2 sm:px-4"
                style={{
                  fontWeight: 400,
                  animationDelay: `${i * PER_LINE}s`
                }}
              >
                {p}
              </span>
            ))}
          </div>

          <div className="stage-reveal mt-12 md:mt-20">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] opacity-65">
              {t.stage.reveal}
            </p>
            <div className="flex justify-center mt-8 md:mt-12">
              <span style={{ width: 120, height: 120 }} className="block">
                <BrandSigil />
              </span>
            </div>
            <div className="mt-5 flex items-center justify-center gap-2 opacity-50">
              <span className="block w-10 h-px bg-bone" />
              <span className="block w-1 h-1 rounded-full bg-bone" />
              <span className="block w-10 h-px bg-bone" />
            </div>
            <div className="mt-6 md:mt-8">
              <Wordmark className="text-[13px] md:text-[15px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
