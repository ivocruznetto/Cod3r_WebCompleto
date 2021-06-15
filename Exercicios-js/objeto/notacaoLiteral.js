const a = 1
const b = 2
const c = 3

obj1 = {a: a, b: b, c: c} // não é necessário fazer assim, a menos que queria alterar o nome da variável
obj2 = {a, b, c} // forma simplificada
obj6 = {alto: a, baixo: b, caro: c} // alterando o nome
console.log(obj1,obj2,obj6) 

const nomeAtributo = 'nota'
const valorAtributo = 7.87

const obj3 = {}
obj3[nomeAtributo] = valorAtributo
console.log(obj3)

const obj4 = {[nomeAtributo]: valorAtributo}
console.log(obj4)

const obj5 = { 
    funcao1: function() { // antiga declaração
        // ...
    },
    funcao2() { // nova declaração
        // ...
    }
}