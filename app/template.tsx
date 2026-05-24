"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

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
      gsap.set(wrapRef.current, { opacity: 1 });
      gsap.set(overlayRef.current, { autoAlpha: 0 });
      return;
    }

    const tl = gsap.timeline();
    tl.set(overlayRef.current, { autoAlpha: 0, scaleY: 0, transformOrigin: "top" })
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
      .fromTo(wrapRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.7, ease: "expo.out" }, "<");
    return () => {
      tl.kill();
    };
  }, [pathname]);

  return (
    <>
      <div ref={overlayRef} aria-hidden className="fixed inset-0 z-[9999] pointer-events-none bg-forest origin-top" style={{ opacity: 0 }} />
      <div ref={wrapRef}>{children}</div>
    </>
  );
}
