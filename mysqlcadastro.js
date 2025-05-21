const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')

const app = express()

app.use(cors())

app.use(express.json())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cadastroProduto',
  });
  
  connection.connect();
  
  app.post('/produtos', (req, res) => {
    const { nome, preco, quantidade } = req.body;
    connection.query(
      'INSERT INTO produtos (nome, preco, quantidade) VALUES (?, ?, ?)',
      [nome, preco, quantidade],
      () => {
        res.send('Produto cadastrado com sucesso!');
      }
    );
  });

const produtos = []

app.post('/produtos', (req, res) => {
    const produto = {
        nome: req.body.nome,
        preco: req.body.preco,
        quantidade: req.body.quantidade,
    }

    if (!produto.nome || typeof produto.nome != 'string' || produto.nome.trim() == '') {
        return res.status(400).send('Nome do produto é obrigatório e deve ser uma string não vazia.');
    }

    if (produto.preco == undefined || typeof produto.preco != 'number' || produto.preco <= 0) {
        return res.status(400).send('Preço deve ser um número positivo.');
    }

    if (produto.quantidade == undefined || !Number.isInteger(produto.quantidade) || produto.quantidade < 0) {
        return res.status(400).send('Quantidade deve ser um número inteiro maior ou igual a 0.');
    }

    produtos.push(produto)
    res.status(201).send('Produtos cadastrado com sucesso!')

})

app.get('/produtos', (req, res) => {
    res.status(200).send(produtos)
})

app.listen(3000, () => {
    console.log("🚀 Servidor backend rodando em http://localhost:3000")
})