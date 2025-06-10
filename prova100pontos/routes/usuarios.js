const express = require('express');
const router = express.Router();
const usuariosControllers = require('../controllers/usuariosControllers');


//Cria as rotas
router.post('/', usuariosControllers.criarUsuarios);

module.exports = router;