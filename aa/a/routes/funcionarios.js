const express = require('express');
const router = express.Router();
const funcionariosControllers = require('../controllers/funcionariosControllers');

router.post('/', funcionariosControllers.criarFuncionarios);
router.get('/', funcionariosControllers.listarFuncionario);
router.put('/:id', funcionariosControllers.atualizarFuncionarios);
router.delete('/:id', funcionariosControllers.deletarFuncionarios);

module.exports = router;