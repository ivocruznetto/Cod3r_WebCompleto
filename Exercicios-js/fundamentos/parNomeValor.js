//par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Ivo',
    idade: 25,
    peso: 73,
    endereco: {
        rua: 'Ines Olinda de Carvalho',
        numero: 79
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)