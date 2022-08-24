const Weapon = require("./Weapon");

const heroTypes = [
  {
    type: "warrior",
    typeName: "Warrior",
    hp: 100,
    abilities: "Armour",
    armour: 5,
    evasion: 20,
  },
  {
    type: "priest",
    typeName: "Priest",
    hp: 90,
    abilities: "Heal",
    armour: 4,
    evasion: 20,
  },
  {
    type: "mage",
    typeName: "Mage",
    hp: 70,
    abilities: "Firestorm",
    armour: 1,
    evasion: 5,
  },
  {
    type: "rouge",
    typeName: "Rouge",
    hp: 80,
    abilities: "Dodge",
    armour: 3,
    evasion: 30,
  },
  {
    type: "archer",
    typeName: "Archer",
    hp: 80,
    abilities: "HeadShot",
    armour: 2,
    evasion: 15,
  },
];

class Hero {
  constructor(hero) {
    this.name = hero.name;
    this.type = hero.type.toLowerCase().trim().replace(/\s/g, "");
    this.chosedHero = heroTypes.find((hero) => hero.type === this.type);
    this.heroTypeValidating(this.chosedHero);
    this.weapon;
  }
  equipWeapon(weapon) {
    let weaponIsValid = new Weapon(weapon).getChosedWeapon();
    if (weaponIsValid.avaliableFor === "all") {
      this.weapon = weaponIsValid;
      return;
    } else if (weaponIsValid.avaliableFor !== this.chosedHero.type) {
      weaponIsValid.damage.min = 0;
      weaponIsValid.damage.max = 0;
      this.weapon = weaponIsValid;
      console.log(
        "\x1b[31m",
        `${this.name} don't know how to use the ${weapon}`,
        "\x1b[0m"
      );
    } else {
      this.weapon = weaponIsValid;
    }
  }
  heroTypeValidating(hero) {
    if (!hero) {
      throw new Error(
        "\x1b[31m Hero type is not valid \nPlease select one of the following: warrior, priest, mage, rouge, archer \x1b[0m"
      );
    }
  }
}

module.exports = Hero;
