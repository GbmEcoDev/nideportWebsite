<template>
    <div class="relative w-screen h-screen z-0">
        
      <div class="absolute z-0 w-screen h-screen"><MapTech @ver-disco="recibirId"/></div>
      <div class="absolute top-0 left-8 h-18 w-48">
        <NuxtLink :to="localePath({ name: 'index' })" class=" relative z-1000" ><Logo color="dark"/></NuxtLink>
      </div>
      <div class="absolute z-55 bottom-4 right-8">
        <UButton label="DISCOVERY" @click="isOpen = true" color="primary" size="xl" icon="i-heroicons-cursor-arrow-rays-20-solid"/>

        <USlideover v-model="isOpen" :transition="true" side="left">
            <div class="p-4 flex-1">
            <SectionsMapappListDiscovery />
            <UVerticalNavigation :links="links" />
            <UCheckbox v-model="selected" name="cuadriculas" label="Cuadrículas" />
            </div>
        </USlideover>
        </div>
   </div>
  </template>
  <script setup lang="ts">
  const selected = ref(true)
  const route = useRoute();
  const { t, locale, setLocale } = useI18n()
  const localePath = useLocalePath()
  const isOpen = ref(false);

   const recibirId = (idFotoSelect: string) => {
    alert(idFotoSelect);
    console.log(`El ID en tech: ${idFotoSelect}`);
  } 

  useHead({
    title: 'Nideport - Tech',
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

  const links = [{
  label: 'Restauracion',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/739984?v=4'
  },
  badge: 100
}, {
  label: 'Biodiversidad',
  icon: 'i-heroicons-home',
  to: '/getting-started/installation'
}, {
  label: 'Seguridad',
  icon: 'i-heroicons-chart-bar',
  to: '/navigation/vertical-navigation'
}, {
  label: 'Comunidad',
  icon: 'i-heroicons-command-line',
  to: '/navigation/command-palette'
}]
  </script>