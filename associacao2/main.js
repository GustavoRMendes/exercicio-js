// Unidirecional , Bidirencional, Agregação, Composição
const Carro = require("./classes/Carro");
const Toyota = require("./classes/Toyota");

const toyota = new Toyota("Carro totalmente seguro e rápido", 200.0);
const carro1 = new Carro("Corolla", toyota);

console.log(carro1);
console.log(carro1.modelo.descripitionOfCar());
 