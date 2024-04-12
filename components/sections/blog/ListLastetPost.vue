<!-- <template>
    <div>
      <div v-if="error || !data">Error</div>
      <div v-else>
        <ul>
          <li v-for="item in paginatedData" :key="item.id">
            {{ item.id }} <h2>{{ item.title }} -</h2>
          </li>
        </ul>
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
  }
/*   */

  const filteredData = computed(() => {
  return data.value.filter(data => data.acf.lang.slug === locale.value);
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
    return filteredData.value.slice(start, end);
  });
  
  const totalPages = computed(() => Math.ceil(data.value.length / itemsPerPage));
  
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
  </script> -->
  <template>
    <div>
      <ul>
        <li v-for="post in paginatedData" :key="post.id">
          {{ post.title.rendered }} {{ post.acf.lang.slug }}
        </li>
      </ul>
      <button @click="prevPage" :disabled="page === 1">Previous</button>
      <button @click="nextPage" :disabled="page === totalPages">Next</button>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, computed } from 'vue';
  import axios from 'axios';
  import { useI18n } from 'vue-i18n';
  
  const colorMode = useColorMode();
  const { locale } = useI18n();
  const config = useRuntimeConfig();
  const { isMobile } = useDevice();
  const language = locale.value.toLowerCase();
const data = ref([]);

    const filteredData = computed(() => {
    return data.value.filter(post => post.acf.lang.slug== language );

  });
  const page = ref(1);
  const itemsPerPage = 10;
  const totalPages = computed(() => Math.ceil(filteredData.value.length / itemsPerPage));
  
  

  
  axios.get(config.public.wpPosteos + '/', {
    params: {
      per_page: 100
    }
  }).then(response => {
    data.value = response.data;
  });
  
  const paginatedData = computed(() => {
    const start = (page.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredData.value.slice(start, end);
  });
  
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
  </script>