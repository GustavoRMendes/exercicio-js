const Post = require("./classes/Post");
const post1 = new Post("Gustavo","Cabeçalho","conteúdo top","Final")
console.log(post1)
console.log(post1.content.showComment())

