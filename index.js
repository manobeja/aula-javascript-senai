const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')

const app = express()

app.use(cors())

app.use(express.json())

const produtos = []

app.post('/produtos', (req, res) => {
        const {cod, nome, preco, quantidade } = req.body;

    if (cod == undefined || typeof cod != "number" || cod > 0){
        return res.status(400).send('Nome do produto é obrigatório e deve ser uma string não vazia.');
    }

    if (!nome || typeof nome != 'string' || nome.trim() == '') {
        return res.status(400).send('Nome do produto é obrigatório e deve ser uma string não vazia.');
    }

    if (preco == undefined || typeof preco != 'number' || preco <= 0) {
        return res.status(400).send('Preço deve ser um número positivo.');
    }

    if (quantidade == undefined || !Number.isInteger(quantidade) || quantidade < 0) {
        return res.status(400).send('Quantidade deve ser um número inteiro maior ou igual a 0.');
    }

    connection.query(
      'INSERT INTO produtos (cod, nome, preco, quantidade) VALUES (?, ?, ?,?)',
      [cod, nome, preco, quantidade],
      () => {
        res.send('Produto cadastrado com sucesso!');
      }
    );
})

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cadastroProduto',
});
  
  connection.connect();
  
  app.post('/produtos', (req, res) => {
    
  });

app.get('/produtos', (req, res) => {
    conexao.query("SELECT nome, preco, quantidade FROM produtos", (err, results) => {
        if (err) {
            return res.status(500).send("Erro ao buscar produtos.")
        }
        res.status(200).send(results);
    })
})

app.listen(3000, () => {
    console.log("🚀 Servidor backend rodando em http://localhost:3000")
})