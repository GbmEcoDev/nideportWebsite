<template>
    <div v-if="tags.length > 0">
      <h1>Tags:</h1>
      <ul v-for="tag in tags" :key="tag.id">
        <li>{{ tag.name }} {{ tag.count }}</li>
      </ul>
    </div>
    <p v-else>Loading tags...</p>
  </template>
  
  <script lang="ts" setup>
  import { storeToRefs } from 'pinia';
  import { useTagsStore } from '~/store/tags'; // Assuming corrected store name
  


  const store = useTagsStore();
  const { fetchTags } = store; // Non-reactive stuff
  const { tags } = storeToRefs(store); // Reactive state
  
  await fetchTags();
  </script>
  