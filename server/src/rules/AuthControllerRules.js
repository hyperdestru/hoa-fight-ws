const Joi = require('@hapi/joi');

let errorMessages = {
	username: 'Veuillez entrer un pseudo valide',
	email: 'Veuillez entrer un email valide',
	password: 'Veuillez entrer un mot de passe valide',
	repeatPassword: 'Veuillez entrer un mot de passe identique',
	other: 'Veuillez entrer des informations valides'
}

module.exports = {
	register(req, res, next) {
		const schema = Joi.object({
			username: Joi.string().alphanum().min(5).max(20).required(),
			password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),
			repeatPassword: Joi.ref('password'),
			email: Joi.string().email({ 
				minDomainSegments: 2, 
				tlds: { allow: ['com', 'fr'] }
			})
		}).with('password', 'repeatPassword');

		const { value, error } = schema.validate(req.body);
		
		if (error) {
			let errorNature = error.details[0].context.key;
			
			switch(errorNature) {
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
					});
			}
		} else {
			next();
		}
	}
}