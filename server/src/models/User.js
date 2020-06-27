const db = require('./index');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

module.exports = {
	// Faudrait Promisify tout ça
	async create(params) {
		bcrypt.hash(params.password, SALT_ROUNDS, function(error, hash) {
			if (error) {
				throw error;
			} else {
				db.connection.query(
					'INSERT INTO users (email, username, password) VALUES (?, ?, ?)',
					[params.email, params.username, hash],
					function(error, result, fields) {
						if (error) {
							throw error;
						}
					}
				);
			}
		});
	},

	async find(params) {
		db.connection.query(
			'SELECT DISTINCT * FROM users WHERE email = ?',
			[params.email],
			function (error, result, fields) {
				if (error) {
					throw error;
				} else {
					bcrypt.compare(params.password, result.password, function(error, result) {
						if (error) {
							throw error;
						} else {
							if (result) {

							} else {
								
							}
						}
					})
				}
			}
		);
	}
}
