<template>
    <section class="pt-32 md:pt-32 relative bg-slate-100 bg-opacity-40 scroll-snap-align-start">
      <AtomsContainer>
        <AtomsTitleH2 alignTxt="center" colorTxt="primary" texte="TRUSTED BY LEADING BRANDS AROUND THE WORLD" />

          <div class="flex flex-wrap pt-10 md:pt-14 pb-20 md:pb-24 items-center">
              <template v-for="partner in partners" :key="partner.alt">
                  <div class="w-full md:w-1/2 lg:w-1/6 xl:w-1/6  flex justify-center" data-aos="fade-up">
                    <img :src="partner.logo" :alt="partner.alt" width="185px" />
                  </div>
              </template>
          </div>

      </AtomsContainer>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const partners = ref([
    { logo: '/images/partners/logo-embarca.png', alt: 'Embarca' },
    { logo: '/images/partners/logo-ecosecurities.png', alt: 'EcoSecurities' },
    { logo: '/images/partners/logo-drapercygnus.svg', alt: 'Draper Cygnus' },
    { logo: '/images/partners/logo-alma.png', alt: 'Alma' },
    { logo: '/images/partners/logo-climatech.png', alt: 'Climatech' },
    { logo: '/images/partners/logo-amcham.png', alt: 'AmCham' },
  ]);
  </script>