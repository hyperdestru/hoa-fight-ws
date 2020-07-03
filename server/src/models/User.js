const bcrypt = require('bcrypt');

module.exports = {

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
	 * Crée un utilisateur dans la base - hash le mdp - et retourne cet 
	 * utilisateur nouvellement créé : id, pseudo, email et date de création.
	 */
	async create(params) {
		const connection = await require('./index');

		const hash = await this.hashPassword(params.password);

		const [ insertResult ] = await connection.execute(
			`INSERT INTO users (email, username, password) 
			VALUES (?, ?, ?)`,
			[params.email, params.username, hash]
		);

		const [ newUser ] = await connection.execute(
			`SELECT id, username, email, creation_date AS creationDate 
			FROM users WHERE id = ?`,
			[insertResult.insertId]
		);

		return newUser[0];
	},

	/**
	 * A partir de son email, retourne l'id, l'email, le pseudo, date de 
	 * de création et hash mdp d'un utilisateur.
	 */
	async findOne(params) {
		const connection = await require('./index');

		const [ result ] = await connection.execute(
			`SELECT DISTINCT id, email, username, password, creation_date AS creationDate
			FROM users WHERE email = ?`,
			[params.email]
		);

		return result[0];
	},

	/**
	 * Renvoie le nombre de parties gagnées par un utilisateur (id). 
	 */
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

	/**
	 * Retourne le nombre de parties totales jouées par utilisateur (id). 
	 */
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
