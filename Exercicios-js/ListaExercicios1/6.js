/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function jurosSimples(capitalInicial, tJuros, tempoAplicacao) {
    let Montante
    Montante = capitalInicial * (1 + tempoAplicacao * tJuros)
    return 'R$' + Montante.toFixed(2).replace('.', ',')
}

console.log(jurosSimples(100, 0.02, 2))

function jurosComposto(capitalInicial, tJuros, tempoAplicacao) {
    let Montante
    tJuros += 1
    for (let i = 1; i < tempoAplicacao; i++) {
        tJuros *= tJuros
    }
    Montante = capitalInicial * tJuros
    return 'R$' + Montante.toFixed(2).replace('.', ',')
}

console.log(jurosComposto(100, 0.02, 2))