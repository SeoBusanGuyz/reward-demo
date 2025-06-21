import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        name: 'Reward Demo PWA',
        short_name: 'Reward',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#3367D6',
        icons: [
          {
            src: '/rewardicon.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/rewardicon.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    })
  ],
})


