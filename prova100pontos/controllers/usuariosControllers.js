const conexao = require('../db/conexao')
const bcrypt = require('bcryptjs')

// Criar rota post
exports.criarUsuarios = async (req, res) => {
    const { nome, email, senha } = req.body

    if (!nome || typeof nome !== 'string' || nome.trim() === '') {
        return res.status(400).send('O nome do usuário é obrigatório e deve ser uma string não vazia.');
    }

    if (!email || typeof email !== 'string' || email.trim() === '') {
        return res.status(400).send('O email é obrigatório e deve ser uma string não vazia.');
    }

    if (!senha || typeof senha !== 'string' || senha.trim() === '') {
        return res.status(400).send('A senha é obrigatória e deve ser uma string não vazia.');
    }

    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10); // 10 é o número de salt rounds

        conexao.query(
            'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
            [nome, email, senhaCriptografada],
            (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send('Erro ao criar usuário.');
                }
                res.status(201).send('Usuário criado com sucesso!');
            }
        );
    } catch (erro) {
        console.error(erro);
        res.status(500).send('Erro ao processar a senha.');
    }
}