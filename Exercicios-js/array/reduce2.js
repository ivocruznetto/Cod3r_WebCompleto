const alunos = [
    {nome: 'Ivo', nota: 10, bolsista: true},
    {nome: 'Cintia', nota: 9, bolsista: true},
    {nome: 'Dodora', nota: 10, bolsista: false},
    {nome: 'Débora', nota: 8, bolsista: false}
]

//Desafio 1: Todos os alunos são bolsistas ?
const todosOsBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosOsBolsistas))

//Desafio 2: Algum aluno é bolsista ?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))