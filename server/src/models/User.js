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
		const [ insertResult ] = await connection.execute(
			`INSERT INTO users (email, username, password) 
			VALUES (?, ?, ?)`,
			[params.email, params.username, hash]
		);
		return insertResult.insertId;
	},

	async find(params) {
		const connection = await require('./index');
		const [ result ] = await connection.execute(
			`SELECT DISTINCT id, email, password
			FROM users WHERE email = ?`,
			[params.email]
		);
		return result[0];
	},

	async getWonGames(pId) {
		const connection = await require('./index');
		const [ result ] = await connection.execute(
			`SELECT COUNT(users_matchs.win) AS wonGames
			FROM users_matchs 
			WHERE users_matchs.win = true 
			AND users_matchs.user_id = ?`,
			[ pId ]
		);
		return result[0].wonGames;
	},

	async getAllGames(pId) {
		const connection = await require('./index');
		const [ result ] = await connection.execute(
			`SELECT COUNT(*) AS totalGames 
			FROM users_matchs 
			WHERE users_matchs.user_id = ?`,
			[ pId ]
		);
		return result[0].totalGames;
	},

	async getRatio(pId) {
		const win = await this.getWonGames(pId);
		const all = await this.getAllGames(pId);
		return (win / all) * 100;
	}
}
