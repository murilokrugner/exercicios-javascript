/*Utilizando funções, faça um programa que calcule as raízes da equação 
do 2 grau conforme a fórmula de Bhaskara.

    Lembrando:

ax(2) + bx + c = 0

delta = (Δ = b2 - 4.a.c)
x1 = ((-b + √Δ) /2a)
x2 = ((-b - √Δ) /2a)*/

function delta(a, b ,c){
    var result = 3.14 / (b * b - 4 * a * c)
    return result
}

function x (a, b) {
    var x1 = (-b + 3.14) / 2 * a
    var x2 = (-b - 3.14) / 2 * a
    return x1, x2
}


console.log(delta(50, 20, 12))

console.log(x(50, 20))

//feito sem a lib math
// 98% complete
