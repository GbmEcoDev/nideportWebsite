import axios from 'axios';
const getPostRoutes = async () => {
  const response = await axios.get(
    'https://blog.nideport.com/wp-json/wp/v2/posts'
  );
  return response?.data?.map((post:any) => `/${post.slug}`);
};

export default defineNuxtConfig({
  ssr: true,
  hooks: {
    async 'nitro:config'(nitroConfig) {
      const slugs = await getPostRoutes();
      nitroConfig.prerender?.routes?.push(...slugs);
    },
  },
  nitro: {
    compressPublicAssets: {
      brotli: true
    },
    prerender: {
      failOnError: true
    }
  },
  generate: {
    exclude: [
      'robots.txt',
      'sitemap.xml'
    ],
  },
  routeRules: {
    '/': { prerender: true },
    '/blog': { isr: 3600 },
    '/blog/**': { isr: true }
  },
  css: [
    '@/assets/css/main.css',
  ],
  colorMode: {
    preference: 'light'
  },
  modules: [
    ['@nuxt/image', {
      image: {
        quality: 75,
      }
    }], 
    '@nuxt/devtools', 
    '@nuxtjs/i18n', 
    '@nuxt/content', 
    'vue3-carousel-nuxt', 
    'nuxt-swiper', 
    'nuxt3-leaflet', 
    '@nuxt/ui', 
    '@nuxtjs/device',
    '@pinia/nuxt'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}, 
    },
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    customRoutes: 'config',
    pages: {
      index: {
        en: '/', 
        es: '/'     
      },
      about: {
        en: '/about', 
        es: '/sobre'     
      },
      projects: {
        en: '/projects', 
        es: '/proyectos'     
      },
      blog: {
        en: '/blog', 
        es: '/blog'     
      },
      contact: {
        en: '/contact', 
        es: '/contacto'     
      },
      map: {
        en: '/map', 
        es: '/mapa'     
      },
      tech: {
        en: '/tech', 
        es: '/tecno'     
      }
    },
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales:[
      {
        code:"es",
        iso: "es-ES",
        name: "ES",
        file: "es.json"
      },
      {
        code:"en",
        iso: "en-US",
        name: "EN",
        file: "en.json"
      }
    ],
    defaultLocale: "es",
  },
  runtimeConfig: {
    public: {
      wpEventos: process.env.WP_EVENT,
      wpPosteos: process.env.WP_POSTS,
      wpCategories: process.env.WP_CATS,
      wpTags: process.env.WP_TAGS,
      wpFindings: process.env.WP_FIND,
      wpRestora: process.env.WP_RESTO,
      wordpressUrl: process.env.WP_POST,
      url_base: process.env.BASE_URL,
      wpUri: process.env.WP_URI,
      CONTACTMAILTO: process.env.CONTACTMAILTO,
      CONTACTMAILFROM: process.env.CONTACTMAILFROM,
      SMTPTOKEN: process.env.SMTP_SERVER_SECURITY_TOKEN,
      /* gtmContainerId: process.env.NUXT_PUBLIC_GTM_CONTAINER_ID, */
      adsContainerId: process.env.NUXT_PUBLIC_ADS_CONTAINER_ID,
      gaTrackingId: process.env.NUXT_PUBLIC_GA_CONTAINER_ID,
    }
  },
  plugins: ['~/plugins/nuxt-helpers.js'], 
  devtools: {
    timeline: {
      enabled: true
    }
  }
});