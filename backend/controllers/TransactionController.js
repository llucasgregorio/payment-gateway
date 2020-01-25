const axios = require('axios');
const Transaction = require('../models/transaction');
const User = require('../models/user');
const Payment = require('../models/payments');

module.exports = {
    async index(req, res) {
        const transaction = await Transaction.find();
        return res.json(transaction);
    },

    async store(req, res) {
        console.log(req.body);
        const user = await User.findOne({email});
        const payment = await Payment.findOne({name_payment})
        //Busca o usuario pelo email
        if(!user)
        {
         user = await Transaction.create({ user: req.body.email, payment: payment.name_payment})
         return res.status(200).json({ sucess: 'Usuario cadastrado com sucesso' });
        }
    },
    
        // paymentService.transactions.push(transaction);
        // client.transactions.push(transaction);
        // client.save();
        // paymentService.save();
    
       
    // async destroy(req,res){
    //     const transaction = await Transaction.findByIdAndRemove({_id: req.params.id}).then(function(transaction){
    //         res.send(transaction);
    //     })
    //     return res.json(transaction);
    // },




}