require('dotenv').config()

export default {
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@/modules/generator',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/recaptcha',
    'nuxt-rfg-icon',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          },
          {
            set: '@fortawesome/free-regular-svg-icons',
            icons: ['far']
          }
        ]
      }
    ],
    '@nuxtjs/sitemap'
  ],
  /*
   ** sitemap configuration
   */
  sitemap: {
    hostname: 'https://www.mcea.org.uk/',
    gzip: true,
    exclude: ['/admin/**', '/admin'],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },
  recaptcha: {
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    // language: String, // Recaptcha language (v2)
    siteKey: process.env.VUE_APP_CAPTCHA_KEY, // Site key for requests
    version: 2,
    size: 'invisible' // Size: 'compact', 'normal', 'invisible' (v2)
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].js' : '[chunkhash].js'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[chunkhash].js'),
      css: ({ isDev }) => (isDev ? '[name].css' : '[contenthash].css'),
      img: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'img/[hash:7].[ext]'),
      font: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'fonts/[hash:7].[ext]',
      video: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'videos/[hash:7].[ext]'
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
