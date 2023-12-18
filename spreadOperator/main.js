// Spread Operator ...

const lista1 = [20, 30, 50];
const lista2 = [...lista1];
lista2.push(10);

console.log(lista1);
console.log(lista2);

// Exemplo 1

const person1 = {
  nome: "Gustavo",
  idade: 20,
  endereco: ["Avenida: Treze de Setembro", "cidade: Porto velho"],
};

const person2 = {
  ...person1,
  nome: "Gerson",
  endereco: ["Avenida: Mamoré", "cidade: Rio de Janeiro"],
};

console.log(person1);
console.log(person2);

// Exemplo 2

const jogador = {
  nome: "Guga",
  idade: 29,
};
const carreira = {
  time: "Barça",
  titulos: 20,
};
const historico = { ...jogador, ...carreira };
console.log(historico);
