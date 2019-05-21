/*Faça um programa para identificar se um 
número é primo.
Lembre-se que número primo, é um número 
natural, maior que 1, apenas divisível por si 
próprio e pela unidade.*/

const primo = function (num) {
    var div = 0
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            div = div + 1
        }
    }
    if (div > 2) {
        console.log('NAO PRIMO')
    } else {
        console.log('PRIMO')
    }
}

console.log(primo(17))

//output - undefined ?