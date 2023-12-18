<script setup lang="ts">
import GalleryPicture from '@/components/GalleryPicture.vue';
const route = useRoute();
const imageList = ref([
'/images/gallery/gallery-01.jpg',
'/images/gallery/gallery-02.jpg',
'/images/gallery/gallery-03.png',
'/images/gallery/gallery-04.jpg',
'/images/gallery/gallery-05.jpg',
'/images/gallery/gallery-06.jpg',
'/images/gallery/gallery-07.png',
'/images/gallery/gallery-08.jpg',
'/images/gallery/gallery-01.jpg',
'/images/gallery/gallery-02.jpg',
'/images/gallery/gallery-03.png',
'/images/gallery/gallery-04.jpg',
'/images/gallery/gallery-05.jpg',
'/images/gallery/gallery-06.jpg',
'/images/gallery/gallery-07.png',
'/images/gallery/gallery-08.jpg',
'/images/gallery/gallery-01.jpg',
'/images/gallery/gallery-02.jpg',
'/images/gallery/gallery-03.png',
'/images/gallery/gallery-04.jpg',

]);

useHead({
  title: 'Nideport - Proyectos',
  meta: [
    { name: 'description', content: 'Soluciones naturales...' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/logo-nideport.svg' }
  ],
})
</script>

<template>
  <SectionsProjectsHeroProject/>
  <SectionsProjectsGs1  class="pb-150 pt-50"/>
  <SectionsHomeMapReserve class="section_space"/>
  <SectionsProjectsDataReserve class="section_space"/>
  <SectionsProjectsInfoReserve class="section_space"/> 
  <SectionsProjectsObjectReserve class="section_space"/>
  <SectionsProjectsOdsReserve />
  <GalleryPicture :images="imageList"/>
  <ScrollTop />
</template>
<style>
.section_space{
  margin-top:6rem;
}
</style>