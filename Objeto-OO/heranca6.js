function Aula(nome, videoID){
  this.nome = nome
  this.videoID = videoID
}

// new cria um novo objeto 

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2);

// simulação de new

function novo(f, ...params){
  const obj ={}
  obj,__proto__ = f.prototype
  f.apply(obj, params)
  return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)

console.log(aula3, aula4);