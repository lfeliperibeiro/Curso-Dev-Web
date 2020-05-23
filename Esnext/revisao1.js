// let e const

{
  var a = 2
  let b = 3
  console.log(b); // aqui já funciona
}
console.log(a);
//console.log(b);// não irá funcionar, já que let tem escopo de bloco

// Template String

const produto = 'Notebook'
console.log(`${produto} é caro!`);

// Destructuring

const [l, e, ...tras] = 'Felipe'
console.log(l,e, tras);

const [x,y] = [1, 2, 3]
console.log(x, y);

const {idade, nome} = {nome: 'Ana', idade: 20}
console.log(idade, nome);