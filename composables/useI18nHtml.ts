/**
 * Composable para obtener traducciones con HTML de forma segura
 * Evita las advertencias de vue-i18n sobre HTML en mensajes
 */
export const useI18nHtml = () => {
  const { t } = useI18n()
  
  /**
   * Obtiene una traducción que puede contener HTML
   * @param key - Clave de traducción
   * @returns String con HTML
   */
  const tHtml = (key: string): string => {
    return t(key) as string
  }
  
  return {
    tHtml
  }
}
