"use client";

import Image from "next/image";
import { useState } from "react";

type MarkProps = {
  size?: number;
  className?: string;
};

export default function Mark({ size = 80, className = "" }: MarkProps) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <Wordmark className={`text-[14px] ${className}`} />
    );
  }
  return (
    <span
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
      aria-label="Delva & Asociados"
    >
      <Image
        src="/logo.png"
        alt="Delva & Asociados"
        fill
        sizes={`${size}px`}
        className="object-contain"
        onError={() => setFailed(true)}
        priority
      />
    </span>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-sans tracking-[0.28em] uppercase inline-flex items-center ${className}`}
      style={{ fontWeight: 400 }}
    >
      <span>Delva</span>
      <span
        className="mx-[0.8em] font-serif italic tracking-normal"
        style={{ fontSize: "1.35em", fontWeight: 400 }}
      >
        &amp;
      </span>
      <span>Asociados</span>
    </span>
  );
}
