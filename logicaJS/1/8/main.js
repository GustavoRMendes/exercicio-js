
const obj = {
    nome: prompt("Digite seu nome"),
    area:prompt("Area da programação"),
    endereco: {
        cidade: prompt("Sua cidade:")
    }
    
}

const {nome,area,endereco:{cidade}} = obj
console.log({nome,area,cidade})