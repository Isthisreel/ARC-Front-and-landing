import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        abyss: {
          900: "#0f172a", // Slate-900
          950: "#09090b", // Zinc-950
        },
        usdc: {
          light: "#33EEFF",
          DEFAULT: "#00E3FF", // Electric Blue
          dark: "#00B3CC",
        },
        neon: {
          mint: "#00FFA3", // Activity
          danger: "#FF0055",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-grid': "url('/grid-pattern.svg')",
      }
    },
  },
  plugins: [],
} satisfies Config;
