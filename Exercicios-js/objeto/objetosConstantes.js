// pessoa -> 123 -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa = {nome: 'Ana'} error, não é possível alterar a constante, apenas o atributo

Object.freeze(pessoa) // congela o objeto, não é possível fazer nenhuma modificação

pessoa.nome = 'Maria'
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'}) // declarando como freeze
console.log(pessoaConstante)