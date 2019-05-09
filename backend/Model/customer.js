const Sequelize = require('sequelize');
const connection = require("../config")
const Order = require('./order')
const bcrypt = require('bcryptjs')



var Customer = connection.define('customers', {




	//title: Sequelize.STRING,   OR

	//body: Sequelize.TEXT OR
	name: {
		type: Sequelize.TEXT,

		len: [2, 50],
		allowNull: false

	},
	email: {
		type: Sequelize.STRING,
		len: [5, 50],
		allowNull: false,
		unique: true,
	},
	//password_hash: DataTypes.STRING

	password: {

		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}


	},
	address: {

		type: Sequelize.STRING,
		allowNull: false


	},
	phoneNo: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	noOfOrders: {
		type: Sequelize.INTEGER
	},
	bill: {

		type: Sequelize.INTEGER



	}

}, {
		timestamps: true
	});

connection.sync().then(function () {
	// Customer.hasMany(Order)
	// Order.belongsTo(Customer)
console.log("Customer Table Created!")
})

module.exports = Customer