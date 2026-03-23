import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: '../static',
    emptyOutDir: true,
  },
  server: {
    proxy: {
      // FastAPI 서버(포트 1111)로 프록시
      '/robot': 'http://localhost:1111',
      '/ws': { target: 'ws://localhost:1111', ws: true },
    }
  }
})
