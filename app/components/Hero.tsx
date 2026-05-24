"use client";

import { useEffect, useRef } from "react";
import Mark from "./Mark";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const ampRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (titleRef.current) {
          titleRef.current.style.transform = `translate3d(0, ${y * 0.18}px, 0)`;
        }
        if (ampRef.current) {
          ampRef.current.style.transform = `translate3d(0, ${y * -0.08}px, 0) rotate(${y * 0.02}deg)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      id="top"
      data-surface="dark"
      className="relative bg-forest text-bone overflow-hidden grain"
      style={{ minHeight: "100vh" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-[60vmin] h-[60vmin] rounded-full opacity-[0.18] blur-[120px]"
          style={{ background: "oklch(0.345 0.080 150)" }}
        />
        <div
          className="absolute bottom-0 -left-20 w-[40vmin] h-[40vmin] rounded-full opacity-[0.12] blur-[140px]"
          style={{ background: "oklch(0.715 0.155 55)" }}
        />
      </div>

      <span
        ref={ampRef}
        aria-hidden
        className="pointer-events-none absolute select-none font-serif italic text-forest-soft"
        style={{
          right: "-6vw",
          top: "8vh",
          fontSize: "min(80vh, 80vw)",
          lineHeight: 0.8,
          opacity: 0.55,
          fontFeatureSettings: '"ss01"',
          fontWeight: 300
        }}
      >
        &amp;
      </span>

      <div className="relative z-10 flex flex-col min-h-screen px-6 md:px-10 lg:px-14 pt-32 md:pt-40 pb-12">
        <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.28em] opacity-70">
          <span>§ 00 / Atrio</span>
          <span className="hidden sm:inline">
            Establecido MMXXV · Guadalajara · Práctica internacional
          </span>
        </div>

        <div className="flex-1 flex flex-col justify-center mt-12 md:mt-0 max-w-[19ch]">
          <h1
            ref={titleRef}
            className="font-serif optical-display text-display-lg md:text-display-xl text-balance"
            style={{ fontWeight: 300 }}
          >
            Asesoramos lo que el derecho{" "}
            <span className="italic" style={{ fontWeight: 400 }}>
              aún
            </span>{" "}
            no nombra.
          </h1>
        </div>

        <div className="grid grid-cols-12 gap-6 mt-auto pt-12 md:pt-20">
          <div className="col-span-12 md:col-span-5">
            <p className="font-sans text-base md:text-lg leading-relaxed text-bone/80 max-w-[42ch] optical-text">
              Despacho boutique para fundadores Web3, creadores digitales, FinTech
              y todo proyecto cuyo riesgo legal se mide en líneas de código.
              Jurisprudencia donde existe; criterio donde aún no.
            </p>
          </div>

          <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col gap-3 md:items-end">
            <a
              href="#dialogo"
              className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest border border-bone/80 rounded-full px-5 py-3 hover:bg-bone hover:text-forest transition-colors duration-500"
            >
              Inicia el diálogo
              <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#practica"
              className="font-mono text-[11px] uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
            >
              Ver áreas de práctica
            </a>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 md:left-10 lg:left-14 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] opacity-60">
          <Mark size={22} thin />
          <span>Scroll · § I a VI</span>
        </div>
      </div>
    </section>
  );
}
