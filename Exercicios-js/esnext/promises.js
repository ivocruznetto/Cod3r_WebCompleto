function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)      // resolve aceita apenas um parâmetro
        }, segundos * 1000);
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?')) // função then pode ser chamada quantas vezes precisar
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // função catch para tratar possível erro