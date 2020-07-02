const jwt = require('jsonwebtoken');
const config = require('./config/config');

module.exports = (req, res, next) => {
	const token = req.headers['authorization'];
	const headerPrefix = 'Bearer ';

	if (token.startsWith(headerPrefix)) {
		token = token.slice(headerPrefix.length, token.length);
	}

	if (token) {
		jwt.verify(token, config.authentication.jwtSecret, 
			function(error, decoded) {

			if (error) {
				res.status(401).send({
					error: "Token invalide"
				});
				throw error;
			} else {
				req.decodedToken = decoded;
				next();
			}

		});
	} else {
		res.status(401).send({
			error: "Token introuvable"
		});
	}
}