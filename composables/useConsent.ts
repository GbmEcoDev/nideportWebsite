// composables/useConsent.ts

export const useConsent = () => {
  /**
   * Define el estado del consentimiento.
   * - undefined: Aún no se ha tomado una decisión.
   * - true: Se ha dado consentimiento para todo.
   * - false: Se ha rechazado el consentimiento.
   * - object: Consentimiento granular por categorías.
   */
  const consentState = useState<boolean | undefined | Record<string, boolean>>('cookie-consent', () => undefined);

  return {
    consentState,
  };
};
