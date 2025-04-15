function diminuirNumeros (a, b) {
    var resultado = a - b
    console.log("O resultado da subtração é " + resultado);
}

diminuirNumeros(6, 9);
diminuirNumeros(2, 9);
diminuirNumeros(100, 49);



function idade (idade) {

    if(idade>=18){
        console.log("Voce é maior de idade. ");
    }
    else {
        console.log("Voce é menor de idade. ");
    }
}
    
    idade(69);
    idade(6);



function areaRetangulo (b, a) {
        var resultado = b * a
        console.log("A area desse retangulo será " + resultado)

} 
        
areaRetangulo(10, 4);



function endereco (rua, num, bairro, cidade, estado, cep) {
    console.log("Voce mora na rua " + rua + ", numero " + num + ", bairro " + bairro + ", na cidade de " + cidade + ", no estado " + estado + " e com o cep " + cep)
}
endereco("Jucelino Vargas", "69", "Bairro de Fátima", "Valença", "Rj", "27600000")