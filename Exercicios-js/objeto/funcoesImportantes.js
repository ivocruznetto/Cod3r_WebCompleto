const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // ler chaves de um objeto
console.log(Object.values(pessoa)) // ler valores
console.log(Object.entries(pessoa)) // ler chave e valor

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => { // destructuring
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // pode ser listada ? (keys por exemplo)
    writable: false, // pode ser alterada ?
    value: '01/01/2019' // valor padrão
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // concatena ao primeiro obj os demais objs (subscreve quando encontra variavel repetida, considerando o ultimo valor)
console.log(obj)