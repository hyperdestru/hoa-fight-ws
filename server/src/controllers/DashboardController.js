const User = require('../models/User');

module.exports = {
	async getStats(req, res) {

		if (req.session.id && req.session.auth === true) {

			if (req.session.userId) {

				res.send({
					userStats: {
						ratio: await User.getRatio(req.session.userId),
						totalGames: await User.getAllGames(req.session.userId),
						wonGames: await User.getWonGames(req.session.userId)
					}
				});

			} else {

				res.status(401).send({
					error: 'User id invalide'
				});

			}
		} else {

			res.status(401).send({
				error: 'Non autorisé'
			});
			
		}
	}
}