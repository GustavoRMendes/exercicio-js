const Character = require("./Character");

class Warrior extends Character {
  constructor(firstName,life,attack,defense,shieldPoints,position){
    super(firstName,life,attack,defense)
    this.shieldPoints = shieldPoints
    this.position = position
  }
  attackOponnent(opponent,life,defense){
    if(this.position === "attack"){
      const damage = this.attack - defense
      life -= damage
      opponent.life = life
      return `O dano do ataque foi de ${damage} e a vida atual é de ${life}`;
    }else{
      return `Warrior não ataca pois, está no modo de defesa.`
    }
  }
  changePosition(){
    if(this.position === "attack"){
      this.position = "defense"
      this.defense += this.shieldPoints
      return `Warrrior na defesa`
    }else{
      this.position = "attack"
      return `Warrior no ataque`
    }
  }

}
module.exports = Warrior