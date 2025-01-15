import { defineConfig, PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react() as PluginOption,
    federation({
      name: 'host-app',
      remotes: {
        news: 'http://localhost:5001/assets/remoteEntry.js',
        ads: 'http://localhost:5002/assets/remoteEntry.js',
        sponsors: 'http://localhost:5003/assets/remoteEntry.js',
        weather: 'http://localhost:5004/assets/remoteEntry.js',
      },
      shared: [
        '@emotion/styled',
        '@emotion/react',
        '@mui/material',
        'react',
        'react-dom'
      ],
    }) as PluginOption
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
