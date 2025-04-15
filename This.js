class Calculadora{

     valor1;
     valor2;
    

    somar(valor1, valor2) {
        this.valor1 = valor1
        this.valor2 = valor2
        var resultado = this.valor1 + this.valor2
        console.log("O resultado da soma é: " + resultado)

    }
}

var calc = new Calculadora()
calc.somar(10, 20)