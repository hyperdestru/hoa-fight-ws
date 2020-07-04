const User = require('../models/User');

module.exports = {
	async getStats(req, res) {
		// Checks de SESSION a rajouter
		res.send({
			userStats: {
				ratio: await User.getRatio(req.body.userId),
				wonGames: await User.getWonGames(req.body.userId),
				totalGames: await User.getAllGames(req.body.userId)
			}
		})
	}
}