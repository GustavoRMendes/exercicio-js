 async function execute() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }
  execute(); 

/* async function execute() {
  const resposta = await fetch("http://127.0.0.1:5500/", { method: "GET" });
  const textoHTML = await resposta.text();
  console.log(textoHTML);
}
execute(); */

//  fetch("http://127.0.0.1:5500/").then(function (resposta){
//     const promise = resposta.text()
//     return promise;
// }).then(function(body){
//     console.log(body)
// })
