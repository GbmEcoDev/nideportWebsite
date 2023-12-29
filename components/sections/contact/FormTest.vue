<template>
	<form @submit.prevent="submit(form)">
		<div class="input-wrapper">
			<label for="email">E-Mail:</label>
			<input required v-model="form.email" type="email" name="email" />
		</div>
		<div class="input-wrapper">
			<label for="name">nombre</label>
			<input required v-model="form.name" type="text" name="name" />
		</div>
		<div class="input-wrapper">
			<label for="subject">asunto</label>
			<input v-model="form.subject" type="text" name="subject" />
		</div>
		<div class="input-wrapper">
			<label for="message">mensaje</label>
			<textarea
				required
				v-model="form.message"
				type="text"
				name="message"></textarea>
		</div>
		<button type="submit">
			<template v-if="waiting">enviado</template>
			<template v-if="!waiting">enviar</template>
		</button>
		<p v-if="errors"> error.</p>
		<p v-if="succsess"> envio!</p>
	</form>
</template>

<script setup>
const form = ref({
	name: '',
	email: '',
	subject: '',
	message: '',
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
				name: '',
				email: '',
				subject: '',
				message: '',
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

<style scoped>
form {
	width: 30rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
}
.input-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
}
label {
    font-size: 1rem;
}
input,
textarea {
    border: none;
    border-radius: 0.5rem;
    margin: 0.2rem 0 0 0;
    background-color: rgba(75, 164, 135, 0.15);
    padding: 1rem;
    color: black;
}
textarea {
    min-height: 10rem;
}

button {
    border: none;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color:blue;
    color: red;
}

</style>
