class carro {
    marca;
    modelo;
    ano;

    desligar() {
      console.log("O carro está desligado.")
}
}

var carro1 = new carro();
carro1.marca = "Toyota";
carro1.modelo = "Cross";
carro1.ano = 2008;


console.log(carro1.marca)
console.log(carro1.modelo)
console.log(carro1.ano)
carro1.desligar()