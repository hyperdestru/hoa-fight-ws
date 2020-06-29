const AuthControllerRules = require('./rules/AuthControllerRules');
const AuthController = require('./controllers/AuthController');

module.exports = (app) => {
	app.post('/register', AuthControllerRules.register, AuthController.register);
	app.post('/login',  AuthControllerRules.login, AuthController.login);
}