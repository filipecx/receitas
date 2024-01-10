const Receita = require('../models/Receita')

module.exports = {
    minhasReceitas: async (req, res) => {
        try{
            const receita = await Receita.find()
            res.json(receita)
        }catch(error){
            console.log(error)
        }
    },
    adicionarReceita: async (req, res) => {
        try{
            const novaReceita = new Receita({
                titulo: req.body.titulo,
                ingredientes: req.body.ingredientes,
                rendimento: req.body.rendimento,
                etapa: req.body.etapas,
                referencia: req.body.referencia
            })
            await novaReceita.save()
            res.send('Receita adicionada')
        }catch(error){
            console.log(error)
        }
    },
    removerReceita: async (req, res) => {
        try{
            await Receita.deleteOne({titulo: req.body.titulo})
            res.send('Receita removida')
        }catch(error){
            console.log(error)
        }
    },
    mostraReceita: async(req, res) => {
        try{
            const receita = await Receita.find({titulo: req.params.titulo})
            res.send(receita)
        }catch(error){
            console.log(error)
        }
    }
}