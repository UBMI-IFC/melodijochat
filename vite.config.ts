// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/melodijochat/',
  slidev: {
    vue: {
      /* vue options */
    },
    markdown: {
      /* markdown-it options */
      markdownItSetup(md) {
        /* custom markdown-it plugins */
        md.use(MyPlugin)
      },
    },
    /* options for other plugins */
  },
})
