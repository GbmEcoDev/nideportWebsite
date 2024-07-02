<template>
    <div class="relative overflow-hidden bg-cover bg-no-repeat h-full w-full z-0">
      <video
        v-if="isDesktop"
        autoplay
        loop
        muted
        class="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        :poster="poster"
      >
        <source :src="videoDesktop" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        v-else
        autoplay
        loop
        muted
        preload="none"
        class="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        :poster="poster"
      >
        <source :src="videoMobile" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </template>
  <script setup>
    const { isDesktop } = useDevice();
    const props = defineProps({
    videoDesktop: {
      type: String,
      required: true,
    },
    videoMobile: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
  });
  </script>
  <style scoped>
  </style>
  