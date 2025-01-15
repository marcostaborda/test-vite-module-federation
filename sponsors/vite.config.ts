import { defineConfig, PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react() as PluginOption,
    federation({
      name: 'sponsor-app',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App'
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