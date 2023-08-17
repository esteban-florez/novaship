import daisyui from 'daisyui'
import scrollbars from 'tailwind-scrollbar'
import themes from 'daisyui/src/theming/themes'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    logs: false,
    themes: [
      {
        light: {
          ...themes['[data-theme=light]'],
          primary: '#a55eea',
          'primary-content': '#ffffff',
          secondary: '#45aaf2',
          'secondary-content': '#ffffff',
          accent: '#2bcbba',
          'action-content': 'fffffff',
          'neutral-content': '#ffffff',
          // 'base-100': '#E5E7EB',
          // 'base-200': '#F3F4F6',
          // 'base-300': '#D1D5DB',
          // 'base-content': '#1C1917',
        },
      },
    ],
  },
  plugins: [daisyui, scrollbars],
}
