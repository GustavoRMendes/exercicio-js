function calculateImc(heightPerson, weightPerson) {
  return new Promise((resolve, reject) => {
    if (isNaN(heightPerson) || isNaN(weightPerson)) {
      reject("Not a number");
    } else {
      resolve(weightPerson / (heightPerson * heightPerson));
    }
  });
}
function showImc(heightPerson, weightPerson) {
  calculateImc(heightPerson, weightPerson)
    .then((result) => {
      console.log(`O resultado do IMC foi de ${result.toFixed(2)}`);

      if (result < 18.5) console.log("Situação: MAGREZA");
      else if (result < 25) console.log("Situação: NORMAL");
      else if (result < 30) console.log("Situação: SOBREPESO");
      else if (result < 40) console.log("Situação: OBESIDADE");
      else console.log("Situação: OBESIDADE GRAVE");
    })
    .catch((err) => {
      console.log(err);
    });
}
console.log("Calculando IMC...");
showImc(1.73, 70);
showImc(1.73, "zero");
showImc(1.73, 69);
