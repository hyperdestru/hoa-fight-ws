const bcrypt = require('bcrypt');

module.exports = {
	async create(params) {
		// La connection est exportée de maniere asynchrone alors on l'importe
		// aussi de maniere asynchrone.
		const connection = await require('./index');

		const SALT_ROUNDS = 10;
		// On hash le mdp reçu via req.body (cf. vue RegisterForm)
		const hash = await bcrypt.hash(params.password, SALT_ROUNDS);

		// Le resultat de l'insert du user dans la db.
		// Je m'en sers pour avoir accés à l'insertId et ainsi faire une query
		// en suivant pour chopper les infos du user qui vient juste de 
		// s'inscrire.
		const [ insertResult ] = await connection.execute(
			'INSERT INTO users (email, username, password) VALUES (?, ?, ?)',
			[params.email, params.username, hash]
		);
		// User qui vient d'être ajouté dans la base (cf. insertId).
		const [ newUser ] = await connection.execute(
			'SELECT id, username, email, creation_date FROM users WHERE id = ?',
			[insertResult.insertId]
		);
		// Retourne qqchose comme { id: , username: , email: , creation_date: }
		return newUser[0];
	},

	async findOne(params) {
		const connection = await require('./index');

		const [ result ] = await connection.execute(
			'SELECT DISTINCT id, email, password, username FROM users WHERE email = ?',
			[params.email]
		);

		const hash = result[0].password;
		// On verifie que le hash de la base correspond avec le mdp du login
		const passwordMatch = await bcrypt.compare(params.password, hash);

		if (passwordMatch === true) {
			// Si le mdp est OK alors je retourne les infos du user
			// J'aurai bien fait un return result[0] mais je ne veux pas 
			// retourner le password.
			return { 
				id: result[0].id, 
				email: result[0].email, 
				username: result[0].username 
			}
		} else {
			// Faudrait traiter ce genre d'erreur jusqu'au front
			throw new Error("Wrong password");
		}
	},

	async getRatio() {
		const connection = await require('./index');
		// query number of matchs played in total
		// query number of matchs won
		// ratio en % = (total matchs / matchs won) * 100
	}
}
