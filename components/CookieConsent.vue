<template>
  <!-- Mostramos el banner solo si el usuario aún no ha tomado una decisión -->
  <div v-if="showBanner" class="cookie-banner">
    <div class="cookie-banner__content">
      <p>
        {{ $t('cookie.banner.text') }}
        <a href="/politica-de-privacidad">{{ $t('cookie.banner.readMore') }}</a>.
      </p>
      <div class="cookie-banner__actions">
        <button @click="handleConsent(false)">{{ $t('cookie.banner.reject') }}</button>
        <button @click="handleConsent(true)" class="primary">{{ $t('cookie.banner.acceptAll') }}</button>
        <!-- Opcional: Botón para preferencias granulares -->
        <!-- <button @click="showPreferences = true">Preferencias</button> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useConsent } from '~/composables/useConsent'; // Asegúrate de que esta línea no esté comentada
import { useRuntimeConfig } from '#app'; // Importamos useRuntimeConfig

// Obtenemos el estado global del consentimiento
const { consentState } = useConsent();

// Cookie para persistir la elección del usuario (dura 1 año)
const consentCookie = useCookie<boolean | undefined>('user-consent', {
  maxAge: 60 * 60 * 24 * 365, // 1 año en segundos
  path: '/',
  sameSite: 'lax',
});

// Estado local para controlar la visibilidad del banner
const showBanner = ref(false);

// Función para manejar la decisión del usuario
const handleConsent = (hasConsented: boolean) => {
  // Actualizamos el estado global
  consentState.value = hasConsented;
  // Guardamos la elección en la cookie
  consentCookie.value = hasConsented;
  // Ocultamos el banner
  showBanner.value = false;

  // Si el usuario aceptó, cargamos los scripts de rastreo
  if (hasConsented) {
    loadTrackingScripts();
  }
};

// Lógica que se ejecuta solo en el cliente
onMounted(() => {
  // Sincronizamos el estado global con el valor de la cookie al cargar
  consentState.value = consentCookie.value;

  // Si la cookie no existe (es la primera visita o ha expirado), mostramos el banner
  if (consentCookie.value === undefined) {
    showBanner.value = true;
  } else if (consentCookie.value === true) {
    // Si la cookie ya existe y es 'true', cargamos los scripts inmediatamente
    loadTrackingScripts();
  }
});

// Función para inyectar los scripts de rastreo en el <head>
function loadTrackingScripts() {
  console.log('Consentimiento otorgado. Cargando scripts de rastreo...');
  
  const runtimeConfig = useRuntimeConfig();
  const gaId = runtimeConfig.public.gaContainerId;
  const adsId = runtimeConfig.public.adsContainerId;
  const hotjarId = runtimeConfig.public.hotjarId;

  // Aseguramos que window.dataLayer y window.gtag estén inicializados una sola vez
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    if (!window.gtag) {
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
    }
  }

  // Cargar el script base de gtag.js si algún servicio de Google lo necesita
  // y si no ha sido cargado ya.
  const needsGtagScript = gaId || adsId;
  if (needsGtagScript && typeof window !== 'undefined' && !document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) {
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    // Usamos el ID de GA o Ads para la URL del script base
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId || adsId}`;
    document.head.appendChild(gtagScript);
  }

  // Configurar Google Analytics
  if (gaId && typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', gaId, { 'send_page_view': true });
    console.log(`Google Analytics configurado con ID: ${gaId}`);
  }

  // Configurar Google Ads Conversion Tracking
  if (adsId && typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', adsId);
    console.log(`Google Ads configurado con ID: ${adsId}`);
  }

  // Hotjar
  if (hotjarId && typeof window !== 'undefined') {
    // Verificar si el script de Hotjar ya está cargado para evitar duplicados
    if (!document.querySelector(`script[src*="static.hotjar.com/c/hotjar-${hotjarId}"]`)) {
      const hotjarScript = document.createElement('script');
      hotjarScript.innerHTML = `
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:${hotjarId},hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `;
      document.head.appendChild(hotjarScript);
      console.log(`Hotjar configurado con ID: ${hotjarId}`);
    }
  }
}
</script>
<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
  z-index: 1000;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
  z-index: 1000;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
  }
  
.cookie-banner__content {
  max-width: 900px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}

.cookie-banner__content {
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  max-width: 900px; /* Asegura que el contenido no se extienda demasiado en pantallas grandes */
}

.cookie-banner__content p {
  margin: 0;
  flex-grow: 1;
}

.cookie-banner__content a {
  color: #42b983;
  text-decoration: underline;
}

.cookie-banner__actions {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}

.cookie-banner__actions button {
  padding: 0.5rem 1rem;
  border: 1px solid #42b983;
  background-color: transparent;
  color: #42b983;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s, color 0.2s;
}

.cookie-banner__actions button:hover {
  background-color: #42b983;
  color: white;
}

.cookie-banner__actions button.primary {
  background-color: #42b983;
  color: white;
}
</style>