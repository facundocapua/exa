import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
// import { ViteAliases } from 'vite-aliases'

export default defineConfig({
  plugins: [
    // ViteAliases(),
    react()
  ]
})
