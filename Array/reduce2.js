const alunos = [
  {nome: 'João', nota: 7.3, bolsista: false},
  {nome: 'Maria', nota: 9.2, bolsista: true},
  {nome: 'Pedro', nota: 9.8, bolsista: false},
  {nome: 'Ana', nota: 8.7, bolsista: true}
]

// todos os alunos são bolsistas?
const bolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(bolsistas));

// algum aluno é bolsista?

const alunoBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(alunoBolsista));