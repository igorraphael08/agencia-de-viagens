let prompt = require('prompt-sync')();

console.log("Bem vindo a TWS Viagens")
console.log("")
console.log("Nossa companhia aérea oferece a melhor expêriencia possível na hora do voo, oferecemos atendimento imediato ao longo do voo, e segurança garantida durante a viagem, tudo para você conhecer o lugar dos seus sonhos.")
console.log("")
let login = prompt("Digite seu nome:");

console.log("Para onde você deseja ir?")


let lugar = "Nova York"
let lugar2 = "Xique Xique"
let lugar3 = "Dinamarca"
let lugar4 = "Canadá"

console.log("1 - Nova York")
console.log("2 - Xique Xique")
console.log("3 - Dinamarca")
console.log("4 - Canadá")

let resposta = prompt("Digite o número da opção desejada: ")

if (resposta == 1) {
    console.log("Você escolheu: " + lugar)
}
if (resposta == 2) {
    console.log("Você escolheu: " + lugar2)
}
if (resposta == 3) {
    console.log("Você escolheu: " + lugar3)
}
if (resposta == 4) {
    console.log("Você escolheu: " + lugar4)
}