import sharedConfig from 'tailwind-config/tailwind.config.pros'
import type { Config } from 'tailwindcss'

const config: Pick<Config, 'presets'> = {
  presets: [
    {
      ...sharedConfig,
      content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        '../../../packages/ui/components/**/*.{js,ts,jsx,tsx,mdx}'
      ],
      theme: {
        extend: {
          ...sharedConfig.theme?.extend,
          fontFamily: {
            ...sharedConfig.theme?.extend?.fontFamily,
            custom: ['var(--font-fashion-fetish)']
          },
          colors: {
            ...sharedConfig.theme?.extend?.colors,
            primary: {
              50: '#fdf5fe',
              100: '#faebfc',
              200: '#f6d6f8',
              300: '#f0b5f2',
              400: '#e888ea',
              500: '#d446d6',
              600: '#be3bbd',
              700: '#9d2e9a',
              800: '#81277e',
              900: '#6a2566',
              950: '#450d41',
              DEFAULT: 'hsl(var(--primary))',
              foreground: 'hsl(var(--primary-foreground))'
            },
            secondary: {
              50: '#f8fbeb',
              100: '#f0f7ca',
              200: '#e4f098',
              300: '#dbe85c',
              400: '#d8e034',
              500: '#d0d022',
              600: '#b3a81b',
              700: '#8f7c19',
              800: '#77631c',
              900: '#66521d',
              950: '#3b2c0d',
              DEFAULT: 'hsl(var(--secondary))',
              foreground: 'hsl(var(--secondary-foreground))'
            }
          },
          backgroundImage: {
            'radial-big': 'radial-gradient(circle at 30% 60%, rgba(145,55,149,1) 20%, rgba(241,247,206,1) 33%)',
            'radial-medium': 'radial-gradient(circle at 30% 60%, rgba(145,55,149,1) 20%, rgba(241,247,206,1) 40%)',
            'radial-small': 'radial-gradient(circle at 60% 50%, rgba(145,55,149,1) 20%, rgba(241,247,206,1) 60%)'
          }
        }
      }
    }
  ]
}
export default config
