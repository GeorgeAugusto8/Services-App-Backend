const express = require('express')
const router = express.Router()

const controller = require('../controllers/professor-controller')

router.get('/', controller.get)

router.put('/', controller.put)

router.get('/comentarios', controller.getComentarios)

router.post('/comentarios', controller.postComentario)

router.get('/provas', controller.getProvas)

router.post('/provas', controller.postProva)

module.exports = router

