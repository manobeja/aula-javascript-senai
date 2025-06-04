const express = require('express');
const router = express.Router();
const produtoControllers = require('../controllers/produtoControllers');

router.post('/', produtoControllers.criarProdutos);
router.get('/', produtoControllers.listarProdutos);
router.put('/:id', produtoControllers.atualizarProdutos);
router.delete('/:id', produtoControllers.deletarProdutos);

module.exports = router;