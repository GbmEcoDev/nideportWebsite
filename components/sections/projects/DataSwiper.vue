<template>
    <section>
      <AtomsContainer>
        <Swiper
          :slides-per-view="1"
          :space-between="16" 
          :breakpoints="{ 768: { slidesPerView: 1.5 } }"
        >
          <SwiperSlide>
            <!-- Contenido de la diapositiva 1 -->1
            <!-- ... -->
          </SwiperSlide>
          <SwiperSlide>
            <!-- Contenido de la diapositiva 2 -->2
            <!-- ... -->
          </SwiperSlide>
          <SwiperSlide>
            <!-- Contenido de la diapositiva 3 -->3
            <!-- ... -->
          </SwiperSlide>
        </Swiper>
      </AtomsContainer>
    </section>
  </template>
  <script setup>
// En tu componente .vue o .vue.ts
import { Swiper, SwiperSlide } from 'swiper/vue';

// Importa los estilos de Swiper (puedes personalizarlo según tus necesidades)
import 'swiper/swiper-bundle.css';

</script>
  