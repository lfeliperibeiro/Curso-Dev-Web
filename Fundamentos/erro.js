function tratarErro(erro) {
  // throw new Error('...')
  // throw 10
  throw true // throw você lança o erro para o usúario
}

function imprimirNome(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!') // o erro esta nessa linha
  } catch (e) {
    tratarErro(e)
  } finally {
    console.log('final');
  }
}
const obj = {
  nome: 'Roberto'
}
imprimirNome(obj)