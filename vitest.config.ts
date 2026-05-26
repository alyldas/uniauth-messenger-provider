import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@alyldas/uniauth-messenger-provider/telegram',
        replacement: new URL('./src/telegram/index.ts', import.meta.url).pathname,
      },
      {
        find: '@alyldas/uniauth-messenger-provider/max',
        replacement: new URL('./src/max/index.ts', import.meta.url).pathname,
      },
      {
        find: '@alyldas/uniauth-messenger-provider',
        replacement: new URL('./src/index.ts', import.meta.url).pathname,
      },
    ],
  },
  test: {
    include: ['test/**/*.test.ts'],
  },
})
