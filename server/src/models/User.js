const db = require('./index');

module.exports = {
	async create(params) {
		db.connection.query(
			'INSERT INTO users (email, username, password) VALUES (?, ?, ?)',
			[params.email, params.username, params.password],
			function(error, rows, fields) {
				if (error) throw error;
			}
		)
	}
}
