"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    // El IntersectionObserver de "reveal" se monta siempre (incluido reduced-motion).
    const observer = attachObserver();

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      return () => observer?.disconnect();
    }

    let raf = 0;
    let destroyed = false;
    let destroyLenis: (() => void) | null = null;

    // Lenis se importa dinámicamente: sale del bundle inicial y se inicializa
    // tras la hidratación (menos JS crítico / mejor TBT). El comportamiento del
    // scroll es idéntico.
    import("lenis").then(({ default: Lenis }) => {
      if (destroyed) return;

      const lenis = new Lenis({
        duration: 1.15,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
        smoothWheel: true,
        touchMultiplier: 1.4
      });

      const onAnchorClick = (e: Event) => {
        const a = e.currentTarget as HTMLAnchorElement;
        const id = a.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target as HTMLElement, { offset: -20, duration: 1.4 });
      };

      const anchors = Array.from(
        document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
      );
      anchors.forEach((a) => a.addEventListener("click", onAnchorClick));

      const tick = (time: number) => {
        lenis.raf(time);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);

      destroyLenis = () => {
        cancelAnimationFrame(raf);
        anchors.forEach((a) => a.removeEventListener("click", onAnchorClick));
        lenis.destroy();
      };
    });

    return () => {
      destroyed = true;
      destroyLenis?.();
      observer?.disconnect();
    };
  }, []);

  return null;
}

function attachObserver() {
  if (typeof window === "undefined") return null;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  const observe = () =>
    document.querySelectorAll(".reveal-init:not(.reveal-in)").forEach((el) => io.observe(el));
  observe();
  const mo = new MutationObserver(observe);
  mo.observe(document.body, { childList: true, subtree: true });
  return io;
}
