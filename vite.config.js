import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //開發中(npm run dev) 產品路徑(npm run build)
  //base: process.env.NODE_EVN === 'production' ? '/react-gh-sample/' : '/',
  base: '/react-gh-sample/',
  plugins: [react()],
})
