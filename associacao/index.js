const Adress = require("./classes/Adress");
const Person = require("./classes/Person")
const addr = new Adress("Porto velho","Sete de setembro","Cuniã",6795)
const person = new Person("Gustavo",addr)

console.log(person)
console.log(person.adress.fullAdress())
