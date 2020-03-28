const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    
    user :{
        type :mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    balance :{
        type : mongoose.Schema.Types.String,
        required : true,
        ref: 'User'
    },
    payment:{
        type: mongoose.Schema.Types.ObjectID,
        required: true,
        ref: 'Payment'
    },

});			

module.exports = mongoose.model('Transaction', TransactionSchema);