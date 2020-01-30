const axios = require('axios');
const Payment = require('../models/payments');

module.exports = {
    async index(req, res) {
        const payment = await Payment.find();
        return res.json(payment);
    },

    async store(req, res) {
        console.log(req.body);
        //Corpo da request
        const {name_payment} = req.body;
        //Busca o usuario pelo email
        let payment = await Payment.findOne({name_payment});
        if(!payment)
        {
         payment = await Payment.create({name_payment})
         return res.status(200).json({ sucess: 'Forma de pagamento cadatrada com sucesso' });
        }
    },

    // async destroy(req,res){
    //     const payment = await User.findByIdAndRemove({_id: req.params.id}).then(function(payment){
    //         res.send(payment);
    //     })
    //     return res.status(200).json({ sucess: 'Forma de pagamento Deletado com sucesso' });

    // },
}