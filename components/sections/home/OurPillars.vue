<template>
    <section class="relative scroll-snap-align-start">
       <AtomsContainer></AtomsContainer>
            <div class="flex items-center justify-center py-20 px-40 my-20 bg-primary bg-opacity-10 max-sm:px-10" data-aos="flip-up">
                <AtomsTitleH2 alignTxt="center" colorTxt="secondary" texte="NUESTRO OBJETIVO ES RECUPERAR 45 MILLONES DE HECTÁREAS Y GARANTIZAR SU CONSERVACIÓN A LARGO PLAZO" />
            </div>
            <div class="flex justify-center items-center pb-16 h-[454px] max-sm:flex-col">
                <div class="flex items-center justify-center px-20 w-2/6 h-full max-sm:w-full max-sm:px-2 max-sm:my-8" data-aos="fade-right" style="
                        background-position: 50%;
                        background-repeat:no-repeat;
                        background-image: url('/images/Bg-Pillar.svg');
                        background-size: contain;
                    ">
                    <AtomsTitleH3 texte="Nuestros pilares"/>
                </div>
                <div class="relative w-4/6 max-sm:w-11/12 h-full">
                    <div 
                        class="flex absolute top-1/2 -left-5 -translate-y-1/2 z-10 transition duration-300 ease-linear" 
                        :class="prevIsVisible?'visible opacity-100':'insisible opacity-0'">
                        <AtomsSwiperNavButton @click="scrollToLeft()">
                            <IconsPrevIco />
                        </AtomsSwiperNavButton>
                    </div>
                    <div  
                        class="flex absolute top-1/2 -right-5 -translate-y-1/2 z-10 transition duration-300 ease-linear" 
                        :class="nextIsVisible?'visible opacity-100':'insisible opacity-0'">
                        <AtomsSwiperNavButton @click="scrollToRight()">
                            <IconsNextIco />
                        </AtomsSwiperNavButton>
                    </div>
                    <div data-slide-recent @scroll="initScroll()" class="flex items-stretch gap-5 overflow-hidden overflow-x-auto invisible-scroll h-full max-sm:w-11/12">
                            <div data-aos="fade-up"
                                class="w-9/12 min-w-[91.666667%] xs:w-80 xs:min-w-[20rem] md:w-2/3 md:min-w-[66.66666%] lg:w-2/4 lg:min-w-[33%] h-full hover:rotate-1" @click="() => toggleModal('PillarOne')" >
                              <CardsNidePillar title="Restauración de ecosistemas" cover-image="/images/one_pillar.webp" />
                            </div>
                            <div data-aos="fade-up"
                                class="w-9/12 min-w-[91.666667%] xs:w-80 xs:min-w-[20rem] md:w-2/3 md:min-w-[66.66666%] lg:w-2/4 lg:min-w-[33%] h-full hover:rotate-1" @click="() => toggleModal('PillarTwo')">
                             <CardsNidePillar title="Conservación de la biodiversidad" cover-image="/images/two_pillar.webp" />
                            </div>
                            <div data-aos="fade-up"
                                class="w-9/12 min-w-[91.666667%] xs:w-80 xs:min-w-[20rem] md:w-2/3 md:min-w-[66.66666%] lg:w-2/4 lg:min-w-[33%] h-full hover:rotate-1" @click="() => toggleModal('PillarTree')">
                                <CardsNidePillar title="Comunidades locales" cover-image="/images/tree_pillar.webp" />
                            </div>
                            <div data-aos="fade-up"
                                class="w-9/12 min-w-[91.666667%] xs:w-80 xs:min-w-[20rem] md:w-2/3 md:min-w-[66.66666%] lg:w-2/4 lg:min-w-[33%] h-full hover:rotate-1" @click="() => toggleModal('PillarFour')">
                                <CardsNidePillar title="Acción climatica y tecnología" cover-image="/images/four_pillar.webp" />
                            </div>
                            <div data-aos="fade-up"
                                class="w-9/12 min-w-[91.666667%] xs:w-80 xs:min-w-[20rem] md:w-2/3 md:min-w-[66.66666%] lg:w-2/4 lg:min-w-[33%] h-full hover:rotate-1" @click="() => toggleModal('PillarFive')">
                                <CardsNidePillar title="Seguridad y prevención" cover-image="/images/five_pillar.webp" />
                            </div>
                    </div>
                </div>
            </div>

             <!-- Modal -->
             <Modal @close="() => toggleModal(null)" :modalActive="modalActive" :content="modalContent || {}" />

    </section>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import Modal from '@/components/Modal.vue'
import ModalsPillarOne from '@/components/modals/PillarOne.vue';
import ModalsPillarTwo from '@/components/modals/PillarTwo.vue';
import ModalsPillarTree from '@/components/modals/PillarTree.vue';
import ModalsPillarFour from '@/components/modals/PillarFour.vue';
import ModalsPillarFive from '@/components/modals/PillarFive.vue';
const modalActive = ref(false);
const modalContent = ref(null);

const toggleModal = (content: string | null) => {
  modalContent.value = content ? modals.find((modal) => modal.key === content)?.content || null : null;
  modalActive.value = !modalActive.value;
};

const modals = [
  { key: 'PillarOne', content: ModalsPillarOne },
  { key: 'PillarTwo', content: ModalsPillarTwo },
  { key: 'PillarTree', content: ModalsPillarTree },
  { key: 'PillarFour', content: ModalsPillarFour },
  { key: 'PillarFive', content: ModalsPillarFive },
  // Agrega más modal según sea necesario
];

// Defino scroll pillars
const nextIsVisible = useState('nextIsVisible', () => false)
const prevIsVisible = useState('prevIsVisible', () => false)

let element:HTMLDivElement
if (typeof document !== "undefined") {
    element = document.querySelector("[data-slide-recent]") as HTMLDivElement
}

 function initScroll(): void {
    
    if (typeof element === "undefined" || element === null) {
        return;
    }

    const isAtStart = element.scrollLeft <= 5; 
    const isAtEnd = element.scrollLeft >= element.scrollWidth - element.offsetWidth - 5; 
    prevIsVisible.value = isAtStart ? false : true;
    nextIsVisible.value = isAtEnd ? false : true;
}

function scrollToLeft():void{
    if (typeof element === "undefined" || element === null) {
        return
    }
    element.scrollLeft -= element.clientWidth
}

function scrollToRight():void{
    if (typeof element === "undefined" || element === null) {
        return
    }
    element.scrollLeft += element.clientWidth
}

onMounted(() => {
    if (window !== null) {
        initScroll()
    }
});


</script>
<style>

</style>