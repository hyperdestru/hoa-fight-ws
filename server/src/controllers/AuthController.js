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
			const user = await User.create(req.body);
			const userJson = JSON.stringify(user);
			res.send({
				user: userJson,
				token: jwtSignUser(userJson)
			});
		} catch(error) {
			// BUG_28-06 : Ca tombe toujours dans ce catch quoiqu'il arrive
			res.status(400).send({
				error: "ERREUR LORS DU REGISTER",
			});
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
			res.status(400).send({
				error: "ERREUR LORS DU LOGIN",
			});	
		}
	}
}