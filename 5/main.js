let nomeDaNave = prompt("Insira o nome da nave: ");
let velocidadeIncial = 0;
let menu;
function desacelerar() {
  velocidadeIncial -= 5;
  alert(`Desacelerando 5 km`);
}
function acelerar() {
  velocidadeIncial += 5;
  alert(`Acelerando 5 km`);
}
function verificarVelocidade() {
  if (velocidadeIncial < 0) {
    alert("Não existe velocidade negativa");
  } else if (velocidadeIncial === 0) {
    alert("o Barco Está parado");
  } else {
    alert(nomeDaNave + " " + velocidadeIncial + " km");
  }
}
function executar() {
  do {
    menu = prompt(`
      
          Menu
      
      1. Acelerar a nave em 5km
      2. Desacelerar a nave em 5km
      3. Imprimir dados de bordo
      4. Sair
      
      `);
    switch (menu) {
      case "1":
        acelerar();
        break;
      case "2":
        desacelerar();
        break;
      case "3":
        verificarVelocidade();
        break;
      case "4":
        alert("Saindo");
        break;
      default:
        alert("Opção Inválida");
    }
  } while (menu !== "4");
}
executar();
