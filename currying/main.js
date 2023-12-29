function func(numero1) {
  return function (numero2) {
    return numero1 + numero2;
  };
}
console.log(func(10)(30));

function subtrair(n1) {
  return function (n2) {
    return n1 - n2;
  };
}

console.log(subtrair(10)(5));

const funcArrow = (valor1) => (valor2) => {
  return valor1 * valor2;
};

console.log(funcArrow(10)(10));
