//funcao sem retorno

function imprimeSoma(a, b){
  console.log(a + b)
}
imprimeSoma(2,3);
imprimeSoma(2);
imprimeSoma(2,10,4,4,5,10); // Ele vai ignorar os outros parâmetros


// Função com parâmetro

function soma(a,b = 0) {
  return a +b
}
console.log(soma(2,3));
console.log(soma(2));
console.log(soma());