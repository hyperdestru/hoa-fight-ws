const Joi = require('@hapi/joi');

module.exports = {
	register (req, res, next) {
		const schema = Joi.object({
			username: Joi.string().alphanum().min(5).max(20).required(),
			password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
			repeat_password: Joi.ref('password'),
			email: Joi.string().email({ 
				minDomainSegments: 3, 
				tlds: { allow: ['com', 'fr'] }
			})
		}).with('password', 'repeat_password');

		const { error, value } = schema.validate(req);
		
		if (error) {
			const errorNature = error.details[0].context.key;
			if (errorNature === 'email') {
				res.status(400).send({
					error: 'You must provide a valid email address'
				});
			} else if (errorNature === 'password') {
				res.status(400).send({
					error: 'You must provide a valid password'
				});
			} else {
				res.status(400).send({
					error: 'Invalid sign in information'
				});
			}
		} else {
			console.log(value);
			next();
		}
	}
}