const express = require("express")

const app = express()

app.use (express.json())

app.get('/', (req, res) => {
    res.send("O servidor está ligado!")
})

let produtos = []

app.post('/produtos', (req, res) => {
    const produto = {
        nome:req.body.nome,
        preco:req.body.preco,
        quantidade:req.body.quantidade
    }

    produtos.push(produto)
        res.send("Produto cadastrado com sucesso!")
})

app.get('/produtos', (req, res) => {
    res.send(produtos)
})

app.listen(3000, () => {
    console.log("O servidor está rodando em http://localhost:3000")
})