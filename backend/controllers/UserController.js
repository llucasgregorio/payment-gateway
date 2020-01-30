const axios = require('axios');
const User = require('../models/user');

module.exports = {
    async index(req, res) {
        const users = await User.find();
        return res.json(users);
    },

    async store(req, res) {
        console.log(req.body);
        //Corpo da request
        const {name,email,cpf,password,} = req.body;
        //Busca o usuario pelo email
        let user = await User.findOne({email,cpf});
        if(!user)
        {
         user = await User.create({name, email, cpf, password})
         return res.status(200).json({ sucess: 'Usuario cadastrado com sucesso' });
        }
    },

    async destroy(req,res){
        const user = await User.findByIdAndRemove({_id: req.params.id}).then(function(user){
            res.send(user);
        })
        return res.status(200).json({ sucess: 'Usuario Deletado com sucesso' });

    },
}