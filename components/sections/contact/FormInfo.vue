<template>
  <AtomsContainer class="scroll-snap-align-start">
    <div class="mx-32 max-sm:mx-1">
      <AtomsTitleH4 texte="Contactar a un representante"></AtomsTitleH4>
      <p class="text-left text-base text-secondary my-4  dark:text-white">Completa tus datos</p>
    </div>
    <div class="mx-32 mt-8 max-sm:mx-1">
      <form @submit.prevent="submitForm" class="px-8 pt-6 pb-8 mb-4 max-sm:px-0">
        <div class="mb-4">
          <label for="nombre" class="block text-secondary text-sm mb-2  dark:text-white">Tu nombre:</label>
          <input type="text" id="nombre" v-model="nombre" class="border-b border-secondary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline" required>
        </div>
  
        <div class="mb-4">
          <label for="empresa" class="block text-secondary text-sm mb-2  dark:text-white">Tu empresa:</label>
          <input type="text" id="empresa" v-model="empresa" class="border-b border-secondary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline" required>
        </div>
  
        <div class="mb-4">
          <label for="telefono" class="block text-secondary text-sm mb-2  dark:text-white">Tu teléfono:</label>
          <input type="tel" id="telefono" v-model="telefono" class="border-b border-secondary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline" required>
        </div>
  
        <div class="mb-4">
          <label for="email" class="block text-secondary text-sm mb-2  dark:text-white">Tu email:</label>
          <input type="email" id="email" v-model="email" class="border-b border-secondary w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline" required>
        </div>
  
        <div class="mb-4">
          <label class="flex items-center">
            <input type="checkbox" v-model="terminos" class="mr-2 leading-tight">
            <span class="text-secondary text-sm  dark:text-white">
              Acepto los términos y condiciones
            </span>
          </label>
        </div>
  
        <div class="mb-6">
          <label class="flex items-center">
            <input type="checkbox" v-model="notificaciones" class="mr-2 leading-tight">
            <span class="text-secondary text-sm  dark:text-white">
              Acepto recibir notificaciones
            </span>
          </label>
        </div>
  
        <div class="flex items-center justify-center">
          <button type="submit" class="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Enviar
          </button>
        </div>
      </form>
    </div>
    <el-dialog :visible.sync="dialogVisible" title="Respuesta del Servidor">
      <p>{{ responseMessage }}</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cerrar</el-button>
      </span>
    </el-dialog>
  </AtomsContainer>
  </template>

  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { ElDialog, ElButton } from 'element-plus';

  const nombre = ref('');
  const empresa = ref('');
  const telefono = ref('');
  const email = ref('');
  const terminos = ref(false);
  const notificaciones = ref(false);
  const responseMessage = ref('');
  const dialogVisible = ref(false);
  const router = useRouter();

  const submitForm = async () => {
    try {
      const response = await import('axios').then(({ default: axios }) => {
        return axios.post('/api/process.php', {
          nombre: nombre.value,
          empresa: empresa.value,
          telefono: telefono.value,
          email: email.value,
          terminos: terminos.value,
          notificaciones: notificaciones.value,
        });
      });

      console.log(response.data.message);
      // Manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito en la interfaz de usuario.
      // Actualiza el mensaje de éxito en la interfaz de usuario
      responseMessage.value = response.data.message;
      // Muestra el popup
      dialogVisible.value = true;
      
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      // Mostrar un mensaje de error en la interfaz de usuario.
    }
  };
  </script>
  <style scoped>h2{
    text-align: left;
  }</style>