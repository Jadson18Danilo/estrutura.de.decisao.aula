//Você deve criar um programa que ajude um professor a verificar se os números de um
//conjunto de alunos são pares ou ímpares. O professor fornecerá um número.

const prompt = require("prompt-sync")()

const num1 = parseInt(prompt(`Digite um número: `))

if (num1 % 2 == 0) {
    console.log(`Número Par`)
} else {
    console.log(`Número Impar`)
}