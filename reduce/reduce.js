//Reduce
// Exemplo 1 - Somar Preços

let numeros = [1,2,3,4,5];

let somar = numeros.reduce(function somar(accumulator,index){
return accumulator + index;
},10);

console.log(somar);

// Exemplo 2 - Encontrar o máximo de um array

let numbers = [10,40,50,60,70,100];

let max = numbers.reduce(function acharMaior(){
    return Math.max.apply(null,numbers);
});

console.log(max);

// Exemplo 3 - Converter um array em  string

let arr = [1,10,20,30];

let strg = arr.reduce(function converter(){
    return arr.toString();
});
console.log(strg);
console.log(typeof strg);