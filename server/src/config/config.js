module.exports = {
	port: process.env.PORT || 3000,
	db: {
		database: process.env.DB_NAME || 'hoafight',
		user: process.env.DB_USER || 'root',
		password: process.env.DB_PASS | 'root',
		host: process.env.HOST || 'localhost',
		dialect: process.env.DIALECT || 'mariadb',
		storage: './hoafight.sql'
	},
	authentication: {
		jwtSecret: process.env.JWT_SECRET || 'secret',
		sessionSecret: '1f6323eea9e74e91f6d40ecd9730746c657ffe8c5441858'
	}
}