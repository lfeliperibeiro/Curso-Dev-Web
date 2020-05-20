function produtos(nome, preco){
  return{
    nome,
    preco,
    desconto: 0.1
  }
}
console.log(produtos('Banana', 10));    
console.log(produtos('Iphone', 4000));