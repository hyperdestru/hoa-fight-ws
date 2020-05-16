const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Passing our backend app as argument of the module exported in routes.js
require('./routes')(app)

// Have sequelize connect to the db you have it configured for.
// Starting the server if connection is successful.
sequelize.sync().then(() => {
	app.listen(config.port)
	console.log(`Server started on port ${config.port}`)
})

