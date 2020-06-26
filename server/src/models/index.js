const mysql = require('mysql');
const config = require('../config/config');

const db = {};

const connection = mysql.createConnection({
	host: config.db.host,
	user: config.db.user,
	password: config.db.password,
	database: config.db.database
});

connection.connect(error => {
	if (error) {
		throw error;
	}
	console.log(`Successfully connected to database ${config.db.database}`);
});

db.connection = connection;

module.exports = db;