module.exports = {
	port: process.env.PORT || 3000,
	// db property used to create new Sequelize instance in models/index.js
	db: {
		database: process.env.DB_NAME || 'hoafight',
		user: process.env.DB_USER || 'root',
		password: process.env.DB_PASS | 'root',
		options: {
			dialect: process.env.DIALECT || 'mariadb',
			host: process.env.HOST || 'localhost',
			storage: './hoafight.sql'
		}
	}
}