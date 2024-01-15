class Character {
  constructor(firstName,life,attack,defense ){
    this.firstName = firstName;
    this.life = life;
    this.attack = attack;
    this.defense = defense;
  }
  attackOponnent(opponent,defense,life){
    let damage =  this.attack - defense;
    life -= damage;
    opponent.life = life
    return `O dano de ataque foi de ${damage} e a vida atual é de ${life}`
  }
}
module.exports = Character