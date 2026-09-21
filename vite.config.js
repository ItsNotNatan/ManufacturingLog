// ==========================================
// FILE: vite.config.js (LOGÍSTICA)
// ==========================================
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // Fixamos a porta da Logística aqui
    strictPort: true // Se a porta estiver ocupada, ele avisa em vez de tentar outra
  }
})