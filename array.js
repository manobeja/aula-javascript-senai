// Criar Array
let frutas = ["maçã", "uva", "laranja"];
console.log(frutas[0])

// Adicionar ao final
frutas.push("Abacaxi")

console.log(frutas)

// Excluir o ultimo 
frutas.pop()
console.log(frutas)

//Tamanho do array
let numeros = [10, 20, 30, 40];
console.log(numeros.length); // 4

//Filtra com base em condição
let nomes = ["Ana", "Beatriz", "João", "Carlos"]
let nomeFiltrado = nomes.filter(nome => nome == "João");
console.log(nomeFiltrado)

//Executa uma função em todos os itens
let cores = ["azul", "vermelho", "verde"];
cores.forEach(cor => {
    console.log("Cor: ", cor);
})