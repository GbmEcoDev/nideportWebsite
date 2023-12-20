<template>
   <MapaMisiones/>
</template>
<script setup lang="ts">
import MapaMisiones from '/components/MapaMisiones.vue'

const route = useRoute();
const { locales, locale, setLocale } = useI18n()


useHead({
  title: 'Nideport - Map',
  meta: [
    { name: 'description', content: 'Tecnologias...' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/logo-nideport.svg' }
  ],
})

definePageMeta({
  layout: 'application'
})
</script>