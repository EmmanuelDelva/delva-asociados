"use client";

export default function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative flex w-full overflow-hidden select-none">
      <div className="flex shrink-0 animate-marquee gap-12 pr-12">
        {doubled.map((item, idx) => (
          <span
            key={`${item}-${idx}`}
            className="flex items-center gap-12 font-serif text-3xl md:text-5xl whitespace-nowrap"
            style={{ fontWeight: 300, fontFeatureSettings: '"ss01"' }}
          >
            {item}
            <span aria-hidden className="italic text-bone/40">&amp;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
