import daisyui from 'daisyui'

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
      fontFamily: {
        default: ['var(--font-default)'],
        title: ['var(--font-title)'],
      },
    },
  },
  daisyui: {
    logs: false,
    themes: [
      {
        dark: {
          'color-scheme': 'dark',
          primary: '#a55eea',
          'primary-content': '#ffffff',
          secondary: '#45aaf2',
          'secondary-content': '#ffffff',
          accent: '#2bcbba',
          neutral: '#2a323c',
          'neutral-focus': '#242b33',
          'neutral-content': '#A6ADBB',
          'base-100': '#1d232a',
          'base-200': '#191e24',
          'base-300': '#15191e',
          'base-content': '#A6ADBB',
        },

        // light: {
        //   'color-scheme': 'light',
        // primary: '#a55eea',
        // 'primary-content': '#ffffff',
        // secondary: '#45aaf2',
        // 'secondary-content': '#ffffff',
        // accent: '#2bcbba',
        //   neutral: '#FFFFFF', 
        //   'neutral-focus': '#242b33',
        //   'neutral-content': '#A6ADBB',
        //   'base-100': '#E5E7EB',
        //   'base-200': '#F3F4F6',
        //   'base-300': '#D1D5DB',
        //   'base-content': '#1C1917',
        // },
      },
    ],
  },
  plugins: [daisyui],
}
