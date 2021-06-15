/* 19) O cardápio de uma lanchonete é o seguinte:
Código  Descrição do Produto    Preço
100     Cachorro Quente         R$ 3,00
200     Hambúrguer Simples      R$ 4,00
300     Cheeseburguer           R$ 5,50
400     Bauru                   R$ 7,50
500     Refrigerante            R$ 3,50
600     Suco                    R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */

function cardapio(codigo, qtde) {
    switch (codigo) {
        case 100:
            return `${qtde}) Cachorro(s) quente. Valor a ser pago: R$${qtde * 3}`
            break
        case 200:
        case 300:
        case 400:
        case 500:
        case 600:
            return `${qtde}) Suco(s). Valor a ser pago: R$${qtde * 2.8}`
            break
        default:
            return 'Não existe este código!'
    }
}

console.log(cardapio(100,2))
console.log(cardapio(600,2))
console.log(cardapio(220,3))