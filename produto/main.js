function user(nome,email,cpf){
    const pessoa = {
        nome,
        email,
        cpf
    }
    return pessoa
}
const user1 = user("Gustavo","gustavormendess@gmail.com","827381")
console.log(user1)

function maiorDeIdade(idade){
    if(idade >= 18){
        return "Maior de idade"
    }else{
        return "Menor de idade"
    }
}

console.log(maiorDeIdade(19))
console.log(maiorDeIdade(12))