"use client";

type Props = {
  items: string[];
  speed?: number;
  className?: string;
};

export default function Marquee({ items, speed = 38, className = "" }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className={`relative flex w-full overflow-hidden select-none ${className}`}>
      <div
        className="flex shrink-0 gap-10 pr-10 will-change-transform"
        style={{
          animation: `marquee ${speed}s linear infinite`
        }}
      >
        {doubled.map((item, idx) => (
          <span
            key={`${item}-${idx}`}
            className="flex items-center gap-10 font-serif italic text-[1.4rem] md:text-[2rem] whitespace-nowrap"
            style={{ fontWeight: 400 }}
          >
            <span>{item}</span>
            <span aria-hidden className="opacity-30 not-italic font-mono text-[0.85em] mt-1">+</span>
          </span>
        ))}
      </div>
    </div>
  );
}
