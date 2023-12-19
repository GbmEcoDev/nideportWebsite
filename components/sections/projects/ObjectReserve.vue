<template>
    <section class="bg-gradient-to-b from-[rgb(1,106,129)] to-[rgb(15,95,57)] p-24 max-sm:px-1 scroll-snap-align-start">
        <AtomsContainer>
            <AtomsTitleH2 texte="Conservación del Capital Natural" alignTxt="center" colorTxt="white" weightTxt="normal"/>
            <div class="mb-6"><p class="text-white text-base pt-10 text-center">
                Transformamos nuestra tierra en un entorno digital mediante tecnologías satelitales y drones.
                Desarrollamos un sistema de supervisión y control en colaboración con las autoridades regionales y locales, que nos permite prevenir incendios forestales, intrusiones, caza ilegal y tala descontrolada.
            </p></div>
            <Carousel :items-to-show="carouselItemsToShow1" :wrap-around="true" :starting-from="1" :snap-align="'start'" :navigation="true">
                <Slide  key="1" class=" overflow-hidden">
                    <!-- <nuxt-img :src="post.sourceUrl" alt="Cover image" width="1060" class="w-full aspect-square object-cover rounded-2xl" /> -->
                    <nuxt-img src="/images/obj-img-01.jpg" class="w-full aspect-square object-cover rounded-2xl mx-1" alt="" /> 
                </Slide>
                <Slide key="2" class=" overflow-hidden">
                    <nuxt-img src="/images/obj-img-02.jpg" class="w-full aspect-square object-cover rounded-2xl mx-1" alt="" /> 
                </Slide>
                <Slide key="3"  class=" overflow-hidden">
                    <nuxt-img src="/images/obj-img-03.jpg" class="w-full aspect-square object-cover rounded-2xl mx-1" alt="" /> 
                </Slide>
                <Slide key="4" class=" overflow-hidden">
                    <nuxt-img src="/images/obj-img-04.jpg" class="w-full aspect-square object-cover rounded-2xl mx-1" alt="" /> 
                </Slide>
            </Carousel>
        </AtomsContainer>
        <AtomsContainer class="mt-16">
            <AtomsTitleH2 texte="Comunidades locales" alignTxt="center" colorTxt="white" weightTxt="normal"/>
            <div class="mb-6"><p class="text-white text-base pt-10 text-center">
                El proyecto está situado cerca de la comunidad indígena de Tekoa Alecrin. Realizamos una investigación exhaustiva para comprender su cultura y estructura social, asegurándonos de respetar sus formas de interacción. Implementamos una Consulta Gratuita, Previa e Informada (CGPI) para establecer una relación colaborativa y explorar maneras de mejorar sus condiciones de vida.
            </p></div>
            <Carousel :items-to-show="carouselItemsToShow2" :wrap-around="true" :starting-from="1" :snap-align="'start'">
                <Slid key="5"  class=" overflow-hidden">
                    <nuxt-img src="/images/obj-img-05.jpg" class="w-full aspect-square object-cover rounded-2xl mx-1" alt="" /> 
                </Slid>
                <Slide key="6" class=" overflow-hidden">
                    <nuxt-img src="/images/obj-img-06.jpg" class="w-full aspect-square object-cover rounded-2xl mx-1" alt="" /> 
                </Slide>
                <Slide key="7" class=" overflow-hidden">
                    <nuxt-img src="/images/obj-img-07.jpg" class="w-full aspect-square object-cover rounded-2xl mx-1" alt="" /> 
                </Slide>
                <Slide key="8" class=" overflow-hidden">
                    <nuxt-img src="/images/obj-img-08.jpg" class="w-full aspect-square object-cover rounded-2xl mx-1" alt="" /> 
                </Slide>
            </Carousel>
        </AtomsContainer>
        <AtomsContainer class="mt-16">
            <AtomsTitleH2 texte="Ciudado de la bodiversidad" alignTxt="center" colorTxt="white" weightTxt="normal"/>
            <div class="mb-6"><p class="text-white text-base pt-10 text-center">
                Llevamos a cabo inventarios de fauna para identificar diversas especies y poblaciones, priorizando aquellas que contribuyen a formar un hábitat propicio para la prosperidad de la fauna nativa. Nuestra amplia gama de actividades nos permite obtener la certificación Clima, Comunidad y Biodiversidad (CCB) más alta, evidenciando nuestro compromiso con la sostenibilidad y la preservación de la biodiversidad.
            </p></div>
            <Carousel :items-to-show="carouselItemsToShow3" :wrap-around="true" :starting-from="1" :snap-align="'start'">
                <Slide key="9" class=" overflow-hidden">
                    <nuxt-img src="/images/obj-img-09.jpg" class="w-full aspect-square object-cover rounded-2xl mx-1" alt="" /> 
                </Slide>
                <Slide key="10" class=" overflow-hidden">
                    <nuxt-img src="/images/obj-img-10.jpg" class="w-full aspect-square object-cover rounded-2xl mx-1" alt="" /> 
                </Slide>
                <Slide key="11" class=" overflow-hidden">
                    <nuxt-img src="/images/obj-img-11.jpg" class="w-full aspect-square object-cover rounded-2xl mx-1" alt="" /> 
                </Slide>
                <Slide key="12" class=" overflow-hidden">
                    <nuxt-img src="/images/obj-img-12.jpg" class="w-full aspect-square object-cover rounded-2xl mx-1" alt="" /> 
                </Slide>
            </Carousel>
        </AtomsContainer>                
    </section>
</template>


<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const name = 'WrapAround';

const carouselItemsToShow1 = ref(2.1);
const carouselItemsToShow2 = ref(2.1);
const carouselItemsToShow3 = ref(2.1);

// Define breakpoints
const breakpoints = {
  mobile: 767,
};

const updateItemsToShow = () => {
  carouselItemsToShow1.value = window.innerWidth >= breakpoints.mobile ? 4 : 2.1;
  carouselItemsToShow2.value = window.innerWidth >= breakpoints.mobile ? 4 : 2.1;
  carouselItemsToShow3.value = window.innerWidth >= breakpoints.mobile ? 4 : 2.1;
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
  width: 100%;
  box-sizing: border-box;
}
</style>
