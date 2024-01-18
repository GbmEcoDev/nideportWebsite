<template>
    <div class="border-b border-gray-200 mb-6">
        <p class="font-bold text-primary mb-2 border-b border-gray-200 dark:text-white">Discovering</p>
        <div class=" h-80 overflow-auto">
          <div v-for="disco in discover" :key="disco.ID" class="w-full mt-2 mb-2 flex p-3">
               <div class="w-full mr-3"><nuxt-img :src="`/images/rgs1_nov_23/${ disco.foto }`" alt="Cover" class="w-full rounded-lg aspect-square" /></div>
              <span v-if="disco.ID" class="text-xs text-gray-100 dark:text-gray-100 px-2"> {{ disco.Date }}</span>
               
              <div class="h-4">
                <UButton @click="verDisco(disco.ID)" label="view" color="primary" size="2xs" icon="i-heroicons-cursor-arrow-ripple-20-solid"/>
              </div> 
          </div>
        </div>
    </div>
</template>
  
<script setup lang="ts" >
  import { ref, computed} from 'vue';
  import axios from 'axios';
  import { useI18n } from 'vue-i18n';
  const colorMode = useColorMode();
  const { locale } = useI18n();
  const config = useRuntimeConfig();
  const language = locale.value.toUpperCase();

    const discover = ref([]);

    onMounted(async () => {
      const { data: discoveries } = await axios.get(config.public.url_base + '/capas/fotos.geojson');
      discover.value = discoveries && discoveries.features ? discoveries.features.map((feature: any) => feature.properties) : [];
    });
    const emit = defineEmits(['ver-disco']);
    const verDisco = (id: string) => {
      emit('ver-disco', id);
    };
</script>
<script>

</script>