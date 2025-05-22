const express = require('express')
const mysql = require('mysql2')

const app = express()

app.use(express.json())

const consulta = []

app.post('/consulta', (req, res) => {
        const {nome_paciente, medico, especialidade, data, horario, observacoes} = req.body;

    if (!nome_paciente || typeof nome_paciente != 'string' || nome_paciente.trim() == '') {
        return res.status(400).send('Nome do paciente é obrigatório e deve ser uma string não vazia.');
    }

    if (!medico || typeof medico != 'string' || medico.trim() == '') {
        return res.status(400).send('Nome do médico é obrigatório e deve ser uma string não vazia.');
    }

    if (!especialidade || typeof especialidade != 'string' || especialidade.trim() == '') {
        return res.status(400).send('O médico deve possuir uma especialidade.');
    }

    if (!data || typeof data != "string" || data.trim() == "") { 
        return res.status(400).send("A data é obrigatória.")
    }

    if (!horario || typeof horario != 'string' || horario.trim() == '') {
        return res.status(400).send('O horário da consulta é obrigatório.');
    }

    if (!observacoes || typeof observacoes != 'string' || observacoes.trim() == '') {
        return res.status(400).send('As observações são necessárias para o médico em sua consulta.');
    }

    connection.query(
      'INSERT INTO consulta (nome_paciente, medico, especialidade, data, horario, observacoes) VALUES (?, ?, ?, ?, ?, ?)',
      [nome_paciente, medico, especialidade, data, horario, observacoes],
      () => {
        res.send('Consulta cadastrada com sucesso!');
      }
    );
})

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'consultorio_medico',
});
  
  connection.connect();
  
  app.post('/consulta', (req, res) => {
    
  });

app.get('/consulta', (req, res) => {
    connection.query("SELECT nome_paciente, medico, especialidade, data, horario, observacoes FROM consulta", (err, results) => {
        if (err) {
            return res.status(500).send("Erro ao buscar consultas.")
        }
        res.status(200).send(results);
    })
})

app.listen(3000, () => {
    console.log("🚀 Servidor backend rodando em http://localhost:3000")
})