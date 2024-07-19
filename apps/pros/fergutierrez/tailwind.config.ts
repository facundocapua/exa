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
            custom: ['var(--font-rubik)']
          },
          colors: {
            ...sharedConfig.theme?.extend?.colors,
            primary: {
              50: '#fbf5f5',
              100: '#f6eaea',
              200: '#f0d8d9',
              300: '#e7c3c4',
              400: '#d39698',
              500: '#c17274',
              600: '#334155',
              700: '#000000',
              800: '#773d3f',
              900: '#643839',
              950: '#351a1b',
              DEFAULT: 'hsl(var(--primary))',
              foreground: 'hsl(var(--primary-foreground))'
            }
          }
        }
      }
    }
  ]
}
export default config
