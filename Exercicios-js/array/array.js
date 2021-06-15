console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') // não recomendado
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // literal , recomendado
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // não da erro

aprovados[3] = 'Paulo' // mais utilizado pra alterar um elemtno
aprovados.push('Ivo') // mais utilizado pra inserir novo elemento
console.log(aprovados.length)

aprovados[9] = 'Rafael' // pode-se inserir em qualquer indice, os indices dentro do intervalo ficam undefined
console.log(aprovados.length)
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(2, 1)
console.log(aprovados)