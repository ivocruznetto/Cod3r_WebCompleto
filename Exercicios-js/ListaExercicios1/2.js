/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

function triangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 == lado3) {
        console.log('Equilátero')
    } else if (lado1 == lado2) {
        console.log('Isósceles')
    } else if (lado1 == lado3) {
        console.log('Isósceles')
    } else if (lado2 == lado3) {
        console.log('Isósceles')
    } else {
        console.log('Escaleno')
    }    
}

console.log('Escalenos...: ')
triangulo(1,2,3)
triangulo(1,3,2)
triangulo(2,1,3)
triangulo(2,3,1)
triangulo(3,1,2)
triangulo(3,2,1)

console.log('Isósceles...: ')
triangulo(1,1,2)
triangulo(1,2,2)
triangulo(1,2,1)

console.log('Equiláteros...: ')
triangulo(1,1,1)