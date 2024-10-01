//Classificação de Risco de Saúde
//Um profissional de saúde deseja classificar os pacientes com base no IMC (Índice de 
//Massa Corporal). Escreva um código que imprima a classificação do IMC.

const prompt = require("prompt-sync")()

const mCorporal = parseFloat(prompt(`Digite o IMC: `))

if (mCorporal <= 300.00) {
    console.log(`Faz dieta ou morre!`)
}
else if (mCorporal <= 100.00 ) {
    console.log(`Papudin`)
}
else if (mCorporal <= 75.00) {
    console.log(`Corpinho dr modelo`)
}
else if (mCorporal <= 40.00) {
    console.log(`precisa comer mais fejão com arroz`)
}
else {
    console.log(`Só tirar o chinelo para começar a voar`)
}