const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise Resolvida");
  }, 2000);
});

promise1.then((resultado) => {
  console.log(resultado); 
});

promise1.catch((erro) => {
  console.log(erro);
});

promise1.finally(() => {
  console.log("Finalizada");
});
