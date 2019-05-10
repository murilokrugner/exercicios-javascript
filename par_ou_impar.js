function ParOuImpar(vc, pc, msg){
    if (vc === 1 & pc === 2){
        return msg = console.log('Você escolheu PAR e o computador escolheu IMPAR')
    } else{
        return msg = console.log('Você escolheu IMPAR e o computador escolheu PAR')
    }
}  

function numbers(vcnum, pcnum){
    total = vcnum + pcnum
    return total
}

function resultado(vc, pc, total){
    if vc === 1 ){
        console.log('Você ganhou')
    } else{
        console.log("Você perdeu!")
    }
}

ParOuImpar(1, 2)
resultado()
