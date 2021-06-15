const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

const template = `
    Olá
    ${nome}!`

console.log(concatenacao)
console.log(template)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up	('cuidado')}!`)