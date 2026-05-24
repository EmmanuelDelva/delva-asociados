"use client";

import Image from "next/image";
import { useState } from "react";

type MarkProps = {
  size?: number;
  className?: string;
};

export default function Mark({ size = 96, className = "" }: MarkProps) {
  return (
    <span
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
      aria-label="Delva & Asociados"
    >
      <BrandSigil />
    </span>
  );
}

export function BrandSigil({ className = "" }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (failed) {
    return <BrandSigilSvg className={className} />;
  }

  return (
    <span className={`relative block w-full h-full ${className}`}>
      <Image
        src="/logo.png"
        alt="Delva & Asociados"
        fill
        sizes="(max-width: 768px) 120px, 200px"
        className={`object-contain transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoadingComplete={() => setLoaded(true)}
        onError={() => setFailed(true)}
        priority
      />
    </span>
  );
}

function BrandSigilSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      width="100%"
      height="100%"
      aria-hidden
      className={`block ${className}`}
    >
      <circle
        cx="100"
        cy="100"
        r="92"
        stroke="currentColor"
        strokeOpacity="0.9"
        strokeWidth="1.5"
      />
      <circle
        cx="100"
        cy="100"
        r="84"
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeWidth="0.5"
      />
      <g
        fontFamily="'Instrument Serif', 'Times New Roman', Georgia, serif"
        fill="currentColor"
      >
        <text x="62" y="132" fontSize="88" textAnchor="middle">
          D
        </text>
        <text
          x="100"
          y="138"
          fontSize="118"
          fontStyle="italic"
          textAnchor="middle"
          fillOpacity="0.95"
        >
          &amp;
        </text>
        <text
          x="142"
          y="138"
          fontSize="78"
          fontStyle="italic"
          textAnchor="middle"
        >
          a
        </text>
      </g>
    </svg>
  );
}

export function BrandLockup({
  size = 96,
  className = "",
  showDivider = true
}: {
  size?: number;
  className?: string;
  showDivider?: boolean;
}) {
  return (
    <span className={`inline-flex flex-col items-center gap-3 ${className}`}>
      <span style={{ width: size, height: size }} className="block">
        <BrandSigil />
      </span>
      <Wordmark className="text-[10px] sm:text-[11px]" />
      {showDivider && (
        <span className="flex items-center gap-1.5 opacity-45">
          <span className="block w-8 h-px bg-current" />
          <span className="block w-1 h-1 rounded-full bg-current" />
          <span className="block w-8 h-px bg-current" />
        </span>
      )}
    </span>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-sans tracking-[0.32em] uppercase inline-flex items-center ${className}`}
      style={{ fontWeight: 400 }}
    >
      <span>Delva</span>
      <span
        className="mx-[0.6em] font-serif italic tracking-normal"
        style={{ fontSize: "1.45em", fontWeight: 400 }}
      >
        &amp;
      </span>
      <span>Asociados</span>
    </span>
  );
}
