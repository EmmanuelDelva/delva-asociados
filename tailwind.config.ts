import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "oklch(0.18 0.012 95)",
          soft: "oklch(0.28 0.012 95)",
          mute: "oklch(0.48 0.010 95)"
        },
        bone: {
          DEFAULT: "oklch(0.962 0.008 85)",
          soft: "oklch(0.935 0.012 85)",
          deep: "oklch(0.885 0.014 82)"
        },
        forest: {
          DEFAULT: "oklch(0.158 0.018 155)",
          soft: "oklch(0.225 0.022 152)",
          glow: "oklch(0.345 0.040 150)"
        },
        ember: {
          DEFAULT: "oklch(0.715 0.155 55)",
          soft: "oklch(0.78 0.115 65)"
        },
        gold: {
          DEFAULT: "oklch(0.74 0.115 82)",
          soft: "oklch(0.82 0.075 85)"
        }
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"]
      },
      fontSize: {
        "display-xs": ["clamp(2.25rem, 5vw, 3.5rem)", { lineHeight: "0.98", letterSpacing: "-0.025em" }],
        "display-sm": ["clamp(2.75rem, 6.5vw, 5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(3.5rem, 9vw, 7.5rem)", { lineHeight: "0.92", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(4.5rem, 11vw, 10.5rem)", { lineHeight: "0.88", letterSpacing: "-0.04em" }],
        "display-xl": ["clamp(3.25rem, 8vw, 8.5rem)", { lineHeight: "0.92", letterSpacing: "-0.035em" }]
      },
      letterSpacing: {
        tightest: "-0.05em",
        widest: "0.32em"
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)"
      },
      animation: {
        "marquee": "marquee 42s linear infinite",
        "fade-up": "fade-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) both",
        "reveal": "reveal 1.4s cubic-bezier(0.16, 1, 0.3, 1) both"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-50%,0,0)" }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translate3d(0, 24px, 0)" },
          "100%": { opacity: "1", transform: "translate3d(0, 0, 0)" }
        },
        reveal: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0% 0 0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
