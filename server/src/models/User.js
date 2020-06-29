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

		const connection = await require('./index');

		const [ result ] = await connection.execute(
			'SELECT DISTINCT password FROM users WHERE email = ?',
			[params.email]
		);

		const hash = result[0].password;

		const passwordMatch = await bcrypt.compare(params.password, hash);

		if (passwordMatch === true) {
			return passwordMatch;
		}
	}
}
