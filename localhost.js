const express = require('express')
const mysql = require('mysql2');
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Servidor Express Funcionando!");
})


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb',
  });
  
  connection.connect();
  
  app.post('/alunos', (req, res) => {
    const { nome, cargo, idade } = req.body;
    connection.query(
      'INSERT INTO alunos (nome, cargo, idade) VALUES (?, ?, ?)',
      [nome, cargo, idade],
      () => {
        res.send('Aluno cadastrado com sucesso!');
      }
    );
  });

app.post("/usuario", (req, res) => {
    const cargo = req.body.cargo
    const nome = req.body.nome
    const idade = req.body.idade
    res.send("Usuário " + nome + ", que possui " + idade + " anos. Seu cargo é " + cargo + ", e o usuário foi criado com sucesso!")
})


app.listen(3000, () => {
    console.log("🚀 Servidor rodando em http://localhost:3000")
})