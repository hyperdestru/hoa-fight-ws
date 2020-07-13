const User = require('../models/User');

module.exports = {
	async delete(req, res) {

		// If mySession.sessionId is equal to req.sessionID
		// If mySession.userId is equal to req.body.id and req.body.email
		// Then proceed :

			try {
				await User.deleteOne(req.body);

				res.send({
					success: true,
				});

			} catch (error) {
				
				res.status(400).send({
					error: "Verifiez votre email",
				});

			}

		// Else : unauthorized --> res.status(401).end()
	}
}