/* 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

function contarNotas(valor) {
    let total = ''
    if (valor >= 100) {
        let notasCem = valor - valor % 100
        valor -= notasCem
        notasCem /= 100
        total += notasCem + ' Nota(s) de R$ 100. ' 
    }
    if (valor >= 50) {
        let notasCinquenta = valor - valor % 50
        valor -= notasCinquenta
        notasCinquenta /= 50
        total += notasCinquenta + ' Nota(s) de R$ 50. '
    }
    console.log(valor)
    return total
}

console.log(contarNotas(250))
