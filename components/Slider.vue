<template>
    <Carousel v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">{{ slide }}</div>
      </Slide>
  
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'Breakpoints',
    components: {
      Carousel,
      Slide,
      Navigation,
    },
    data: () => ({
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 2.5,
          snapAlign: 'center',
        },
        // 1024 and up
        1024: {
          itemsToShow: 3.5,
          snapAlign: 'start',
        },
      },
    }),
  })
  </script> 
  <style scoped>
.carousel {
  position: relative;
  text-align: center;
  box-sizing: border-box;
  touch-action: pan-y;
  overscroll-behavior: none;
  width:100%;
  height: 100%;
}

.carousel.is-dragging {
  touch-action: none;
}

.carousel * {
  box-sizing: border-box;
}

.carousel__track {
  display: flex;
  padding: 0 !important;
  position: relative;
}

.carousel__viewport {
  overflow: hidden;
}

.carousel__sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

    .carousel__slide {
  scroll-snap-stop: auto;
  flex-shrink: 0;
  margin: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: #18a1ae;
  color: #fff;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
  </style>
