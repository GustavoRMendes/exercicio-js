//Call and Apply

let pessoa = {
    nomeCompleto(){
      return this.name + " " + this.lastName; 
    }
}
let membro = {
    name: 'Gustavo',
    lastName: 'Mendes'
}
let nomeCompleto = pessoa.nomeCompleto.call(membro);
console.log(nomeCompleto);

let nomeCompleto2 = pessoa.nomeCompleto.apply(membro);
console.log(nomeCompleto2);


//Bind

const person = {
    name: 'Tavinho',
    lastName: 'Junior',
    nomeCompleto(){
        return this.name + " " + this.lastName; 
      }
}

const member = {
    name: 'Carlinhos',
    lastName: 'Toddy'
}

let newPerson = person.nomeCompleto.bind(member);
console.log(newPerson);

