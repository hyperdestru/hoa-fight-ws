const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser(user) {
	const ONE_WEEK = 60 * 60 * 24 * 7;
	return jwt.sign(
		{
			exp: ONE_WEEK, 
			data: user
		}, 
		config.authentication.jwtSecret
	);
}

module.exports = {
	async register(req, res) {
		try {
			const user = await User.create(req.body);
			const userJson = JSON.stringify(user);

			res.send({
				user: userJson,
				token: jwtSignUser(userJson)
			});

		} catch (error) {
			throw error;
		}
	},

	async login(req, res) {
		try {
			const user = await User.findOne(req.body);
			const userJson = JSON.stringify(user);
			
			res.send({
				user: userJson,
				token: jwtSignUser(userJson)
			});

		} catch (error) {
			res.status(403).send({
				error: "Mot de passe erroné",
				errorType: "password"
			});
		}
	}
}