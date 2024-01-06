let baralho = [];
let opcao = "";
do {
  opcao = prompt(
    "1.Adicionar Carta\n2.Puxar uma carta\n3.Sair" +
      "\nBaralho: " +
      baralho.length
  );
  switch (opcao) {
    case "1":
     let nomeCarta = prompt("Qual o nome da carta? ")
     if(!nomeCarta.length){
        alert("Adicione!")
     }else{
       baralho.unshift(nomeCarta)   
     }
     break
    case "2":
     if(baralho.length === 0 ){
        alert("Baralho vazio")
     }else{
        let cartaPuxada = baralho.shift()
        alert("A carta puxada foi: " + cartaPuxada)
     }
     break
    case "3":
     alert("Saindo");
  }
} while (opcao !== "3");
