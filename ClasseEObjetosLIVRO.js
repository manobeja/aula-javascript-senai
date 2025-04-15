class livro {
    titulo
    autor

    exibirinfo(){
        console.log("Essas são as informações sobre o livro.")
    }
}

var meuLivro = new livro();
meuLivro.titulo = "Aquele Lá";
meuLivro.autor = "Monique";

var meuLivro2 = new livro();
meuLivro2.titulo = "Aquele Lá 2";
meuLivro2.autor = "Monique Albuquerque";

var meuLivro3 = new livro();
meuLivro3.titulo = "Aquele Lá 3";
meuLivro3.autor = "Monique Albuquerque Texeira";

console.log(meuLivro)
console.log(meuLivro2)
console.log(meuLivro3)
meuLivro.exibirinfo()
