// ES8: Object.values/ Object.entries(chave, valor)

const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Melhorias na notação literal

const nome = 'Felipe'
const pessoa = {
  nome,
  saudacao(){
    return 'Boa Tarde!'
  }
}
console.log(pessoa.nome, pessoa.saudacao());

// Class

class animal {}
class cachorro extends animal{
  falar(){
    return 'Au, Au'
  }
}
console.log(new cachorro().falar());