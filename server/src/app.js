const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/config');
const session = require('express-session');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

const sessionConfig = {
	secret: config.authentication.sessionSecret,
	resave: false,
	httpOnly: true,
	saveUninitialized: true,
	cookie: { secure: false, maxAge: 60*60*60*24*7 }
}

app.use(session(sessionConfig));

app.locals.session = {};

// Passing our backend app as argument of the module exported in routes.js
require('./routes')(app);

app.listen(config.port);
console.log(`Server started on port ${config.port}`);
