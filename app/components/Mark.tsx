type MarkProps = {
  size?: number;
  className?: string;
};

export default function Mark({ size = 44, className = "" }: MarkProps) {
  return (
    <span
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size, flexShrink: 0 }}
      aria-label="Delva y Asociados"
      role="img"
    >
      <svg
        viewBox="0 0 60 60"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle cx="30" cy="30" r="28.5" stroke="currentColor" strokeWidth="0.9" fill="none" />
        <circle cx="30" cy="30" r="24" stroke="currentColor" strokeWidth="0.45" fill="none" opacity="0.55" />
        <text
          x="30"
          y="40.5"
          textAnchor="middle"
          fontFamily="var(--font-instrument-serif), Georgia, serif"
          fontStyle="italic"
          fontWeight="400"
          fontSize="30"
          fill="currentColor"
          style={{ letterSpacing: "-0.02em" }}
        >
          &amp;
        </text>
        <circle cx="30" cy="3" r="0.9" fill="currentColor" opacity="0.9" />
        <circle cx="30" cy="57" r="0.6" fill="currentColor" opacity="0.6" />
      </svg>
    </span>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-sans tracking-[0.18em] uppercase ${className}`}
      style={{ fontWeight: 500 }}
    >
      <span>Delva</span>
      <span
        className="font-serif italic mx-[0.55em] text-[1.18em] align-[-0.06em] normal-case tracking-normal"
        style={{ fontWeight: 400 }}
      >
        &amp;
      </span>
      <span>Asociados</span>
    </span>
  );
}
