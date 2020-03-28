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

        const { name, balance } = req.body;
        let user = await User.findOne({ email, cpf });
        if (!user) {
            user = await User.create({
                name,
                email,
                cpf,
                phoneNumber,
                password,
                balance
            })
        }
    },
    async destroy(req, res) {
        const transaction = await Transaction.findByIdAndRemove({ _id: req.params.id }).then(function (transaction) {
            res.send(transaction);
        })
        return res.json(transaction);
    },




}