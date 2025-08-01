"use strict";
class Sword {
    use() {
        return "Woosh! Swinging Sword";
    }
}
class Gun {
    use() {
        return "Bangg! Wielding Gun";
    }
}
class Bow {
    use() {
        return "Twangg! Shoots an Arrow";
    }
}
class weaponFactory {
    createWeapon(Weapon) {
        return Weapon;
    }
}
const weaponMaker = new weaponFactory();
const sword = weaponMaker.createWeapon(new Sword());
console.log(sword.use());
