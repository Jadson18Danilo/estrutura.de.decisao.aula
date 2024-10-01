//Classificação de Notas
//Em uma escola, os professores precisam classificar as notas dos alunos. Crie um
//código que receba a nota de um aluno e imprima "Conceito A", "Conceito B", "Conceito
//C" ou "Reprovado".

const prompt = require("prompt-sync")()

const nota = parseFloat(prompt(`Informe sua nota: `))

if (nota < 3) {
    console.log(`REPROVADO`)
}
else if (nota <= 5) {
    console.log(`Conceito C`)
}
else if (nota <= 7) {
    console.log(`Conceito B`)
}
else if (nota >= 8) {
    console.log(`Conceito A`)
}