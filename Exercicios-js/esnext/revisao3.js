// ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj)) // array com valores
console.log(Object.entries(obj)) // array de arrays com chave/valor

// Melhorias na notação literal
const nome = 'Ivo'
const pessoa = {
    nome, 
    ola() {
        return 'Fala galera!'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())