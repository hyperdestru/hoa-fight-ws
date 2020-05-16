module.exports = (sequelize, DataTypes) => {
	sequelize.define('User', {
		email: {
			type: DataTypes.STRING,
			unique: true
		},
		password: DataTypes.STRING,
		username: DataTypes.STRING,
		avatarID: DataTypes.NUMBER,
		guest: DataTypes.BOOLEAN
	})
}