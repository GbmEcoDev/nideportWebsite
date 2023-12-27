<template>
  <div class="">
    <div v-if="pending" class="flex items-start justify-center">
      cargando
    </div>
    <div v-else-if="error || !data">
      <h2>Error</h2>
    </div>
    <div v-else>
      <div >
        <div class="text-sm text-gray-700">Se encontraron {{ dataSizeRef }} post relacionados</div>
        <div class="flex flex-wrap grid-row-2 w-full">
          <SectionsBlogPostsCategory v-for="post in currentPagePosts" :key="post.uri" :post="post" />
        </div>
        <div>
          <ElementsPagination @change="refetch" :totalPages="totalPages" :currentPage="page" />
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
  import { ref, defineProps, computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  const { categorySel } = defineProps(['categorySel']);
  const { locale } = useI18n();
  const config = useRuntimeConfig();
  const language = locale.value.toUpperCase();
  
  const selectedCategory = ref(categorySel);
  
  const postsCount = ref(100);
  const page = ref(1);
  
  const { data, error, pending, refresh } = await useFetch(config.public.wordpressUrl, {
    lazy: true,
    method: 'post',
    body: {
      query: `
        query posts($language: LanguageCodeFilterEnum!, $category: String!, $count: Int!) {
          posts(where: { language: $language, categoryName: $category }, first: $count ) {
            pageInfo {
              hasNextPage
              startCursor
              endCursor
              }
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
        category: selectedCategory.value,
        count: postsCount.value
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

  const dataSizeRef = computed(() => data.value.length);
  const pageSize = 6;
  const totalPages = Math.ceil(dataSizeRef.value / pageSize);
  const currentPagePosts  = computed(() => {
    if (!data.value) {
      return [];
    }
  const start = (page.value - 1) * pageSize;
  const end = page.value * pageSize;
  return data.value.slice(start, end);
  /* const result = [];
  for (let i = 1; i <= totalPages; i++) {
    const start = (i - 1) * pageSize;
    const end = i * pageSize;
    result.push({
      page: i,
      posts: data.value.slice(start, end),
    });
  }
  return result; */
});

function refetch(pageNumber: any) {
  page.value = pageNumber;
  refresh();
}
</script>

<style scoped>
.post {
  margin-bottom: 20px;
}

.loading {
  text-align: center;
  margin-top: 20px;
}
</style>