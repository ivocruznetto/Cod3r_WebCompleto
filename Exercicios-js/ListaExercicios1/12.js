// 12) Faça um algoritmo que calcule o fatorial de um número.

//meu
function fatorial(num) {
    let fatorial = num
    for (let i = 1; i < num; i++) {
        fatorial *= i
    }
    return fatorial == 0 ? 1 : fatorial
}

console.log(fatorial(2))

// curso
function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(5))
