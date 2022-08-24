const weaponTypes = [
  {
    type: "sword",
    name: "Sword",
    avaliableFor: "all",
    damage: {
      min: 8,
      max: 12,
    },
    hitChance: 90,
  },
  {
    type: "dagger",
    name: "Dagger",
    avaliableFor: "rouge",
    damage: {
      min: 4,
      max: 5,
    },
    hitChance: 98,
  },
  {
    type: "warhammer",
    name: "Warhammer",
    avaliableFor: "priest",
    damage: {
      min: 10,
      max: 15,
    },
    hitChance: 93,
  },
  {
    type: "battleaxe",
    name: "Battle Axe",
    avaliableFor: "warrior",
    damage: {
      min: 12,
      max: 15,
    },
    hitChance: 92,
  },
  {
    type: "bow",
    name: "Bow",
    avaliableFor: "archer",
    damage: {
      min: 7,
      max: 12,
    },
    hitChance: 89,
  },
  {
    type: "wand",
    name: "Wand",
    avaliableFor: "mage",
    damage: {
      min: 9,
      max: 15,
    },
    hitChance: 97,
  },
];
class Weapon {
  constructor(type) {
    this.type = type.toLowerCase().trim().replace(/\s/g, "");
    this.chosedWeapon = weaponTypes.find((weapon) => weapon.type === this.type);
    this.weaponTypeValidating(this.chosedWeapon);
  }

  weaponTypeValidating(weapon){
    if(!weapon){
      throw new Error("\x1b[31m Weapon type is not valid \nPlease select one of the following: Sword, Dagger, Warhammer, Battle Axe, Bow, Wand \x1b[0m");
    }
  }

  getChosedWeapon(){
    return this.chosedWeapon;
  }
}

module.exports = Weapon;
