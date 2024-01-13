// Template Literals

const valor = 10;
console.log(`O valor da constante é ${valor}`);

const array = [10, 20, 40, 50];
const reduceArray = array.reduce((accumulator, valor) => {
  return accumulator + valor * 2;
}, 0);
console.log(
  `O valor da soma da lista multiplicado por 2 é igual a ${reduceArray}`
);

// Rest

const somar = (...rest) => rest.map((valor) => valor * 2);
console.log(somar(20, 40, 60, 80, 100));

// Encadeamento Opcional ?.

const carro = {
  nome: "S-10",
  marca: "Chevrolet",
  ano: 2023,
  compradores: ["Rian", "Camilo", "Gustavo", "Felipe", "Téo", "Zanol"],
  cidades: {
    nome: ["Ilha Bela", "Teresina", "Guarulhos"],
  },
};

const result = carro?.cidades?.nome?.[1];
const result1 = carro?.compradores?.includes("Gustavo");
const result2 = carro?.cidades?.nome;
const result3 = carro?.compradores;
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);

// Coalecencia Nula

const number1 = 20;
const number2 = number1 ?? 20;
console.log(number2);

// Destructuring

const obj = {
  nome: "Gu",
  endereco: {
    cidade: "Porto Velho",
    cep: 3988383,
    numero: 5064,
  },
};

const {
  nome,
  endereco: { cidade, cep, numero },
} = obj;

console.log(nome);
console.log(cidade);
console.log(cep);
console.log(numero);

const lista = [1, 2, 3, 4, 5, 6, 7];
const [um, , tres, quatro, cinco, seis, sete] = lista;
console.log(um);
console.log(tres);
console.log(quatro);
console.log(cinco);
console.log(seis);
console.log(sete);

// Spread Operator

const listaCopiada = [...lista, "push"];
console.table(listaCopiada);
const person = {
  nome: "Gustavo",
  idade: 19,
  time: "Barcelona",
};

const personCopiado = {...person,cidade:"Trancoso"}
console.table(personCopiado)