const pessoa1 = {
    nome: '...',
    sobrenome: '...'
}

const pessoa2 = {
    nome: '...',
    sobrenome: '...'
}

// factory simples
function criarPessoa() {
    return {
        nome: 'Ivo',
        sobrenome: 'Cruz'
    }
}

console.log(criarPessoa())