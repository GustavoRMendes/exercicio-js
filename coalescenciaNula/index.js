// Operador de Coalescência Nula
// se o valor da esquerda for null ou undefined, o valor da direita é verificado

let valor = 20;
let valor2 = valor ?? valor2;
console.log(valor2); // 20

valor = null;
valor2 = valor ?? 50;
console.log(valor2); // 50

const objeto = {
    firstName:null,
    amigos:["Rian","Felipe","Téo","Zanol","Camilo"],
    endereco:{
        cidade:"SP",
        cep: 93982
    }
}
const resultado = objeto?.firstName ?? "Gustavo"
console.log(resultado)
