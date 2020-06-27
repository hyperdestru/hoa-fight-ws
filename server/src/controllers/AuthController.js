const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser(user) {
	const ONE_WEEK = 60 * 60 * 24 * 7;
	return jwt.sign(user, config.authentication.jwtSecret, {
		expiresIn: ONE_WEEK
	});
}

module.exports = {
	async register(req, res) {
		try {
			// Undefined
			const user = await User.create(req.body);
			// Undefined
			const userJson = JSON.stringify(user);
			res.send({
				user: userJson,
				token: jwtSignUser(userJson)
			});
		} catch(error) {
			res.status(400).send({
				error: "Un compte existe déjà avec cette addresse email",
				errorType: "alreadyExist"
			});
		}
	},

	async login(params) {
		
	}
}