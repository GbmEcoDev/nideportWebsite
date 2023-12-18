<template>
    <section class="p-20 xs:px-0 scroll-snap-align-start">
           
                <div class="flex items-center max-sm:flex-col max-sm:px-1 px-32 gap-4 ">
                    <div class="rounded-[24px] bg-primary bg-opacity-10 p-10 w-1/2 max-sm:w-11/12 max-sm:px-1" data-aos="zoom-out-right">
                        <AtomsTitleH4 texte="Adquirir créditos de carbono"></AtomsTitleH4>
                        <p class="text-center text-slate-400 text-base p-9 h-48 xs:px-2 xs:h-auto">
                            Una solución para luchar ante la crisis climática desde el ámbito empresarial y compensar las emisiones de gases de efecto invernadero.</p>
                        <div class="flex justify-center pb-3">
                            <AtomsLinkBtnLinear :href="localePath({ name: 'contact' })" variant="primary" widthBtn="w-2/3">
                              Mas informacion
                            </AtomsLinkBtnLinear>
                        </div>
                        <div class="flex justify-center pb-3">
                            <AtomsLinkBtn :href="localePath({ name: 'contact' })" variant="primary" widthBtn="w-2/3">
                              Contactar con un representante
                            </AtomsLinkBtn>
                        </div>
                    </div>
                    <div class="rounded-[24px] bg-primary bg-opacity-10 p-9 w-1/2 max-sm:w-11/12 max-sm:px-1" data-aos="zoom-out-left">
                        <AtomsTitleH4 texte="Colaboración de tierras"></AtomsTitleH4>
                        <p class="text-center text-slate-400 text-base p-10 h-48 xs:px-2 xs:h-auto">
                            Únete a nosotros en la promoción de prácticas efectivas de restauración de ecosistemas y desarrollo sostenible para beneficiar tanto a la biodiversidad como a las comunidades locales.
                        </p>
                        <div class="flex justify-center pb-3">
                            <AtomsLinkBtnLinear :href="localePath({ name: 'contact' })" variant="primary-outlined" widthBtn="w-2/3">
                              Mas informacion
                            </AtomsLinkBtnLinear>
                        </div>
                        <div class="flex justify-center pb-3">
                            <AtomsLinkBtn :href="localePath({ name: 'contact' })" variant="primary" widthBtn="w-2/3">
                              Contactar con un representante
                            </AtomsLinkBtn>
                        </div>
                    </div>
            </div>
    </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
