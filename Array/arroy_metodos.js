const pilotos = ['Vetel', 'Alonso', 'Massa', 'Hamilton'];
pilotos.pop() // remove o último elemento do array
console.log(pilotos);

pilotos.push('Barrichelo') // adiciona elemento no final do array
console.log(pilotos);

pilotos.shift() // remove o primeiro elemento
console.log(pilotos);

pilotos.unshift('Verstapen') // adiciona elemento no inicio do array
console.log(pilotos);

// splice pode adicionar como remover

// adicionar

pilotos.splice(2, 0, 'Bottas', 'Hamilton')
console.log(pilotos);

// remover

pilotos.splice(3, 1) 
console.log(pilotos); // Hamilton saiu novamente

const algunsPilotos1 = pilotos.slice(2) // adiciona novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2);
