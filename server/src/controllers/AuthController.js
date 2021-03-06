const User = require('../models/User');

module.exports = {
	async register(req, res) {
		try {

			const newUser = await User.create(req.body);

			req.session.auth = true;

			req.session.user = {
				id: newUser.id,
				username: newUser.username,
				email: newUser.email,
				creationDate: newUser.creationDate,
			}

			res.send({
				auth: req.session.auth,
				user: req.session.user
			});

		} catch (error) {

			if (error.code === 'ER_DUP_ENTRY') {

				if (error.sqlMessage === `Duplicate entry '${req.body.username}' for key 'username'`) {

					res.status(400).send({
						error: 'Ce pseudo est déjà pris',
						errorType: 'username'
					});

				} else {

					res.status(400).send({
						error: 'Un compte est déjà associé à cet e-mail',
						errorType: 'email'
					});

				}
			}
		}
	},

	async login(req, res) {
		try {
			const user = await User.findOne(req.body);

			const passwordMatch = await User.comparePassword(
				req.body.password,
				user.password
			);

			if (passwordMatch === true) {

				req.session.auth = true;

				req.session.user = {
					id: user.id,
					username: user.username,
					email: user.email,
					creationDate: user.creationDate,
				};

				res.send({
					auth: req.session.auth,
					user: req.session.user
				});

			} else {

				res.status(403).send({
					error: "Mot de passe erroné",
					errorType: "password"
				});

			}

		} catch (error) {

			// Email introuvable dans la base
			res.status(400).send({
				error: 'Email non valide',
				errorType: 'email'
			});

		}
	}
}