const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send("Bem-vindo ao servidor Express!");
})

app.get("/sobre", (req, res) => {
    res.send("Esse é um projeto de exemplo com rotas!");
})

app.get("/contato", (req, res) => {
    res.send("Entre em contato com o nosso e-mail: seuemail@email.com");
})

app.listen(3069, () => {
    console.log("Servidor ligado em http://localhost:3069")
})