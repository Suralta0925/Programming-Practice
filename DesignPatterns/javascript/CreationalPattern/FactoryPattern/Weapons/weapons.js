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
        switch (Weapon.toLowerCase()) {
            case "sword":
                return new Sword();
            case "bow":
                return new Bow();
            case "gun":
                return new Gun();
            default:
                throw new Error("Invalid Weapon Type");
        }
    }
}
const weaponMaker = new weaponFactory();
const sword = weaponMaker.createWeapon("gun");
console.log(sword.use());
