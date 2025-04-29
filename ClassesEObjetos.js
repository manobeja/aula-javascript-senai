//Alunos

class Student {
    nome;
    idade;
    curso;

    exibir(nome, idade, curso) {
        this.nome = nome
        this.idade = idade
        this.curso = curso
        console.log("Olá, meu nome é " + this.nome)
        console.log("Tenho " + this.idade + " anos")
        console.log("Faço o curso: " + this.curso)

    }
}

var aluno1 = new Student();
aluno1.exibir("Miguel", 18, "BackEnd")

var aluno2 = new Student();
aluno2.exibir("Arthur", 18, "BackEnd")


//Carros

class Car {
    marca;
    modelo;
    ano;

    exibirCarro(marca, modelo, ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        console.log("Esse carro é da marca " + this.marca + ", do modelo " + this.modelo + ", e foi lançado no ano de " + this.ano)

    }

    desligar() {
      console.log("O carro está desligado.")
}
}

var carro1 = new Car();
carro1.exibirCarro("Chevrolet", "Onix", 2010)

var carro2 = new Car();
carro2.exibirCarro("Toyota", "Cross", 2006)

var carro3 = new Car();
carro3.exibirCarro("Fiat", "Sedan", 2003)


//Filme

class Film {
    titulo;
    genero;

    generoDetalhes(titulo, genero){
        this.titulo = titulo
        this.genero = genero
        console.log("O nome do filme é: " + this.titulo + ". E ele é do gênero: " + this.genero)

    }
}

var filme1 = new Film()
filme1.generoDetalhes("De Volta Para o Futuro", "Ficção Científica")

var filme2 = new Film()
filme2.generoDetalhes("De Volta Para o Futuro 2", "Ficção Científica")



//Livros

class Book {
    titulo;
    autora;

    exibirinfo(titulo, autora){
        this.titulo = titulo
        this.autora = autora
        console.log("O título do livro é: " + this.titulo  + ". E o autor(a) é: " + this.autora)
    }
}

var livro1 = new Book()
livro1.exibirinfo("Aquele Lá", "Monique")

var livro2 = new Book()
livro2.exibirinfo("Aquele Lá 2", "Monique Albuquerque")

var livro3 = new Book()
livro3.exibirinfo("Aquele Lá 3", "Monique Albuquerque Almeida")



//Produtos

class Product {
    nome;
    preco;
    quant;

    exibirDetalhes(nome, preco, quant){
        this.nome = nome
        this.preco = preco
        this.quant = quant
        console.log("Esses são os detalhes: " + this.nome + ". O preço é: " + this.preco + ". E a quantidade no estoque é: " + this.quant)
    }

    calcularTotal1(preco, quant){
       this.preco = preco
       this.quant = quant
       var total = this.preco * this.quant
        console.log("O total da Esponja é: " + total);
    }

    calcularTotal2(preco, quant){
        this.preco = preco
        this.quant = quant
        var total = this.preco * this.quant
         console.log("O total do Esfregão é: " + total);
     }
}

var produto1 = new Product()
produto1.exibirDetalhes("Esponja", 10, 20)

var produto2 = new Product()
produto2.exibirDetalhes("Esfregão", 10, 30)

produto1.calcularTotal1(10, 20)
produto2.calcularTotal2(10, 30)



//Pessoa

class People{
    nome;
    idade;

    falar(nome, idade) {
        this.nome = nome
        this.idade = idade
        console.log("Olá, meu nome é " + this.nome)
        console.log("Tenho " + this.idade + " anos")

    }

}

var pessoa1 = new People();
pessoa1.falar("Miguel", 18)