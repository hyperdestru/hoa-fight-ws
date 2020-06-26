const AuthenticationControllerRules = require('./rules/AuthenticationControllerRules');
const AuthenticationController = require('./controllers/AuthenticationController');

module.exports = (app) => {
	app.post(
		'/register', 
		AuthenticationControllerRules.register,
		AuthenticationController.register,
	);
}