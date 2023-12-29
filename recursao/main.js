// Fatorial
function fatorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * fatorial(n - 1);
}
console.log(fatorial(5));
console.log(fatorial(6));
console.log(fatorial(10));

// Cronômetro

function cronometro(number) {
  if (number <= 0) {
    return "zerou";
  }
  console.log(number);
  return cronometro(number - 1);
}

console.log(cronometro(10));
console.log(cronometro(5));
