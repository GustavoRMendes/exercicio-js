// Map()
// Exemplo 1 - Multiplicando por 2

const numbers = [1,2,3,4];
const  multipliedByTwo = numbers.map(function(number){
    return number * 2;

});
console.log(multipliedByTwo);

// Exemplo 2 - Multiplicando por 3

const triple = [10,40,50,30];
const multipliedByTree = triple.map(num => num * 3);
console.log(multipliedByTree);

//Exemplo 3 - Farenheit para Celsius

const farenheit = [0,32,45,50,75,80,120];
const celsius = farenheit.map( function(elem){
    return Math.round((elem - 32) * 5/9);
});
console.log(celsius);