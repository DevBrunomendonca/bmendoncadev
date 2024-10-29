import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#080F20",
        "secondary-blue": "#3E5692",
        "third-blue": "#4B639E",
        "primary-black": "#1A1D25",
        "secondary-black": "#3C3C3C",
        "primary-white": "#F1F1F1",
        "secondary-white": "#D9D9D9",
        "third-white": "#C5C5C5",
        "primary-gray": "#94A3B8",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        animationArrowOne: {
          "0%, 100%": { opcity: "0.1", transform: "translatey(10px)" },
          "50%": { opcity: "1", transform: "translatey(0)" },
        },
        animationArrowTwo: {
          "0%, 100%": { opcity: "0.1", transform: "translatey(10px)" },
          "50%": { opcity: "1", transform: "translatey(0)" },
        },
        animationArrowThree: {
          "0%, 100%": { opcity: "0.1", transform: "translatey(10px)" },
          "50%": { opcity: "1", transform: "translatey(0)" },
        },
      },
      boxShadow: {
        shadowOne: "5px 4px 25px 0px rgba(62,86,146,0.4)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
