//Verificação de Faixa Salarial
//Um consultor de recursos humanos precisa classificar os salários de candidatos em
//uma empresa. Escreva um código que, ao receber o salário, imprima "Baixa", "Média"
//ou "Alta".

const prompt = require("prompt-sync")()

const salario = parseFloat(prompt(`Informe seu Salário: R$ `))

if (salario <= 1.320) {
    console.log(`Baixo`)
}
else if (salario <= 2.640 ) {
    console.log(`Médio`)
}
else if (salario <= 5.280) {
    console.log(`Alto`)
}
else {
    console.log(`Mínimo do Programador`)
}