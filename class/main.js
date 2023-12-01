class Carro {
  constructor(value1, value2, value3, value4) {
    this.marca = value1;
    this.ano = value2;
    this.novo = value3;
    this.cor = value4;
  }
}

const civic = new Carro("Honda", 2023, true, "Preto");
const celta = new Carro("gol", 2000, false, "Branco");

console.log(civic);
console.log(celta);
