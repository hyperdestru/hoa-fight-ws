const Joi = require('@hapi/joi');

let errorMessages = {
	username: 'Pseudo non valide',
	email: 'Email non valide',
	password: 'Mot de passe non valide',
	repeatPassword: 'Mot de passe non identique',
	other: 'Informations non valides'
}

module.exports = {
	login(req, res, next) {

		const schema = Joi.object({

			email: Joi.string().email(),
			password: Joi.string()

		});

		const { error } = schema.validate(req.body);

		if (error) {
			let errorNature = error.details[0].context.key;

			switch (errorNature) {
				case 'email':
					res.status(400).send({
						error: errorMessages.email,
						errorType: errorNature
					});
					break;

				case 'password':
					res.status(400).send({
						error: errorMessages.password,
						errorType: errorNature
					});
					break;

				default:
					res.status(400).send({
						error: errorMessages.other,
						errorType: errorNature
					});
			}
		} else {
			next();
		}
	},

	register(req, res, next) {

		const schema = Joi.object({

			username: Joi.string().alphanum().min(3).max(20).required(),
			email: Joi.string().email({
				minDomainSegments: 2,
				tlds: { allow: ['com', 'fr'] }
			}),
			password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),
			repeatPassword: Joi.ref('password')

		}).with('password', 'repeatPassword');

		const { error } = schema.validate(req.body);

		if (error) {
			let errorNature = error.details[0].context.key;

			switch (errorNature) {
				case 'username':
					res.status(400).send({
						error: errorMessages.username,
						errorType: errorNature
					});
					break;

				case 'email':
					res.status(400).send({
						error: errorMessages.email,
						errorType: errorNature
					});
					break;

				case 'password':
					res.status(400).send({
						error: errorMessages.password,
						errorType: errorNature
					});
					break;

				case 'repeatPassword':
					res.status(400).send({
						error: errorMessages.repeatPassword,
						errorType: errorNature
					});
					break;

				default:
					res.status(400).send({
						error: errorMessages.other,
						errorType: errorNature
					});
			}
		} else {
			next();
		}
	}
}