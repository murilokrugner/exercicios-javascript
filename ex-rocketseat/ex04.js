/*Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
function experiencia(anos) {
 // código aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master*/

function experiencia(anos){
    if(anos === 0 || anos === 1 ){
        return console.log("Iniciante")
    }else if (anos > 1 && anos <= 3){
        return console.log("Intermediario")
    }else if (anos > 3 && anos <= 6 ){
        return console.log("Avançado")
    }else{
        console.log("Jedi Master")
    }
}

var anosEstudo = 7
experiencia(anosEstudo)




 