const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send("Servidor Express Funcionando!");
})

app.get("/sobre", (req, res) => {
    res.send("Sobre nós!")
})

app.get("/usuario", (req, res) => {
    const usuario = "Miguel"
    res.send(usuario)
})

app.get("/senai", (req, res) => {
    const curso = "Back-end"
    res.send(curso)
})

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})