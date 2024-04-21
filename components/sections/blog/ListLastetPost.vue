<template>
    <div>
      <div v-if="error || !data">Error</div>
      <div v-else>
        <ul>
          <li v-for="item in paginatedData" :key="item.id" >
            <NuxtLink :to='item.slug'>
              <div class="flex gap-3">
                <div class="w-2/12 overflow-hidden">
                  <NuxtImg v-if="item.yoast_head_json.og_image[0].url" :src="item.yoast_head_json.og_image[0].url" alt="Cover image" width="1060" class="w-full aspect-ratio-square object-cover rounded-lg" />
                </div>
                <div class="flex-col w-9/12 pl-1 max-sm:h-30">
                  <p class="text-primary text-xs dark:text-white">{{ item.id }}<!--- {{ getCategoryNames(item) }} --> - <span class="text-gray-600">{{ getDatePost(item) }}</span></p> 
                  <h2 class="font-bold text-lg  dark:text-white leading-5 mb-1">{{ item.title.rendered }}</h2>
                  <p class="text-gray-700 text-sm dark:text-white leading-5">{{ cleanAndTruncate(item.excerpt.rendered) }}</p>
                 <h2> - {{ getSlug(item) }} </h2>
                </div>
              </div>
            </NuxtLink> 
          </li>
        </ul>
        <hr>
        <button @click="prevPage" :disabled="page === 1">Previous</button>
        <button @click="nextPage" :disabled="page === totalPages">Next</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch, computed } from 'vue';
  import axios from 'axios';
  import { useI18n } from 'vue-i18n';
  
  const colorMode = useColorMode();
  const { locale } = useI18n();
  const config = useRuntimeConfig();
  const { isMobile } = useDevice();
  const language = locale.value.toLowerCase();

  interface Posteos {
    id: number;
    title: string;
    content: string;
    date: string;
    categories: number[];
    featured_media:number;
    acf?: {
      lang?: {
        slug?: string;
      };
    };
    yoast_head_json?: {
      og_image?: {
          url?:string;
      };
    };
  }

  const filteredData = computed(() => {
    return data.value?.filter(item => item.acf && item.acf.lang && item.acf.lang.slug === language);
  });

 const { data, error } = await useFetch<Posteos[]>(config.public.wpPosteos + '/', {
  params: {
    per_page: 100
  }}); 


  const itemsPerPage = 15;
  const page = ref(1);
  
  const paginatedData = computed(() => {
    const start = (page.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredData.value?.slice(start, end);
  });
  
  const totalPages = computed(() => Math.ceil(filteredData.value?.length / itemsPerPage));
  
  const nextPage = () => {
    if (page.value < totalPages.value) {
      page.value++;
    }
  };
  
  const prevPage = () => {
    if (page.value > 1) {
      page.value--;
    }
  };

  const getSlug = (item: Posteos) => {
  return item.acf?.lang?.slug || '';
  };

  const getDatePost = (item: Posteos) => {
    const date = new Date(item.date);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getCategoryNames = async (item: Posteos) => {
    const names = await fetchCategoryNames(item.categories);
    return names.join(', ');
  };

  const fetchCategoryNames = async (categoryIds: number[]) => {
    const response = await axios.get('https://blog.nideport.com/wp-json/wp/v2/categories', {
      params: {
        include: categoryIds.join(','),
      },
    });
    return response.data.map((category: any) => category.name);
  };

  function cleanAndTruncate(text: string) {
    // Limpiar HTML y recortar a 200 caracteres
    const cleanText = text.replace(/<[^>]+>/g, ''); // Elimina todas las etiquetas HTML
    const truncatedText = cleanText.length > 100 ? `${cleanText.substring(0, 200)}...` : cleanText;
    return truncatedText;
  }
</script>
<style scoped>
.aspect-ratio-square {
  aspect-ratio: 1 / 1; /* Establece la relación de aspecto cuadrada */
}
</style>