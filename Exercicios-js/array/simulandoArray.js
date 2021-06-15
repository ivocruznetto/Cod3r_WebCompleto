const quaseArray = {0: 'Ivo', 1: 'Cintia', 2: 'Dodora'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() {return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Ivo', 'Cintia', 'Dodora']
console.log(quaseArray.toString(), meuArray)