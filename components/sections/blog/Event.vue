<template>
    <div class="w-full relative rounded-2xl overflow-hidden h-48 mt-6 mb-6">
        <nuxt-img src="./images/event-img.jpeg" alt="Cover image" width="1060" class="w-full aspect-square object-cover rounded-2xl h-full" />
        <div
            class="absolute py-4 px-3 md:py-3 md:px-4 bottom-0 h-48 flex justify-between inset-x-0 bg-gradient-to-r from-[#007A77] bg-opacity-90">
            <div class="flex w-full border-2 p-2">
                <div class="flex flex-col relative w-3/4  p-3">
                    <AtomsTitleH2 texte="Programa de Carbono Participativo" alignTxt="left" colorTxt="white" weightTxt="bold"/>
                    <p class="text-white">¿Qué es el Carbono Participativo?</p>
                </div>
                <div class="flex justify-end relative w-1/4">
                    <div class="flex  absolute bottom-0 h-12">
                        <AtomsLinkBtn href="es/programa-de-carbono-participativo/" variant="primary">Más Info</AtomsLinkBtn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>