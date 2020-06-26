const AuthControllerRules = require('./rules/AuthControllerRules');
const AuthController = require('./controllers/AuthController');

module.exports = (app) => {
	app.post(
		'/register', 
		AuthControllerRules.register,
		AuthController.register
	);
}