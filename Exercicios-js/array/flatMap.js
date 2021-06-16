const escola = [{
    nome: 'Tuma M1',
    alunos: [{
        nome: 'Ivo',
        nota: 8.1
    }, {
        nome: 'Cintia',
        nota: 10
    }]
}, {
    nome: 'Tuma M2',
    alunos: [{
        nome: 'Maria',
        nota: 9.5
    }, {
        nome: 'João',
        nota: 8
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)