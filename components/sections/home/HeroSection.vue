<template>
    <div class="relative overflow-hidden bg-cover bg-no-repeat h-screen z-0" style="
        background-position: 50%;
        background-image: url('/images/hero-home.webp');
        background-size: cover;
      ">
    <div
      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.35)] bg-fixed">
        
          <AtomsContainer><div class="flex h-full items-center justify-center mt-24">
            <div class="flex max-sm:flex-col w-10/12 gap-4">
                <div class="flex justify-end max-sm:justify-center w-[300px]"><img src="/images/logo-imago.webp" class="max-w-none w-[300px] h-[300px] max-sm:w-[150px] max-sm:h-[150px]" data-aos="fade-up"></div>
                <div class="text-left text-white md:px-10 col-span-2">
                  <h1 class="mt-20  mb-2 text-4xl font-bold tracking-tight md:text-4xl xl:text-5x1 max-sm:text-center max-sm:mt-2" data-aos="fade-left">
                    {{$t('home_title')}}
                  </h1>
                  <p class=" max-sm:text-center mb-16">Compensa la huella de carbono y cuidemos el ambiente</p>
                  <div class="flex items-center max-sm:justify-center relative" data-aos="fade-left">
                          <AtomsLinkBtn :href="localePath({ name: 'projects' })" variant="primary">
                              Únete ahora
                          </AtomsLinkBtn>
                  </div>
                </div>
            </div></div>
          </AtomsContainer>
        
    </div>
  </div>
</template>

<script setup>

const localePath = useLocalePath()
</script>

<style scoped>

</style>