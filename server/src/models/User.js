const bcrypt = require('bcrypt');

module.exports = {
	async create(params) {
		const connection = await require('./index');
		const SALT_ROUNDS = 10;
		const hash = await bcrypt.hash(params.password, SALT_ROUNDS);
		const [ insertResult ] = await connection.execute(
			'INSERT INTO users (email, username, password) VALUES (?, ?, ?)',
			[params.email, params.username, hash]
		);
		const [ newUser ] = await connection.execute(
			'SELECT id, username, email FROM users WHERE id = ?',
			[insertResult.insertId]
		);

		return newUser[0];
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
