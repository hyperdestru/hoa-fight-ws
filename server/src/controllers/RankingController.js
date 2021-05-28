const User = require('../models/User');

module.exports = {
	async getRanking(req, res) {

		// if (req.session.auth === true) {

		const allPlayers = await User.findAllPlayers();

		// Adding ratio field to each object
		for (let i = 0; i < allPlayers.length; i++) {

			const totalGames = await User.getAllGames(allPlayers[i].id);
			const wonGames = await User.getWonGames(allPlayers[i].id);
			const ratio = (wonGames / totalGames) * 100;

			allPlayers[i].ratio = ratio;
		}

		// Sorting in descending order (best ranked first)
		allPlayers.sort((a, b) => {
			return b.ratio - a.ratio;
		});

		// Setting rank fields based on descending sorting above
		for (let i = 0; i < allPlayers.length; i++) {
			// Adding one because here we are zero-based 
			// but the ranking system is not
			allPlayers[i].rank = i + 1;
		}

		// Returning the fresh and populated result
		res.send(allPlayers);

		// else {
		// 	res.status(401).end();
		// }
	}
}