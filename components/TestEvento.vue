<template>
    <div>
      <h3 class="font-bold text-primary mb-4 border-b border-gray-200 dark:text-white">Otros Eventos</h3>
      <div v-for="event in filteredEvents" :key="event.id" class="w-full mt-6 mb-6 flex border rounded-lg p-3 bg-gradient-to-l from-slate-50 hover:shadow-lg duration-200">
          <div class="w-20 h-20 mr-3"><nuxt-img :src="`${ event.acf.imagen }`" alt="Cover" class="w-20 h-20 rounded-full border-2" /></div>
          <div class="w-52">
            <h2 class="font-bold text-secondary text-lg leading-5">{{ event.title.rendered }}</h2>
            <span class="text-xs text-gray-600 border rounded-full px-2">{{ formatDate(event.date) }}</span>
            <!--<div v-html="event.content.rendered"></div>
            <p>Id: {{ event.id }}</p>
            <p>Slug: {{ event.slug }}</p>
            <p>Language: {{ event.acf.language }}</p> -->
            <span class="text-xs text-gray-600 dark:text-white px-2">Presenta: {{ event.acf.speaker }}</span>
          </div>
      </div>
    </div>

  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import axios from 'axios';
  import { useI18n } from 'vue-i18n';
  const { locale } = useI18n();
  //const config = useRuntimeConfig();
  const language = locale.value.toUpperCase();
  
  const { data: events } = await axios.get('https://blog.nideport.com/wp-json/wp/v2/events');

  const eventos = ref(events || []);
  const filteredEvents = computed(() => {
  return eventos.value.filter((event: any) => {
    return event.acf.language === language;
  });
}); 

function formatDate(fullDate:any) {
  const date = new Date(fullDate);
  // Formatea la fecha como desees, aquí se usa el formato "YYYY-MM-DD"
  const formattedDate = `${date.getFullYear()}-${padNumber(date.getMonth() + 1)}-${padNumber(date.getDate())}`;
  return formattedDate;
}

function padNumber(number:any) {
  return number.toString().padStart(2, '0');
}
  </script>