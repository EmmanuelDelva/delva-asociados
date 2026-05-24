type MarkProps = {
  size?: number;
  className?: string;
  filled?: boolean;
};

export default function Mark({ size = 44, className = "", filled = false }: MarkProps) {
  const stroke = 1;
  return (
    <span
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
        flexShrink: 0
      }}
      aria-label="Delva y Asociados"
      role="img"
    >
      <svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect
          x="1"
          y="1"
          width="46"
          height="46"
          rx="3"
          stroke="currentColor"
          strokeWidth={stroke}
          fill={filled ? "currentColor" : "none"}
        />
        <path
          d="M30.8 14.6c-1-1.6-2.9-2.6-5.4-2.6-3.7 0-6.4 2-6.4 5.1 0 2.6 1.7 4.2 5.8 6.1l4.6 2.1c3.8 1.7 5.8 3.5 5.8 6.6 0 4-3.5 6.3-8.1 6.3-3.4 0-6.1-1.3-7.5-3.7"
          stroke={filled ? "var(--bg, oklch(0.962 0.008 85))" : "currentColor"}
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        <line
          x1="13"
          y1="40.5"
          x2="35"
          y2="7.5"
          stroke={filled ? "var(--bg, oklch(0.962 0.008 85))" : "currentColor"}
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.85"
        />
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
        className="font-serif italic mx-[0.5em] text-[1.1em] align-[-0.05em] normal-case tracking-normal"
        style={{ fontWeight: 400 }}
      >
        &amp;
      </span>
      <span>Asociados</span>
    </span>
  );
}
