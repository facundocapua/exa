import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default defineConfig((env) => mergeConfig(
  viteConfig(env),
  {
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: ['./setup-vitest.ts']
    }
  }
))
