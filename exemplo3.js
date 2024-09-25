//crie um algoritmo que solicite um número e informe se o número é PAR ou ÍMPAR
const prompt = require("prompt-sync")()

const num = parseInt(prompt(`Digite um número: `))

if (num % 2 == 0) {
    console.log(`Número Par`)
} else {
    console.log(`Número Impar`)
}