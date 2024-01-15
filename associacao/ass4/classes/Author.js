const Adress = require("./Adress");

class Author{
  constructor(firstName,street,neighboord,number){
    this.firstName = firstName;
    this.adress = new Adress(street,neighboord,number);
  }
}

module.exports = Author