const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/routes');   
const app = express();

mongoose.connect('mongodb+srv://eichild:lasanhas2@cluster0-vlwdn.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology :true
} );

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
