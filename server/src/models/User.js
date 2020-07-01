const bcrypt = require('bcrypt');

module.exports = {
	/**
	 * Crée un utilisateur dans la base - hash le mdp - et retourne cet 
	 * utilisateur nouvellement créé.
	 */
	async create(params) {
		const connection = await require('./index');

		const hash = await this.hashPassword(params.password);

		const [ insertResult ] = await connection.execute(
			'INSERT INTO users (email, username, password) VALUES (?, ?, ?)',
			[params.email, params.username, hash]
		);

		const [ newUser ] = await connection.execute(
			'SELECT id, username, email, creation_date FROM users WHERE id = ?',
			[insertResult.insertId]
		);

		return newUser[0];
	},

	/**
	 * Retourne le hash d'un mot de passe
	 */
	async hashPassword(pPassword) {
		const SALT_ROUNDS = 10;
		const hash = await bcrypt.hash(pPassword, SALT_ROUNDS);
		return hash;
	},

	/**
	 * Verifie qu'un mot de passe en clair et un hash correspondent.
	 */
	async comparePassword(pPassword, pHash) {
		const match = await bcrypt.compare(pPassword, pHash);
		return match;
	},

	/**
	 * Renvoie le nombre de parties gagnées par un utilisateur (id). 
	 */
	async getWonGames(pId) {
		const connection = await require('./index');

		const [ result ] = await connection.execute(
			`SELECT COUNT(users_matchs.win) as wonGames
			FROM users_matchs 
			WHERE users_matchs.win = true 
			AND users_matchs.user_id = ?`,
			[ pId ]
		);

		return result[0].wonGames;
	},

	/**
	 * Retourne le nombre de parties totales jouées par utilisateur (id). 
	 */
	async getAllGames(pId) {
		const connection = await require('./index');

		const [ result ] = await connection.execute(
			`SELECT COUNT(*) as totalGames 
			FROM users_matchs 
			WHERE users_matchs.user_id = ?`,
			[ pId ]
		);

		return result[0].totalGames;
	},

	/**
	 * A partir de son email, retourne l'id, l'email, le pseudo et hash mdp
	 * d'un utilisateur.
	 */
	async findOne(params) {
		const connection = await require('./index');

		const [ result ] = await connection.execute(
			`SELECT DISTINCT id, email, username, password
			FROM users WHERE email = ?`,
			[params.email]
		);

		return result[0];
	},

	async getRatio(pId) {
		const win = await this.getWonGames(pId);
		const all = await this.getAllGames(pId);
		return (win / all) * 100;
	}
}
