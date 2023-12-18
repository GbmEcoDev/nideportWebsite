<template>
    <div class="relative w-screen h-screen">
        <div class="absolute top-1 left-10 z-70">
            <Logo/>
        </div>
        <div class="z-50 absolute top-0 bottom-0 right-0 left-0 w-screen h-screen">
            <MapTech/>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'application'
})
</script>

<style scoped>

</style>