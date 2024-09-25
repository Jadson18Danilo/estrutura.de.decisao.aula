const prompt = require("prompt-sync")()

const nota = parseFloat(prompt(`Informe sua nota: `))

const aprovado = nota >= 7

const reprovado = nota <3

if (aprovado) {
    console.log(`Esta APROVADO!`)
} else if (reprovado) {
    console.log(`Esta REPROVADO!`)
} else {
    console.log(`Esta RECUPERAÇÃO!`)
}