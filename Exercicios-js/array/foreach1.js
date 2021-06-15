const aprovados = ['Ivo', 'Cintia', 'Dodora', 'Débora']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome)) // função dentro do foreach

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados) // chamando a função no foreach

