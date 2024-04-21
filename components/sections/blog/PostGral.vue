<template>
    <NuxtLink :to='post.uri'>
        <div class="items-center dark:text-white text-secondary p-2 transition-all hover:-translate-y-1 hover:scale-105 pb-3">
            <div class="flex gap-3">
                <div class="w-2/12 overflow-hidden">
                  <NuxtImg v-if="post.sourceUrl" :src="post.sourceUrl" alt="Cover image" width="1060" class="w-full aspect-ratio-square object-cover rounded-lg" />
                </div>
                <div class="flex-col w-9/12 pl-1 max-sm:h-30">
                  <p class="text-primary text-xs dark:text-white">{{ post.categories }} - <span class="text-gray-600">{{ new Date(post.date).toLocaleDateString() }}</span></p> 
                  <h2 class="font-bold text-lg  dark:text-white leading-5 mb-1">{{ post.title }}</h2>
                  <p class="text-gray-700 text-sm dark:text-white leading-5">{{ cleanAndTruncate(post.excerpt) }}</p>
                </div>
            </div>
        </div>
    </NuxtLink>
 </template>
 <script setup lang="ts">
  const props = defineProps<{
      post: Record<string, any>;
  }>();

 /* function formatCategories(categories: { nodes: { name: string }[] }) {
    if (categories && categories.nodes && categories.nodes.length > 0) {
      return categories.nodes.map(category => category.name).join(', ');
    }
    return '';
  }

   function cleanAndTruncate(text: string) {
    // Limpiar HTML y recortar a 200 caracteres
    const cleanText = text.replace(/<[^>]+?>/g, ''); // Elimina todas las etiquetas HTML
    const truncatedText = cleanText.length > 100 ? `${cleanText.substring(0, 200)}...` : cleanText;
    return truncatedText;
  } */
  function cleanAndTruncate(text: string): string {
    // Limpiar HTML y recortar a 200 caracteres
    const cleanText = text.replace(/<[^>]+?>/g, ''); 
    // Decodificar entidades HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(cleanText, 'text/html');
    const decodedText = doc.body.textContent || '';
    // Recortar y devolver texto
    const truncatedText = decodedText.length > 200 ? `${decodedText.substring(0, 200)}...` : decodedText;
    return truncatedText;
  }
 </script>
  <style scoped>
  .aspect-ratio-square {
    aspect-ratio: 1 / 1;
  }
 </style>
 