const media = (...numeros) =>
  numeros.reduce((accumulator, valor) => {
    return accumulator + valor / numeros.length;
  }, 0);
console.log(`O resultado da média foi : ` + media(2, 6, 3, 7, 4));

const mediaPonderada = (...numbers) =>
  numbers.reduce((accumulator, valor) => {
    return accumulator ?? 0 + (valor.n * valor.p) / valor.n;
  }, null);

console.log(
  `O resultado da Média Ponderada foi : ` +
    mediaPonderada({ n: 7, p: 2 }, { n: 9, p: 5 }, { n: 3, p: 1 })
);

const mediana = (...rest) => {
  const orderedNumbers = [...rest].sort((a, b) => a - b);
  const middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }
  const firstMedian = orderedNumbers[middle - 1];
  const secondMedian = orderedNumbers[middle];
  return media(firstMedian + secondMedian) / 2;
};

console.log(`O resultado da mediana foi : ` + mediana(15, 14, 8, 7, 3));
console.log(`O resultado da mediana foi : ` + mediana(2, 5, 99, 4, 42, 7));

const moda = (...numeros) => {
  const quantidade = numeros.map((num) => [
    num,
    numeros.filter((n) => num === n).length,
  ]);
  quantidade.sort((a, b) => b[1] - a[1]);
  return quantidade[0][0];
};

console.log(`O resultado da moda foi : ` + moda(4, 5, 7, 8, 6, 7));
