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
			// Ce catch ne fonctionne pas, le serveur crash à l'erreur SQL
			// dans User.create si par exemple l'email existe dejà
			res.status(400).send({
				error: "Un compte existe déjà avec cette addresse email"
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