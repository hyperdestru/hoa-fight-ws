const User = require('../models/User');

module.exports = {
	async getStats(req, res) {

		// if (req.session.auth === true && req.session.user.id === req.query.userId) {

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

		// } else {
		// 	res.status(401).end();
		// }
	}
}