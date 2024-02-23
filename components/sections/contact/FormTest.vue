<template>
    <div>
      <div>
        <input v-model="email" type="email" placeholder="Correo electrónico">
        <input v-model="nombre" type="text" placeholder="nombre">
        <button @click="sendEmail">Enviar</button>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const config = useRuntimeConfig();
const email = ref('');
const nombre = ref('');

const sendEmail=()=>{
//function sendEmail() {
  Email.send({
    SecureToken:config.public.SMTPTOKEN,
        To:config.public.CONTACTMAILTO,
        From : config.public.CONTACTMAILFROM,
        Subject : "Contacto desde Nideport website",
        Body : `Nombre: ${nombre.value}\nCorreo electrónico: ${email.value}`
  }).then(message => alert(message));
}
</script>