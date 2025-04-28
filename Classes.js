//Alunos

class Student {
    nome;
    idade;
    curso;
}

var aluno1 = new Student();
aluno1.nome = "Miguel"
aluno1.idade = 18
aluno1.curso = "Back-end"

var aluno2 = new Student();
aluno2.nome = "Arthur"
aluno2.idade = 18
aluno2.curso = "Back-end"

console.log(aluno1)
console.log(aluno2)


//Carros

class Car {
    marca;
    modelo;
    ano;

    desligar() {
      console.log("O carro está desligado.")
}
}

var carro1 = new Car();
carro1.marca = "Chevrolet";
carro1.modelo = "Onix";
carro1.ano = 2008;

var carro2 = new Car();
carro2.marca = "Toyota";
carro2.modelo = "Cross";
carro2.ano = 2010;

var carro3 = new Car();
carro3.marca = "Fiat";
carro3.modelo = "Sedan";
carro3.ano = 2003;


console.log(carro1)
console.log(carro2)
console.log(carro3)

//Filme

class Film {
    titulo;
    genero;
}

var filme1 = new Film()
filme1.titulo = "De Volta Para o Futuro"
filme1.genero = "Ficção Científica"

var filme2 = new Film()
filme2.titulo = "De Volta Para o Futuro 2"
filme2.genero = "Ficção Científica"

console.log(filme1.titulo)
console.log(filme1.genero)
console.log(filme2.titulo)
console.log(filme2.genero)



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

var produto1 = new Product()
produto1.nome = "Esponja"
produto1.preco = 5
produto1.quant = 20

var produto2 = new Product()
produto2.nome = "Kit de esfregão"
produto2.preco = 600
produto2.quant = 20

console.log(produto1)
console.log(produto2)
produto1.exibirDetalhes()
produto1.calcularTotal1()
produto2.calcularTotal2()


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

console.log(pessoa1)