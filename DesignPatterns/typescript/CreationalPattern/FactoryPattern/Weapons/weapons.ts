abstract class weapon{
    abstract use(): string;
    clone() : weapon{
        return this;
    };
}

class Sword extends weapon{
    use(){
        return "Woosh! Swinging Sword";
    }
}

class Gun extends weapon{
    use(){
        return "Bangg! Wielding Gun";
    }
}

class Bow extends weapon{
    use(){
        return "Twangg! Shoots an Arrow"
    }
}

class weaponFactory{
    createWeapon(Weapon : string):weapon{
        switch(Weapon.toLowerCase()){
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

const weaponMaker : weaponFactory = new weaponFactory();
const gun : weapon = weaponMaker.createWeapon("gun");
const gun2 : weapon = gun.clone();
console.log(gun.use());
console.log(gun2.use());