function Pessoa(){
  this.idade = 0

  setInterval(function(){
    this.idade++
    console.log(this.idade);
  }.bind(this),1000)
}

new Pessoa

// Outra possibilidade de acesso ao this de varia

// function Pessoa(){
//   this.idade = 0
//   const self = this
//   setInterval(function(){
//     this.idade++
//     console.log(self.idade);
//   },1000)
// }

// new Pessoa
