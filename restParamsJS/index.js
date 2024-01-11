function soma(...rest){
    return rest.forEach(e => console.log(e))
}

console.log(soma(30,40,60))
function sum(...rest){
    return rest.reduce((accumulator,valor) => accumulator + valor , 10)
}
console.log(sum(1,2,3,4,5,6))