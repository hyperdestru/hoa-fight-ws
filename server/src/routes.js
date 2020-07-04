const AuthControllerRules = require('./rules/AuthControllerRules');
const AuthController = require('./controllers/AuthController');
const DashboardController = require('./controllers/DashboardController');

module.exports = (app) => {
	app.post('/register', AuthControllerRules.register, AuthController.register);
	app.post('/login', AuthControllerRules.login, AuthController.login);
	// app.put('/dashboard', DashboardController.getProfile);
	app.put('/dashboard', DashboardController.getStats);
}