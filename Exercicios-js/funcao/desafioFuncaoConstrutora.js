function Pessoa(nome) {

    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const Pessoa1 = new Pessoa('Ivo')
Pessoa1.falar()