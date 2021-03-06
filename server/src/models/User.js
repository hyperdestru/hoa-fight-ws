const bcrypt = require('bcrypt');

module.exports = {

	async hashPassword(pPassword) {
		const SALT_ROUNDS = 10;
		const hash = await bcrypt.hash(pPassword, SALT_ROUNDS);
		return hash;
	},

	async comparePassword(pPassword, pHash) {
		const match = await bcrypt.compare(pPassword, pHash);
		return match;
	},

	async create(params) {
		const connection = await require('./index');

		const hash = await this.hashPassword(params.password);

		const [insertResult] = await connection.execute(
			`INSERT INTO users (email, username, password) 
			VALUES (?, ?, ?)`,
			[params.email, params.username, hash]
		);

		const [newUser] = await connection.execute(
			`SELECT id, email, username, creation_date as creationDate
			FROM users WHERE id = ?`,
			[insertResult.insertId]
		);

		return newUser[0];
	},

	async findOne(params) {
		const connection = await require('./index');

		const [result] = await connection.execute(
			`SELECT DISTINCT id, email, username, password, creation_date AS creationDate
			FROM users WHERE email = ?`,
			[params.email]
		);

		return result[0];
	},

	async deleteOne(params) {
		const connection = await require('./index');

		await connection.execute(
			`DELETE FROM users WHERE id = ? AND email = ?`,
			[params.id, params.email]
		);
	},

	async getWonGames(pId) {
		const connection = await require('./index');

		const [result] = await connection.execute(
			`SELECT COUNT(users_matchs.win) AS wonGames
			FROM users_matchs 
			WHERE users_matchs.win = true 
			AND users_matchs.user_id = ?`,
			[pId]
		);

		return result[0].wonGames;
	},

	async getAllGames(pId) {
		const connection = await require('./index');

		const [result] = await connection.execute(
			`SELECT COUNT(*) AS totalGames 
			FROM users_matchs 
			WHERE users_matchs.user_id = ?`,
			[pId]
		);

		return result[0].totalGames;
	},

	async findAllPlayers() {
		const connection = await require('./index');

		const [result] = await connection.execute(
			`SELECT DISTINCT users.id, users.username, avatar_id as avatarId 
			FROM users 
			JOIN users_matchs ON users.id = users_matchs.user_id`
		);

		return result;
	}
}
