const array = [1,2,3,4,5,6,7,8,9,0,87,]

console.log(...array)

const newArray = [...array]
console.log(newArray)

const pessoa = {
    nome:"Gustavo",
    idade:19
}

const newPerson = {...pessoa}
newPerson.time = "Barcelona"
console.log(pessoa)
console.log(newPerson)