const db = require('./index');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

module.exports = {
	async create(params) {
		bcrypt.hash(params.password, SALT_ROUNDS, function(error, hash) {
			if (error) {
				throw error;
			} else {
				// La query doit retourner qqchose puisque je me sers du resultat
				// pour le jwt du auth controller
				db.connection.query(
					'INSERT INTO users (email, username, password) VALUES (?, ?, ?)',
					[params.email, params.username, hash],
					function(error, result) {
						if (error) {
							throw error;
						} else {
							db.connection.query(
								'SELECT * FROM users WHERE id = ?',
								[result.insertId],
								function(error, result) {
									if (error) {
										throw error;
									} else {
										// Comment retourner ce result ?
										console.log(result);
									}
								}
							);
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
			function(error, result) {
				if (error) {
					throw error;
				} else {
					bcrypt.compare(
						params.password, 
						result.password, 
						function(error, result) {
							if (error) {
								throw error;
							} else {
								if (result === true) {
									// User authentifié c'est le bon mdp
								} else {
									// Mauvais mdp
								}
							}
						}
					);
					console.log(result);
				}
			}
		);
	}
}
