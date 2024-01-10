const nave = {
  velocidade: 0,
  nome: prompt("Informe o nome: "),
  tipo: prompt("Informe o tipo da nave: ")
};
let { velocidade, nome, tipo } = nave;
let acelerar;
let menu = ""
function pararNave(){
  alert(`
  Parando a nave...
  
  Nome: ${nome} 
  Velocidade atual: ${velocidade}
  Tipo: ${tipo}
  `);
  velocidade = 0
}
function acelerarNave(){
   acelerar = Number(prompt("Quanto você quer acelerar? "));
      velocidade += acelerar;
      alert(`
            Nome: ${nome}
            Velocidade atual: ${velocidade}
            tipo: ${tipo}
            `);
}
function mostrarMenu(){
  do {
    menu = prompt(`
        Menu
    
    1. Acelerar a nave
    2. Parar a nave 
    3. SAIR
    `);
      switch (menu) {
        case "1":
        acelerarNave()    
          break;
        case "2":
        pararNave()
          break;
      }
    } while (menu !== "3");
    
}
mostrarMenu();
