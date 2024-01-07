let dados = [
  { nome: "Gustavo", idade: 19, profissao: "Desenvolvedor Full-Stack" },
  { nome: "Felipe", idade: 19, profissao: "Desenvolvedor Full-Stack" },
  { nome: "Téo", idade: 20, profissao: "Jogador" },
  { nome: "Camilo", idade: 16, profissao: "Jogador" },
  { nome: "Rian", idade: 21, profissao: "Funcionário" },
  { nome: "Zanol", idade: 18, profissao: "Técnico de TI" },
];

const idadeCrescente = [...dados].sort((x, y) => x.idade - y.idade);
console.log(idadeCrescente);
console.log(dados);
const idadeDecrescente = [...dados].sort((x, y) => y.idade - x.idade);
console.log(idadeDecrescente);
console.log(dados);
