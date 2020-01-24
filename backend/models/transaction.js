const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
	user :{
        type :mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    amount :{
        type : Number,
        required : true
    }

});			

module.exports = mongoose.model('Transaction', TransactionSchema);