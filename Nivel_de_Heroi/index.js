const readline = require('readline-sync');

let nomeHeroi = readline.question("Heroi, informe seu nome: ");
console.log("Seja bem-vindo, " + nomeHeroi);

let XP = readline.question("Agora informe sua quantidade de experiencia: ");
XP = parseInt(XP)

if (XP <= 1000) {
    console.log("O Herói " + nomeHeroi + " está no nível Ferro!")
}
else if (XP >= 1001 && XP < 2001) {
    console.log("O Herói " + nomeHeroi + " está no nível Bronze!")
}
else if (XP >= 2001 && XP < 5001) {
    console.log("O Herói " + nomeHeroi + " está no nível prata!")
}
else if (XP >= 5001 && XP < 7001) {
    console.log("O Herói " + nomeHeroi + " está no nível Ouro!")
}
else if (XP >= 7001 && XP < 8001) {
    console.log("O Herói " + nomeHeroi + " está no nível Platina!")
}
else if (XP >= 8001 && XP < 9001) {
    console.log("O Herói " + nomeHeroi + " está no nível Ascendente!")
}
else if (XP >= 9001 && XP < 10001) {
    console.log("O Herói " + nomeHeroi + " está no nível Imortal!")
}
else if (XP >= 10001) {
    console.log("O Herói " + nomeHeroi + " está no nível Radiante!")
}