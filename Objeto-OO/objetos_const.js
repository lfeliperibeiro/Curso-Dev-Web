// pessoa -> 123 -> {..}

const pessoa = {nome: 'João'};
pessoa.nome = 'Pedro';
console.log(pessoa);

// pessoa -> 456 -> {...}
// pessoa é uma constante e isso vai gerar erro

// pessoa = {nome: 'Ana'};

Object.freeze(pessoa) // você esta congelando o objeto
pessoa.nome = 'Maria'
console.log(pessoa.nome);

const pessoaConst = Object.freeze({nome: 'João'}) // A const já fica intacta desde o inicio
console.log(pessoaConst);

