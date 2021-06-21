for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) { // for in
    console.log(i)
}

for (let assunto of assuntosEcma) { // for of
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for (let assunto of assuntosMap) { // for of geral
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) { // for of das chaves
    console.log(chave)
}

for (let valor of assuntosMap.values()) { // for of dos valores
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) { // for of chave/valor
    console.log(ch, vl)                       // utilizando destructuring
} 

const s = new Set(['a', 'b', 'c']) // percorrendo o Set
for (let letra of s) {
    console.log(letra)
}

