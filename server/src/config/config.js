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
		jwtSecret: process.env.JWT_SECRET || '0c4d9339b5dd1840d95dee',
		sessionSecret: process.env.SESSION_SECRET || '53c7696f2210d7b29ae99ed'
	}
}