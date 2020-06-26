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
		jwtSecret: process.env.JWT_SECRET || 'secret'
	}
}