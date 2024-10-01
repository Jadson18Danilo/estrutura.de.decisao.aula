// imprima dois número e diga qual é maior
const prompt = require("prompt-sync")()

const valor1 = parseInt(prompt(`Digite o primeiro valor: `))

const valor2 = parseInt(prompt(`Digite o segundo valor: `))


if (valor1 > valor2) {
    console.log(`O 1° valor é MAIOR!`)
} else if (valor1 == valor2) {
    console.log(`O 1° valor e o 2° valor são IGUAIS!`)
} else {
    console.log(`O 2° valor é MAIOR!`)
}