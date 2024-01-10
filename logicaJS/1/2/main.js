let nome = prompt("Informe seu nome: ");
let velocidadeInicial = 0;
let velocidadePiloto = Number(
  prompt("A que velocidade você gostaria de navegar?")
);
let confirmar = confirm(
  "Tem certeza que quer navegar nessa velocidade: " + velocidadePiloto
);
if (confirmar === true) {
  velocidadeInicial = velocidadePiloto;
  alert(`
    Nome: ${nome}
    Velocidade: ${velocidadePiloto}
    `);
} else {
  alert("Atualize a página");
}
