// const book = {
//     name: "Engero",
//     pages: 500,
//     years: 20,
//     published: true,
//     tags: ["Romeu","Casgueta"],
//     author: {
//         name:"Lord Vold",
//         age:60
//     },
//     helloUser(){
//         console.log("Hello " + this.author.name)
//     }
// }

// console.log(book)
// book.helloUser()

function Book(title, pages, author,tags) {
  this.title = title;
  this.pages = pages;
  this.author = author;
  this.tags = tags;
  this.published = false;
  this.helloUser = function (){
    return "Hello " + this.author
  }
}


const harryPotter = new Book("Harry Potter",500,"Alvo Severo Potter",["magic","hogwarts"])
console.log(harryPotter)
console.log(harryPotter.helloUser())