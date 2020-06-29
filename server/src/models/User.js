const db = require('./index');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

module.exports = {
	async create(params) {	
		try {
			bcrypt.hash(params.password, SALT_ROUNDS, function(error, hash) {

				if (error) throw error;
				
				// Le serveur crash si on insere un email qui existe deja en base
				db.connection.query(
					'INSERT INTO users (email, username, password) VALUES (?, ?, ?)',
					[params.email, params.username, hash],
					function(error, result) {

						if (error) throw error;
	
						db.connection.query(
							'SELECT * FROM users WHERE id = ?',
							[result.insertId],
							function(error, result) {

								if (error) throw error;

								//*****Debug*****//
								console.log(result);

								return result;
							}
						);
					}
				);
			});
		} catch (error ) {
			throw error;
		}
	},

	async findOne(params) {
		try {
			db.connection.query(
				'SELECT DISTINCT * FROM users WHERE email = ?',
				[params.email],
				function(error, result) {
					if (error) throw error;
					const user = result[0];

					bcrypt.compare(
						params.password, 
						result[0].password,
						function(err, result) {
							if (result === true) {
								return user;
							} else {
								// Mdp de correspond pas
							}
						}
					);
				}
			);
		} catch (error) {
			throw error;
		}
	}
}
