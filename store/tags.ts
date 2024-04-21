import { defineStore } from 'pinia';

interface Tags {
  id: number;
  name: string;
  count: number;
  }

export const useTagsStore = defineStore('tags', () => {
  const tags = ref([]);

  const fetchTags = async () => {
    const { data }: any = await useFetch<Tags[]>('https://blog.nideport.com/wp-json/wp/v2/tags', {
      params: {
        per_page: 100
      }});
    if (data.value) {
      tags.value = data.value;
    }
  };

  return {
    tags,
    fetchTags,
  };
});