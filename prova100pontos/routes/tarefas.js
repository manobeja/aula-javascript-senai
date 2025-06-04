const express = require('express');
const router = express.Router();
const tarefasControllers = require('../controllers/tarefasControllers');

//Cria as rotas
router.post('/', tarefasControllers.criarTarefas);
router.post('/data', tarefasControllers.criarEstimulandodata);
router.get('/', tarefasControllers.listarTarefas);
router.get('/status', tarefasControllers.filtrarTarefas);
router.put('/:id', tarefasControllers.atualizarTarefas);
router.delete('/:id', tarefasControllers.deletarTarefas);

module.exports = router;