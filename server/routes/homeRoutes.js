const express = require('express')
const router = express.Router()

const homeController = require('../controllers/homeController')

router.get('/', homeController.minhasReceitas)

router.get('/adicionarreceita', homeController.placeHolder)

router.post('/adicionarReceita', homeController.adicionarReceita)

router.get('/pegaReceita/:titulo', homeController.mostraReceita)

router.delete('/pegaReceita/removerReceita/:id', homeController.removerReceita)

module.exports = router