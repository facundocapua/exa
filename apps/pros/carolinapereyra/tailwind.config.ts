import sharedConfig from 'tailwind-config/tailwind.config.pros'

const config = {
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
            title: ['var(--font-brittany-signature)'],
            custom: ['var(--font-libre-baskerville)']
          },
          colors: {
            ...sharedConfig.theme?.extend?.colors,
            primary: {
              50: '#f7f7f3',
              100: '#e6e8dd',
              200: '#cbceb9',
              300: '#afb290',
              400: '#a3a47b',
              500: '#96946a',
              600: '#837e5c',
              700: '#6e664f',
              800: '#5c5544',
              900: '#4d473a',
              950: '#2a261e',
              DEFAULT: 'hsl(var(--primary))',
              foreground: 'hsl(var(--primary-foreground))'
            },
            secondary: {
              50: '#f8f6f4',
              100: '#eeebe6',
              200: '#dcd6cc',
              300: '#c6baab',
              400: '#aa9784',
              500: '#9d8672',
              600: '#907666',
              700: '#786256',
              800: '#635149',
              900: '#51433d',
              950: '#2b231f',
              DEFAULT: 'hsl(var(--secondary))',
              foreground: 'hsl(var(--secondary-foreground))'
            }
          },
          backgroundImage: {
            'radial-big': 'radial-gradient(circle at 30% 60%, rgba(145,55,149,1) 20%, rgba(241,247,206,1) 33%)',
            'radial-medium': 'radial-gradient(circle at 30% 60%, rgba(145,55,149,1) 20%, rgba(241,247,206,1) 40%)',
            'radial-small': 'radial-gradient(circle at 75% 55%, rgba(145,55,149,1) 20%, rgba(241,247,206,1) 60%)'
          }
        }
      }
    }
  ]
}
export default config
