//Classificação de Temperatura
//Você é um meteorologista e deve informar a população sobre as condições climáticas.
//Escreva um código que, ao receber a temperatura em graus Celsius, imprima "Frio",
//"Agradável" ou "Quente".


const prompt = require("prompt-sync")()

const gCelsius = parseFloat(prompt(`Informe o grau Celsius: `))


if (gCelsius <= 26) {
    console.log(`Frio`)
}
else if (gCelsius <=35 ) {
    console.log(`Agradável`)
}
else if (gCelsius <= 45) {
    console.log(`Quente`)
}
else {
    console.log(`Normal no nordeste`)
}