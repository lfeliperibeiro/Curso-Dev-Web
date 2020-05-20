// Classe é uma forma diferente de escrever uma função

class avo{
  constructor(sobrenome){
    this.sobrenome = sobrenome
  }
}

class pai extends avo{
  constructor(sobrenome, profissao = 'Professor') {
    super(sobrenome) // superclasse de pai é avo
    this.profissao = profissao
  }
}

class filho extends pai{
  constructor(){
    super('Silva')
  }
}

const filhos = new filho
console.log(filhos);