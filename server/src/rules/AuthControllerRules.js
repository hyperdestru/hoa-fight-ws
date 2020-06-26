const Joi = require('@hapi/joi');

module.exports = {
	register(req, res, next) {
		const schema = Joi.object({
			username: Joi.string().alphanum().min(5).max(20).required(),
			password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
			repeatPassword: Joi.ref('password'),
			email: Joi.string().email({ 
				minDomainSegments: 2, 
				tlds: { allow: ['com', 'fr'] }
			})
		}).with('password', 'repeatPassword');

		const { value, error } = schema.validate(req.body);
		
		if (error) {
			const errorNature = error.details[0].context.key;

			if (errorNature === 'email') {
				res.status(400).send({
					error: 'Veuillez entrer une addresse e-mail valide'
				});
			} else if (errorNature === 'password') {
				res.status(400).send({
					error: 'Veuillez entrer un mot de passe valide'
				});
			} else {
				res.status(400).send({
					error: 'Informations non valides'
				});
			}
		} else {
			next();
		}
	}
}