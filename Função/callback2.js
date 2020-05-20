const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem callback

const notasBaixas = []
for(let i in notas) {
  if(notas[i] < 7) {
    notasBaixas.push(notas[i])
  }
}
console.log(notasBaixas);

// com callback

const notasBaixas2 = notas.filter(function(nota){
  return nota <= 7
})
console.log(notasBaixas2);

const notasMenorQue7 = nota => nota < 7 // variával que pode ser reaproveitada
const notasBaixas3 = notas.filter(notasMenorQue7) // redução do código
console.log(notasBaixas3);