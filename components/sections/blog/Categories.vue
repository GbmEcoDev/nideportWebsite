<template>
    <div class="w-full">
      <p class="font-bold text-primary mb-4 border-b border-gray-200 dark:text-white">Categorías</p>
      <ul>
       <!--  <li v-for="category in categories" :key="category.id" @click="selectCategory(category)" class="text-gray-600  dark:text-white border rounded-lg p-2 mb-1 hover:-translate-x-1">
          {{ category.name }} 
        </li> -->
        <li v-for="category in categories" :key="category.id" @click="$emit('categorySelected', category)" class="text-gray-600  dark:text-white border rounded-lg p-2 mb-1 hover:-translate-x-1">
          {{ category.name }} 
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineEmits } from 'vue';

  const { locale } = useI18n()
  const config = useRuntimeConfig();
  const language = locale.value.toUpperCase();

  const { data: categoriesData } = await useFetch(config.public.wordpressUrl, {
    lazy: true,
    method: 'post',
    body: {
      query: `
        query categories($language: LanguageCodeFilterEnum!) {
          categories(where: { language: $language }) {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      `,
      variables: {
        language: language
      }
    },
    transform(data: any) {
      return data.data.categories.edges.map((edge: any) => edge.node);
    }
  });
  
  const categories = ref(categoriesData || []);

  defineEmits(['categorySelected']);
  /* const selectCategory = (category:any) => {
    const appContext = getCurrentInstance();
    console.log('Categoría seleccionada:', category.name);
    if (appContext) {
      appContext.emit('categorySelected', category.name);
    } else {
      console.error('appContext es null');
    }
  }; */
  </script>
  