// Encadeamento Opcional ?.

const cidade = {
    nome:"Porto velho",
    bairro:"Equador",
    numero:5064,
    prefeitos: ["JK","GT","ROMEU"],
    flash: {
        id:5,
        equipe:"cisco"
    },
    atirar(){
        return this?.nome
    }
}
const bairro = cidade?.bairro
console.log(bairro)

const governo = cidade?.prefeitos
console.log(governo)

const equipeFlash = cidade.flash?.equipe?.includes("cisco")
console.log(equipeFlash)

const acao = cidade?.atirar()
console.log(acao)

const flash3 = cidade?.flash?.equipe
console.log(flash3)

const governo3 = cidade?.prefeitos?.[2]
console.log(governo3)