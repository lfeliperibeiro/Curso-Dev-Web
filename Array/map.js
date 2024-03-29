// map serve para fazer uma transformação no array
// map não causa alteração no array original

const nums = [1,2,3,4,5];

// map é um for com propósito

let resultado = nums.map(function(e){
  return e * 2
})
console.log(resultado);

const soma10 = e => e + 10
const tripo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(tripo).map(paraDinheiro)
console.log(resultado);


