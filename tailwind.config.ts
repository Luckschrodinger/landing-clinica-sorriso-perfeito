import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff8ff",
          100: "#dbeefe",
          200: "#bfdffd",
          300: "#93cafc",
          400: "#60aaf8",
          500: "#3b8bf2",
          600: "#256de7",
          700: "#1d57d3",
          800: "#1f48ab",
          900: "#1f3f87",
          950: "#172852"
        },
        mint: {
          50: "#effefa",
          100: "#c8fff1",
          200: "#92ffe5",
          300: "#54f5d6",
          400: "#1fe0c1",
          500: "#06c4a8",
          600: "#009d8a",
          700: "#017d6f",
          800: "#066259",
          900: "#0a514a"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(31, 63, 135, 0.18)",
        card: "0 4px 24px -4px rgba(15, 23, 42, 0.08)"
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
        "fade-in": "fadeIn 0.6s ease-out both",
        "blob": "blob 12s infinite"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
