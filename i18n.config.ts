export default defineI18nConfig(() => ({
    legacy: false,
    locales: ['es', 'en'],
    defaultLocale: 'es',
    messages: {
      es: {
        welcome: 'Bienvenido'
      },
      en: {
        welcome: 'Welcome'
      }
    }
  }))
  