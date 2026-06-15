import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { resolve } from 'path'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app': resolve(rootDir, 'src/app'),
      '@pages': resolve(rootDir, 'src/pages'),
      '@widgets': resolve(rootDir, 'src/widgets'),
      '@features': resolve(rootDir, 'src/features'),
      '@entities': resolve(rootDir, 'src/entities'),
      '@shared': resolve(rootDir, 'src/shared'),
      '@assets': resolve(rootDir, 'src/assets'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
  },
})
