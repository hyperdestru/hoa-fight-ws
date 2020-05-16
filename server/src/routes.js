module.exports = (app) => {
	app.post('/register', (req, res) => {
		res.send({
			details: {
				username: req.body.username,
				email: req.body.email,
				password: req.body.password
			}
		})
	})
}