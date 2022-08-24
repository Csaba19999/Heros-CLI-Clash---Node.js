const Abilitis = require("./Abilitis.js");

class Arena {
  constructor(firstCharacter, secondCharacter) {
    this.firstCharacter = firstCharacter;
    this.secondCharacter = secondCharacter;
    this.firstCharacter.chosedHero.damage_taken = 0;
    this.firstCharacter.chosedHero.total_damage = 0;
    this.firstCharacter.chosedHero.absorbed_by_armour = 0;
    this.secondCharacter.chosedHero.damage_taken = 0;
    this.secondCharacter.chosedHero.total_damage = 0;
    this.secondCharacter.chosedHero.absorbed_by_armour = 0;
    this.firstCharacter.chosedHero.prevHp = this.firstCharacter.chosedHero.hp;
    this.secondCharacter.chosedHero.prevHp = this.secondCharacter.chosedHero.hp;
    this.firstCharacterOriginalHp = this.firstCharacter.chosedHero.hp;
    this.secondCharacterOriginalHp = this.secondCharacter.chosedHero.hp;
    this.firstCharacterDamage = 0;
    this.secondCharacterDamage = 0;
    this.herosStatistics = {};
    this.roudStatistics = {};
    this.attacker = "";
    console.log("\x1b[36m", "Starting the tournament get ready", "\x1b[0m");
    this.setDrawTable("start");
    console.log("\x1b[36m", "Fight!", "\x1b[0m");
    console.log("\x1b[36m", "\n", "\x1b[0m");
    this.setTournament(this.firstCharacter, this.secondCharacter);
  }
  setAbilities = (character) => {
    const ability_chance = Math.floor(Math.random() * (100 - 0 + 1) + 0);
    if (ability_chance <= 10) {
      console.log("ability_chance");
      switch (character.chosedHero.type) {
        case "warrior":
          character.chosedHero.armour = new Abilitis().getArmourBoost(
            character.chosedHero.armour
          );
          character.chosedHero.bonus_ability = "+10 armour az adott körben";
          break;
        case "priest":
          character.chosedHero.hp = new Abilitis().getHealBoost(
            character.chosedHero.hp
          );
          character.chosedHero.bonus_ability = "+10 hp az adott körben";
          break;
        case "mage":
          character.chosedHero.damage.initialDamage =
            new Abilitis().getFireStormBoost(
              character.chosedHero.damage.initialDamage
            );
          character.chosedHero.bonus_ability = "+20 sebzés az adott körben";
          break;
        case "rouge":
          character.chosedHero.evasion = new Abilitis().getDodgeChanceBoost();
          character.chosedHero.bonus_ability = "+100 evasion az adott körben";
          break;
        case "archer":
          character.chosedHero.damage.initialDamage =
            new Abilitis().getHeadShotBoost(
              character.chosedHero.damage.initialDamage
            );
          character.chosedHero.bonus_ability = "+15 sebzés az adott körben";
          break;
        default:
          break;
      }
    } else {
      character.chosedHero.bonus_ability = "nincs";
    }
  };

  setDrawTable = () => {
    this.herosStatistics.firstCharacter = {
      name: this.firstCharacter.name,
      type: this.firstCharacter.chosedHero.typeName,
      weapon: this.firstCharacter.weapon.name,
      damage_range:
        this.firstCharacter.weapon.damage.min +
        "-" +
        this.firstCharacter.weapon.damage.max,
      armour: this.firstCharacter.chosedHero.armour,
      hp: this.firstCharacter.chosedHero.hp,
      damage: this.firstCharacterDamage,
      damage_taken: this.firstCharacter.chosedHero.damage_taken,
      total_damage: this.firstCharacter.chosedHero.total_damage,
      absorbed_by_armour: this.firstCharacter.chosedHero.absorbed_by_armour,
      abilities: this.firstCharacter.chosedHero.abilities,
      bonus_ability: this.firstCharacter.chosedHero.bonus_ability || "nincs",
    };

    this.herosStatistics.secondCharacter = {
      name: this.secondCharacter.name,
      type: this.secondCharacter.chosedHero.typeName,
      weapon: this.secondCharacter.weapon.name,
      damage_range:
        this.secondCharacter.weapon.damage.min +
        "-" +
        this.secondCharacter.weapon.damage.max,
      armour: this.secondCharacter.chosedHero.armour,
      hp: this.secondCharacter.chosedHero.hp,
      damage: this.secondCharacterDamage,
      damage_taken: this.secondCharacter.chosedHero.damage_taken,
      total_damage: this.secondCharacter.chosedHero.total_damage,
      absorbed_by_armour: this.secondCharacter.chosedHero.absorbed_by_armour,
      abilities: this.secondCharacter.chosedHero.abilities,
      bonus_ability: this.secondCharacter.chosedHero.bonus_ability || "nincs",
    };
    console.table(this.herosStatistics);
    console.log("\n");
  };

  setDrawRoundTable = () => {
    this.roudStatistics.firstCharacter = {
      name: this.firstCharacter.name,
      armour: this.firstCharacter.chosedHero.armour,
      start_hp: this.firstCharacter.chosedHero.prevHp,
      end_hp: this.firstCharacter.chosedHero.hp,
      damage: this.firstCharacterDamage,
      damage_taken: this.firstCharacter.chosedHero.damage_taken,
      initial_damage: this.firstCharacter.chosedHero.total_damage,
      absorbed_by_armour: this.firstCharacter.chosedHero.absorbed_by_armour,
      abilities: this.firstCharacter.chosedHero.abilities,
      bonus_ability: this.firstCharacter.chosedHero.bonus_ability || "nincs",
    };

    this.roudStatistics.secondCharacter = {
      name: this.secondCharacter.name,
      armour: this.secondCharacter.chosedHero.armour,
      start_hp: this.secondCharacter.chosedHero.prevHp,
      end_hp: this.secondCharacter.chosedHero.hp,
      damage: this.secondCharacterDamage,
      damage_taken: this.secondCharacter.chosedHero.damage_taken,
      initial_damage: this.secondCharacter.chosedHero.total_damage,
      absorbed_by_armour: this.secondCharacter.chosedHero.absorbed_by_armour,
      abilities: this.secondCharacter.chosedHero.abilities,
      bonus_ability: this.secondCharacter.chosedHero.bonus_ability || "nincs",
    };
    console.table(this.roudStatistics);
    console.log("\n");
  };

  setRound(firstCharacter, secondCharacter) {
    const firstHit = Math.floor(Math.random() * (1 - 0 + 1) + 0);
    if (firstHit === 0) {
      this.setAbilities(firstCharacter);
      let { min, max, initialDamage } = firstCharacter.weapon.damage;
      initialDamage = Math.floor(Math.random() * (min - max) + max);
      let finalDamage = Math.floor(
        initialDamage - secondCharacter.chosedHero.armour / 3
      );
      let evasion = Math.floor(Math.random() * (100 - 0 + 1) + 0);
      let isHit = Math.floor(Math.random() * (100 - 0 + 1) + 0);

      if(evasion <= this.secondCharacter.chosedHero.evasion){
        initialDamage = 0;
        finalDamage = 0;
      }
      if(isHit >= this.firstCharacter.weapon.hitChance){
        initialDamage = 0;
        finalDamage = 0;
      }
      this.firstCharacter.chosedHero.prevHp = this.firstCharacter.chosedHero.hp;
      this.firstCharacterDamage = initialDamage;
      this.secondCharacter.chosedHero.hp -= finalDamage;
      this.secondCharacter.chosedHero.damage_taken += finalDamage;
      this.secondCharacter.chosedHero.total_damage += initialDamage;
      this.secondCharacter.chosedHero.absorbed_by_armour +=
        this.secondCharacter.chosedHero.total_damage -
        this.secondCharacter.chosedHero.damage_taken;
    } else {
      this.setAbilities(secondCharacter);
      let { min, max, initialDamage } = secondCharacter.weapon.damage;
      initialDamage = Math.floor(Math.random() * (min - max) + max);
      let finalDamage = Math.floor(
        initialDamage - firstCharacter.chosedHero.armour / 3
      );

      let evasion = Math.floor(Math.random() * (100 - 0 + 1) + 0);
      let isHit = Math.floor(Math.random() * (100 - 0 + 1) + 0);

      if(evasion <= this.firstCharacter.chosedHero.evasion){
        initialDamage = 0;
        finalDamage = 0;
      }
      if(isHit >= this.secondCharacter.weapon.hitChance){
        initialDamage = 0;
        finalDamage = 0;
      }
      this.secondCharacter.chosedHero.prevHp = this.secondCharacter.chosedHero.hp;
      this.secondCharacterDamage = initialDamage;
      this.firstCharacter.chosedHero.hp -= finalDamage;
      this.firstCharacter.chosedHero.damage_taken += finalDamage;
      this.firstCharacter.chosedHero.total_damage += initialDamage;
      this.firstCharacter.chosedHero.absorbed_by_armour +=
        this.firstCharacter.chosedHero.total_damage -
        this.firstCharacter.chosedHero.damage_taken;
    }
  }

  setTournament() {
    let i = 1;
    while (
      this.firstCharacter.chosedHero.hp > 0 &&
      this.secondCharacter.chosedHero.hp > 0
    ) {
      this.setRound(this.firstCharacter, this.secondCharacter);
      console.log("\x1b[36m", "Round " + i++, "\x1b[0m");
      this.setDrawRoundTable();
      if (
        this.firstCharacter.chosedHero.hp <= 0 ||
        this.secondCharacter.chosedHero.hp <= 0
      ) {
        this.setWinner(i - 1);
        break;
      }
    }
  }

  setWinner(total_rounds) {
    let ScoreBoard = {
      firstCharacter: {
        name: this.firstCharacter.name,
        armour: this.firstCharacter.chosedHero.armour,
        current_hp: this.firstCharacter.chosedHero.hp,
        original_hp: this.firstCharacterOriginalHp,
        damage_taken: this.firstCharacter.chosedHero.damage_taken,
        total_damage: this.firstCharacter.chosedHero.total_damage,
        absorbed_by_armour: this.firstCharacter.chosedHero.absorbed_by_armour,
      },
      secondCharacter: {
        name: this.secondCharacter.name,
        armour: this.secondCharacter.chosedHero.armour,
        original_hp: this.secondCharacterOriginalHp,
        current_hp: this.secondCharacter.chosedHero.hp,
        damage_taken: this.secondCharacter.chosedHero.damage_taken,
        total_damage: this.secondCharacter.chosedHero.total_damage,
        absorbed_by_armour: this.secondCharacter.chosedHero.absorbed_by_armour,
      },
    };
    if (this.firstCharacter.chosedHero.hp > 0) {
      ScoreBoard.winner = { name: this.firstCharacter.name };
    } else {
      ScoreBoard.winner = { name: this.secondCharacter.name };
    }
    console.log("\x1b[36m", "Final score board ", "\x1b[0m");
    console.log("\x1b[36m", "Total rounds : " + total_rounds, "\x1b[0m");
    console.table(ScoreBoard);
  }
}
module.exports = Arena;
