/*Crie duas funções para conversão de temperaturas.

Uma converterá celsius em fahrenheit e a outra fará o inverso.

Saiba que 100c é igual a 212f, veja fórmula:

   C          F - 32
-------  =  ---------
   5            9*/

//(0 °C × 9/5) + 32 = 32 °F

function cForf (c) {
    //c = celsius
    var conversao = (c * 9/5) + 32
    return console.log("O valor em fahrenheit é de: " + conversao)
}

cForf(0)