console.log('a =', a) // não dá erro porém dá undefined (içamento)
var a = 2
console.log('a =', a)

console.log('b =', b) // não tem hoisting utilizando let
let b = 2
console.log('b =', b)