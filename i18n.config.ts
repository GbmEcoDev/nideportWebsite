export default defineI18nConfig(() => ({
    legacy: false,
    warnHtmlMessage: false,
    // Desactivar el formato de enlace para evitar conflictos con HTML
    allowComposition: false,
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
  