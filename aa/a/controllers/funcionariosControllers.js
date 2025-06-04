const conexao = require('../db/conexao')


exports.criarFuncionarios = (req, res) => {
    const { nome, salario, nascimento, cpf } = req.body
    conexao.query(
        'INSERT INTO funcionarios (nome, salario, nascimento, cpf) VALUES (?,?,?,?,?)',
        [nome, salario, nascimento, cpf],
        (err) => {
            if (err) return res.status(500).send('Erro ao cadastrar funcionario');
            res.status(201).send('Funcionario cadastrada com sucesso!')
    })
};

exports.listarFuncionario = (req, res) => {
    conexao.query('SELECT * FROM  funcionarios', (err, results) => {
        if (err) {
            res.status(500).send('Erro ao buscar funcionario')
        }

        res.status(200).send(results)
    });
};

exports.atualizarFuncionarios = (req, res) => {
    const { id } = req.params;
    const { nome, salario, nascimento, cpf } = req.body;
    const query = 'UPDATE produtos SET nome = ?, salario = ?, nascimento = ?, cpf = ? WHERE id = ?';
    conexao.query(query, [nome, salario, nascimento, cpf, id], (err, results) => {
      if (err) {
          return res.status(500).send('Erro ao atualizar');
      }
      if (results.affectedRows === 0) {
          return res.status(404).send('Funcionario não encontrado');
      }
      res.send('Funcionario atualizado com sucesso');
    });
  };


  exports.deletarFuncionarios = (req, res) => {
    const { id } = req.params;
    conexao.query('DELETE FROM funcionarios WHERE id = ?', [id], (err, results) => {
      if (err) {
          return res.status(500).send('Erro ao deletar');
      }
      if (results.affectedRows === 0) {
          return res.status(404).send('Funcionario não encontrado');
      }
      res.status(200).send('Funcionario deletado com sucesso');
    });
  };