const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
	res.send({
		message: "hello, home"
	})
})

app.get('/status', (req, res) => {
	res.send({
		message: "hello, status"
	})
})

app.listen(process.env.PORT || 3000)
