const Comment = require("./Comment")

class Post{
  constructor(firstName,header,content,footer){
    this.firstName = firstName
    this.header = header
    this.content = new Comment(content)
    this.footer = footer
  }
}

module.exports = Post