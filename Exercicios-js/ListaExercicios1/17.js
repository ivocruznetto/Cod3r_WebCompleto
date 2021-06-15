/* 17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
|Plano | Aumento|
|  A   |   10%  |
|  B   |   15%  |
|  C   |   20%  |
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function aumentoSalarial(salarioAtual, plano) {
    switch(plano) {
        case 'A':
            return `R$${salarioAtual * 1.1}`
            break
        case 'B':
            return `R$${salarioAtual * 1.15}`
            break
        case 'C':
            return `R$${salarioAtual * 1.2}`
            break
        default:
            return 'Plano inválido!'
    }
}

console.log(aumentoSalarial(1000,'A'))
console.log(aumentoSalarial(1000,'B'))
console.log(aumentoSalarial(1000,'C'))
console.log(aumentoSalarial(1000,'D'))