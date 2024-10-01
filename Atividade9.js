//Verificação de Resultados de Um Concurso
//Um organizador de concursos precisa avaliar os candidatos com base na nota que
//obtiveram. Crie um código que, ao receber a nota do concurso, imprima a situação do
//candidato

const prompt = require("prompt-sync")()

const notaConcurso = parseFloat(prompt(`Digite a nota: `))

if (notaConcurso <= 3) {
    console.log(`tente no próximo ano!`)
}
else if (notaConcurso <= 5 ) {
    console.log(`estude mais um pouco`)
}
else if (notaConcurso <= 7) {
    console.log(`Parabéns! passou se arrastando`)
}
else {
    console.log(`Parabens! fez o básico`)
}