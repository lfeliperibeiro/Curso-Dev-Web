// JSON é um formato de dados
// Simples de ser interpretado pelos sistemas e webservice

const obj = { a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj));// A função foi ignorada

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'));// formato Json tem que se em ""
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}'));

