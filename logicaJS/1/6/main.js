const nave =[
    ["Fenix",2023,true],
    ["Percysssss",2020,false],
    ["Falcãoooo",2021,true]
]

const nome9 = nave.filter(e => e[0].length >= 9)
console.log(nome9)

const pendente = nave.find(e => e[2] === false)
console.log(pendente)

const nome = nave.map(e => e[0].toUpperCase())
console.log(nome)
alert(nome)
alert(nome9)
alert(pendente)
