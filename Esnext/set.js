// não aceita repetição e não indexada

const times = new Set()
times.add('São Paulo')
times.add('Palmeiras')
times.add('Santos')
times.add('Corinthians')

console.log(times);
console.log(times.size);
console.log(times.has('São Paulo'));
times.delete('Corinthians')
console.log(times);


const nomes = ['Paulo', 'Carlos', 'Felipe', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet);