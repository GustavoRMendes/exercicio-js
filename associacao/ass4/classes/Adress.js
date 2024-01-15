class Adress{
  constructor(street,neighboord,number){
    this.street = street
    this.neighboord = neighboord
    this.number = number
  }
  showOnScreen(){
    return `${this.neighboord} ${this.number} ${this.street}`
  }
}

module.exports = Adress