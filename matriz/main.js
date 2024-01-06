const matriz = [
    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"]
]
for(let key of matriz){
    console.log(key)
    console.table(matriz)
}
matriz.forEach(element => {
    console.log(element)
    
});
console.table(matriz)
console.log(matriz[0][2])
console.log(matriz[1][2])
console.log(matriz[2][2])