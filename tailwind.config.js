import daisyui from "daisyui"
import themes from "daisyui/src/theming/themes"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./lib/shared/stage-colors.ts"
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      animation: {
        typing: "typing 2s steps(8), blink 1s infinite",
      },
      colors: {
        "primary-lighter": "#e2cef3",
      },
      keyframes: {
        typing: {
          from: {
            width: "0",
          },
          to: {
            width: "18ch",
          },
        },
        blink: {
          from: {
            "border-right-color": "secondary",
          },
          to: {
            "border-right-color": "secondary",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    logs: false,
    themes: [
      {
        light: {
          ...themes["[data-theme=light]"],
          primary: "#a55eea",
          "primary-content": "#ffffff",
          secondary: "#45aaf2",
          "secondary-content": "#ffffff",
          accent: "#2bcbba",
          "accent-content": "#ffffff",
          "neutral-content": "#ffffff",
          // 'base-100': '#E5E7EB',
          // 'base-200': '#F3F4F6',
          // 'base-300': '#D1D5DB',
          // 'base-content': '#1C1917',
        },
      },
    ],
  },
  plugins: [daisyui],
}
