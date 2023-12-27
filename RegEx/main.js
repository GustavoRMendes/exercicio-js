let nome = "Gustavo Mendes 20";
let email = "gustavormendess@gmail.com";
let numeros = "1,2,3,4,5,6,7,8";

console.log(nome.match(/o/i));
console.log(nome.replace(/gus/i,""));
console.log(nome.match(/e/gi));
console.log(numeros.match(/3/gi));
console.log(numeros.replace(/5/i, 4));
console.log(email.search(/@/gi));
console.log(email.match(/@/i));
console.log(nome.match(/\s/ig));
console.log(nome.match(/\bG/ig));
console.log(nome.match(/\d/ig));
console.log(nome.match(/e+/ig));
console.log(numeros.match(/4?/ig));
console.log(numeros.match(/2*/ig));
console.log(numeros.match(/1+/ig));
