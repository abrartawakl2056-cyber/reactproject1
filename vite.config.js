import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/reactproject1/', // ضع هنا اسم الريبو الخاص بك
  build: {
    outDir: 'docs' // ننشر مباشرة من مجلد docs لتسهيل GitHub Pages
  }
})
