const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach(function(nome, indice) { // nome, indice e array(não usei array)
  console.log(`${indice + 1}) ${nome}`);
})

aprovados.forEach(nome => console.log(nome))

const exibirAprov = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprov)
