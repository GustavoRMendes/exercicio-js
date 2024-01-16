// Associação
class Person {
  constructor(name, bio) {
    this.name = name;
    this.bio = bio;
  }
}
class Bio {
  constructor(bio) {
    this.bio = bio;
  }
  showBio() {
    return `Minha biogragia: ${this.bio}`;
  }
}
const person1 = new Person("Gustavo", new Bio("Minha bio"));
console.log(person1);
console.log(person1.bio.showBio());

// Encapsulamento
class Bank {
  #balance;
  #password;
  #email;
  constructor(balance, password, email) {
    this.#balance = balance;
    this.#password = password;
    this.#email = email;
  }
  get balance() {
    return this.#balance;
  }
  get password() {
    return this.#password;
  }
  get email() {
    return this.#email;
  }
}
const person2 = new Bank(1000, 202020, "gustavormendess@gmail.com");
console.table({
  balance: person2.balance,
  email: person2.email,
  password: person2.password,
});

// Herança
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Teacher extends People {}
const teacher1 = new Teacher("Helena", 26);
console.log(teacher1);

// Polimorfismo
class Vehicle {
  start() {
    return `Veículo está começando a ligar...`;
  }
}
class Car {
  start() {
    return `Carro está começando a ligar...`;
  }
}
const car1 = new Car();
const vehicle1 = new Vehicle();
console.log(vehicle1.start());
console.log(car1.start());
function speed(vehicle) {
  return vehicle.start();
}
console.log(speed(car1));

// Get and Set
class Game {
  #password;
  constructor(password) {
    this.#password = password;
  }
  get password() {
    return this.#password;
  }
  set password(newPassword) {
    return (this.#password = newPassword);
  }
}
const game1 = new Game(202020);
console.log(game1.password);
game1.password = 203040;
console.log(game1.password);

// Static
class Animal {
  constructor(price) {
    this.price = price;
  }
  static pricePremium = 200;
  static eat() {
    return `Animal comendo`;
  }
  get eat() {
    return Animal.eat();
  }
  get pricePremium() {
    return Animal.pricePremium;
  }
}
const animal1 = new Animal(2000);
console.log(animal1.eat);
console.log(animal1.pricePremium);
