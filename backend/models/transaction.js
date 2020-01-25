const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    
    user :{
        type :mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    amount :{
        type : mongoose.Schema.Types.String,
        required : true
    },
    payment:{
        type: mongoose.Schema.Types.ObjectID,
        required: true
    }

});			

module.exports = mongoose.model('Transaction', TransactionSchema);