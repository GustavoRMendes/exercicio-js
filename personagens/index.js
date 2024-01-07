const personagem = [
  {
    nome: "Goku",
    poder: "Kamehameha",
    nivel: 30,
  },
  {
    nome: "Bulma",
    poder: false,
    nivel: 5,
  },
  {
    nome: "Vegeta",
    poder: "Kamehameha",
    nivel: 20,
  },
];

const nomePersonagens = personagem.map((e) => e.nome.toUpperCase());
console.log(nomePersonagens);

const niveis = personagem.filter((e) => e.nivel > 5);
console.log(niveis);

const poderIgual = personagem.filter((e) => e.poder === "Kamehameha");
console.log(poderIgual);

const nivelTotal = personagem.reduce((accumulator, elemento) => {
  return accumulator + elemento.nivel;
}, 0);

console.log(nivelTotal); //30+20+5 = 55
