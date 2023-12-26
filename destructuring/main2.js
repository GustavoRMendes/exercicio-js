// Example 1
let cliente = {
    nome:"Harry Potter",
    idade:17,
    cpf:292892110-99,
    endereco:{
        cidade:"Hogwarts",
        numero:6781
    }
};
let {nome,cpf,endereco:{cidade}} = cliente;
console.log(nome)
console.log(cpf)
console.log(cidade)

// Example 2

function clientela({nome,cpf,endereco:{cidade,numero}}){
    console.log(nome)
    console.log(cidade)
    console.log(numero)
    console.log(cpf)
}

clientela(cliente);