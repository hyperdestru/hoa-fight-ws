/**
 * Well this is where the correspondance between routes (url) and 
 * middlewares (controllers) is done.
 */

const AuthControllerRules = require('./rules/AuthControllerRules');
const AuthController = require('./controllers/AuthController');
const StatsController = require('./controllers/StatsController');
const SettingsController = require('./controllers/SettingsController');
const RankingController = require('./controllers/RankingController');

module.exports = (app) => {
	// This one passes through the auth rules first then if all is ok next() is
	// called in AuthControllerRules
	app.post('/register', AuthControllerRules.register, AuthController.register);

	app.post('/login', AuthControllerRules.login, AuthController.login);

	app.get('/dashboard', StatsController.getStats);

	// Should use app.delete for this one
	app.post('/settings', SettingsController.delete);
	
	app.get('/ranking', RankingController.getRanking);
}