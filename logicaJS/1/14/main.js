const CPF = require("cpf")

console.log(CPF.format('111.444.777-35'))
console.log(CPF.isValid('111.444.777-42'))
console.log(CPF.isValid('111.444.777-42',true))
console.log(CPF.isValid('111.444.777',true))
console.log(CPF.generate())
