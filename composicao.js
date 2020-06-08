// conceito de currying (lazy eval.)
function composicao(...funcoes){
    return function(valor){
        return funcoes.reduce((acc, fn) =>{
            return fn(acc)
        }, valor)
    }
}

function gritar(texto){
    return texto.toUpperCase()
}

function enfatizar(texto){
    return `${texto}!!!`
}

function tornarLento(texto){
    return texto.split('').join(' ')
}
const exagerado = composicao(gritar, enfatizar, tornarLento)
const quaseExagerado = composicao(gritar, enfatizar)

console.log(exagerado('cuidado com o buraco'));
console.log(quaseExagerado('para'));
