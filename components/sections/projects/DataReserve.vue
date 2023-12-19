<template>
    <section class="px-12 max-sm:px-0 scroll-snap-align-start">
        <Carousel :items-to-show="carouselItemsToShow" :wrap-around="true" :starting-from="1" :snap-align="'start'">
          <Slide key="1">
            <div class="carousel__item ">
                <div class="rounded-[32px] bg-primary bg-opacity-10 p-8 flex-col items-center w-full mx-2">
                    <div class="w-full">
                        <img src="/images/objetive-1.svg" alt="" class="pb-5 mx-auto">
                    </div>
                    <AtomsTitleH2 texte="Composición del bosque" alignTxt="center" colorTxt="secondary" sizeTxt="text-3xl" weightTxt="normal" />
                    <p class="text-sm text-center py-8 text-gray-500 dark:text-white">22,878 hectares of Atlantic Forest</p>
                </div>
            </div>
          </Slide>
          <Slide key="2">
            <div class="carousel__item">
                <div class="rounded-[32px] bg-primary bg-opacity-10 p-8 flex flex-col justify-items-center w-full mx-2">
                    <div class="w-full">
                        <img src="/images/objetive-2.svg" alt="" class="pb-5 mx-auto">
                    </div>
                    <AtomsTitleH2 texte="Biodiversidad" alignTxt="center" colorTxt="secondary" weightTxt="normal" />
                    <p class="text-sm text-center py-8 text-gray-500 dark:text-white">3,000 vascular species · 500 vertebrate species · 300 bird species · 116 mammal species</p>
                </div>
            </div>
          </Slide>
          <Slide key="3">
            <div class="carousel__item">
                <div class="rounded-[32px] bg-primary bg-opacity-10 p-8 flex flex-col justify-items-center w-full mx-2">
                    <div class="w-full">
                        <img src="/images/objetive-3.svg" alt="" class="pb-5 mx-auto">
                    </div>
                    <AtomsTitleH2 texte="Sumidero de carbono" alignTxt="center" colorTxt="secondary" weightTxt="normal" />
                    <p class="text-sm text-center py-8 text-gray-500 dark:text-white">2,455,977 tons of total Carboncaptured in forest biomass</p>
                </div>
            </div>
          </Slide>
        </Carousel>
    </section>
  </template>
  
  <script setup lang="ts">
  import { Carousel, Slide } from 'vue3-carousel';
  import 'vue3-carousel/dist/carousel.css';
  import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
  
  const name = 'WrapAround';
  
  const carouselItemsToShow = ref(1.2);
  
  // Define breakpoints
  const breakpoints = {
    mobile: 767,
  };
  
  const updateItemsToShow = () => {
    carouselItemsToShow.value = window.innerWidth >= breakpoints.mobile ? 3 : 1.2;
  };
  
  // Update on window resize
  onMounted(() => {
    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateItemsToShow);
  });
  
  </script>
  <style scoped>
  .carousel__item {
    display: flex;
    gap: 1rem; 
  }
  </style>