alert("Bem-vindo(a)!")
const nome = prompt("Digite seu nome: ")
let idade = Number(prompt("Digite sua idade: "))
const confirmar = confirm("Confirma sua idade? " + idade)
if(confirmar === true){
    alert("Confirmado")
    alert(`
    ${nome} 
    ${idade}
    `)
}else{
    alert("Atualize a página")
}
