// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function exponencial(base, expoente) {
    let resultado = 1
    for(let i = 0; i < expoente; i++) {
        resultado *= base
    }
    return resultado
}

console.log(exponencial(2,3))
console.log(exponencial(3,2))
console.log(exponencial(5,3))
console.log(exponencial(4,2))
console.log(exponencial(2,1))
console.log(exponencial(2,0))