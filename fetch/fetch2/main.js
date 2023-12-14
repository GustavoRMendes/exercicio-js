let url =('https://jsonplaceholder.typicode.com/todos/1')

// let res = fetch(url)
//   .then((result) => result.json())
//   .then((dados) => console.log(dados));

async function resolver(){
    let resposta = fetch(url)
    let text = await (await resposta).text();
    console.log(text);
}

resolver();


