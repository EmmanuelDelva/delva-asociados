type MarkProps = {
  size?: number;
  className?: string;
  thin?: boolean;
};

export default function Mark({ size = 44, className = "", thin = false }: MarkProps) {
  const stroke = thin ? 0.75 : 1;
  return (
    <span
      className={`relative inline-flex items-center justify-center rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        border: `${stroke}px solid currentColor`,
        flexShrink: 0
      }}
      aria-label="Delva y Asociados"
      role="img"
    >
      <span
        className="font-serif italic leading-none select-none"
        style={{
          fontSize: size * 0.62,
          fontWeight: 400,
          fontFeatureSettings: '"ss01"',
          transform: "translate(2%, -3%)"
        }}
        aria-hidden
      >
        &amp;
      </span>
    </span>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-serif tracking-[0.02em] ${className}`}
      style={{ fontWeight: 500, fontFeatureSettings: '"ss01"' }}
    >
      <span>Delva</span>
      <span className="italic font-normal mx-[0.2em]">&amp;</span>
      <span>Asociados</span>
    </span>
  );
}
