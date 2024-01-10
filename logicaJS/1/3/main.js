let nomeDaNave = prompt("Qual o nome da nave: ")
let resposta = ""
let dobraRealizada = 0
do{
    resposta = prompt("Deseja entrar na obra espacial? (sim)(nao)")
    if(resposta === "sim"){
        dobraRealizada++
    }else{
        alert(nomeDaNave + " " + dobraRealizada)
        alert(("Saindo..."))
    }
    
}while(resposta === "sim")