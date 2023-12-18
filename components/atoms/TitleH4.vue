<template>
    <h2 class="text-base text-center md:text-3xl max-sm:text-2xl dark:text-white font-bold">
        {{ texte }}
    </h2>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const { texte } = defineProps<{texte:string}>()
</script>
<style scoped>
h2{
    color :#055735;
}
</style>