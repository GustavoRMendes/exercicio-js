const array = [9, 8, 5, 4, 6, 3];

const novoArray = array.reduce((accumulator, numero) => {
  if (numero % 2 === 0) {
    accumulator.push(numero * 2);
  }
  return accumulator;
}, []);

console.log(novoArray);
