/*Faça um programa para calcular o juros simples segundo a fórmula abaixo.
J = C.i.n
Onde:
J = juros,
C = capital,
i = taxa de empréstimo
n = períodos
Vamos imaginar o seguinte cenário: um empréstimo de R$ 16.000,00 sobre 
a taxa de 4% durante 4 meses.*/

function calcular(c){
    //var j = 0.14
    var i = 0.04
    var n = 4
    var calculo = c * i * n
    return console.log("Total de juros: " + calculo.toFixed(3))
}

calcular(16.000,00)

