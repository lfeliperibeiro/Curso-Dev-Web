// Operador ... rest(juntar)/ spread(espalhar)
// Usar rest com parâmetro de função

// usar spread com objeto

const funcionario = { nome: 'Maria', salario: 12.350}
const clone = {ativo: true, ...funcionario}
console.log(clone);

// Usar spread com array

const grupoA = ['João', 'Carlos', 'Pedro']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal);