// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
  
}


// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    let response = "";
    if (this.health > 0) {
       response += `${this.name} has received ${damage} points of damage`;
       console.log(response);
    } else if (this.health === 0) {
      response += `${this.name} has died in act of combat`;
      console.log(response);
    }
    return response;
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    let response = "";
    if (this.health > 0) {
       response += `A Saxon has received ${damage} points of damage`;
       return response;
    } else if (this.health === 0) {
      response += `A Saxon has died in combat`;
      return response;
    }
  }
  attack() {
    return this.strength;
  }
}

// War
class War {
  constructor(){
  this.vikingArmy = [];
  this.saxonArmy = [];
  }
  addViking(Viking){
    this.viking = Viking;
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon){
    this.saxon = Saxon;
    this.saxonArmy.push(Saxon);
  }
// NOT done with vikingAttack()!
  vikingAttack(){
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let randomIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomIndex];
    randomSaxon.health -= randomViking;
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomIndex, 1);
    }

    this.saxon.health -= this.viking.strength;
    return this.saxon.health;
  
  }
  saxonAttack(){}
  showStatus(){}
}

const ww3 = new War();
console.log(ww3)

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
