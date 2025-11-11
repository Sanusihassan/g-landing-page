// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap(), AstroPWA({
    mode: 'production',
    base: '/',
    scope: '/',
    includeAssets: ['robots.txt'],
    registerType: 'autoUpdate',
    workbox: {
      navigateFallback: '/index.html',
      globPatterns: ['**/*.{css,js,html,svg,png,woff2}'],
    },
    devOptions: {
      enabled: false,
      navigateFallbackAllowlist: [/^\/$/],
      suppressWarnings: true
    }
  })],
  site: "https://www.globacheap.com",
  vite: {
    plugins: [tailwindcss()]
  }
});