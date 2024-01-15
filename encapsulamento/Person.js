class Person {
  #nome;
  #idade;
  constructor(nome, idade) {
    this.#nome = nome;
    this.#idade = idade;
  }
  get nome() {
    return this.#nome;
  }
  set nome(nome){
    this.#nome = nome
  }
  getIdade() {
    return this.#idade;
  }
  #showPerson(){
    return `My name is ${this.#nome} and my age is ${this.#idade}`
  }
  get showPerson(){
    return this.#showPerson()
  }
}
const person1 = new Person("Gustavo", 19);
console.log(person1.nome);
console.log(person1.getIdade());
console.log(person1.showPerson)
person1.nome = 'Felipe'
console.log(person1.nome)