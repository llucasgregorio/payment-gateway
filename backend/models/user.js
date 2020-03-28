const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	cpf:{
		type: String,
		required: true,
		unique: true
	} ,
	password:{
		type: String,
		required: true
	},
	phone:{
		type: Number,
		required: false,
	},
	balance:{
		type: Number,
		required: false
	}
});			

module.exports = mongoose.model('User', UserSchema);