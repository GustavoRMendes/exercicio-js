const Author = require('./classes/Author')

const author1 = new Author("Leo","rua","bairro",6795)
console.log(author1)
console.log(author1.adress)
console.log(author1.adress.showOnScreen())
