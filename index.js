const Arena = require('./Arena');
const Hero = require('./Hero');

//1. válassz magadnak egy tetszőleges nevet.
//2. válassz egy tetszőleges karaktert.
//Karakterek : Warrior, Priest, Mage, Rouge, Archer
const firstCharacter = {
    name: 'Artemis',
    type: 'Warrior'
};
const secondCharacter = {
    name: 'Father Leo',
    type: 'Priest'
};

const firstHero = new Hero(firstCharacter);
const secondHero = new Hero(secondCharacter);

//3. válassz egy tetszőleges fegyvert.
//Fegyverek : Sword, Dagger, Warhammer, Battle Axe, Bow, Wand
firstHero.equipWeapon("sword");
secondHero.equipWeapon("War Hammer");

const arena = new Arena(firstHero, secondHero);

//4. Az alábbi parancsal indíthatod el a harcot a konzolon.
//npm start