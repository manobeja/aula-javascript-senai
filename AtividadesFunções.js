/*
===========================================
📘 Exercícios de Funções em JavaScript
💡 Nível: Iniciante
🎯 Objetivo:
Praticar a criação e o uso de funções em JavaScript,
utilizando a palavra-chave 'function' e a declaração de variáveis com 'var'.

🚀 Bons estudos!

1 - Converter Celsius para Fahrenheit
Crie uma função converterParaFahrenheit que receba a temperatura em Celsius e retorne o valor em Fahrenheit usando a fórmula:
F = (C × 1.8) + 32

2- Calcular média de 3 notas
Crie uma função mediaNotas que receba três números e retorne a média.

3 - Quadrado de um número
Crie uma função quadrado que receba um número e retorne o número ao quadrado.

4 - Converter minutos em segundos
Crie uma função minutosParaSegundos que receba um número de minutos e retorne quantos segundos tem.
segundos = minutos * 60

5 - Converter horas em minutos
Crie uma função horasParaMinutos que receba um número de horas e retorne o total em minutos.
minutos = horas * 60

6 - Verificar se dois nomes são iguais
Crie uma função nomesIguais que receba dois nomes e exiba "Iguais" se forem iguais, e "Diferentes" caso contrário.


===========================================
*/

//Questão 1:

function converterParaFahrenheit(cel){
    var fahrenheit = (cel * 1.8) + 32
    return fahrenheit
}

var valor = converterParaFahrenheit(10)
console.log("O resultado em Fahrenheit é: " + valor)


//Questão 2:

function media(nota1, nota2, nota3){
    var medias = (nota1 + nota2 + nota3) / 3
    return medias
}

var valor = media(10, 11, 12)
console.log("A média é: "+ valor)


//Questão 3

function quad(num1){
    var quadrado = num1 * num1
    return quadrado
}

var valor = quad(10)
console.log("O quadrado do número é: "+ valor)


//Questão 4

function convertMinSec(min){
    var convert = min * 60
    return convert
}

var valor = convertMinSec(10)
console.log("Convertendo dá: "+ valor)


//Questão 5

function convertHorMin(hor){
    var convert = hor * 60
    return convert
}

var valor = convertHorMin(10)
console.log("Convertendo dá: "+ valor)


//Questão 6

function nomes(nome1, nome2){
    if (nome1==nome2){
        console.log("Os nomes são iguais!")
    } 
    else 
    console.log("Os nomes não são iguais!")
}
 nomes("Vitor", "Vitor")