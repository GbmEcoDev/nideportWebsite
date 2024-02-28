<template>
    <h2 class="text-base text-center md:text-3xl max-sm:text-2xl dark:text-white font-bold text-secondary" :class="`${onColor}`">
        {{ texte }}
    </h2>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const { texte, color = "" } = defineProps<{texte:string, color?:string}>()
let onColor: string = "";
if (color != "")
{
    onColor= color;
}
</script>
