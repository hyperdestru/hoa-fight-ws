const User = require('../models/User');

module.exports = {
	async getStats(req, res) {
		// Checks de SESSION a rajouter
		const totalGames = await User.getAllGames(req.body.userId);
		const wonGames = await User.getWonGames(req.body.userId);
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
	},

	async getProfile(req, res) {
		// Checks de SESSION a rajouter
		const userProfile = await User.findProfile(req.body.userId);

		res.send({
			userProfile: {
				username: userProfile.username,
				email: userProfile.email,
				creationDate: userProfile.creationDate
			}
		})
	}
}