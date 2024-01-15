const Character = require("./Character");

class Thief extends Character {
  attackOponnent(opponent, life, defense) {
    let damage = (this.attack * 2) - defense;
    life -= damage;
    opponent.life = life
    return `O dano do ataque foi de ${damage} e a vida atual é de ${life}`;
  }
}
module.exports = Thief