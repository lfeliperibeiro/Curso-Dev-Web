const pessoa = {
  nome: 'Rebeca',
  idade: 12,
  peso: 40
}
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave, valor]) => { // método destruction
  console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true, // passiva a ser listada?
  writable: false, // aceitar ser modificada?
  value: '01/01/2020' // atribuir valor
})

pessoa.dataNascimento = '01/01/2008'
console.log(pessoa.dataNascimento);

// Object.assign 

const dest = {a: 1};
const o1 = {b: 2};
const o2 = {c: 3, a: 4};
const obj = Object.assign(dest, o1, o2);

Object.freeze(obj); // não consigo alterar mais o objeto
console.log(obj);

