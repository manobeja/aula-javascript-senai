const express = require('express')
const mysql = require('mysql2')

const app = express()

app.use(express.json())

const sessoes = []

app.post('/sessoes', (req, res) => {
        const {aluno, personal, tipo_de_treino, data, horario, observacoes} = req.body;

    if (!aluno || typeof aluno != 'string' || aluno.trim() == '') {
        return res.status(400).send('Nome do aluno é obrigatório e deve ser uma string não vazia.');
    }

    if (!personal || typeof personal != 'string' || personal.trim() == '') {
        return res.status(400).send('Nome do personal é obrigatório e deve ser uma string não vazia.');
    }

    if (!tipo_de_treino || typeof tipo_de_treino != 'string' || tipo_de_treino.trim() == '') {
        return res.status(400).send('O personal deve possuir um tipo de treino.');
    }

    if (!data || typeof data != "string" || data.trim() == "") { 
        return res.status(400).send("A data da sessão é obrigatória.")
    }

    if (!horario || typeof horario != 'string' || horario.trim() == '') {
        return res.status(400).send('O horário da sessão é obrigatório.');
    }

    connection.query(
      'INSERT INTO sessoes (aluno, personal, tipo_de_treino, data, horario, observacoes) VALUES (?, ?, ?, ?, ?, ?)',
      [aluno, personal, tipo_de_treino, data, horario, observacoes],
      () => {
        res.send('Sua sessão foi cadastrada com sucesso!');
      }
    );
})

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'centro_treinamento',
});
  
  connection.connect();
  
  app.post('/sessoes', (req, res) => {
    
  });

app.get('/sessoes', (req, res) => {
    connection.query("SELECT aluno, personal, tipo_de_treino, data, horario, observacoes FROM sessoes", (err, results) => {
        if (err) {
            return res.status(500).send("Erro ao buscar as sessões.")
        }
        res.status(200).send(results);
    })
})

app.delete("/sessoes/:id", (req, res) => {
    const {id} = req.params;

    connection.query('DELETE FROM sessoes WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).send("Erro ao deletar");
        }
        if (results.affectedRows === 0) {
            return res.status(404).send("Sessão não cadastrada")
        }

        return res.status(200).send("Sessão deletada com sucesso!")

    });


});


app.put("/sessoes/:id", (req, res) => {
    const {id} = req.params;
    const { aluno, personal, tipo_de_treino, data, horario, observacoes } = req.body;

    const query = 'UPDATE sessoes SET aluno = ?, personal = ?, tipo_de_treino = ?, data = ?, horario = ?, observacoes = ? WHERE id = ?';
    connection.query(query, [aluno, personal, tipo_de_treino, data, horario, observacoes, id], (err, results) => {
        if (err) {
            return res.status(500).send("Erro ao atualizar!");
        }
        if (results.affectedRows === 0) {
            return res.status(404).send("Sessão não encontrada!")
        }

        return res.status(200).send("Sessão atualizada com sucesso!")

    });


});

app.listen(3000, () => {
    console.log("🚀 Servidor backend rodando em http://localhost:3000")
})