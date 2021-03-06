console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);


// Dentro de uma função o exports não aponta para this
// Global aponta para this dentro de uma função
function logThis(){
  console.log('Dentro de uma função ');
  console.log(this === exports);
  console.log(this === global);
}

logThis()