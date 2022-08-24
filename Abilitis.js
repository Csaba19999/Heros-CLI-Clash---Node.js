class Abilitis{
    constructor(){};
    getArmourBoost(armour){
        return armour+10;
    }
    getDodgeChanceBoost(){
        return 100;
    }
    getFireStormBoost(damage){
        return damage+20;
    }
    getHeadShotBoost(damage){
        return damage+15;
    }
    getHealBoost(hp){
        return hp+10;
    }
}

module.exports = Abilitis;