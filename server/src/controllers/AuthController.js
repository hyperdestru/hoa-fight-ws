const User = require('../models/User');

module.exports = {
	async register(req, res) {
		try {
			const newUserId = await User.create(req.body);

			// BUG_03072020 : le cookie de session n'est pas persistant
			// Un nouveau est crée à chaque nouvelle requete
			// Donc par exemple session.auth sera undefined lors du GET sur
			// la vue dashboard.
			req.session.auth = true;
			req.session.userId = newUserId;

			res.send({
				auth: req.session.auth,
				userId: req.session.userId
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
			const user = await User.find(req.body);

			const passwordMatch = await User.comparePassword(
				req.body.password,
				user.password
			);

			if (passwordMatch === true) {

				req.session.auth = true;
				req.session.userId = user.id;

				res.send({
					auth: req.session.auth,
					userId: req.session.userId
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