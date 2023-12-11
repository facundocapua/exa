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
      ]
    }
  ]
}
export default config
