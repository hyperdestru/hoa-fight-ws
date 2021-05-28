const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/config');
const session = require('express-session');

const app = express();

app.use(
	session({
		secret: config.authentication.sessionSecret,
		resave: false,
		httpOnly: true,
		saveUninitialized: true,
		cookie: { secure: false, maxAge: 60 * 60 * 60 * 24 * 7, sameSite: 'lax' }
	})
);

// Console logs formating
app.use(morgan('dev'));

app.use(bodyParser.json());

// Accepting requests from the client dev server (same origin)
app.use(cors({ origin: config.origin, credentials: true }));

// Serving static files (avatars, git...)
app.use(express.static('public'));

app.listen(config.port);
console.log(`Server started on port ${config.port}`);

require('./routes')(app);