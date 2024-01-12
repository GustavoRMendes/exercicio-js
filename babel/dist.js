"use strict";

var media = function media() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  return numeros.reduce(function (accumulator, valor) {
    return accumulator + valor / numeros.length;
  }, 0);
};
console.log("O resultado da m\xE9dia foi : " + media(2, 6, 3, 7, 4));
var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2];
  }
  return numbers.reduce(function (accumulator, valor) {
    return accumulator !== null && accumulator !== void 0 ? accumulator : 0 + valor.n * valor.p / valor.n;
  }, null);
};
console.log("O resultado da M\xE9dia Ponderada foi : " + mediaPonderada({
  n: 7,
  p: 2
}, {
  n: 9,
  p: 5
}, {
  n: 3,
  p: 1
}));
var mediana = function mediana() {
  for (var _len3 = arguments.length, rest = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    rest[_key3] = arguments[_key3];
  }
  var orderedNumbers = [].concat(rest).sort(function (a, b) {
    return a - b;
  });
  var middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }
  var firstMedian = orderedNumbers[middle - 1];
  var secondMedian = orderedNumbers[middle];
  return media(firstMedian + secondMedian) / 2;
};
console.log("O resultado da mediana foi : " + mediana(15, 14, 8, 7, 3));
console.log("O resultado da mediana foi : " + mediana(2, 5, 99, 4, 42, 7));
var moda = function moda() {
  for (var _len4 = arguments.length, numeros = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numeros[_key4] = arguments[_key4];
  }
  var quantidade = numeros.map(function (num) {
    return [num, numeros.filter(function (n) {
      return num === n;
    }).length];
  });
  quantidade.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantidade[0][0];
};
console.log("O resultado da moda foi : " + moda(4, 5, 7, 8, 6, 7));
