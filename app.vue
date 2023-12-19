<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
<script setup lang="ts">
useSeoMeta({
  title: 'Nideport',
  ogTitle: 'Nideport',
  description: 'Soluciones basadas en la naturaleza para proteger y restaurar ecosistemas.',
  ogDescription: 'Soluciones basadas en la naturaleza para proteger y restaurar ecosistemas.',
  ogImage: 'https://demo.nideport.com/images/image.png'
})
</script>