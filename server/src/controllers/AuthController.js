const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser(user) {
	const ONE_DAY = 60 * 60 * 24;
	return jwt.sign(user, config.authentication.jwtSecret, {
		expiresIn: ONE_DAY
	});
}

module.exports = {
	async register(req, res) {
		try {
			// C'est dans la methode User.create que l'INSERT SQL est realisé
			// L'objet user est peuplé des proprietés username, email, password
			// et repeatPassword
			const user = await User.create(req.body);
			// On transforme l'objet user en JSON. 
			const userJson = JSON.stringify(user);
			// res.send({
			// 	user: userJson,
			// 	token: jwtSignUser(userJson)
			// });
			res.send(userJson);
		} catch(err) {
			res.status(400).send({
				error: "Addresse email déjà existante"
			});
		}
	},

	async login(params) {
		bcrypt.compare(params.password, params.hash, function(err, result) {
			if (result) {
				//...
			} else {
				//...
			}
		});
	}
}