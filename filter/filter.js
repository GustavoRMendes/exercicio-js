//Filter

// Exemplo 1 - Números pares 
const ages = [8,32,33,55,99];
const evenAges = ages.filter(function(age){
    return age % 2 === 0;
});

console.log(evenAges);

// Exemplo 2 - Retorne somente os números maiores que 10.

const numbers = [20,35,34,21,2,4,3];
const newNumbers = numbers.filter((e) => e > 10);
console.log(newNumbers);

