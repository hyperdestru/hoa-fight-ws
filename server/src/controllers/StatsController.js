const User = require('../models/User');

module.exports = {
	async getStats(req, res) {

		// If mySession.sessionId is equal to req.sessionID
		// If mySession.userId is equal to req.query.userId
		// Then proceed : 

			const totalGames = await User.getAllGames(req.query.userId);
			const wonGames = await User.getWonGames(req.query.userId);
			const ratio = (wonGames / totalGames) * 100;
			const lostGames = totalGames - wonGames;
		
			res.send({
				userStats: {
					ratio: ratio,
					wonGames: wonGames,
					lostGames: lostGames,
					totalGames: totalGames,
				}
			});

		// Else : unauthorized --> res.status(401).end()
	}
}