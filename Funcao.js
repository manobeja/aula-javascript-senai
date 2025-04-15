function mostrarSaudacao() {
    var mensagem = "Olá! Seja Bem vindo ao mundo da programação! ";
    console.log(mensagem);
}

mostrarSaudacao();

//
function mostrarSaudacao(nome) {
    console.log("Olá! "+ nome + " Seja Bem vindo ao mundo da programação! ");
}

mostrarSaudacao("Miguel");

//
function somarNumeros (a, b) {
    var resultado = a + b
    console.log("O resultado da soma é " + resultado);
}

somarNumeros(4, 9);

//
function dobro (numero) {
    var resultado = numero * 2
    return resultado
}

var valor = dobro(4);
console.log(valor)