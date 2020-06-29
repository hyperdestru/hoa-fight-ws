const mysql = require('mysql2/promise');
const config = require('../config/config');

module.exports = 
	mysql.createConnection({
		host: config.db.host,
		user: config.db.user,
		password: config.db.password,
		database: config.db.database
	}).then(connection => {
		return connection;
	}).catch(error => {
		throw error;
	});