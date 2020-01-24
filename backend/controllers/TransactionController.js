const axios = require('axios');
const Transaction = require('../models/transaction');

module.exports = {
    async index(req, res) {
        const transaction = await Transaction.find();
        return res.json(users);
    },

    async store(req, res) {
        console.log(req.body);
        
        //Corpo da request
        const {name,email,cpf,phoneNumber,password, balance=0} = req.body;
        //Busca o usuario pelo email
        let user = await User.findOne({email,cpf});
    
        if(!user){
         user = await User.create({
            name,
            email,
            cpf,
            phoneNumber,
            password,
            balance
        })
        }
        return res.json(user);
    },

    async destroy(req,res){
        const user = await User.findByIdAndRemove({_id: req.params.id}).then(function(user){
            res.send(user);
        })
        return res.json(user);
    },




}