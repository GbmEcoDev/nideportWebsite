<template>
    <NuxtLink :to='post.uri'>
      <div class="items-center text-secondary transition-all border border-white hover:border hover:border-[#0FAFAA] rounded-[10px] m-2 p-1 ">
          <div class="flex flex-col lg:flex-row md:flex-row">
              <div class="lg:w-3/12 md:w-3/12 w-full overflow-hidden">
                <NuxtImg v-if="post.sourceUrl" :src="post.sourceUrl" alt="Cover image" width="1060" class="w-full aspect-ratio-square object-cover rounded-lg" />
              </div>
              <div class="flex-col lg:w-8/12 md:8/12 w-full pl-1 max-sm:h-30 lg:ml-3 border-b md:border-none lg:border-none">
                <p class="text-primary text-xs py-2">{{ post.categories }} - <span class="text-gray-600">{{ new Date(post.date).toLocaleDateString() }}</span></p> 
                <h2 class="font-bold text-lg  leading-5 mb-1">{{ post.title }}</h2>
                <p class="text-gray-700 text-md leading-5 text-left md:text-left lg:text-left pb-2">{{ cleanAndTruncate(post.excerpt) }}</p>
              </div>
          </div>
      </div>
    </NuxtLink>
 </template>
 <script setup lang="ts">
  const props = defineProps<{
      post: Record<string, any>;
  }>();

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
 