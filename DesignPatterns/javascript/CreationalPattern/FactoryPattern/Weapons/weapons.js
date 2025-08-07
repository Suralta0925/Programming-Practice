"use strict";
class Sword {
    use() {
        return "Woosh! Swinging Sword";
    }
    clone() {
        return new Sword();
    }
}
class Gun {
    use() {
        return "Bangg! Wielding Gun";
    }
    clone() {
        return new Gun();
    }
}
class Bow {
    use() {
        return "Twangg! Shoots an Arrow";
    }
    clone() {
        return new Gun();
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
const gun = weaponMaker.createWeapon("gun");
const gun2 = gun.clone();
console.log(gun.use());
console.log(gun2.use());
