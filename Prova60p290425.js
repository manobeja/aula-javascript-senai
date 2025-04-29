class Product {
    nome;
    marca;
    preco;

    adicionar(nome){
        this.nome = nome
        console.log("O produto " + this.nome + " foi adicionado ao estoque")
    }

    exibirDetalhes(nome, marca, preco){
        this.nome = nome
        this.marca = marca 
        this.preco = preco
        console.log("O produto " + this.nome + ", da marca " + this.marca + ", custa " + this.preco + " reais.")

    }
}

var produto1 = new Product()
produto1.adicionar("Esponja", "Anatel", 20)

var produto2 = new Product()
produto2.adicionar("Esfregão", "Lunatic", 30)

produto1.exibirDetalhes("Esponja", "Multiúso", 20)
produto2.exibirDetalhes("Esfregão", "Mop", 30)