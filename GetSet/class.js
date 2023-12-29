class Pessoa {
  constructor(nome) {
    this._nome = this._capitalize(nome);
  }

  get nome(){
    return this._nome;
  }
   set nome(texto){
     this._nome = this._capitalize(texto);
   }

  chutou(){
    return `${this.nome} chutou a bola.`
  }    
  _capitalize(texto){
    return `${texto.charAt(0).toUpperCase()}${texto.slice(1)}`
  }

}

const person = new Pessoa("neymar");
console.log(person.nome);
person.nome = 'ney'
console.log(person.nome)
