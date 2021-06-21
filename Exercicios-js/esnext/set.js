// não aceita repetição / não indexada
const times = new Set()
times.add('Cruzeiro')
times.add('Atlético').add('América').add('Flamengo')
times.add('Cruzeiro')

console.log(times)
console.log(times.size)
console.log(times.has('América'))
console.log(times.has('américia'))
times.delete('América')
console.log(times.has('América'))

const nomes = ['Ivo', 'Cintia', 'Cintia']
const nomesSet = new Set(nomes)
console.log(nomesSet)