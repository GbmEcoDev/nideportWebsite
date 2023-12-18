<template>
    <section class="px-12 max-sm:px-3 scroll-snap-align-start">
    <AtomsContainer>
        <AtomsTitleH2 texte=" OBJETIVOS DEL PROYECTO" alignTxt="center" colorTxt="secondary"/>
        <p class="text-secondary my-8 text-center">Mediante la reforestación, el enriquecimiento de los bosques y la potenciación de la biodiversidad, restauramos los servicios ecosistémicos para las generaciones presentes y futuras, utilizando tecnología. Desarrollamos una solución basada en nueve pilares clave que abordan los retos que plantea la crisis climática actual:</p>

      <Carousel :items-to-show="carouselItemsToShow1" :wrap-around="true" :starting-from="1" :snap-align="'start'">
        <Slide key="1">
          <div class="carousel__item">
            <div class="flex-col justify-center items-center w-1/5 "><div class="h-20"><img src="/images/vcs.svg" class="mx-auto w-[58px]"/></div><hr class="mb-4"><p class="font-bold text-center text-[#006980] px-4">Verified Carbon Standard</p></div>
          </div>
        </Slide>
        <Slide key="2">
          <div class="carousel__item">
            <div class="flex-col items-center w-1/5"><div class="h-20"><img src="/images/ccb.svg" class="mx-auto w-[58px]"/></div><hr class="mb-4"><p class="font-bold text-center text-[#006980] px-4">Climate, Community & Biodiversity Standard</p></div>
          </div>
        </Slide>
        <Slide key="3">
          <div class="carousel__item">
            <div class="flex-col items-center w-1/5"><div class="h-20"><img src="/images/ifm.svg" class="mx-auto w-[58px]"/></div><hr class="mb-4"><p class="font-bold text-center text-[#006980] px-4">Improved Forest Management</p></div>
          </div>
        </Slide>
        <Slide key="4">
          <div class="carousel__item">
            <div class="flex-col items-center w-1/5"><div class="h-20"><img src="/images/perpetuity.svg" class="mx-auto w-[58px]"/></div><hr class="mb-4"><p class="font-bold text-center text-[#006980] px-4">Perpetuity Strategy</p></div>
          </div>
        </Slide>
        <Slide key="5">
          <div class="carousel__item">
            <div class="flex-col items-center w-1/5"><div class="h-20"><img src="/images/surveillance.svg" class="mx-auto w-[58px]"/></div><hr class="mb-4"><p class="font-bold text-center text-[#006980] px-4">Surveillance</p></div>
          </div>
        </Slide>  
      </Carousel>

      <Carousel :items-to-show="carouselItemsToShow2" :wrap-around="true" :starting-from="6" :snap-align="'start'">
        <Slide key="6">
          <div class="carousel__item">
            <div class="flex-col items-center w-1/5"><p class="font-bold text-center text-[#006980] px-4 text-6xl h-20 font-[Arial]">1500</p><hr class="mb-4"><p class="font-bold text-center text-[#006980] px-4">Local beneficiaries</p></div>
          </div>
        </Slide>
        <Slide key="7">
          <div class="carousel__item">
            <div class="flex-col items-center w-1/5"><p class="font-bold text-center text-[#006980] px-4 text-6xl h-20 font-[Arial]">100</p><hr class="mb-4"><p class="font-bold text-center text-[#006980] px-4">Years of ecological restoration</p></div>
          </div>
        </Slide>
        <Slide key="8">
          <div class="carousel__item">
            <div class="flex-col items-center w-1/5"><p class="font-bold text-center text-[#006980] px-4 text-6xl h-20 font-[Arial]">66</p><hr class="mb-4"><p class="font-bold text-center text-[#006980] px-4">Endemic Species</p></div>
          </div>
        </Slide> 
        <Slide key="9">
          <div class="carousel__item">
            <div class="flex-col items-center w-1/5"><p class="font-bold text-center text-[#006980] px-4 text-6xl h-20 font-[Arial]">10</p><hr class="mb-4"><p class="font-bold text-center text-[#006980] px-4">Global Endangered Species</p></div>
          </div>
        </Slide>
        <Slide key="10">
          <div class="carousel__item">
            <div class="flex-col items-center w-1/5"><p class="font-bold text-center text-[#006980] px-4 text-6xl h-20 font-[Arial]">0</p><hr class="mb-4"><p class="font-bold text-center text-[#006980] px-4">Forest fires, poaching and illegal logging </p></div>
          </div>
        </Slide>
      </Carousel>
      <div class="flex justify-center items-center mb-24"><AtomsLinkBtn href="#" variant="primary"> Saber Mas </AtomsLinkBtn></div>
    </AtomsContainer>
    <AtomsContainer>
        <AtomsTitleH2 texte=" Reportes del proyecto" alignTxt="center" colorTxt="primary"/>
        <div class="w-full flex justify-center">
            <div class="flex justify-between  gap-10 py-10 px-60 sm:px-10 w-11/12 max-sm:w-full max-sm:flex-col max-sm:px-2">
                <AtomsLinkBtn href="#" variant="primary"> Forest management </AtomsLinkBtn>
                <AtomsLinkBtn href="#" variant="primary"> Project summary </AtomsLinkBtn>
                <AtomsLinkBtn href="#" variant="primary"> Community work </AtomsLinkBtn>
            </div>
        </div>
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
  
  // Define breakpoints
  const breakpoints = {
    mobile: 767,
  };
  
  const updateItemsToShow = () => {
    carouselItemsToShow1.value = window.innerWidth >= breakpoints.mobile ? 5 : 2.1;
    carouselItemsToShow2.value = window.innerWidth >= breakpoints.mobile ? 5 : 2.1;
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
  