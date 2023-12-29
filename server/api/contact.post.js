import nodemailer from 'nodemailer';
import validator from 'validator';
const config = useRuntimeConfig();

const transporter = nodemailer.createTransport({
	host: config.MAILHOST,
	port: config.MAILPORT,
	auth: {
		user: config.MAILUSER,
		pass: config.MAILPASSWORD,
	},
});

export default defineEventHandler(async (event,response) => {
	try {
		/**/ const body = await readBody(event);

		await isValid(body)
			.then(async (data) => {
				const mail = transporter.sendMail({
					form: `"${data.nombre}" <${data.email}>`,
					to: config.CONTACTMAIL,
					subject: data.empresa,
					text: data.telefono,
					html: data.terminos,
				});

				console.log('Message sent: %s', mail.messageId);
				console.log('Preview URL: %s', nodemailer.getTestMessageUrl(mail));
				return Promise.resolve();
			})
			.catch((errors) => {
				console.log('error promesa',errors);
				return Promise.reject(errors);
			}); 

		return 'Gesendet!';
	} catch (error) {
		sendError(event, createError({ statusCode: 400, statusMessage: error }));
	}
});

async function isValid(body) {
	const errors = [];

	if (validator.isEmpty(body.email || ''))
		errors.push({
			field: 'email',
			error: 'Field is required.',
		});
	if (validator.isEmpty(body.nombre || ''))
		errors.push({ field: 'nombre', error: 'Field is required.' });
	if (validator.isEmpty(body.empresa || ''))
		errors.push({ field: 'empresa', error: 'Field is required.' });
	if (validator.isEmpty(body.telefono || ''))
		errors.push({ field: 'telefono', error: 'Field is required.' });
	if (!validator.isEmail(body.email || ''))
		errors.push({ field: 'email', error: 'Field should be a valid email.' });

	if (errors.length > 0) {
		return Promise.reject(errors);
	} else {
		return Promise.resolve({
			email: validator.normalizeEmail(body.email),
			telefono: validator.escape(body.telefono),
			nombre: validator.escape(body.nombre),
			empresa: validator.escape(body.empresa),
		});
	}
}
