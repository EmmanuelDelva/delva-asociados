"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import type { SceneType } from "../lib/servicios";

type Props = {
  scene: SceneType;
  accent: "ember" | "forest" | "gold";
};

const accentMap = {
  ember: "oklch(0.72 0.155 50)",
  gold: "oklch(0.76 0.115 82)",
  forest: "oklch(0.34 0.08 150)"
};

export default function ProblemaScene({ scene, accent }: Props) {
  const ref = useRef<SVGSVGElement>(null);
  const color = accentMap[accent];

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(ref.current!.querySelectorAll("[data-anim='fade']"), {
        opacity: 0,
        y: 12,
        stagger: 0.08,
        duration: 1
      });
      tl.from(
        ref.current!.querySelectorAll("[data-anim='draw']"),
        {
          strokeDashoffset: (i, el) => (el as SVGPathElement).getTotalLength?.() || 200,
          duration: 1.6,
          ease: "power2.out"
        },
        "<"
      );
      tl.from(
        ref.current!.querySelectorAll("[data-anim='pulse']"),
        { scale: 0.5, opacity: 0, transformOrigin: "center", stagger: 0.1, duration: 1 },
        "<0.3"
      );

      const float = gsap.to(ref.current!.querySelectorAll("[data-float]"), {
        y: "-=8",
        duration: 2.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: { each: 0.2, from: "random" }
      });

      const rotate = gsap.to(ref.current!.querySelectorAll("[data-rotate]"), {
        rotate: 360,
        transformOrigin: "center",
        duration: 32,
        ease: "none",
        repeat: -1
      });

      return () => {
        float.kill();
        rotate.kill();
      };
    }, ref);
    return () => ctx.revert();
  }, [scene]);

  const drawStyle: React.CSSProperties = {
    strokeDasharray: 600,
    strokeDashoffset: 0
  };

  const SCENES: Record<SceneType, React.ReactNode> = {
    vault: (
      <g>
        <circle cx="200" cy="200" r="120" fill="none" stroke={color} strokeWidth="0.6" opacity="0.4" data-rotate />
        <circle cx="200" cy="200" r="80" fill="none" stroke="currentColor" strokeWidth="1.2" data-anim="draw" style={drawStyle} />
        <rect x="160" y="160" width="80" height="80" rx="6" fill="none" stroke="currentColor" strokeWidth="1.8" data-anim="draw" style={drawStyle} />
        <circle cx="200" cy="200" r="22" fill="none" stroke="currentColor" strokeWidth="1.4" data-anim="pulse" />
        <line x1="200" y1="190" x2="200" y2="178" stroke="currentColor" strokeWidth="2" strokeLinecap="round" data-anim="fade" />
        <line x1="200" y1="200" x2="210" y2="200" stroke="currentColor" strokeWidth="2" strokeLinecap="round" data-anim="fade" />
        <text x="200" y="100" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="9" fill="currentColor" opacity="0.55" letterSpacing="3" data-anim="fade">CUSTODIA</text>
        <g data-float>
          <circle cx="120" cy="140" r="3" fill={color} opacity="0.7" />
          <circle cx="280" cy="160" r="2.4" fill={color} opacity="0.6" />
          <circle cx="290" cy="250" r="2.8" fill={color} opacity="0.5" />
        </g>
      </g>
    ),
    face: (
      <g>
        <circle cx="200" cy="180" r="78" fill="none" stroke="currentColor" strokeWidth="1.4" data-anim="draw" style={drawStyle} />
        <circle cx="180" cy="170" r="3" fill="currentColor" data-anim="fade" />
        <circle cx="220" cy="170" r="3" fill="currentColor" data-anim="fade" />
        <path d="M 175 200 Q 200 215 225 200" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" data-anim="draw" style={drawStyle} />
        <g data-anim="fade">
          <line x1="80" y1="180" x2="135" y2="180" stroke={color} strokeWidth="0.8" opacity="0.6" />
          <line x1="265" y1="180" x2="320" y2="180" stroke={color} strokeWidth="0.8" opacity="0.6" />
        </g>
        <g data-float>
          <rect x="100" y="280" width="40" height="6" rx="1" fill={color} opacity="0.5" />
          <rect x="150" y="290" width="60" height="6" rx="1" fill={color} opacity="0.5" />
          <rect x="220" y="280" width="50" height="6" rx="1" fill={color} opacity="0.5" />
        </g>
        <text x="200" y="335" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="9" fill="currentColor" opacity="0.5" letterSpacing="3" data-anim="fade">SYNTHETIC</text>
      </g>
    ),
    "broken-chain": (
      <g>
        <g data-anim="draw" style={drawStyle}>
          <ellipse cx="120" cy="200" rx="34" ry="22" fill="none" stroke="currentColor" strokeWidth="2" />
          <ellipse cx="180" cy="200" rx="34" ry="22" fill="none" stroke="currentColor" strokeWidth="2" />
        </g>
        <g data-anim="fade" transform="translate(20 0)">
          <ellipse cx="230" cy="170" rx="30" ry="20" fill="none" stroke={color} strokeWidth="2" transform="rotate(25 230 170)" />
          <ellipse cx="290" cy="225" rx="30" ry="20" fill="none" stroke={color} strokeWidth="2" transform="rotate(-15 290 225)" />
        </g>
        <g data-anim="pulse">
          <line x1="222" y1="195" x2="240" y2="180" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="232" y1="200" x2="248" y2="188" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <text x="200" y="290" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="9" fill="currentColor" opacity="0.5" letterSpacing="3" data-anim="fade">RECUPERAR</text>
      </g>
    ),
    network: (
      <g>
        <circle cx="200" cy="200" r="100" fill="none" stroke={color} strokeWidth="0.4" opacity="0.4" data-rotate />
        <circle cx="200" cy="200" r="60" fill="none" stroke={color} strokeWidth="0.4" opacity="0.3" />
        <g data-anim="draw" style={drawStyle}>
          <line x1="200" y1="120" x2="270" y2="200" stroke="currentColor" strokeWidth="0.8" />
          <line x1="270" y1="200" x2="200" y2="280" stroke="currentColor" strokeWidth="0.8" />
          <line x1="200" y1="280" x2="130" y2="200" stroke="currentColor" strokeWidth="0.8" />
          <line x1="130" y1="200" x2="200" y2="120" stroke="currentColor" strokeWidth="0.8" />
          <line x1="200" y1="120" x2="200" y2="280" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
          <line x1="130" y1="200" x2="270" y2="200" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
        </g>
        <g data-anim="pulse">
          <circle cx="200" cy="120" r="6" fill={color} />
          <circle cx="270" cy="200" r="6" fill="currentColor" />
          <circle cx="200" cy="280" r="6" fill={color} />
          <circle cx="130" cy="200" r="6" fill="currentColor" />
          <circle cx="200" cy="200" r="10" fill="none" stroke={color} strokeWidth="1.8" />
        </g>
      </g>
    ),
    regulation: (
      <g>
        <rect x="120" y="80" width="160" height="220" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" data-anim="draw" style={drawStyle} />
        <g data-anim="fade">
          <line x1="140" y1="120" x2="240" y2="120" stroke="currentColor" strokeWidth="0.8" />
          <line x1="140" y1="135" x2="260" y2="135" stroke="currentColor" strokeWidth="0.6" opacity="0.7" />
          <line x1="140" y1="150" x2="220" y2="150" stroke="currentColor" strokeWidth="0.6" opacity="0.7" />
          <line x1="140" y1="165" x2="250" y2="165" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
          <line x1="140" y1="180" x2="230" y2="180" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
          <line x1="140" y1="195" x2="255" y2="195" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
        </g>
        <g data-anim="pulse" transform="translate(220 240)">
          <circle cx="0" cy="0" r="36" fill="none" stroke={color} strokeWidth="1.6" />
          <text x="0" y="6" textAnchor="middle" fontFamily="var(--font-instrument-serif), serif" fontSize="28" fontStyle="italic" fill={color}>§</text>
        </g>
      </g>
    ),
    marketplace: (
      <g>
        <g data-anim="draw" style={drawStyle}>
          <rect x="100" y="100" width="80" height="100" rx="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <rect x="200" y="100" width="80" height="100" rx="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <rect x="150" y="220" width="80" height="100" rx="2" fill="none" stroke={color} strokeWidth="1.6" />
        </g>
        <g data-anim="fade">
          <text x="140" y="155" textAnchor="middle" fontFamily="var(--font-instrument-serif), serif" fontSize="36" fontStyle="italic" fill="currentColor" opacity="0.7">&amp;</text>
          <text x="240" y="155" textAnchor="middle" fontFamily="var(--font-instrument-serif), serif" fontSize="36" fontStyle="italic" fill="currentColor" opacity="0.7">@</text>
          <text x="190" y="280" textAnchor="middle" fontFamily="var(--font-instrument-serif), serif" fontSize="40" fontStyle="italic" fill={color}>?</text>
        </g>
        <g data-anim="pulse" transform="translate(295 245)">
          <circle r="22" fill="none" stroke={color} strokeWidth="1.4" />
          <text y="6" textAnchor="middle" fontFamily="var(--font-instrument-serif), serif" fontSize="22" fontStyle="italic" fill={color}>!</text>
        </g>
      </g>
    ),
    shield: (
      <g>
        <path d="M 200 90 L 280 130 L 280 200 Q 280 280 200 320 Q 120 280 120 200 L 120 130 Z" fill="none" stroke="currentColor" strokeWidth="1.8" data-anim="draw" style={drawStyle} />
        <path d="M 200 130 L 250 152 L 250 205 Q 250 252 200 275 Q 150 252 150 205 L 150 152 Z" fill="none" stroke={color} strokeWidth="1" opacity="0.7" data-anim="draw" style={drawStyle} />
        <text x="200" y="225" textAnchor="middle" fontFamily="var(--font-instrument-serif), serif" fontSize="56" fontStyle="italic" fill="currentColor" data-anim="pulse">§</text>
        <g data-float>
          <circle cx="110" cy="180" r="2.4" fill={color} opacity="0.6" />
          <circle cx="290" cy="220" r="2.8" fill={color} opacity="0.5" />
          <circle cx="100" cy="260" r="2" fill={color} opacity="0.4" />
        </g>
      </g>
    ),
    world: (
      <g>
        <circle cx="200" cy="200" r="105" fill="none" stroke="currentColor" strokeWidth="1.6" data-anim="draw" style={drawStyle} />
        <ellipse cx="200" cy="200" rx="105" ry="42" fill="none" stroke={color} strokeWidth="0.8" opacity="0.7" data-anim="draw" style={drawStyle} />
        <ellipse cx="200" cy="200" rx="42" ry="105" fill="none" stroke={color} strokeWidth="0.8" opacity="0.7" data-anim="draw" style={drawStyle} />
        <g data-anim="pulse">
          <circle cx="150" cy="170" r="4" fill={color} />
          <circle cx="245" cy="180" r="4" fill="currentColor" />
          <circle cx="200" cy="240" r="4" fill={color} />
          <circle cx="180" cy="135" r="3" fill="currentColor" />
          <circle cx="260" cy="230" r="3" fill={color} />
        </g>
        <text x="200" y="350" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="9" fill="currentColor" opacity="0.55" letterSpacing="3" data-anim="fade">VIRTUAL</text>
      </g>
    ),
    browser: (
      <g>
        <rect x="100" y="100" width="200" height="160" rx="6" fill="none" stroke="currentColor" strokeWidth="1.8" data-anim="draw" style={drawStyle} />
        <line x1="100" y1="128" x2="300" y2="128" stroke="currentColor" strokeWidth="1.2" data-anim="fade" />
        <g data-anim="fade">
          <circle cx="115" cy="114" r="3" fill="currentColor" opacity="0.7" />
          <circle cx="128" cy="114" r="3" fill="currentColor" opacity="0.5" />
          <circle cx="141" cy="114" r="3" fill="currentColor" opacity="0.4" />
          <rect x="170" y="108" width="120" height="12" rx="6" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
        </g>
        <g data-anim="fade">
          <line x1="120" y1="150" x2="200" y2="150" stroke="currentColor" strokeWidth="0.8" />
          <line x1="120" y1="170" x2="240" y2="170" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
          <line x1="120" y1="185" x2="220" y2="185" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
          <rect x="120" y="210" width="80" height="22" rx="3" fill={color} opacity="0.8" />
          <rect x="208" y="210" width="60" height="22" rx="3" fill="none" stroke={color} strokeWidth="1" />
        </g>
        <g data-anim="pulse" transform="translate(320 250)">
          <circle r="22" fill="none" stroke={color} strokeWidth="1.4" />
          <text y="6" textAnchor="middle" fontFamily="var(--font-instrument-serif), serif" fontSize="22" fontStyle="italic" fill={color}>@</text>
        </g>
      </g>
    ),
    robot: (
      <g>
        <rect x="140" y="140" width="120" height="140" rx="14" fill="none" stroke="currentColor" strokeWidth="1.8" data-anim="draw" style={drawStyle} />
        <g data-anim="pulse">
          <circle cx="170" cy="180" r="6" fill={color} />
          <circle cx="230" cy="180" r="6" fill={color} />
        </g>
        <line x1="175" y1="225" x2="225" y2="225" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" data-anim="fade" />
        <g data-anim="fade">
          <line x1="200" y1="140" x2="200" y2="115" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="110" r="5" fill={color} />
          <line x1="140" y1="170" x2="115" y2="160" stroke="currentColor" strokeWidth="1" />
          <line x1="260" y1="170" x2="285" y2="160" stroke="currentColor" strokeWidth="1" />
        </g>
        <g data-float>
          <text x="105" y="245" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="8" fill={color} opacity="0.6">01</text>
          <text x="295" y="245" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="8" fill={color} opacity="0.6">10</text>
        </g>
      </g>
    ),
    globe: (
      <g>
        <circle cx="200" cy="200" r="105" fill="none" stroke="currentColor" strokeWidth="1.6" data-anim="draw" style={drawStyle} />
        <g data-anim="draw" style={drawStyle} opacity="0.65">
          <ellipse cx="200" cy="200" rx="105" ry="35" fill="none" stroke="currentColor" strokeWidth="0.6" />
          <ellipse cx="200" cy="200" rx="105" ry="70" fill="none" stroke="currentColor" strokeWidth="0.6" />
          <line x1="95" y1="200" x2="305" y2="200" stroke="currentColor" strokeWidth="0.6" />
          <ellipse cx="200" cy="200" rx="35" ry="105" fill="none" stroke="currentColor" strokeWidth="0.6" />
          <ellipse cx="200" cy="200" rx="70" ry="105" fill="none" stroke="currentColor" strokeWidth="0.6" />
        </g>
        <g data-anim="pulse">
          <circle cx="170" cy="170" r="3" fill={color} />
          <circle cx="240" cy="190" r="3" fill={color} />
          <circle cx="200" cy="240" r="3" fill={color} />
          <circle cx="160" cy="220" r="3" fill={color} />
        </g>
      </g>
    ),
    trophy: (
      <g>
        <g data-anim="draw" style={drawStyle}>
          <path d="M 160 120 L 160 200 Q 160 240 200 240 Q 240 240 240 200 L 240 120 Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M 160 140 L 130 140 Q 110 140 110 165 Q 110 190 140 195" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="M 240 140 L 270 140 Q 290 140 290 165 Q 290 190 260 195" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <rect x="180" y="240" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <rect x="155" y="280" width="90" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </g>
        <text x="200" y="195" textAnchor="middle" fontFamily="var(--font-instrument-serif), serif" fontSize="44" fontStyle="italic" fill={color} data-anim="pulse">@</text>
        <g data-float>
          <circle cx="115" cy="100" r="2.4" fill={color} opacity="0.7" />
          <circle cx="290" cy="115" r="2.6" fill={color} opacity="0.6" />
        </g>
      </g>
    ),
    scroll: (
      <g>
        <g data-anim="draw" style={drawStyle}>
          <path d="M 130 90 Q 130 75 145 75 L 270 75 Q 270 90 260 95 L 260 280 Q 260 295 245 295 L 130 295 Q 145 295 145 280 L 145 90 Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </g>
        <g data-anim="fade">
          <line x1="160" y1="115" x2="250" y2="115" stroke="currentColor" strokeWidth="0.8" />
          <line x1="160" y1="135" x2="240" y2="135" stroke="currentColor" strokeWidth="0.6" opacity="0.7" />
          <line x1="160" y1="155" x2="245" y2="155" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
          <line x1="160" y1="175" x2="225" y2="175" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
          <line x1="160" y1="195" x2="245" y2="195" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
          <line x1="160" y1="215" x2="220" y2="215" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
          <line x1="160" y1="235" x2="245" y2="235" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
        </g>
        <g data-anim="pulse" transform="translate(225 265)">
          <circle r="18" fill={color} />
          <text y="5" textAnchor="middle" fontFamily="var(--font-instrument-serif), serif" fontSize="18" fontStyle="italic" fill="#171f1c">&amp;</text>
        </g>
      </g>
    ),
    scale: (
      <g>
        <line x1="200" y1="90" x2="200" y2="280" stroke="currentColor" strokeWidth="2" data-anim="draw" style={drawStyle} />
        <line x1="120" y1="130" x2="280" y2="130" stroke="currentColor" strokeWidth="1.6" data-anim="draw" style={drawStyle} />
        <circle cx="120" cy="180" r="32" fill="none" stroke="currentColor" strokeWidth="1.6" data-anim="draw" style={drawStyle} data-float />
        <circle cx="280" cy="180" r="32" fill="none" stroke={color} strokeWidth="1.8" data-anim="draw" style={drawStyle} data-float />
        <line x1="120" y1="130" x2="120" y2="150" stroke="currentColor" strokeWidth="1" data-anim="fade" />
        <line x1="280" y1="130" x2="280" y2="150" stroke={color} strokeWidth="1" data-anim="fade" />
        <rect x="160" y="280" width="80" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" data-anim="fade" />
      </g>
    ),
    estate: (
      <g>
        <g data-anim="draw" style={drawStyle}>
          <path d="M 140 200 L 140 290 L 260 290 L 260 200" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M 110 210 L 200 130 L 290 210" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </g>
        <g data-anim="fade">
          <rect x="185" y="240" width="30" height="50" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <rect x="155" y="225" width="20" height="20" fill="none" stroke={color} strokeWidth="1.2" />
          <rect x="225" y="225" width="20" height="20" fill="none" stroke={color} strokeWidth="1.2" />
        </g>
        <g data-anim="pulse" transform="translate(200 175)">
          <circle r="14" fill="none" stroke={color} strokeWidth="1.4" />
          <text y="5" textAnchor="middle" fontFamily="var(--font-instrument-serif), serif" fontSize="16" fontStyle="italic" fill={color}>@</text>
        </g>
        <text x="200" y="335" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="9" fill="currentColor" opacity="0.5" letterSpacing="3" data-anim="fade">LEGADO</text>
      </g>
    ),
    wallet: (
      <g>
        <rect x="100" y="140" width="200" height="130" rx="14" fill="none" stroke="currentColor" strokeWidth="1.8" data-anim="draw" style={drawStyle} />
        <rect x="240" y="180" width="80" height="50" rx="6" fill="none" stroke={color} strokeWidth="1.6" data-anim="draw" style={drawStyle} />
        <circle cx="285" cy="205" r="6" fill={color} data-anim="pulse" />
        <g data-anim="fade">
          <line x1="120" y1="175" x2="200" y2="175" stroke="currentColor" strokeWidth="0.8" />
          <line x1="120" y1="195" x2="180" y2="195" stroke="currentColor" strokeWidth="0.6" opacity="0.7" />
          <line x1="120" y1="240" x2="220" y2="240" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
        </g>
        <g data-float>
          <circle cx="125" cy="110" r="2.4" fill={color} opacity="0.7" />
          <circle cx="320" cy="280" r="2.4" fill={color} opacity="0.6" />
        </g>
      </g>
    )
  };

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 400"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: "currentColor" }}
      aria-hidden
    >
      {SCENES[scene]}
    </svg>
  );
}
