/*O custo de um carro novo ao consumidor é obtido com a seguinte fórmula:

custo final = custo de fábrica +
              (custo de fábrica * percentual do distribuidor) +
              (custo de fábrica * percentual de impostos)
Considerando os valores abaixo, faça um programa para calcular o 
custo de fabricação.

Custo de fábrica = 10.000,00
Percentual do distribuidor = 28%
Percentual dos Impostos  = 45%*/

function calcular(fabrica){
    var CustoDistribuidor = fabrica * 0.28
    var custoImpostos = fabrica * 0.45
    var custoTotal = fabrica + CustoDistribuidor + custoImpostos
    return console.log("Custo total: " + custoTotal)
}

calcular(10.000,00)













