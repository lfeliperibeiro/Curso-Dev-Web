// console.log(global);

// Usando o freeze para que não seja alterado o Objeto global
global.minhaApp = Object.freeze({ 
  saudacao(){
    return 'Estou em todos os lugares!'
  },
  nome: 'Sistema'
})