const mongoose = require('mongoose')

const receita = new mongoose.Schema({
    titulo: {type: String},
    ingredientes:[String],
    rendimento: {type: String},
    etapa: [String],
    referencia: [String]
})

module.exports = mongoose.model('Receita', receita)