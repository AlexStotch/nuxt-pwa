export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-pwa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script: [
      {
        src: 'https://connect.facebook.net/en_US/sdk.js', defer: true, async: true, body: true,
        src: 'https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v10.0&appId=1396011437403037&autoLogAppEvents=1', defer: true, async: true, body: true,
      }
    ]
    // link: [
    //   { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    // ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/bootstrap',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api'   
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  //plugins: ['@/plugins/composition-api'],


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    baseUrl : 'https://api.thecatapi.com/v1/',
    apiKey: '0ed9c2a8-c5df-4298-85c5-807ad2c7b433',
    fbAppToken: '1396011437403037|ch1R7mb69Fc_6K-7GjgX6xhMk38'
  }
}
