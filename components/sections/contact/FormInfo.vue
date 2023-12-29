<template>
  <AtomsContainer class="scroll-snap-align-start">
    <div class="mx-32 max-sm:mx-1">
      <AtomsTitleH4 texte="Contactar a un representante"></AtomsTitleH4>
      <p class="text-left text-base text-secondary my-4  dark:text-white">Completa tus datos</p>
    </div>
    <div class="mx-32 mt-8 max-sm:mx-1">
      <form  @submit.prevent="submit(form)" class="px-8 pt-6 pb-8 mb-4 max-sm:px-0">
        <div class="mb-4">
          <label for="nombre" class="block text-secondary text-sm mb-2  dark:text-white">Tu nombre:</label>
          <input type="text" id="nombre" v-model="form.nombre" class="border-b border-secondary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline" required>
        </div>
  
        <div class="mb-4">
          <label for="empresa" class="block text-secondary text-sm mb-2  dark:text-white">Tu empresa:</label>
          <input type="text" id="empresa" v-model="form.empresa" class="border-b border-secondary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline" required>
        </div>
  
        <div class="mb-4">
          <label for="telefono" class="block text-secondary text-sm mb-2  dark:text-white">Tu teléfono:</label>
          <input type="tel" id="telefono" v-model="form.telefono" class="border-b border-secondary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline" required>
        </div>
  
        <div class="mb-4">
          <label for="email" class="block text-secondary text-sm mb-2  dark:text-white">Tu email:</label>
          <input type="email" id="email" v-model="form.email" class="border-b border-secondary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline" required>
        </div>
  
        <div class="mb-4">
          <label class="flex items-center">
            <input type="checkbox" v-model="form.terminos" class="mr-2 leading-tight">
            <span class="text-secondary text-sm  dark:text-white">
              Acepto los términos y condiciones
            </span>
          </label>
        </div>
  
        <div class="mb-6">
          <label class="flex items-center">
            <input type="checkbox" v-model="form.notificaciones" class="mr-2 leading-tight">
            <span class="text-secondary text-sm  dark:text-white">
              Acepto recibir notificaciones
            </span>
          </label>
        </div>
  
        <div class="flex items-center justify-center">
          <button type="submit" class="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <template v-if="waiting">enviado</template>
			      <template v-if="!waiting">enviar</template>
          </button>
          <p v-if="errors"> error.</p>
      
		      <p v-if="succsess"> envio!</p>
        </div>
      </form>
    </div>

  </AtomsContainer>
  </template>

  <script setup>

const form = ref({
	nombre: '',
	empresa: '',
  telefono:'',
	email: '',
	terminos: '',
  notificaciones: '',
});

const errors = ref(false);
const succsess = ref(false);
const waiting = ref(false);

async function submit(form) {
	this.waiting = true;
	await $fetch('http://localhost:3000/api/contact', {
		method: 'POST',
		body: form,
	})
		.then(() => {
			this.errors = false;
			this.succsess = true;
			this.waiting = false;
			this.form = {
        nombre: '',
        empresa: '',
        telefono:'',
        email: '',
        terminos: '',
        notificaciones: '',
			};
		})
		.catch((error) => {
			console.error('Error en la solicitud:', error);
			this.errors = true;
			this.succsess = false;
			this.waiting = false;
		});
}
</script>
  <style scoped>h2{
    text-align: left;
  }</style>