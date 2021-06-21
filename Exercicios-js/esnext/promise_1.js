function primeiroElemento(array) {
    return array[0]
}

const primeiraLetra = string => string[0]

const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve('Ivo','Cintia','Maria') // pode passar apenas um unico valor na promise
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)

