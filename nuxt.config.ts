import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint',
    (_options, nuxt): void => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  devtools: { enabled: true },
  css: [
    '@mdi/font/css/materialdesignicons.css',
  ],
  runtimeConfig: {
    // パブリック設定（クライアントサイドでも利用可能）
    public: {
      googleSheetApiKey: process.env.GOOGLE_SHEET_API_KEY,
      googleSheetId: process.env.GOOGLE_SHEET_ID,
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  compatibilityDate: '2024-11-01',
  vite: {
    plugins: [vuetify({ autoImport: true })],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
