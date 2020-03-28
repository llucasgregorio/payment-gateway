const axios = require('axios');
const User = require('../models/user');
import * as Yup from 'yup';


module.exports = {
    async index(req, res) {
        const users = await User.find();
        return res.json(users);
    },

    async store(req, res) {
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          email: Yup.string().email().required(),
          cpf : Yup.string().required().max(14),
          password: Yup.string().required().min(6),
          balance : Yup.number(value = 0),
          phone : Yup.number.max(11)

        });
        if (!(await schema.isValid(req.body))) {
          return res.status(400).json({ error: 'Validation fails' });
        }
        const userExist = await User.findOne({ where: { email: req.body.email } });
        if (userExist) {
          return res.status(400).json({ error: 'User already exists' });
        }
        const { name, id, email, provider } = await User.create(req.body);
    
        return res.json({ name, id, email, provider });
      },
    
   

    async destroy(req, res) {
        const user = await User.findByIdAndRemove({ _id: req.params.id }).then(function (user) {
            res.send(user);
        })
        return res.status(200).json({ sucess: 'Usuario Deletado com sucesso' });

    },
}