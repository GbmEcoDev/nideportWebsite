<template>
    <div class="">
      <div v-if="pending" class="flex items-start justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 200 200">
          <circle fill="#0FAEA9" stroke="#0FAEA9" stroke-width="15" r="15" cx="40" cy="100">
            <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate>
          </circle>
          <circle fill="#0FAEA9" stroke="#0FAEA9" stroke-width="15" r="15" cx="100" cy="100">
            <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate>
          </circle>
          <circle fill="#0FAEA9" stroke="#0FAEA9" stroke-width="15" r="15" cx="160" cy="100">
            <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate>
          </circle>
        </svg>
      </div>
      <div v-else-if="error || !data">
        <h2>Error</h2>
      </div>
      <div v-else class="flex-grid">
        <p class="font-bold text-primary mb-4 border-b border-gray-200">últimas Novedades {{ selectedCategory }}</p>
        <SectionsBlogPostGral v-for="post in filteredPosts" :key="post.uri" :post="post"></SectionsBlogPostGral>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';

  const { locale } = useI18n()
  const config = useRuntimeConfig();
  const language = locale.value.toUpperCase();

  const defaultCategory = language === 'ES' ? 'Biodiversidad' : 'Biodiversty';
  const selectedCategory = ref(defaultCategory);

  const { data, error, pending } = await useFetch(config.public.wordpressUrl, {
    lazy: true,
    method: 'post',
    body: {
      query: `
        query posts($language: LanguageCodeFilterEnum!, $category: String!) {
          posts(where: { language: $language, categoryName: $category }, first: 5) {
            edges {
              node {
                id
                excerpt
                title
                date
                uri
                slug
                featuredImage {
                  node {
                    id
                    sourceUrl
                  }
                }
                language {
                  code
                  locale
                }
                categories(first:100) {
                nodes {
                  name
                }
              }
              }
            }
          }
        }
      `,
      variables: {
        language: language,
        category: selectedCategory.value
      }
    },
    transform(data: any) {
      //return data.data.posts.edges.map((edge: any) => edge.node);
      return data?.data?.posts?.edges?.map((edge: any) => transformPost(edge?.node)) || [];
    }
  });
  
  function transformPost(node: any) {
    return {
      id: node?.id || '',
      excerpt: node?.excerpt || '',
      title: node?.title || '',
      date: node?.date || '',
      uri: node?.uri || '',
      slug: node?.slug || '',
      sourceUrl: node?.featuredImage?.node?.sourceUrl || '/images/imgdemo.jpg',
      language: node?.language || '',
      categories: node?.categories?.nodes?.map((category: any) => category?.name).join(', ') || '',
    };
  }

  const filteredPosts = ref(data || []);

  
  // Actualizar los posteos cuando cambia la categoría seleccionada
  watch(() => selectedCategory.value, async (newCategory) => {
    const { data: newData } = await useFetch(config.public.wordpressUrl, {
      method: 'post',
      body: {
        query: `
          query posts($language: LanguageCodeFilterEnum!, $category: String!) {
            posts(where: { language: $language, categoryName: $category }, first: 5) {
              edges {
                node {
                  id
                  excerpt
                  title
                  date
                  uri
                  slug
                  featuredImage {
                    node {
                      id
                      sourceUrl
                    }
                  }
                  language {
                    code
                    locale
                  }
                  categories(first:100) {
                    nodes {
                      name
                    }
                  }
                }
              }
            }
          }
        `,
        variables: {
          language: language,
          category: newCategory
        }
      },
      transform(data: any) {
        //return data.data.posts.edges.map((edge: any) => edge.node);
        return data?.data?.posts?.edges?.map((edge: any) => transformPost(edge?.node)) || [];
      }
    });
  
    filteredPosts.value = newData || [];
  });
  </script>