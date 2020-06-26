const db = require('./index');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

module.exports = {
	async create(params) {
		bcrypt.hash(params.password, SALT_ROUNDS, function(err, hash) {
			db.connection.query(
				'INSERT INTO users (email, username, password) VALUES (?, ?, ?)',
				[params.email, params.username, hash],
				function(error, rows, fields) {
					if (error) {
						throw error;
					}
				}
			)
		});
	},

	async login(params) {
		bcrypt.compare(params.password, params.hash, function(err, result) {
			if (result) {

			} else {
				
			}
		});
	}
}
