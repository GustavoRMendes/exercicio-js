// Symbol JS
const person = {
    [Symbol("nome")]: "Gustavo",
    [Symbol("programador")]: true
}


console.log(Object.getOwnPropertySymbols(person))
