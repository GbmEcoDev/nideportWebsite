<template>
    <div class="contador">
        <div class="color_fondo" :style="{ height: colorHeight }"></div>
        <div class="numero xs:text-4xl xs:leading-7 lg:text-6xl">{{ cantidad.toLocaleString() }} HECTAREAS </div>
    </div>
</template>

<script setup>
import { ref,onMounted, onBeforeUnmount, onActivated } from "vue"
const colorHeight = ref('0%');
const cantidad = ref(0);
let tiempo;
const numeroVisible = ref(false);
const intervalo = ref(null);

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      numeroVisible.value = true;
      if (!intervalo.value) {
        iniciarContador();
      }
    } else {
      numeroVisible.value = false;
      clearInterval(intervalo.value);
      intervalo.value = null;
      cantidad.value = 0;
      colorHeight.value = '0%';
    }
  });
};

const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.5, // Cambia este valor según tus necesidades
});

const iniciarContador = () => {
  if (intervalo.value) return; // Si ya hay un intervalo activo, salir de la función
  intervalo.value = setInterval(() => {
    cantidad.value += 354321;
    colorHeight.value = `${(cantidad.value / 45000000) * 95}%`;
    if (cantidad.value >= 45000000) {
      cantidad.value = 45000000;
      clearInterval(intervalo.value);
      intervalo.value = null;
    }
  }, 50);
};
onMounted(() => {
    observer.observe(document.querySelector('.numero'));
    iniciarContador();
});

/* onActivated(() => {
    cantidad.value = 0;
    colorHeight.value = '0%';
    iniciarContador();
  }); */

onBeforeUnmount(() => {
  observer.disconnect();
  clearInterval(intervalo.value);
});
</script>

<style scoped>
.contador {
  transform: rotate(180deg);
  margin: 0px;
  position: relative;
  height:4.1em;
}

.numero {
  height: 100%;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-family: sans-serif;
  color: #1c9577;
  position: absolute;
  transform: rotate(-180deg);
  mix-blend-mode: lighten;
    background-color: #e7f8f6;
  display: flex;
  justify-content: center;
  align-items: center;
}

.color_fondo {
  transition: 0.2s;
  transform-origin: bottom;
  position: absolute;
  display: block;
  height: 0%;
  width: 100%;
  height:3.9em;
  background-color: rgba(10, 190, 46, 0.796);
}
</style>