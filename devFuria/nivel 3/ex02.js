/*Faça um programa para somar os dígitos de um inteiro

Sem utilizar recursos de string, ou seja, trabalhe apenas com tipos numéricos.

Somar dígitos significa que dados um número qualquer, exemplo, 2015, devemos somar seus dígitos:

2  +  0 +  1 +  5
O resultado esperado para o número acima seria 8.*/

var somarDigitos = function (numero) {
    var soma = 0;

    while (numero != 0) {
        soma += numero % 10;
        numero = parseInt(numero / 10); // <--- atenção
    }

    return soma;
}

console.log(somarDigitos(2015))


