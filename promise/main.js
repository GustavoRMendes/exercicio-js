const promessa = new Promise((resolve, reject) => {
  const idade = 18;
  if (idade <= 18) {
    resolve("quase adulto");
  } else {
    reject("adulto");
  }
});

promessa
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });
