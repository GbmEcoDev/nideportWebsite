<template>
     <div>
         <p v-if="color ? color === 'light' : $colorMode.value === 'light'">
            <NuxtImg :src="`${urlImg}/images/nideport-by-gbm-color.svg`" alt="Logo Nideport by GBM" class="py-0 w-[185px]" width="250"/>
             </p>
             <p v-if="color ? color === 'dark' : $colorMode.value === 'dark'">
            <NuxtImg :src="`${urlImg}/images/nideport-by-gbm-color.svg`" alt="Logo Nideport by GBM" class="w-[185px]" width="250"/>
             </p>
     </div>
</template>
<script setup>
const config = useRuntimeConfig()
const urlImg = config.public.url_base
const props = defineProps(['color'])
</script>
<style scope>
/*img {
    width:185px;
}*/
</style>