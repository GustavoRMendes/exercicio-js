let opcao = "";
let imoveisCadastrados = [];
do {
  opcao = prompt(`Imóveis Cadastrados: ${imoveisCadastrados.length}\n
    1. Salvar um Imóvel
    2. Mostrar todos os imóveis salvos
    3. Sair 
    `);
  switch (opcao) {
    case "1":
      let nome = prompt("Nome: ");
      let qtBanheiros = Number(prompt("Quantidade de banheiros:"));
      let qtQuartos = Number(prompt("Quantos quartos: "));
      let garagem = prompt("Garagem? (sim) (nao)");
      let resultado = `
      Nome: ${nome}
      Banheiro(s): ${qtBanheiros}
      Quarto(s): ${qtQuartos}
      Garagem: ${garagem}`
      alert(
        "Nome: " +
          nome +
          "\nQuantidade de banheiros: " +
          qtBanheiros +
          "\nQuantidade de quartos: " +
          qtQuartos +
          "\nPossuim garagem: " +
          garagem
      );
      imoveisCadastrados.unshift(resultado);
      break;
    case "2":
      alert(
        imoveisCadastrados.forEach((e) => {
          alert(e);
        })
      );
  }
} while (opcao !== "3");
