const User = require('../models/User');

module.exports = {
	async delete(req, res) {

		// if (req.session.auth === true && req.session.user.id === req.body.id) {

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

		// else {
		// 	res.status(401).end();
		// }
	}
}