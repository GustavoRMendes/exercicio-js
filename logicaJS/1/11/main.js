const alfabeto = ["a","d","b","c","e"]

console.log(alfabeto.slice().sort())


const array = ["ALFABETO","LIVROS","TOP","ANA"]

const a = array.map((elemento)=>{
    return elemento.toLowerCase()
})
const b = array.map((e) => {
    return e.includes("A")
})

console.log(a)
console.log(b)