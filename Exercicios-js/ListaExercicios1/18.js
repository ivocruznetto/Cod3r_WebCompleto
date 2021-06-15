/* 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’ */

function numeroExtenso(num) {
    switch (num) {
        case 1:
            return 'Um'
            break
        case 2:
            return 'Dois'
            break
        case 10: 
            return 'Dez'
            break
        default:
            return 'Número fora do intevalo!'
    }
}

console.log(numeroExtenso(1))
console.log(numeroExtenso(2))
console.log(numeroExtenso(10))
console.log(numeroExtenso(151))