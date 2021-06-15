const alunos = [
    {nome: 'Ivo', nota: 10, bolsista: true},
    {nome: 'Cintia', nota: 9, bolsista: true},
    {nome: 'Dodora', nota: 10, bolsista: false},
    {nome: 'Débora', nota: 8, bolsista: false}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)