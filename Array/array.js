console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados);

// Essa é a forma mais correta de passar um array
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados.push('Paulo') // forma de adicionar um novo Array
console.log(aprovados.length);
console.log(aprovados);

aprovados.sort() // coloca em ordem o array
console.log(aprovados);

delete aprovados[1]
console.log(aprovados);

aprovados[1] = 'Bia'; // atribui um nome ao array vazio ou substitui
console.log(aprovados);

aprovados.splice(1,1)// você pode excluir e adicionar os indices 
console.log(aprovados);