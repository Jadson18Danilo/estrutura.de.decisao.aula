//Verificação de Aprovado ou Reprovado
//Um professor deseja saber se seus alunos foram aprovados ou reprovados com base
//na média final. Crie um código que, ao receber a média, imprima "Aprovado" ou
//"Reprovado".

const prompt = require("prompt-sync")()

const medFinal = parseInt(prompt(`Digite o Valor da Média final: `))

if (medFinal <= 5) {
    console.log(`REPROVADO`)
} else {
    console.log(`APROVADO`)
}