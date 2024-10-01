//Classificação de Idade
//Um educador quer classificar seus alunos com base na idade para organizar atividades.
//Escreva um código que receba a idade de um aluno e imprima "Criança", "Adolescente",
//"Adulto" ou "Idoso".

const prompt = require("prompt-sync")()

const idade = parseInt(prompt("Digite a idade: "))

if (idade <= 13) {
    console.log(`Criança`)
} 
else if (idade < 18) {
    console.log(`Adolescente`)
}
else if (idade < 30) {
    console.log(`Adulto`)
}
else if (idade <= 80) {
    console.log(`Idoso`)
}
else {
    console.log(`Guerreiro`)
}