const User = require('../models/User');

module.exports = {
	async getStats(req, res) {
		// Checks de SESSION a rajouter		
		const totalGames = await User.getAllGames(req.params.userId);
		const wonGames = await User.getWonGames(req.params.userId);
		const ratio = (wonGames / totalGames) * 100;
		const lostGames = totalGames - wonGames;

		res.send({
			userStats: {
				ratio: ratio,
				wonGames: wonGames,
				lostGames: lostGames,
				totalGames: totalGames,
			}
		})
	}
}