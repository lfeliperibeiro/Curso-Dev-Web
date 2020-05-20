const escola = 'Cod3r'
console.log(escola.charAt(4));
console.log(escola.charCodeAt(3));// Unicode
console.log(escola.indexOf('3'));
console.log(escola.substring(1));
console.log(escola.substring(0,3));
console.log('Escola '.concat(escola).concat('!'));// outra forma de concatenar
console.log('Escola ' + escola + '!'); // prefiro sempre usar essa
console.log(escola.replace(3,'e'));
console.log(escola.replace(/\w/g, 'e'));//usando RegEx
console.log('Ana, Maria, Pedro'.split(',')); //quebrar a string em um array
console.log(escola.length);