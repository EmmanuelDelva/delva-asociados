"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) {
      document.body.classList.remove("no-cursor");
      return;
    }
    setActive(true);

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;
    let currentMagnetTarget: HTMLElement | null = null;
    let originalTransform = "";

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      }

      if (currentMagnetTarget) {
        const rect = currentMagnetTarget.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * 0.22;
        const dy = (e.clientY - cy) * 0.22;
        currentMagnetTarget.style.transform = `translate(${dx}px, ${dy}px)`;
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const magnet = t?.closest?.("[data-magnetic]") as HTMLElement | null;
      const isHit = !!t?.closest?.("a, button, [role='button'], [data-magnetic]");

      if (magnet && magnet !== currentMagnetTarget) {
        if (currentMagnetTarget) {
          currentMagnetTarget.style.transform = originalTransform;
          currentMagnetTarget.style.transition = "";
        }
        currentMagnetTarget = magnet;
        originalTransform = magnet.style.transform || "";
        magnet.style.transition = "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)";
      }

      setHovering(isHit);
    };

    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (currentMagnetTarget && !currentMagnetTarget.contains(e.relatedTarget as Node)) {
        currentMagnetTarget.style.transform = originalTransform;
        currentMagnetTarget = null;
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mouseout", onOut, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
    };
  }, []);

  if (!active) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="fixed top-0 left-0 z-[100] pointer-events-none rounded-full"
        style={{
          width: 6,
          height: 6,
          background: "oklch(0.962 0.008 85)",
          mixBlendMode: "difference",
          transition: "width .3s cubic-bezier(.16,1,.3,1), height .3s cubic-bezier(.16,1,.3,1)"
        }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="fixed top-0 left-0 z-[99] pointer-events-none rounded-full border"
        style={{
          width: hovering ? 64 : 32,
          height: hovering ? 64 : 32,
          borderColor: "oklch(0.962 0.008 85 / 0.7)",
          mixBlendMode: "difference",
          transition:
            "width .5s cubic-bezier(.16,1,.3,1), height .5s cubic-bezier(.16,1,.3,1), border-color .5s ease"
        }}
      />
    </>
  );
}
