const Author = require("./classes/Author");
const Comment = require("./classes/Comment");
const Post = require("./classes/Post");

const gustavo = new Author("Gustavo");
const post = gustavo.createPosts("Título", "lorem");
post.addComments("Isaac", "Show!");
post.addComments("Lucas", "Top!");

console.log(gustavo)
console.log(post)
