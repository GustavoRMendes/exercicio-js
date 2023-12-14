let url1 = ('https://viacep.com.br/ws/01251000/json/')
let requisition = fetch(url1)
.then((result) => result.json())
.then((dados) => console.log(dados))

// text
requisition = fetch(url1)
.then((resultado) => resultado.text())
.then((dado) => console.log(dado))
