let dia = prompt(
  "Digite um número abaixo conforme o dia da semana...\nDigite 1 - Domingo \nDigite 2 - Segunda \nDigite 3 - Terça \nDigite 4 - Quarta \nDigite 5 - Quinta \nDigite 6 - Sexta \nDigite 7 - Sábado \nDigite 8 - Sair do programa : "
);
dia = Number(dia);

switch (dia) {
  case 1:
    alert("Você escolheu Domingo!!!");
    break;
  case 2:
    alert("Você escolheu Segunda!!!");
    break;
  case 3:
    alert("Você escolheu Terça!!!");
    break;
  case 4:
    alert("Você escolheu Quarta!!!");
    break;
  case 5:
    alert("Você escolheu Quinta!!!");
    break;
  case 6:
    alert("Você escolheu Sexta!!!");
    break;
  case 7:
    alert("Você escolheu Sábado!!!");
    break;
  case 8:
    alert("Você escolheu sair");
    break;
  default:
    alert("[ERRO].Comando Inválido.");
}
