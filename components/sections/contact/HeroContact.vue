<template>
    <div class="relative overflow-hidden bg-cover bg-no-repeat h-screen" style="
        background-position: 50%;
        background-image: url('/images/hero-contact.webp');
        background-size: cover;
      ">
    <div
      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.35)] bg-fixed">
        <div class="flex h-full items-center justify-center">
          <AtomsContainer>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                <div class="text-left text-white md:px-12 col-span-2">
                  <AtomsTitleH1 :texte="$t('contact_title')" data-aos="fade-left"></AtomsTitleH1>
                  <div class="flex items-center min-w-max relative" data-aos="fade-up">
                    <p class="w-8/12">Tenemos dos formas de que te unas a nuestra iniciativa y permitas que se aplique en distintas partes del mundo.</p>
                  </div>
                </div>
            </div>
          </AtomsContainer>
        </div>
    </div>
  </div>
</template>
<script setup>
const localePath = useLocalePath()
</script>