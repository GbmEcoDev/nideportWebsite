<template>
    <div class="w-full relative rounded-2xl overflow-hidden h-64 mt-6 mb-6 max-lg:h-96 max-sm:h-60 max-sm:overflow-visible max-lg:overflow-visible">
        <NuxtImg format="webp" :src="`${urlImg}/images/event-img.jpg`" alt="Cover image" width="1060" class="w-full object-cover rounded-2 h-full" />
        <div
            class="absolute py-4 px-3 md:py-3 md:px-4 top-0 h-full justify-between inset-x-0 bg-gradient-to-r from-[#007A77] bg-opacity-90 ">
            <div class="flex-col w-full h-full border-2 p-1">
                <div class="flex flex-col  w-full p-3 ">
                    <AtomsTitleH2 texte="Programa de Carbono Participativo" alignTxt="left" colorTxt="white" weightTxt="bold" sizeTxt="max-lg:text-2xl"/>
                    <p class="text-white">{{$t('blog_title_first_event')}}</p>
                    <div class="flex  my-10 h-12 ">
                        <AtomsLinkBtn :href="`${config.public.url_base}/programa-de-carbono-participativo/`" variant="primary">{{$t('blog_first_btn')}}</AtomsLinkBtn>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ListEvento/><!--  -->
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
const config = useRuntimeConfig();
const urlImg = config.public.url_base;

</script>

<style scoped>

</style>