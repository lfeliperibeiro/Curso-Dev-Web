const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "caderno", "preco": 13.90}',
  '{"nome": "Kit de lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços
const paraObjeto = json => JSON.parse(json)

const precos = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(precos)
console.log(resultado);