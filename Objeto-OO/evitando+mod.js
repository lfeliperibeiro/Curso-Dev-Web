// Object.preventExtensions

// Este Objeto pode ser excluido, mas não add e nem modificado

const produto = Object.preventExtensions({
  nome: 'Bruno',
  preco: 1.99,
  tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto));
produto.descricao = 'Borracha'
delete produto.tag
console.log(produto);

// Object.seal
// não consegue add nem remover, mas consegue modificar

const pessoa = {
  nome: 'Juliana',
  idade: 35
}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa);

// Object.freeze = seal + valores constantes

