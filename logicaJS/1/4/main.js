let nomeDaNave = prompt("Informe o nome da nave: ")
let letra = prompt("Qual carcater você gostaria de substituir: ")
let caracter = prompt("Por qual? ")
    if(nomeDaNave.includes(letra) === true){
        let replace = nomeDaNave.replace(letra,caracter)
        
        alert(replace)
    }
