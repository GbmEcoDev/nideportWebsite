<template>
  <div class="relative w-full">
    <SectionsBlogHeroBlog/>
    <div class="absolute w-full bottom-[-3em] max-sm:bottom-0 h-48 max-sm:h-[640px] max-sm:relative"><SectionsBlogFeactures/></div>
  </div>
  <section class="p-36 max-lg:p-12 max-lg:pt-28 max-sm:p-3 flex max-sm:flex-col gap-8">
        <div class="w-8/12  max-sm:w-full flex-col">
          <p class="font-bold text-primary mb-4 border-b border-gray-200 dark:text-white">{{$t('blog_lasted')}}</p>
            <div class="w-full max-sm:w-full">
              <SectionsBlogPostBiodiversity class="border border-gray-200 shadow-md rounded-md p-2" />
            </div>
            <div class="w-full max-sm:w-full">
              <SectionsBlogPostCommunity class="border border-gray-200 shadow-md rounded-md p-2"/>
            </div>
        
            <div class="w-full max-sm:w-full">
              <SectionsBlogPostSecurity class="border border-gray-200 shadow-md rounded-md p-2"/>
            </div>
            <div class="w-full max-sm:w-full">
              <SectionsBlogPostTechnology class="border border-gray-200 shadow-md rounded-md p-2"/>
            </div>
          </div>
          <div class="w-3/12 max-sm:w-full">
            <SectionsBlogCategories class="hidden"/>
            <SectionsBlogEvent/>
          </div>
     
  </section>
  <ScrollTop />
</template>
<script setup lang="ts">
const { t, locale } = useI18n();
const route = useRoute();
useHead({
    title: 'Mantente al Día con las Últimas Novedades sobre Créditos de Carbono',
    meta: [
      {
        name: 'description',
        content: 'Lee nuestras noticias sobre compensación de carbono y cómo estamos generando un triple impacto en el medio ambiente, la sociedad y la economía.' 
      },
    ],
  });
</script>