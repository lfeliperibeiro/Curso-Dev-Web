// Usa Promise quando você quer um processamento assíncrono
// .cath é usado para tratar erro 
// ex: rejecj no lugar do resolve
// .catch(e => console.log(e))

function depoisDe(segundos, frase){
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve(frase)
    }, segundos * 1000)
  })
}

depoisDe(3, 'Falar!')
  .then(frase => frase.concat('?!?'))
  .then(outraFrase => console.log(outraFrase))
