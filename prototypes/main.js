// Object.setPrototypeOf(object,prototype)

const animal = {
  tipo: "animal",
  som: "som de animal",
  emitirSom() {
    console.log(this.som);
  },
};
const cachorro = {
  tipo: "cachorro",
  som: "auau",
};
Object.setPrototypeOf(cachorro, animal);
cachorro.emitirSom();

const cachorroRaivoso = {
  tipo: "cachorro raivoso",
  latido() {
    console.log(this.som.toUpperCase());
  },
}; 
Object.setPrototypeOf(cachorroRaivoso, cachorro);
cachorroRaivoso.latido(); //AUAU

// Object.getPrototypeOf

console.log(Object.getPrototypeOf(animal));
console.log(Object.getPrototypeOf(cachorro));
console.log(Object.getPrototypeOf(cachorroRaivoso));
