const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/config');
const session = require('express-session');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.use(session({
	secret: config.authentication.sessionSecret,
	resave: false,
	saveUninitialized: true,
	cookie: { secure: true, sameSite: 'strict' }
}));

app.get('/', function(req, res, next) {
	if (req.session.id) {
		console.log("SESSION ID EXISTS ==> ", req.sessionID)
	} else {
		console.log("SESSION ID DOES NOT EXISTS");
	}
})

// Passing our backend app as argument of the module exported in routes.js
require('./routes')(app);

app.listen(config.port);
console.log(`Server started on port ${config.port}`);
