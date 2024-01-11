function normalSum(valor1, valor2) {
  return valor1 + valor2;
}
console.log(normalSum(2,2));

const arrowSum = (valor1, valor2) => valor1 + valor2;
console.log(arrowSum(2,2));

const cidades = ["Porto Velho", "Rio de janeiro", "Portugal", "Mirassol"];

const startWithP = cidades.filter((cidade) => cidade[0] === "P");
console.log(startWithP);
