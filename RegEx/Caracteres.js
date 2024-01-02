const removerCaracteres = (string) => string.replace(/[^a-z-A-Z-0-9]/g, "");
console.log(removerCaracteres("A%%B$%C&D**"));
const removerEspaco = (string) => string.replace(/ /g, "");
console.log(removerEspaco("Hello world"));
