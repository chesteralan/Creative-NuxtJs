import settings from './content/settings.json'

export default {

  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  },

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: settings.site_title || 'Davao IT Solutions',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: settings.site_description || 'Davao IT Solutions' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'bootstrap/scss/bootstrap.scss',
    '@fortawesome/fontawesome-free/css/all.css',
    'startbootstrap-creative/src/scss/styles.scss',
    '~/assets/css/fonts.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/contentful', srr: false },
    { src: '~/plugins/creative', srr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  generate: {
    routes () {
      const r = []

      const contentful = require('contentful')
      const client = contentful.createClient({
        space: process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_CDA_ACCESS_TOKEN
      })

      Promise.all([
        client.getEntries({
          content_type: 'pages',
          order: '-sys.createdAt'
        })
      ]).then(([pages]) => {
        r.concat(pages.items.map(item => `${item.fields.pageSlug}`))
      })

      return r
    }
  }
}
