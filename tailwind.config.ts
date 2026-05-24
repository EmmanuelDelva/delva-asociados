import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "oklch(0.16 0.012 95)",
          soft: "oklch(0.30 0.012 95)",
          mute: "oklch(0.50 0.010 95)"
        },
        bone: {
          DEFAULT: "oklch(0.962 0.008 85)",
          soft: "oklch(0.935 0.012 85)",
          deep: "oklch(0.885 0.014 82)"
        },
        forest: {
          DEFAULT: "oklch(0.14 0.018 155)",
          soft: "oklch(0.22 0.022 152)",
          glow: "oklch(0.34 0.040 150)"
        },
        ember: {
          DEFAULT: "oklch(0.72 0.155 50)",
          soft: "oklch(0.80 0.115 60)"
        },
        gold: {
          DEFAULT: "oklch(0.76 0.115 82)",
          soft: "oklch(0.84 0.075 85)"
        }
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"]
      },
      fontSize: {
        "d-1": ["clamp(2.25rem, 5vw, 3.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "d-2": ["clamp(2.75rem, 6vw, 5.25rem)", { lineHeight: "0.95", letterSpacing: "-0.025em" }],
        "d-3": ["clamp(3.5rem, 8.5vw, 7.5rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "d-4": ["clamp(4.5rem, 12vw, 11rem)", { lineHeight: "0.88", letterSpacing: "-0.035em" }]
      },
      letterSpacing: {
        widest: "0.28em"
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)"
      },
      animation: {
        marquee: "marquee 38s linear infinite"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-50%,0,0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
