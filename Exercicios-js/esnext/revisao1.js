// let e const
{
    var a = 2
    let b = 3
}

console.log(a) // var não possui escopo de bloco
//console.log(b) // let sim !

// Template String
const produto = 'Ipad'
console.log(`${produto} é caro!`) // aceita quebra de linha

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, ,y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = {nome: 'Ivo', idade: 25}
console.log(i, nome)