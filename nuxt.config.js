const pkg = require('./package')

require('dotenv').config()

module.exports = {
  mode: 'universal',

  head: {
    title: 'SUZURI Lite',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ninja the Quick' },
    ],
  },

  loading: false,

  css: [],

  plugins: [
    '~plugins/filters.js',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/router',
    '@nuxtjs/font-awesome',
    '@nuxtjs/pwa',
  ],
  
  serverMiddleware: [
    '~server/middleware/cache-control.js',
  ],

  axios: {},

  manifest: {
    name: "SUZURI Lite",
    lang: 'ja'
  },

  workbox: {
    dev: false,
    runtimeCaching: [
      {
        urlPattern: 'https://d1q9av5b648rmv.cloudfront.net/.*',
        handler: 'cacheFirst',
        method: 'GET',
      },
      {
        urlPattern: 'https://dzdih2euft5nz.cloudfront.net/.*',
        handler: 'cacheFirst',
        method: 'GET',
      },
    ],
  },

  build: {},
}
