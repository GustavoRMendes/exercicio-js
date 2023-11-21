const person = {
    name: "Gustavo",
    age: 19,
    hobbies: ['Watch Tv','Play soccer','Read']
}

const read = person.hobbies[2];
console.log(read);
console.log(person);

//Outra forma

const {name,age,hobby} = person
console.log(person.name);

//Adicionando propriedades

person.team = 'Barcelona';
console.log(person)

// Objetos dentro de Array
const toDoList = [
    {
        id:1,
        task: "Study",
        isCompleted: false
    },
    {
        id:2,
        task: "Training",
        isCompleted: true
    },
    {
        id:3,
        task: "Watch Football",
        isCompleted: true
    },
]
const football = toDoList[2].task;
console.log(football);


