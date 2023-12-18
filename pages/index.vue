<script setup lang="ts">
const route = useRoute();
const { locales, locale, setLocale } = useI18n()


useHead({
  title: 'Nideport - Home',
  meta: [
    { name: 'description', content: 'Soluciones naturales...' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/logo-nideport.svg' }
  ],
})
</script>

<template>
  <SectionsHomeHeroSection />
  <SectionsHomeOurPillars />
  <SectionsHomeMapReserve />
  <SectionsHomePartnerNideport />
  <SectionsHomeMoreInfo />
  <ScrollTop />
</template>
