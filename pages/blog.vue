<template>
  <SectionsBlogHeroBlog/>
  <SectionsBlogFeactures/>
  <section class="p-28 max-sm:p-3">
      <div class="flex mt-4 gap-3 max-sm:flex-col">
        <div class="w-6/12 max-sm:w-full">
          <SectionsBlogPostBiodiversity />
        </div>
        <div class="w-6/12 max-sm:w-full">
          <SectionsBlogPostCommunity/>
        </div>
      </div>
      <div class="flex mt-4 gap-3 max-sm:flex-col">
        <div class="w-6/12 max-sm:w-full">
          <SectionsBlogPostSecurity/>
        </div>
        <div class="w-6/12 max-sm:w-full">
          <SectionsBlogPostTechnology/>
        </div>
      </div>
    
  </section>
  <ScrollTop />
</template>
<script setup lang="ts">
const route = useRoute()
useHead({
  title: 'Nideport - Noticias',
  meta: [
    { name: 'description', content: 'Soluciones naturales...' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/logo-nideport.svg' }
  ],
})
</script>