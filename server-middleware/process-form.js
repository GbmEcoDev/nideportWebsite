// server-middleware/process-form.js

import express from 'express';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/process.php', (req, res) => {
  const { nombre, empresa, telefono, email, terminos, notificaciones } = req.body;

  // Aquí puedes agregar la lógica para enviar un correo electrónico o almacenar los datos como desees.
  // Ejemplo de cómo puedes imprimir los datos en la consola:
  console.log({
    nombre,
    empresa,
    telefono,
    email,
    terminos,
    notificaciones,
  });

  // Puedes agregar aquí la lógica para enviar un correo electrónico usando PHPMailer u otro servicio.

  // Respuesta al cliente (puedes personalizar según tus necesidades)
  res.status(200).json({ message: 'Datos recibidos correctamente' });
});

// Exporta el middleware
export default {
  path: '/api',
  handler: app,
};
