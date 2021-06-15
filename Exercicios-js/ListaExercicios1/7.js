/* 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”. */

function Bhaskara(ax2, bx, c) {
    let delta
    delta = bx * bx - 4 * ax2 * c
    if (delta !== 0) {
        let x1, x2
        x1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
        x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
        console.log(`Delta: ${delta}, x1: ${x1}, x2: ${x2}`)
    } else console.log("Delta é negativo!")
}

Bhaskara(1,-1,-6)
Bhaskara(2, -6, 0)
Bhaskara(3, -15, 12)