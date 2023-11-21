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
// Convertendo obj para JSON

const converterParaJSON = JSON.stringify(toDoList);
console.log(todos);

// Convertendo JSON para obj

const converterParaObj = JSON.parse(converterParaJSON);
console.log(converterParaObj);