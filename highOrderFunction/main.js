function operation(value1,value2,operation){
    console.log("Operation...")
    const result = operation(value1,value2)
    return result
}

function sum(value1,value2){
    console.log(value1 + " + " + value2)
    return value1 + value2;
}

console.log(operation(10,10,sum))
console.log(operation(20,10,function(value1,value2){
    console.log( value1 + " - "+ value2)
    return value1 - value2
}))

let lista = ["Gustavo","Felipe","Téo","Camilo","Zanol","Rian"];
function highOrder(elemento,indice,array){
    console.log(elemento, indice, array);    
}
lista.forEach(highOrder);
lista.forEach(function(e,index,array){
    console.log(e,index,array)
})

const numeros = [1,2,3,4,5,6,7,8,9,10]
const numerosTriplicados = numeros.map(e =>  e * 3)
console.log(numerosTriplicados)