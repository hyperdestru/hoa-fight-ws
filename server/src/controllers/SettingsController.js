const User = require('../models/User');

module.exports = {
	async delete(req, res) {
		try {
			// Check de SESSION a faire
			await User.deleteOne(req.body);

			res.send({
				success: true,
				message: "Compte supprimé. A trés bientôt nous l'espérons !"
			});

		} catch (error) {
			
			res.status(400).send({
				error: "Verifiez votre email",
			});

		}
	}
}