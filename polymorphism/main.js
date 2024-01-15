class Animal {
  eat() {
    console.log("O animal está comendo!");
  }
}

class Dog extends Animal {
  eat() {
    console.log("O cachorro está comendo portion!");
  }
}

class Cat extends Animal {
  eat(food) {
    console.log("O gatinho está comendo!");
  }
}

const betowen = new Dog();
const bartolomeu = new Cat();
betowen.eat();
bartolomeu.eat();
function eatFood(animal) {
  console.log("O animal está prestes a comer...");
  animal.eat();
}
console.log(eatFood(betowen));
console.log(eatFood(bartolomeu));
