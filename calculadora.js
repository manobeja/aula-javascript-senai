function somar(a, b){
    var resultado = a + b;
console.log("O resultado da soma: " + resultado);
}

function subtrair(a, b){
    var resultado = a - b;
console.log("O resultado da subtração: " + resultado);
}

function divisao(a, b){
    var resultado = a / b;
console.log("O resultado da divisão: " + resultado);
}

function multiplicacao(a, b){
    var resultado = a * b;
console.log("O resultado da multiplicação: " + resultado);
}

module.exports = { somar, subtrair, divisao, multiplicacao };