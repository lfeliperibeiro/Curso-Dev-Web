// for of impera em valores

for(let letra of 'Felipe'){
  console.log(letra);
}

const assunto = ['Map', 'Set', 'Promisse']
for(let i in assunto){
  console.log(i);
}

for(let assuntos of assunto){
  console.log(assuntos);
}

const assuntosMap = new Map([
  ['Map', {abordado: true}],
  ['Set', {abordado: true}],
  ['Promisses', {abordado: false}]
])

for(let assuntos of assuntosMap){
  console.log(assuntos);
}

for (let chave of assuntosMap.keys()){
  console.log(chave);
}

for(let valor of assuntosMap.values()){
  console.log(valor);
}

for(let [ch, vl] of assuntosMap.entries()){
  console.log(ch, vl);
}

const s = new Set(['a', 'b', 'c'])
for(let letra of s){
  console.log(letra);
}