async function calculateImc(heightPerson, weightPerson) {
    if (typeof heightPerson !== 'number' || typeof weightPerson !== 'number') {
      return Promise.reject("[ERRO] SOMENTE NÚMEROS!");
    }  
  return weightPerson / (heightPerson * heightPerson);
}
async function showImc(heightPerson, weightPerson) {
  try {
    const result = await calculateImc(heightPerson, weightPerson);
    console.log(result.toFixed(2))
  } catch (error) {
    console.error(error)
  }
}
console.log("Calculando IMC...");
showImc(1.73, 70);
showImc(null, 80);
showImc(1.90, 100);
