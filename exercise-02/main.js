function sum(number1, number2) {
  return new Promise((resolve, reject) => {
    if (isNaN(number1) || isNaN(number2)) {
      reject("Somente números");
    } else {
      resolve(number1 + number2);
    }
  });
}
sum(10, 20)
  .then((result) => console.log("O resultado é " + result))
  .catch((error) => console.log("O erro foi : " + error));
