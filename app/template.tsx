"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const wrapRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    if (first.current) {
      first.current = false;
      // Estado inicial sin cargar GSAP (en el primer render no hay transición).
      if (wrapRef.current) wrapRef.current.style.opacity = "1";
      if (overlayRef.current) {
        overlayRef.current.style.opacity = "0";
        overlayRef.current.style.visibility = "hidden";
      }
      // Precarga GSAP en segundo plano (idle) para que la primera transición de
      // página sea instantánea, sin meterlo en el bundle crítico inicial.
      const w = window as unknown as {
        requestIdleCallback?: (cb: () => void) => void;
      };
      const schedule =
        w.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1500));
      schedule(() => {
        import("gsap").catch(() => {});
      });
      return;
    }

    let cancelled = false;
    let tl: { kill(): void } | null = null;

    // GSAP solo se carga cuando ocurre una transición real (navegación cliente),
    // no en la carga inicial → sale del JS crítico de todas las páginas.
    import("gsap")
      .then(({ default: gsap }) => {
        if (cancelled) return;
        const timeline = gsap.timeline();
        tl = timeline;
        timeline
          .set(overlayRef.current, { autoAlpha: 0, scaleY: 0, transformOrigin: "top" })
          .set(wrapRef.current, { opacity: 1 })
          .fromTo(
            overlayRef.current,
            { autoAlpha: 1, scaleY: 0, transformOrigin: "top" },
            { scaleY: 1, duration: 0.55, ease: "expo.inOut" }
          )
          .set(window, { scrollTo: 0 })
          .fromTo(
            overlayRef.current,
            { transformOrigin: "bottom" },
            { scaleY: 0, duration: 0.55, ease: "expo.inOut", delay: 0.05 }
          )
          .fromTo(
            wrapRef.current,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.7, ease: "expo.out" },
            "<"
          );
      })
      .catch(() => {
        // Si GSAP no carga, dejamos el contenido visible y el overlay oculto.
        if (cancelled) return;
        if (wrapRef.current) wrapRef.current.style.opacity = "1";
        if (overlayRef.current) overlayRef.current.style.visibility = "hidden";
      });

    return () => {
      cancelled = true;
      tl?.kill();
    };
  }, [pathname]);

  return (
    <>
      <div
        ref={overlayRef}
        aria-hidden
        className="fixed inset-0 z-[9999] pointer-events-none bg-forest origin-top"
        style={{ opacity: 0 }}
      />
      <div ref={wrapRef}>{children}</div>
    </>
  );
}
