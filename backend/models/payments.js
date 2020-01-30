const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    
    name_payment:{
        type: String,
        required: true
    }

});			

module.exports = mongoose.model('Payment', PaymentSchema);