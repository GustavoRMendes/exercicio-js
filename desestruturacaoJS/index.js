const pessoa = {
    nome: "Gustavo", 
    trabalho: "Desenvolvedor", 
    pais: ["Lúcio","Natasha"]
}

const {nome,trabalho,pais} = pessoa

console.log(nome)
console.log(trabalho)
console.log(pais)

const nomes = ["Rian","Camilo","Teo","Felipe","Gustavo"]

const [rian,camilo,teo,felipe,gustavo] = nomes
console.log(rian)
console.log(camilo)
console.log(teo)
console.log(felipe)
console.log(gustavo)


function criarPessoa({nome,trabalho,pais}){
    return{
        nome,
        trabalho,
        pais
    }
}

const tavinho = criarPessoa(pessoa)
console.log(tavinho)