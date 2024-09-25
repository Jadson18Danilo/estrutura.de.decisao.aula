const prompt = require("prompt-sync")()

const idade = parseInt(prompt(`Informe a idade: `))

const ehMaiorDeIdade = idade >=18

const naoEhMaiorDeIdade = !ehMaiorDeIdade

if (naoEhMaiorDeIdade) {
    console.log(`É menor de idade`)
} else {
    console.log(`É maior de idade`)
}
// operadores relacionais
// MAIOR QUE ( > )
// MENOR QUE ( < )
// MAIOR OU IGUAL A ( >= )
// MENOR OU IGUAL A ( >= )
// IGUAL A ( == )
// DIFERENTE DE ( != )