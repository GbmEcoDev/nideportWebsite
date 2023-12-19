<template>
    <div class="relative overflow-hidden bg-cover bg-no-repeat h-[41.5rem]" style="
        background-position: 50%;
        background-image: url('/images/hero-about.webp');
        background-size: cover;
      ">
    <div
      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden hero bg-fixed">
        <div class="flex h-full items-center justify-center ">
          <AtomsContainer>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="text-left text-white md:px-12 col-span-2" data-aos="fade-left">
                  <AtomsTitleH1 :texte="$t('about_title')"></AtomsTitleH1>
                </div>
            </div>
          </AtomsContainer>
        </div>
    </div>
  </div>
</template>
<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
</script>
<style scoped>
.hero{
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.80) 31.25%, rgba(0, 0, 0, 0.00) 100%);
}
</style>