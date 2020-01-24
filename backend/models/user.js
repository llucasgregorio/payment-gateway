const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	cpf:{
		type: String,
		required: true
	} ,
	phoneNumber:{
		type: String,
		required: true
	} ,
	password:{
		type: String,
		required: true
	} ,
	balance:{
        type: Number,
        
	}

});			

module.exports = mongoose.model('User', UserSchema);