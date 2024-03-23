<template>
    <div class="relative overflow-hidden lg:h-[22rem] xs:h-[22rem] sm:h-[22rem]">
    <div
      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
        <div class="flex h-full items-center justify-center">
          <AtomsContainer>
            <div class="">
                <div class="text-left text-secondary md:px-12">
                  <div class="flex items-center sm:justify-center xs:justify-center lg:justify-start w-10/12 mt-4 max-sm:w-full" data-aos="fade-up">
                    <p class=" text-[2.25rem] max-sm:text-base lg:text-left xs:text-center sm:text-center">{{$t('blog_subtitle')}}</p>
                  </div>
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
