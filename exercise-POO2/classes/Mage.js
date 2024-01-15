const Character = require("./Character");

class Mage extends Character {
  constructor(firstName,life,attack,defense,magic){
    super(firstName,life,attack,defense)
    this.magic = magic
  }
  attackOponnent(opponent,defense,life){
    let damage = (this.attack + this.magic) - defense
    life -= damage
    opponent.life = life
    return `O dano do ataque foi de ${damage} e a vida atual é de ${life}`;
  }
  increaseLife(opponent,life){  
    const increase = this.magic * 2
    life += increase
    opponent.life = life
    return `O aumento de vida foi de ${increase} e a vida autal é de ${life}`
  }

}

module.exports = Mage