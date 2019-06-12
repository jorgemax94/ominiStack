const express = require('express');
const app = express();
const mongoose = require('mongoose')



mongoose.connect('mongodb+srv://teste:teste@cluster0-6zzy1.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.use(require('./routes'))

app.listen(3333);