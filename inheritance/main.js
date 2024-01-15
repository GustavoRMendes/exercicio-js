class Player{
  constructor(firstName,age,game){
    this.firstName = firstName
    this.age = age
    this.game = game
  }
  showPlayer(){
    return `
    My name is ${this.firstName}, i have ${this.age} and I play ${this.game}` 
  }
}
class Player1 extends Player{
  constructor(firstName,age,game,titles) {
    super(firstName,age,game)
      this.titles = titles
  } 
}
class Player2 extends Player{
  constructor(firstName,age,game,fights) {
    super(firstName,age,game)
      this.fights = fights
  } 
}
const player1 = new Player1("Gustavo",19,"Fifa EA FC",10)
const player2 = new Player2("Felipe",19,"Mortal Kombat",20)
console.log(player1)
console.log(player2)
console.log(player1.showPlayer())
console.log(player2.showPlayer())