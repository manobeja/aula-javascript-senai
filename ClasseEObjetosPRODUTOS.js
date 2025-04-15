class Produtos {
    nome;
    preco;
    quant;

    exibirDetalhes(){
        console.log("Esses são os detalhes")
    }

    calcularTotal1(preco, quant){
       var total = this.preco * this.quant
        console.log("O total da esponja é: " + total);
    }

    calcularTotal2(preco, quant){
        var total = this.preco * this.quant
         console.log("O total do Kit de esfregão é: " + total);
     }
}

var produto1 = new Produtos()
produto1.nome = "Esponja"
produto1.preco = 5
produto1.quant = 20

var produto2 = new Produtos()
produto2.nome = "Kit de esfregão"
produto2.preco = 600
produto2.quant = 20

console.log(produto1)
console.log(produto2)
produto1.exibirDetalhes()
produto1.calcularTotal1()
produto2.calcularTotal2()