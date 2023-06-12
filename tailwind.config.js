import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        default: ['var(--font-default)'],
        title: ['var(--font-title)'],
      },
      colors: {
        black: '#1d1916',
        white: '#f3f4f6',
      },
    },
  },
  daisyui: {
    themes: [
      {
        custom_theme: {
          primary: '#c8c6dc',
          secondary: '#8c8a9a',
          neutral: '#4b5563',
          'base-100': '#323334',
          info: '#2f72ee',
          success: '#1c9c6d',
          warning: '#fcd34d',
          error: '#f03d19',
        },
      },
    ],
  },
  plugins: [daisyui],
}
