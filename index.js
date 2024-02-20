class Heroi{
  constructor(Nome, Tipo, Idade){
    this.Nome = Nome;
    this.Idade = Idade;
    this.Tipo = Tipo;//(ex: guerreiro, mago, monge, ninja )
   }

    atacar() {
    const ataques = {
        mago: "magia Outra dimensão ",
        guerreiro: "espada Scalibur",
        monge: "artes marciais Bruce LEE",
        ninja: "shuriken das Adagas ",
    }
        
     console.log(`O ${this.Tipo} de Nome ${this.Nome}, atacou usando seu poder especial ${ataques[this.Tipo]}.`)
 }
    
}

var mago = new Heroi("Tercio" ,"mago" , 37);
mago.atacar();