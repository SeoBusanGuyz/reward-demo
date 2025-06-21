import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      injectRegister: 'inline',
      // public 디렉터리(root)에 있는 파일을 precache
      includeAssets: [
        'vite.svg',
        'rewardicon.png'
      ],
      // 워크박스가 assets 폴더 안 svg도 잡게 glob 패턴 확장
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,ico}']
      },
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


