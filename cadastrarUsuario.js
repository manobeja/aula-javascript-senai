function cadastrar(nome, idade){

    if (nome != "" && idade != ""){
        console.log("Nome: " + nome)
        console.log("Idade: " + idade)
     }else{
        console.log("Erro: Nome e idade são obrigatórios para o cadastro!")
     }

    if (nome !=  "" && idade != ""){
        console.log("O Usuário foi cadastrado com sucesso!!")
    }
} 

module.exports = cadastrar