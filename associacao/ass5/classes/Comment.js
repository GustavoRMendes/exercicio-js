class Comment{
  constructor(content){
    this.content = content
  }
  showComment(){
    return `My comment is ${this.content} ` 
  }
}

module.exports = Comment