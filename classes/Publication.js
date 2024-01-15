const Author = require("./Author");

class Publication {
  constructor(title, content, author) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.publications = [];
  }
  createPublication() {
    this.publications.push(this.title, this.content,this.author);
  }
}

module.exports = Publication;
