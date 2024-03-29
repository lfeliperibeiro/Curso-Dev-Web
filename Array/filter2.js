Array.prototype.filter2 = function(callback){
  const newArray = []
  for(let i = 0; i < this.length; i++){
    if(callback(this[i], i, this )){
      newArray.push(this[i])
    }
  }
  return newArray
}

const produtos = [
  {nome: 'Notebook', preco: 2599, fragil: true},
  {nome: 'Ipad Pro', preco: 4190, fragil: true},
  {nome: 'Copo de vidro', preco: 12.29, fragil: true},
  {nome: 'Copo de plastico', preco: 3.99, fragil: false}
]

const caro = produto => produto.preco >= 500

const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter2(fragil));