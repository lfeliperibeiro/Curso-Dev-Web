const tecnologia = new Map()
tecnologia.set('React', {framework: false})
tecnologia.set('Angular', {framework: true})

console.log(tecnologia.get('React'));

const chavesVariadas = new Map([
  [function() { }, 'Função' ],
  [{}, 'Objeto'],
  [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl);
})

console.log(chavesVariadas.has(123));
chavesVariadas.delete((123))
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(123, 'c')
console.log(chavesVariadas);