// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0',
    port: 3002,
  },

  css: [
    '@/assets/scss/main.scss',
    'primevue/resources/themes/aura-light-green/theme.css',
  ],
  modules: [
    'nuxt-icon',
    [
      'nuxt-swiper',
      {
        swiper: {
          prefix: 'Swiper',
          styleLang: 'css | scss',
          modules: ['navigation', 'pagination'], // all modules are imported by default
        },
      },
    ],

    '@nuxt/eslint',
    [
      '@nuxtjs/i18n',
      {
        vueI18n: './vueI18n/i18n.config.ts',
        locales: [
          {
            code: 'ru',
            name: 'RU',
            files: ['ru.json'],
          },
          {
            code: 'en',
            name: 'EN',
            files: ['en.json'],
          },
        ],
        lazy: true,
        langDir: './vueI18n/lang',
        defaultLocale: 'ru',
      },
    ],
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'storeToRefs'],
      },
    ],
    [
      '@vee-validate/nuxt',
      {
        // disable or enable auto imports
        autoImports: true,
        // Use different names for components
        componentNames: {
          Form: 'VeeForm',
          Field: 'VeeField',
          FieldArray: 'VeeFieldArray',
          ErrorMessage: 'VeeErrorMessage',
        },
      },
    ],
    [
      'nuxt-primevue',
      {
        usePrimeVue: true,
        components: {
          prefix: 'Prime',
          include: [
            'PanelMenu',
            'Button',
            'Listbox',
            'Dialog',
            'Dropdown',
            'SelectButton',
          ],
        },
        directives: {
          prefix: 'prime',
          include: ['Tooltip'],
        },
      },
    ],
  ],
  // ssr: false,
  runtimeConfig: {
    public: {
      baseURL: 'http://localhost:8080/',
    },
  },
})
