export default {
  target: 'static',
  ssr: false,

  // --------------------------------------------------------------------------------------
  // Global Page Headers 
  // --------------------------------------------------------------------------------------

  // To set this up change the title and any relevant Meta - then go into the folder /content/website/details and edit the other meta 
  // Down below you also need to setup the google fonts you want to use, and replace the favicon.ico in the root static folder
  // From there you can setup a blog, add services, and customise the SCSS package with brand colours

  // Steps: 
  // 1. Change the title and meta in the head section
  // 2. Change the google fonts in the googleFonts section
  // 3. Change the favicon.ico in the root static folder
  // 4. Change the content of the file /content/website/details.md
  // 5. Setup the navigation in /content/website/navigation.md
  // 6. Setup the services in /content/services/
  // 7. Setup the blog in /content/blog/
  // 8. Setup the SCSS package with your brand colours in /assets/scss/styles.scss

  // --------------------------------------------------------------------------------------

  head: {
    title: 'KodaDigital',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Rob Brown - Grapic Design & Web Development' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      // Favicon Linkage 
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      // Font Awesome 6.2 All Minified CSS
      { rel:'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css', integrity: 'sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==', crossorigin: 'anonymous', referrerpolicy: 'no-referrer' },
    ]
  },

  css: [
    '@/assets/scss/bootstrap/bootstrap.scss',
    '@/assets/scss/styles.scss'
  ],


  // Google FontLoader
  googleFonts: {
    download: true,
    inject: true,
    overwriting: true,
    base64: true,
    families: {
      
      // Font Familites to Load
      'Raleway': [400, 500, 600, 700],
      'Proxima+Nova': [300, 400, 500, 600, 700],
      'Poppins': [200, 400, 500, 600, 700],
      'Indie+Flower': [400],
    }
  },

  // Auto Import Components: 
  components: true,

  // Help: https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-vite',
    '@nuxtjs/google-fonts',
  ],
  
  modules: [
    '@nuxt/content',
    '@nuxtjs/markdownit',
  ],

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
  },
  
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
