const Author = require("./classes/Author");
const Publication = require("./classes/Publication");

const author1 = new Author("Leonardo", 20);
const publication = new Publication(
  "Day.js",
  "Bom dia comunidade! Estudando sobre o day.js",
  author1
);
const author2 = new Author("Gustavo", 25);
const publication2 = new Publication(
  "Funções Construtoras",
  "Bom dia comunidade! Estudando sobre o Funções Construtoras",
  author2
);
publication.createPublication();
console.log(publication.username);
console.log(publication.author);
console.log(publication);
console.log(publication.publications);
console.log(author1);

publication2.createPublication();
console.log(publication2.username);
console.log(publication2.author);
console.log(publication2);
console.log(publication2.publications);
console.log(author2);
