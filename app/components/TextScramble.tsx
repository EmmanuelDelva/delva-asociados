"use client";

import { useEffect, useRef } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

type Props = {
  text: string;
  className?: string;
  trigger?: "mount" | "view";
  duration?: number;
  as?: keyof React.JSX.IntrinsicElements;
};

export default function TextScramble({ text, className = "", trigger = "view", duration = 1.4, as = "span" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.textContent = text;
      return;
    }

    const run = () => {
      if (started.current) return;
      started.current = true;
      const finalText = text;
      const length = finalText.length;
      const totalFrames = Math.round(duration * 60);
      const startFrame = 0;
      const queue: { from: string; to: string; start: number; end: number; char?: string }[] = [];

      for (let i = 0; i < length; i++) {
        const from = "";
        const to = finalText[i];
        const start = Math.floor(Math.random() * (totalFrames * 0.4));
        const end = start + Math.floor(Math.random() * (totalFrames * 0.5)) + 10;
        queue.push({ from, to, start, end });
      }

      let frame = startFrame;
      let raf = 0;

      const tick = () => {
        let output = "";
        let complete = 0;
        for (let i = 0, n = queue.length; i < n; i++) {
          const q = queue[i];
          if (frame >= q.end) {
            complete++;
            output += q.to;
          } else if (frame >= q.start) {
            if (!q.char || Math.random() < 0.28) {
              q.char = CHARS[Math.floor(Math.random() * CHARS.length)];
            }
            output += q.char;
          } else {
            output += q.from;
          }
        }
        el.textContent = output;
        if (complete === queue.length) return;
        frame++;
        raf = requestAnimationFrame(tick);
      };
      tick();
      return () => cancelAnimationFrame(raf);
    };

    if (trigger === "mount") {
      const t = setTimeout(run, 60);
      return () => clearTimeout(t);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run();
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [text, trigger, duration]);

  const Tag = as as any;
  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {text}
    </Tag>
  );
}
