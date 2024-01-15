const Post = require("./Post");
class Author {
  constructor(firstName) {
    this.firstName = firstName;
    this.posts = [];
  }
  createPosts(title, body) {
    const post = new Post(title, body, this);
    this.posts.push(post);
    return post;
  }
}

module.exports = Author;
