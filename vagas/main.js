// let opcao = "";
// let vagasDisponiveis = [];
// let qtCandidatos = 0;
// let index = vagasDisponiveis.length;
// let candidatos;
// do {
//   opcao = prompt(`
//     Bem-vindo(a) ao nosso Sistema de vagas de emprego!
//     Escolha uma das opções digitando o número correspondente:

//     1. Listar vagas disponíveis
//     2. Criar um nova vaga
//     3. Visualizar uma vaga
//     4. Inscrever um candidato em uma vaga
//     5. Excluir uma vaga
//     6. Sair do programa
//   `);

//   switch (opcao) {
//     case "1":
//       if (vagasDisponiveis.length === 0) {
//         alert("Não há vagas disponíveis!");
//       } else {
//         vagasDisponiveis.forEach((nome, index) => {
//           alert(`(${index}) - ${nome}`);
//         });
//       }
//       break;

//     case "2":
//       let nomeVaga = prompt("Qual o nome da vaga: ");
//       let descricao = prompt("Descrição da vaga: ");
//       let dataLimite = prompt("Data Limite: DD/MM/AAAA");
//       let confirma = confirm(`
//         Você tem certeza que quer salvar a vaga nova? 
//         Nome: ${nomeVaga}
//         Descrição: ${descricao}
//         Data Limite: ${dataLimite}
//       `);
//       if (confirma === true) {
//         alert("Vaga Criada!");
//         vagasDisponiveis.unshift(` ${nomeVaga} `);
//       } else {
//         alert("Voltando ao menu...");
//       }
//       break;

//     case "3":
//       if (vagasDisponiveis.length === 0) {
//         alert("Não Há vaga!");
//       } else {
//         let indiceVaga = prompt("Índice da vaga: ");
//         if (
//           indiceVaga !== null &&
//           !isNaN(indiceVaga) &&
//           indiceVaga >= 0 &&
//           indiceVaga < vagasDisponiveis.length
//         ) {
//           alert(`${indiceVaga} - ${vagasDisponiveis[indiceVaga]}`);
//         } else {
//           alert("Índice inválido!");
//         }
//       }

//       break;
//     case "4":
      
//       let nomeCandidato = prompt("Nome do candidato: ");
//       let indiceVaga =Number(prompt("Qual o índice da vaga? "), 10);
//       if (
//         isNaN(indiceVaga) ||
//         indiceVaga < 0 ||
//         indiceVaga >= vagasDisponiveis.length
//       ) {
//         alert("Índice inválido!");
//         break;
//       }
//       let confirmaCandidato = confirm(`
//         Deseja prosseguir e salvar os dados abaixo?
//         Nome: ${nomeCandidato}
//         Índice da vaga: ${indiceVaga}
//       `);
//       if (confirmaCandidato === true) {
        
//         alert("Salvando dados do candidato");
//       } else {
//         alert("Voltando ao menu");
//       }
//       break;

//     case "5":
//       let indice = prompt("Qual o índice da vaga? ");
//       let excluir = confirm("Deseja excluir sua vaga? ");
//       if (excluir === true) {
//         vagasDisponiveis.splice(indice, 1);
//         alert("Excluindo...");
//       } else {
//         alert("Voltando ao menu...");
//       }
//       break;

//     case "6":
//       alert("Saindo do Programa...");
//       break;
//   }
// } while (opcao !== "6");
