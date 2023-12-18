<template>
    <div class="relative overflow-hidden bg-cover bg-no-repeat h-screen" style="
        background-position: 50%;
        background-image: url('/images/bg-blog.webp');
        background-size: cover;
      ">
    <div
      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.35)] bg-fixed">
        <div class="flex h-full items-center justify-center">
          <AtomsContainer>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                <div class="text-left text-white md:px-12 col-span-2" data-aos="fade-left">
                  <AtomsTitleH1 :texte="$t('blog_title')"></AtomsTitleH1>
                    <p class="text-left max-sm:text-center">Conoce nuestras actividades.</p>
                </div>
            </div>
          </AtomsContainer>
        </div>
    </div>
  </div>
</template>
<script setup>
  const { locale } = useI18n()
</script>