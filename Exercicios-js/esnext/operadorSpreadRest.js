// operador ... rest(juntar) / spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = {nome: 'Ivo', salario: 1800}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spread com array
const grupoA = ['Ivo', 'Cintia']
const grupoFinal = ['Maria', ...grupoA, 'Luiza']
console.log(grupoFinal)