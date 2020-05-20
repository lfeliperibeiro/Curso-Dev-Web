// Class
class pessoa {
  constructor(nome){
    this.nome = nome
  }
  falar(){
    console.log(`Meu nome é ${this.nome}`);
  }
}
const p1 = new pessoa('João')
p1.falar()

// Construtora

function novaPessoa(nome1){
  this.nome1 = nome1
  this.falar = function(){
    console.log(`Meu nome é ${this.nome1}`);
  }
}
const p2 = new novaPessoa('Paulo')
p2.falar()