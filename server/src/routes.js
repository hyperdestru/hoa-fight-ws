const AuthControllerRules = require('./rules/AuthControllerRules');
const AuthController = require('./controllers/AuthController');
const StatsController = require('./controllers/StatsController');

module.exports = (app) => {
	app.post('/register', AuthControllerRules.register, AuthController.register);
	app.post('/login', AuthControllerRules.login, AuthController.login);
	app.get('/dashboard', StatsController.getStats);
}