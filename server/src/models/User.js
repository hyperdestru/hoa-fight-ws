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
		// User qui vient d'être ajouté dans la base.
		const [ newUser ] = await connection.execute(
			'SELECT id, username, email FROM users WHERE id = ?',
			[insertResult.insertId]
		);

		return newUser[0];

	},

	async findOne(params) {

		const connection = await require('./index');

		const [ result ] = await connection.execute(
			'SELECT DISTINCT id, email, password, username FROM users WHERE email = ?',
			[params.email]
		);

		const hash = result[0].password;
		const passwordMatch = await bcrypt.compare(params.password, hash);

		if (passwordMatch === true) {
			return { 
				id: result[0].id, 
				email: result[0].email, 
				username: result[0].username 
			}
		} else {
			throw new Error("Wrong password");
		}
	}
}
