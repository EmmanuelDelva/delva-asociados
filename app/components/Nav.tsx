"use client";

import { useEffect, useState } from "react";
import Mark, { Wordmark } from "./Mark";

const links = [
  { label: "Manifiesto", href: "#manifiesto" },
  { label: "Práctica", href: "#practica" },
  { label: "Capacidades", href: "#capacidades" },
  { label: "Despacho", href: "#despacho" },
  { label: "Diálogo", href: "#dialogo" }
];

export default function Nav() {
  const [onDark, setOnDark] = useState(true);

  useEffect(() => {
    const update = () => {
      const sections = document.querySelectorAll<HTMLElement>("[data-surface]");
      const midline = window.innerHeight * 0.12;
      let current: "dark" | "light" = "dark";
      sections.forEach((s) => {
        const r = s.getBoundingClientRect();
        if (r.top <= midline && r.bottom > midline) {
          current = (s.dataset.surface as "dark" | "light") || "dark";
        }
      });
      setOnDark(current === "dark");
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const color = onDark ? "text-bone" : "text-ink";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-700 ease-out-expo ${color}`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-14 pt-6 md:pt-8">
        <a href="#top" className="group flex items-center gap-3">
          <Mark size={36} thin />
          <Wordmark className="hidden sm:inline text-[15px] md:text-[16px]" />
        </a>

        <nav className="hidden md:flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 opacity-70 hover:opacity-100 transition-opacity duration-500"
            >
              <span className="opacity-50 mr-1.5">{String(links.indexOf(l) + 1).padStart(2, "0")}</span>
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#dialogo"
          className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest border border-current rounded-full px-4 py-2 hover:bg-current group transition-colors duration-500"
        >
          <span className={onDark ? "group-hover:text-forest" : "group-hover:text-bone"}>
            Reservar diálogo
          </span>
          <span className={`inline-block ${onDark ? "group-hover:text-forest" : "group-hover:text-bone"}`}>
            →
          </span>
        </a>

        <a
          href="#dialogo"
          className="md:hidden font-mono text-[11px] uppercase tracking-widest border border-current rounded-full px-3 py-1.5"
        >
          Diálogo
        </a>
      </div>
    </header>
  );
}
