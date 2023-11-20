const names = ['Felipe','Gustavo'];
names.push("Pedro");
names.unshift("Gabriela");
console.log(names)
names.pop();
console.log(names);
names[2] = 'Luiz'
console.log(names)
console.log(names.indexOf('Felipe'))
console.log(names.length);
console.log(Array.isArray(names))
for(let cont in names){
    console.log(names[cont]);
}