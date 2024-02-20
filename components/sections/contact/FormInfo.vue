<template>
  <AtomsContainer class="scroll-snap-align-start">
    <div class="mx-32 max-sm:mx-1">
      <AtomsTitleH4 :texte="$t('contact_form_title')"></AtomsTitleH4>
      <p class="text-left text-base text-secondary my-4  dark:text-white">{{$t('contact_form_legend')}}</p>
    </div>
    <div class="mx-32 mt-8 max-sm:mx-1">
      <form @submit.prevent="submit(form)" class="px-8 pt-6 pb-8 mb-4 max-sm:px-0"><!--   -->
        <div class="mb-4">
          <label for="nombre" class="block text-secondary text-sm mb-2  dark:text-white">{{$t('contact_form_label1')}}</label>
          <input type="text" id="nombre" v-model="form.nombre" class="border-b border-secondary text-2xl w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline" required>
          <p v-if="errors.nombre" class="text-red-500 text-xs">{{ errors.nombre }}</p>
        </div>
  
        <div class="mb-4">
          <label for="empresa" class="block text-secondary text-sm mb-2  dark:text-white">{{$t('contact_form_label2')}}</label>
          <input type="text" id="empresa" v-model="form.empresa" class="border-b border-secondary text-2xl w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline" required>
          <p v-if="errors.empresa" class="text-red-500 text-xs">{{ errors.nombre }}</p>
        </div>
  
        <div class="mb-4">
          <label for="telefono" class="block text-secondary text-sm mb-2  dark:text-white">{{$t('contact_form_label3')}}</label>
          <input type="tel" id="telefono" v-model="form.telefono" class="border-b border-secondary text-2xl w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline" required>
          <p v-if="errors.telefono" class="text-red-500 text-xs">{{ errors.nombre }}</p>
        </div>
  
        <div class="mb-4">
          <label for="email" class="block text-secondary text-sm mb-2  dark:text-white">{{$t('contact_form_label4')}}</label>
          <input type="email" id="email" v-model="form.email" class="border-b border-secondary text-2xl w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline" required>
          <p v-if="errors.email" class="text-red-500 text-xs">{{ errors.nombre }}</p>
        </div>
  
        <div class="mb-4">
          <label class="flex items-center">
            <input type="checkbox" v-model="form.terminos" class="mr-2 leading-tight">
            <span class="text-secondary text-sm  dark:text-white">
              {{$t('contact_form_label5')}}
            </span>
          </label>
        </div>
  
        <div class="mb-6">
          <label class="flex items-center">
            <input type="checkbox" v-model="form.notificaciones" class="mr-2 leading-tight">
            <span class="text-secondary text-sm  dark:text-white">
              {{$t('contact_form_label6')}}
            </span>
          </label>
        </div>
  
        <div class="flex items-center justify-center">
          <button aria-label="Send" type="submit"  :disabled="waiting" class="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <template v-if="waiting">{{$t('contact_form_button_act')}}</template>
            <template v-else>{{$t('contact_form_button')}}</template>
          </button>
          <p v-if="errors">error</p>
          <p v-if="success">ok</p>
        </div>
      </form>
    </div>
    
  </AtomsContainer>
  </template>
  <script setup>
import { ref, computed, watch } from 'vue';
//import { useMail } from 'nuxt/mail'; // Import the useMail utility

const mailModule = useMail(); // Access the nuxt-mail module

const form = ref({
  nombre: '',
  empresa: '',
  telefono: '',
  email: '',
  terminos: false,
  notificaciones: false,
});

const errors = ref('');
const success = ref('');
const waiting = ref(false);

// Validation rules (enhanced)
const rules = {
  nombre: { required: true },
  empresa: { required: true },
  telefono: { required: true },
  email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }, // Email validation
  terminos: { required: true }, // Ensure terms agreement
};

// Enhanced validation
const isValid = computed(() => {
  errors.value = '';

  for (const field in rules) {
    const rule = rules[field];

    if (rule.required && !form.value[field]) {
      errors.value += `${field} is required\n`;
      return false;
    }

    if (rule.pattern && !rule.pattern.test(form.value[field])) {
      errors.value += `${field} format is invalid\n`;
      return false;
    }
  }

  return true;
});

const submit = async (form) => {
  if (!isValid.value) {
    return; // Prevent submission if validation fails
  }

  waiting.value = true;

  try {
    await mailModule.$send({
      message: {
        from: 'Tu Nombre <[ariel.robles@gmb.eco]>', // Replace with your name and email
        to: 'arielrobles@outlook.com', // Replace with recipient's email
        subject: 'Contacto desde tu sitio web',
        html: `
          Nombre: ${form.value.nombre}<br>
          Empresa: ${form.value.empresa}<br>
          Teléfono: ${form.value.telefono}<br>
          Email: ${form.value.email}<br>
          Terminos: ${form.value.terminos ? 'Aceptado' : 'No aceptado'}<br>
          Notificaciones: ${form.value.notificaciones ? 'Aceptado' : 'No aceptado'}<br>
        `,
      },
    });

    success.value = '¡Mensaje enviado! Gracias por contactarnos.';
  } catch (error) {
    errors.value = error.message;
  } finally {
    waiting.value = false;
  }
};

// Clear form data on successful submission
watch(success, () => {
  if (success.value) {
    form.value = {
      nombre: '',
      empresa: '',
      telefono: '',
      email: '',
      terminos: false,
      notificaciones: false,
    };
  }
});

</script>