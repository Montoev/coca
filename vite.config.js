import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import injectHTML from 'vite-plugin-html-inject';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
  root: './src',
  base: '/coca/',
  server: {
    port: 3000,
    open: true,
  },
  publicDir: './scr/assets',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './src/index.html',
        about: './src/about.html',
        blog: './src/blog.html',
        detailblog: './src/detail-blog.html',
        pricing: './src/pricing.html',
        contact: './src/contact.html',
      },
    },
  },
  plugins: [
    injectHTML(),
    ViteMinifyPlugin({}),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
  ],
});
