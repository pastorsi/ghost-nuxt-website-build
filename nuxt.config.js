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
    [
      'nuxt-cookie-control',
      {
        barPosition: 'bottom-right',
        css: true,
        controlButton: true,
        blockIframe: true,
        colors: {
          barTextColor: '#fff',
          barBackground: '#12957b',
          barButtonColor: '#fff',
          barButtonBackground: '#206569',
          barButtonHoverColor: '#fff',
          barButtonHoverBackground: '#2e495e',
          modalButtonBackground: '#206569',
          modalButtonHoverColor: '#fff',
          controlButtonBackground: '#12957b',
          controlButtonHoverBackground: '#2e495e',
          controlButtonIconHoverColor: '#fff',
          controlButtonIconColor: '#fff',
          modalButtonHoverBackground: '#2e495e',
          checkboxActiveBackground: '#2e495e',
          checkboxInactiveBackground: '#ede1e1',
          checkboxActiveCircleBackground: '#00c58e',
          checkboxInactiveCircleBackground: '#f44336',
          checkboxDisabledBackground: '#ddd',
          checkboxDisabledCircleBackground: '#fff'
        },
        // default texts
        text: {
          barTitle: 'Cookies',
          barDescription:
            'We use third-party cookies so that we can better understand how the site is used. This can help us improve the services we offer. Please select below your preference.',
          acceptAll: 'Accept all',
          declineAll: 'Delete all',
          manageCookies: 'Manage cookies',
          unsaved: 'You have unsaved settings',
          close: 'Close',
          save: 'Save',
          necessary: 'Necessary cookies',
          optional: 'Optional cookies',
          functional: 'Functional cookies',
          blockedIframe: 'To see this, please enable functional cookies',
          here: 'here'
        }
      }
    ],
    '@nuxtjs/sitemap'
  ],
  cookie: {
    necessary: [
      {
        name: {
          en: 'Default cookies',
          hr: 'Osnovni kolačići'
        },

        description: {
          en: 'Used for cookie control.'
        },
        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
      }
    ],
    optional: [
      {
        name: {
          en: 'Google Analytics',
          de: 'Google Analytics',
          es: 'Google Analytics',
          fr: 'Google Analytics',
          hr: 'Google Analitika',
          it: 'Google Analytics'
        },
        description: {
          en:
            'Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.'
        },
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-48966313-4',
        async: true,
        cookies: ['_ga', '_gat_gtag_UA-48966313-4', '_gid'],
        accepted: () => {
          window.dataLayer = window.dataLayer || []
          function gtag() {
            // eslint-disable-next-line no-undef
            dataLayer.push(arguments)
          }
          gtag('js', new Date())
          gtag('config', 'UA-48966313-4')
        }
      }
    ]
  },
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
