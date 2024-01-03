const dados = {
    nome: "Gustavo",
    idade: 19,
    area: "Full-Stack"
}
let {nome:name,idade:age,area:especificion} = dados;
console.log(name)
console.log(age)
console.log(especificion)

let lista = [1,2,3,4,5,6]
let [um,,...resto] = lista
console.log(resto)//3,4,5,6
console.log(um)//1