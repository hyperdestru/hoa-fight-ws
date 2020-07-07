const User = require('../models/User');

module.exports = {
	async delete(req, res) {
		try {
			// Check de SESSION a faire
			await User.deleteOne(req.body);

			res.send({
				success: true,
			});

		} catch (error) {
			
			res.status(400).send({
				error: "Verifiez votre email",
			});

		}
	}
}