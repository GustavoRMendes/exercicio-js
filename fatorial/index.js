function simplificar(numero) {
  if (numero % 2 === 0) {
    console.log(numero);
    return simplificar(numero / 2);
  } else {
    return numero;
  }
}
console.log(simplificar(20));

function fatorial(number) {
  if (number === 0) { // Caso Base
    return 1;
  } else if (number === 1) {
    return 1;
  }
  return number * fatorial(number - 1); // Caso Recursivo 
}

console.log(fatorial(10));
