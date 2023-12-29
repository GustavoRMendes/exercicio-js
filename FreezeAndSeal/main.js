let person = {
    nome: "Gustavo",
    idade:19,
    profissao: "programador",
    linguagens: ["Javascript","Java","C"],
    area: "full-stack developer"
}

Object.freeze(person); // Congela o Objeto inteiro
Object.seal(person); // Só pode reatribuir