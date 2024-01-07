// Escopo

function hello(){
    let nome = "Gustavo"
}

console.log(nome)

let idade = 18
function mostrarIdade(){
    idade = 20
    return idade;
}
console.log(idade)
console.log(mostrarIdade())