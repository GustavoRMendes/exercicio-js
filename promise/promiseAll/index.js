const promessa1 = Promise.resolve(3); // jeito simplificado
const promessa2 = new Promise((resolve) => {
    setTimeout(resolve,2000,"Teste");
})
Promise.all([promessa1,promessa2]).then((resultados) => console.log(resultados));

//Promise.all me da todos os dados antes de eu começar a trabalhar