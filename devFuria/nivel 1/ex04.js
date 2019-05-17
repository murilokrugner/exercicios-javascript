/*Faça um algoritmo que calcule o reajuste de um 
salário, utilize os seguintes dados:

salário  = 1.000,00
reajuste = 15%,*/

function calcularSalario(salario){
    var result = salario + (salario * 0.15)
    return console.log("O reajuste é de: " + result.toFixed(3) + ' reais')
}

calcularSalario(1.000,00)

