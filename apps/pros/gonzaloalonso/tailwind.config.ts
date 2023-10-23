import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': {
          '50': '#faf9ec',
          '100': '#f3f0ce',
          '200': '#e8dea0',
          '300': '#dbc869',
          '400': '#cfb140',
          '500': '#c09c32',
          '600': '#987226',
          '700': '#845c24',
          '800': '#6f4b24',
          '900': '#5f3f24',
          '950': '#372211',
        },
      }
    },
  },
  plugins: [],
}
export default config
