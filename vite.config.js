import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  define: {
    'process.env': process.env
  },
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: '~', replacement: '/src' },
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }
    ]
  },
  build: {
    outDir: 'dist'
  },
  server: {
    port: 3000
  },
  // 👇 Quan trọng cho SPA routing khi deploy
  base: '/',
})
