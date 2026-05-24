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
        viewBox="0 0 70 70"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M 14 12 L 14 58 L 38 58 C 53 58 60 50 60 35 C 60 20 53 12 38 12 Z"
          stroke="currentColor"
          strokeWidth="2.2"
          fill="none"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <text
          x="40"
          y="44"
          textAnchor="middle"
          fontFamily="var(--font-instrument-serif), Georgia, serif"
          fontSize="22"
          fontWeight="400"
          fill="currentColor"
          style={{ letterSpacing: "-0.02em" }}
        >
          @
        </text>
      </svg>
    </span>
  );
}

export function MarkSigil({ size = 22, className = "" }: MarkProps) {
  return (
    <span
      className={`relative inline-flex items-center justify-center align-middle ${className}`}
      style={{ width: size, height: size, flexShrink: 0 }}
      aria-hidden
    >
      <svg viewBox="0 0 70 70" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 14 12 L 14 58 L 38 58 C 53 58 60 50 60 35 C 60 20 53 12 38 12 Z"
          stroke="currentColor"
          strokeWidth="2.6"
          fill="none"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <text
          x="40"
          y="45"
          textAnchor="middle"
          fontFamily="var(--font-instrument-serif), Georgia, serif"
          fontSize="22"
          fontWeight="400"
          fill="currentColor"
        >
          @
        </text>
      </svg>
    </span>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-sans tracking-[0.18em] uppercase inline-flex items-center ${className}`} style={{ fontWeight: 500 }}>
      <span>Delva</span>
      <MarkSigil size={20} className="mx-[0.6em]" />
      <span>Asociados</span>
    </span>
  );
}
