# Heros CLI Clash - Node.js

This CLI application is made for interview purposes. The program is runnable in the console. You can choose different heroes and weapons with unique abilities.

## Installation

clone the repository and run the following command inside the root folder with your console.

Use Node.js v16^  
Tested in Node.js v16.15.0
##
```bash
npm start
```

## Usage

```javascript
//heros: Warrior, Priest, Mage, Rouge, Archer
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

//weapons: Sword, Dagger, Warhammer, Battle Axe, Bow, Wand
firstHero.equipWeapon("sword");
secondHero.equipWeapon("War Hammer");

const arena = new Arena(firstHero, secondHero);
```

## Rating
If you like my solution or the project, please press the little star for the repository.
Thx!
