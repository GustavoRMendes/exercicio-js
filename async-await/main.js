// Sintaxe
function myFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Espera isso aqui");
      resolve();
    }, 1000);
  });
}
async function segundaFuncao() {
  console.log("Iniciou");
  await myFunction();
  console.log("Finalizou");
}
segundaFuncao();
