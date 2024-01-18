<template>
   <SectionsContactHeroContact/>
   <SectionsContactMoreInfoContact/>
   <!-- <SectionsContactFormInfo/> -->
   <ScrollTop />
</template>
<script setup lang="ts">
const route = useRoute()

useHead({
  title: 'Nideport - Contacto',
  meta: [
    { name: 'description', content: 'Soluciones naturales...' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/logo-nideport.svg' }
  ],
})
</script>